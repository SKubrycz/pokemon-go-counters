import {useState, useEffect, useRef } from 'react';

import './App.scss';

import {
  Reset,
} from './image-import';

import { Type, getTypes } from './getTypes';


function App() {
  //const chosenRef = useRef<HTMLImageElement | null>(null);

  const [selectedImage, setSelectedImage] = useState<Type | null>(null);

  const typesArray: Type[] = getTypes();
  
  const chooseType = (type: Type) => {
    setSelectedImage(type);
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
            {selectedImage && <img className='types-img' src={selectedImage.src} title={selectedImage.title} alt={selectedImage.alt} />}
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
