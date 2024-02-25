import {useState, useEffect, useRef } from 'react';

import './App.scss';

import {
  Reset,
} from './image-import';

import getTypes from './getTypes';


function App() {
  const chosenRef = useRef<HTMLImageElement | null>(null);

  let typesArray: any[] = getTypes();

  console.log(typesArray);
  
  const chooseType = () => {

  }

  return (
    <div className='app'>
      <div className='title'>Pokemon Type Counters</div>
      <div className='types-container'>
        <div className='types-chosen' ref={chosenRef}>
          <div className='types-chosen-absolute'>
          </div>
          <div className='types-reset-container'>
            <img className='types-reset' src={Reset} title='Reset' alt='reset'></img>
          </div>
        </div>
        <div className='types-all'>
        {typesArray.map((type, index) => (
            <img
              key={index}
              className='types-img'
              src={type.src}
              onClick={chooseType}
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
