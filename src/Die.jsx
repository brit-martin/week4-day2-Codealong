import { useState } from 'react';
import './dice.css';

function getRandomNum(upperLimit) {
  return Math.ceil(Math.random() * upperLimit);
}
//state variable--component
export default function Die(props) {
  const [diceValue, setDiceValue] = useState(0);

  //function that updates the number
  const roll = () => {
    const rollResult = getRandomNum(props.sides);
    setDiceValue(rollResult);
  };
//displays the value on the dom 
  return (
    <button type="button" className="die" onClick={roll}>
      <i>sides={props.sides}</i>
      <b>{diceValue}</b>
    </button>
  );
}
