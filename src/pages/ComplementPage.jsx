import React from 'react';
import AnswerInput from '../components/AnswerInput';
import { useState } from 'react';

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export default function ComplementPage(props) {
  const [target, setTarget] = useState(
    randomIntFromInterval(1, props.total - 1)
  );

  const resetTarget = () => {
    setTarget(randomIntFromInterval(1, props.total - 1));
  };

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div class='grid grid-cols-1 w-1/4'>
        <a class='text-7xl text-right'>{props.total - target}</a>

        <hr class='my-2 h-1 bg-slate-50 border-0'></hr>
        <AnswerInput answer={target} update={resetTarget} />
      </div>
    </div>
  );
}
