import React from 'react';

import './App.scss';

import Bug from './assets/Bug.svg';

function App() {
  return (
    <div className='app'>
      <div className='title'>Pokemon Type Counters</div>
      <div className='types-container'>
        <div className='types-chosen'>Chosen</div>
        <div className='types-all'>
          <img className='types-img' src={Bug} alt='bug'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
