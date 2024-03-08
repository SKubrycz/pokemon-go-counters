import { useState, useEffect } from 'react';

import './App.scss';

import TypesChosen from './Components/TypesChosen';
import TypesToChoose from './Components/TypesToChoose';
import Weak from './Components/Weak';
import Strong from './Components/Strong';

import { Type, getTypes } from './getTypes';

function App() {
  const [selectedImage, setSelectedImage] = useState<(Type | null)[] | null>(null);
  const [weak, setWeak] = useState<string[] | undefined>(undefined);
  const [strong, setStrong] = useState<string[] | undefined>(undefined);

  const typesArray: Type[] = getTypes();
  
  const chooseType = (type: Type | null) => {
    setSelectedImage(prevImages => {
      if (prevImages && prevImages.length === 2) {
        if (prevImages[0]?.title === type?.title) {
          return [prevImages[1]]; //if first type is the same
        } else if (prevImages[1]?.title === type?.title) {
          return [prevImages[0], ]; //if second type is the same
        } else {
          return [prevImages[0], type];
        }
      } else {
        if (prevImages && prevImages[0]?.title === type?.title) {
          return [];
        } else {
          return [...(prevImages || []), type]; //if less than two img, add new one
        }
      }
    });
  }

  const randomizeTypes = () => {
    let randomFirst: number = Math.floor(Math.random()*18);
    let randomSecond: number | null = Math.floor(Math.random()*(18*1.2));

    if (randomFirst === randomSecond) {
      if (randomFirst < 1) {
        randomSecond += 1;
      } else if (randomFirst > 1) {
        randomSecond -= 1;
      }
    }

    if (typesArray) {
      if (randomSecond >= 18) randomSecond = null;
      console.log(`${randomFirst}, ${randomSecond}`);
      setSelectedImage(() => {
        if (randomSecond) {
          return [typesArray[randomFirst], typesArray[randomSecond]];
        } else if (randomSecond === null) {
          return [typesArray[randomFirst], ];
        } else return [typesArray[randomFirst], typesArray[randomSecond]];
      });
    }
  }

  const removeDuplicates = (arr1: string[] | undefined, arr2: string[] | undefined) => {
    let newArray: string[] | undefined;

    if (arr1 !== undefined && arr2 !== undefined) {
      newArray = arr1?.concat(arr2);

      return newArray.filter((value, index) => newArray?.indexOf(value) === index);
    } else {
      newArray = (arr1) ? arr1 : arr2;

      return newArray;
    }
  }

  const removeBoth = (arr1: string[] | undefined, arr2: string[] | undefined, selectArr1: string | undefined, selectArr2: string | undefined) => {
    const newArray: string[] | undefined = arr1?.filter((item) => arr2?.includes(item) && (!selectArr1?.includes(item) && !selectArr2?.includes(item)));
    console.log(newArray);

    const arr1Array: string[] | undefined = arr1?.filter(item => !newArray?.includes(item));
    console.log(arr1Array);

    return arr1Array;
  }

  useEffect(() => {
    let dupesWeak: string[] | undefined = removeDuplicates(selectedImage?.[0]?.weakAgainst, selectedImage?.[1]?.weakAgainst);
    let dupesStrong: string[] | undefined = removeDuplicates(selectedImage?.[0]?.strongAgainst, selectedImage?.[1]?.strongAgainst);

    let removedWeak: string[] | undefined = removeBoth(dupesWeak, dupesStrong, selectedImage?.[0]?.src, selectedImage?.[1]?.src);

    setWeak(removedWeak);

    let removedStrong: string[] | undefined = removeBoth(dupesStrong, dupesWeak, selectedImage?.[0]?.src, selectedImage?.[1]?.src);

    setStrong(removedStrong);
  }, [selectedImage]);

  
  const resetTypes = () => {
    setSelectedImage(null);
    setWeak(undefined);
    setStrong(undefined);
  }

  return (
    <div className='app'>
        <div className='title'>Pokemon Go Type Counters</div>
        <div className='all-container'>
          <Weak
            weak={weak}
          ></Weak>

          <div className='types-container'>
            <TypesChosen
              selectedImage={selectedImage}
              chooseType={chooseType}
              randomizeTypes={randomizeTypes}
              resetTypes={resetTypes}
            ></TypesChosen>
            <TypesToChoose 
              typesArray={typesArray} 
              selectedImage={selectedImage}
              chooseType={chooseType}
            ></TypesToChoose>
          </div>

          <Strong
            strong={strong}
          ></Strong>
        </div>
    </div>
  );
}

export default App;
