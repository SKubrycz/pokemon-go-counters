import {useState, useEffect, useRef } from 'react';

import './App.scss';

import {
  Reset, Random
} from './image-import';

import { Type, getTypes } from './getTypes';


function App() {
  //const chosenRef = useRef<HTMLImageElement | null>(null);

  const [selectedImage, setSelectedImage] = useState<(Type | null)[] | null>(null);
  const [weak, setWeak] = useState<(string[] | undefined)[] | undefined>(undefined);
  const [strong, setStrong] = useState<string[] | undefined>(undefined);

  const typesArray: Type[] = getTypes();

  /* const checkFunction = (prev: (Type | null)[] | null, type: Type | null, property: keyof Type) => {
    if (prev && prev.length === 2) {
      if (prev[0]?.[property] === type?.[property]) {
        return [prev[1]];
      } else if (prev[1]?.[property] === type?.[property]) {
        return [prev[0], ];
      } else {
        return [prev[0], type];
      }
    } else {
      if (prev && prev[0]?.[property] === type?.[property]) {
        return [];
      } else {
        return [...(prev || []), type];
      }
    }
  } */

  const findIntersection = (a: string[], b: string[]): string[] => {
    console.log(`findIntersection`);
    return a.filter(el => b.includes(el));
  }

  function symmetricDifference(a: string[], b: string[]): string[] {
    console.log([
      ...a.filter(el => !b.includes(el)),
      ...b.filter(el => !a.includes(el))
    ]);
    return [
      ...a.filter(el => !b.includes(el)),
      ...b.filter(el => !a.includes(el))
    ];
  }
  
  const chooseType = (type: Type | null) => {
    setSelectedImage(prevImages => {
      if (prevImages && prevImages.length === 2) {
        if (prevImages[0]?.title === type?.title) {
          setWeak([prevImages[1]?.weakAgainst]);
          return [prevImages[1]]; //if first type is the same
        } else if (prevImages[1]?.title === type?.title) {
          setWeak([prevImages[0]?.weakAgainst]);
          return [prevImages[0], ]; //if second type is the same
        } else {
          setWeak([prevImages[0]?.weakAgainst, type?.weakAgainst]);
          return [prevImages[0], type];
        }
      } else {
        if (prevImages && prevImages[0]?.title === type?.title) {
          setWeak(undefined);
          return [];
        } else {
          setWeak(prevWeak => {
            return [...(prevWeak || []), type?.weakAgainst]
          });
          return [...(prevImages || []), type]; //if less than two img, add new one
        }
      }
    });
    console.log(weak);

    if (selectedImage) {
      setWeak([selectedImage[1]?.weakAgainst]);
    }
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
      setSelectedImage(prevImages => {
        if (randomSecond) {
          return [typesArray[randomFirst], typesArray[randomSecond]];
        } else if (randomSecond === null) {
          return [typesArray[randomFirst], ];
        } else return [typesArray[randomFirst], typesArray[randomSecond]];
      });
    }
  }
  
  const resetTypes = () => {
    setSelectedImage(null);
    setWeak(undefined);
    setStrong(undefined);
  }

  return (
    <div className='app'>
        <div className='title'>Pokemon Go Type Counters</div>
        <div className='all-container'>
          <div className='weak-container'>
            <h4>Weak Against:</h4>
            <div className='counters-img-container'>
              <img
                className='types-img'
                src={typesArray[1].src}
                title={typesArray[1].title}
                alt={typesArray[1].alt}
              />
              <img
                className='types-img'
                src={typesArray[2].src}
                title={typesArray[2].title}
                alt={typesArray[2].alt}
              />
              <img
                className='types-img'
                src={typesArray[3].src}
                title={typesArray[3].title}
                alt={typesArray[3].alt}
              />
            </div>
          </div>
          <div className='types-container'>
            <div className='types-chosen'>
              <div className='types-chosen-absolute'>
              {selectedImage && selectedImage.map((image, index) => (
                <img key={index} className='types-img' onClick={() => chooseType(image)} src={image?.src || ''} alt={image?.alt || ''} title={image?.title || ''} />
              ))}
              </div>
              <div className='types-reset-container'>
                <img className='types-reset' src={Random} onClick={randomizeTypes} title='Randomize' alt='randomize'></img>
                <img className='types-reset' src={Reset} onClick={resetTypes} title='Reset' alt='reset'></img>
              </div>
            </div>
            <div className='types-all'>
            {typesArray.map((type, index) => (
                <img
                  key={index}
                  className='types-img'
                  src={type.src}
                  onClick={() => chooseType(type)}
                  title={type.title}
                  alt={type.alt}
                />
              ))}
            </div>
          </div>
          <div className='strong-container'>
            <h4>Strong Against:</h4>
            <div className='counters-img-container'>
              <img
                className='types-img'
                src={typesArray[0].src}
                title={typesArray[0].title}
                alt={typesArray[0].alt}
              />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
