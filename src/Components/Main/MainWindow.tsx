import { useState, useRef, useEffect } from "react";

import HoverWindow from "../Hover/HoverWindow";
import Image from "../Image";

import { Type } from "../../assets/TypesMap";

interface MainWindowProps {
  chosenTypes: Array<Type>;
  chooseTypes: Array<Type>;
  handleRemoveType(id: number): void;
  handleChooseType(id: number): void;
}

interface Coords {
  x: number;
  y: number;
}

export default function MainWindow({
  chosenTypes,
  chooseTypes,
  handleRemoveType,
  handleChooseType,
}: MainWindowProps) {
  const [coords, setCoords] = useState<Coords>({
    x: 0,
    y: 0,
  });
  const [hoverWindowVisibility, setHoverWindowVisibility] =
    useState<boolean>(false);

  const type = useRef<number | null>(null);

  const handleHoverWindow = (e: React.MouseEvent, t: number | null) => {
    let x = e.clientX;
    let y = e.clientY;
    console.log(`x: ${x}, y: ${y}`);
    type.current = t;
    setCoords({ x: x, y: y });
    setHoverWindowVisibility(true);
  };

  const updateCoords = (e: React.MouseEvent) => {
    let x = e.clientX;
    let y = e.clientY;
    setCoords({ x: x, y: y });
  };

  const handleWindowLeave = () => {
    setHoverWindowVisibility(false);
    type.current = null;
  };

  useEffect(() => {
    if (chosenTypes.length === 0 || !chosenTypes)
      setHoverWindowVisibility(false);
  }, [chosenTypes]);

  return (
    <main className="p-5 bg-sky-600 flex flex-col items-center justify-center">
      <section className="w-full p-5 bg-sky-700 rounded-md shadow-md transition-shadow hover:shadow-xl">
        <h3 className="mb-5 pb-2 font-medium text-xl border-transparent border-b-2 border-b-slate-50">
          Chosen Types
        </h3>
        <div className="h-24 flex flex-wrap justify-center">
          {chosenTypes.map((type, i) => {
            return (
              <img
                key={i}
                src={type.src}
                alt={type.alt}
                className="w-24 h-24 cursor-pointer"
                onClick={() => handleRemoveType(type.id)}
                onMouseOver={(e) => handleHoverWindow(e, type.id)}
                onMouseMove={(e) => updateCoords(e)}
                onMouseLeave={() => {
                  handleWindowLeave();
                }}
              ></img>
            );
          })}
        </div>
        {hoverWindowVisibility && (
          <HoverWindow
            x={coords.x}
            y={coords.y}
            type={type.current}
          ></HoverWindow>
        )}
      </section>
      <div className="w-10/12 h-1 m-5 bg-slate-200 rounded-sm"></div>
      <section className=" w-full p-5 bg-sky-700 rounded-md shadow-md transition-shadow hover:shadow-xl">
        <h3 className="mb-5 pb-2 font-medium text-xl border-transparent border-b-2 border-b-slate-50">
          Types to choose from
        </h3>
        <div className="flex flex-wrap justify-center">
          {chooseTypes.map((type, i) => {
            return (
              <Image
                key={i}
                src={type.src}
                alt={type.alt}
                w={96}
                h={96}
                onClick={() => handleChooseType(type.id)}
              ></Image>
            );
          })}
        </div>
      </section>
    </main>
  );
}
