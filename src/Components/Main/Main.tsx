import { useEffect, useState } from "react";

import { typesMap, Type, TypeWithCounters } from "../../assets/TypesMap";

import MainWindow from "../Main/MainWindow";
import Weak from "../Weak/Weak";
import Strong from "../Strong/Strong";

export default function Main() {
  const [chooseTypes, setChooseTypes] =
    useState<Array<TypeWithCounters>>(typesMap);
  const [chosenTypes, setChosenTypes] = useState<Array<TypeWithCounters>>([]);
  const [weak, setWeak] = useState<Array<Type>>([]);
  const [strong, setStrong] = useState<Array<Type>>([]);

  const sortLogic = (a: Type, b: Type) => {
    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    } else return 0;
  };

  const removeOverlaps = (arr1: Type[], arr2: Type[]) => {
    if (!chosenTypes[0] || !chosenTypes[1]) return undefined;
    const newArr: Type[] = arr1.filter(
      (el) =>
        !(
          el.id !== chosenTypes[0].id &&
          el.id !== chosenTypes[1].id &&
          arr2.findIndex((v) => el.id === v.id) !== -1
        )
    );
    console.log(newArr);
    return newArr;
  };

  const removeTypeDuplicates = (arr: Type[]) => {
    const newArr = arr.filter((item, i) => arr.indexOf(item) === i);
    return newArr;
  };

  const handleTypeCounters = () => {
    let newWeak: Type[] = [];
    let newStrong: Type[] = [];
    chosenTypes.forEach((el) => {
      el.weak.forEach((v) => {
        newWeak.push(v);
      });
      el.strong.forEach((v) => {
        newStrong.push(v);
      });
    });
    newWeak = removeTypeDuplicates(newWeak);
    newStrong = removeTypeDuplicates(newStrong);
    const filteredOverlapsWeak = removeOverlaps(newWeak, newStrong);
    const filteredOverlapsStrong = removeOverlaps(newStrong, newWeak);
    filteredOverlapsWeak ? setWeak(filteredOverlapsWeak) : setWeak(newWeak);
    filteredOverlapsStrong
      ? setStrong(filteredOverlapsStrong)
      : setStrong(newStrong);
  };

  const handleChooseType = (id: number) => {
    const element = chooseTypes.find((el) => el.id === id);
    if (element && chosenTypes.length < 2) {
      setChooseTypes(chooseTypes.filter((el) => el.id !== id).sort(sortLogic));
      setChosenTypes([...chosenTypes, element].sort(sortLogic));
    }
  };

  const handleRemoveType = (id: number) => {
    const element = chosenTypes.find((el) => el.id === id);
    if (element) {
      setChooseTypes([...chooseTypes, element].sort(sortLogic));
      setChosenTypes(chosenTypes.filter((el) => el.id !== id).sort(sortLogic));
    }
  };

  useEffect(() => {
    handleTypeCounters();
  }, [chosenTypes]);

  return (
    <>
      <section className="w-5/6 my-2 mx-10 grid grid-cols-wide-center border-transparent rounded-md shadow-md overflow-hidden">
        <Weak weak={weak}></Weak>
        <MainWindow
          chooseTypes={chooseTypes}
          chosenTypes={chosenTypes}
          handleRemoveType={handleRemoveType}
          handleChooseType={handleChooseType}
        ></MainWindow>
        <Strong strong={strong}></Strong>
      </section>
    </>
  );
}
