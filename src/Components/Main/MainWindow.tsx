import { Type } from "../../assets/TypesMap";

interface MainWindowProps {
  chosenTypes: Array<Type>;
  chooseTypes: Array<Type>;
  handleRemoveType(id: number): void;
  handleChooseType(id: number): void;
}

export default function MainWindow({
  chosenTypes,
  chooseTypes,
  handleRemoveType,
  handleChooseType,
}: MainWindowProps) {
  return (
    <main className="p-5 bg-sky-600 flex flex-col items-center justify-center">
      <section className="w-full p-5 bg-sky-700 rounded-md">
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
              ></img>
            );
          })}
        </div>
      </section>
      <div className="w-10/12 h-1 m-5 bg-slate-200 rounded-sm"></div>
      <section className=" w-full p-5 bg-sky-700 rounded-md">
        <h3 className="mb-5 pb-2 font-medium text-xl border-transparent border-b-2 border-b-slate-50">
          Types to choose from
        </h3>
        <div className="flex flex-wrap justify-center">
          {chooseTypes.map((type, i) => {
            return (
              <img
                key={i}
                src={type.src}
                alt={type.alt}
                className="w-24 h-24 cursor-pointer"
                onClick={() => handleChooseType(type.id)}
              ></img>
            );
          })}
        </div>
      </section>
    </main>
  );
}
