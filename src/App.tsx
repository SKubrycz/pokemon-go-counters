import React from 'react';

import './App.scss';

import Bug from './assets/Bug.svg';
import Dark from './assets/Dark.svg';
import Dragon from './assets/Dragon.svg';
import Electric from './assets/Electric.svg';
import Fairy from './assets/Fairy.svg';
import Fighting from './assets/Fighting.svg';
import Fire from './assets/Fire.svg';
import Flying from './assets/Flying.svg';
import Ghost from './assets/Ghost.svg';
import Grass from './assets/Grass.svg';
import Ground from './assets/Ground.svg';
import Ice from './assets/Ice.svg';
import Normal from './assets/Normal.svg';
import Poison from './assets/Poison.svg';
import Psychic from './assets/Psychic.svg';
import Rock from './assets/Rock.svg';
import Steel from './assets/Steel.svg';
import Water from './assets/Water.svg';



function App() {
  return (
    <div className='app'>
      <div className='title'>Pokemon Type Counters</div>
      <div className='types-container'>
        <div className='types-chosen'>Chosen</div>
        <div className='types-all'>
          <img className='types-img' src={Bug} alt='bug'></img>
          <img className='types-img' src={Dark} alt='dark'></img>
          <img className='types-img' src={Dragon} alt='dragon'></img>
          <img className='types-img' src={Electric} alt='electric'></img>
          <img className='types-img' src={Fairy} alt='fairy'></img>
          <img className='types-img' src={Fighting} alt='fighting'></img>
          <img className='types-img' src={Fire} alt='fire'></img>
          <img className='types-img' src={Flying} alt='flying'></img>
          <img className='types-img' src={Ghost} alt='ghost'></img>
          <img className='types-img' src={Grass} alt='grass'></img>
          <img className='types-img' src={Ground} alt='ground'></img>
          <img className='types-img' src={Ice} alt='ice'></img>
          <img className='types-img' src={Normal} alt='normal'></img>
          <img className='types-img' src={Poison} alt='poison'></img>
          <img className='types-img' src={Psychic} alt='psychic'></img>
          <img className='types-img' src={Rock} alt='rock'></img>
          <img className='types-img' src={Steel} alt='steel'></img>
          <img className='types-img' src={Water} alt='water'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
