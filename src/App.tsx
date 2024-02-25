import {useState, useEffect, useRef } from 'react';

import './App.scss';

import {
  Reset,
} from './image-import';

import { Type, getTypes } from './getTypes';


function App() {
  //const chosenRef = useRef<HTMLImageElement | null>(null);

  const [selectedImage, setSelectedImage] = useState<(Type | null)[] | null>(null);

  const typesArray: Type[] = getTypes();
  
  const chooseType = (type: Type) => {
    setSelectedImage(prevImages => {
      if (prevImages && prevImages.length === 2) {
        if (prevImages[0]?.title === type.title) {
          return [prevImages[1]];
        } else if (prevImages[1]?.title === type.title) {
          return [prevImages[0], ]
        } else {
          return [prevImages[0], type]
        }
      } else {
        if (prevImages && prevImages[0]?.title === type.title) {
          return []
        } else {
          return [...(prevImages || []), type];
        }
      }
    });
    console.log(`%c Weak against: ${type.weakAgainst}`, 'color: rgb(220, 50, 50)');
    console.log(`%c Strong against: ${type.strongAgainst}`, 'color: lightgreen');
  }

  const resetTypes = () => {
    setSelectedImage(null);
  }

  return (
    <div className='app'>
      <div className='title'>Pokemon Type Counters</div>
      <div className='types-container'>
        <div className='types-chosen'>
          <div className='types-chosen-absolute'>
          {selectedImage && selectedImage.map((image, index) => (
            <img key={index} className='types-img' src={image?.src || ''} alt={image?.alt || ''} title={image?.title || ''} />
          ))}
          </div>
          <div className='types-reset-container'>
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
    </div>
  );
}

export default App;
