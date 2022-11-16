import React from 'react';
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getProblemGenerator } from '../utils/numberGenorators';
import { ResultsPage } from './ResultsPage';

export default function MathPage(props) {
  const location = useLocation();
  const generator = getProblemGenerator(location.pathname);

  const [problem, setProblem] = useState(generator());
  const [times, setTimes] = useState([]);
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const [history, setHistory] = useState([]);

  const textInput = useRef(null);

  const handleCorrectAns = () => {
    setProblem(generator());

    let currentTime = new Date();
    times[times.length - 1] = currentTime - times.at(-1);
    console.log(times[times.length - 1]);

    if (times.length == 8) {
      console.log('done');
      setDone(true);
    }

    setHistory((history) => [
      ...history,
      {
        time: times[times.length - 1],
        question: problem.text,
      },
    ]);
    setTimes((times) => [...times, currentTime]);
  };

  onkeydown = () => {
    if (!active) {
      setActive(true);
      setTimes((times) => [...times, new Date()]);
    }
    textInput.current.focus();
  };

  const handleChange = (event) => {
    if (event.target.value == problem.answer) {
      console.log('✅ Correct');
      event.target.value = '';
      handleCorrectAns();
    }
  };

  if (!done) {
    return (
      <div className='flex justify-center items-center h-screen w-screen'>
        <div class='grid grid-cols-1 w-60'>
          <a class='text-7xl text-right'>{problem.num1}</a>
          <a class='text-7xl text-right'>
            {problem.symbol} {problem.num2}
          </a>
          <hr class='my-2 h-1 bg-slate-50 border-0'></hr>
          <input
            class='bg-inherit focus:outline-none text-7xl text-right'
            type={'number'}
            autoFocus
            onChange={handleChange}
            ref={textInput}
          />
        </div>
      </div>
    );
  } else {
    return (
      <ResultsPage
        data={history}
        again={() => {
          setDone(false);
          setTimes([]);
          setHistory([]);
          setActive(false);
        }}
      />
    );
  }
}
