import React from 'react';
import {animals} from './animals';
import './App.css';
//import OceanImage from '../images/ocean.jpg';


function App() {
  const background = <img className='background' src='images/ocean.jpg' alt='ocean' />
  function displayFacts(e){
    const animal = e.target.alt;
    var randomValue = Math.floor(Math.random() * 2);
    const fact = animals[animal].facts[randomValue];
    document.getElementById('fact').innerHTML = fact;
  }
 var images = []; 
 for(let animal in animals){
  images.push(<img key={animal} className={animal} alt={animal} src={animals[animal].image} aria-label = {animal} role='button' onClick={displayFacts} />)
 }
const showBackground = false;
const animalFacts = showBackground || (
  <div>
    <h1>
      Click an animal for a fun fact
    </h1>
    {background}
    <div className='animals'>{images}</div>
    <p id='fact'></p>
  </div>
)
  return (
    <div>
      {animalFacts}
    </div>
  );
}

export default App;
