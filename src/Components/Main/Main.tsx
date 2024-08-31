import { useState } from "react";

import { typesMap } from "../../assets/TypesMap";
import { Type } from "../../assets/TypesMap";

import MainWindow from "../Main/MainWindow";
import Weak from "../Weak/Weak";
import Strong from "../Strong/Strong";

export default function Main() {
  const [chooseTypes, setChooseTypes] = useState<Array<Type>>(typesMap);
  const [chosenTypes, setChosenTypes] = useState<Array<Type>>([]);

  const handleChooseType = (id: number) => {
    const element = chooseTypes.find((el) => el.id === id);
    if (element && chosenTypes.length < 2) {
      setChooseTypes(chooseTypes.filter((el) => el.id !== id));
      setChosenTypes([...chosenTypes, element]);
    }
  };

  const handleRemoveType = (id: number) => {
    const element = chosenTypes.find((el) => el.id === id);
    if (element) {
      setChooseTypes([...chooseTypes, element]);
      setChosenTypes(chosenTypes.filter((el) => el.id !== id));
    }
  };

  return (
    <>
      <section className="my-2 mx-10 grid grid-cols-3 border-transparent rounded-md overflow-hidden">
        <Weak chosenTypes={chosenTypes}></Weak>
        <MainWindow
          chooseTypes={chooseTypes}
          chosenTypes={chosenTypes}
          handleRemoveType={handleRemoveType}
          handleChooseType={handleChooseType}
        ></MainWindow>
        <Strong chosenTypes={chosenTypes}></Strong>
      </section>
    </>
  );
}
