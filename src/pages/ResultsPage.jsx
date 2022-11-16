import userEvent from '@testing-library/user-event';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function ResultsPage(props) {
  let data = props.data
    ? props.data
    : [
        { time: 2312, question: '2 + 4' },
        { time: 42084, question: '5 * 4' },
        { time: 903, question: '5 + 4' },
        { time: 93322, question: '213 + 190' },
      ];

  let tableData = data.map((element) => {
    return (
      <tr key={element.question}>
        <td class='pl-4 py-2 '>{element.question}</td>
        <td class='pl-4 py-2  '>{Math.round(element.time / 100) / 10}s</td>
      </tr>
    );
  });

  return (
    <>
      <h1 class='text-7xl py-8 text-center'>Results</h1>
      <div className='container grid sm:grid-cols-1 mx-auto'>
        <div class='p-4'>
          <table class='table-auto text-right mx-auto'>
            <thead>
              <tr>
                <th>Question</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>{tableData}</tbody>
          </table>
          <div className='flex justify-around py-4'>
            <button
              className='bg-cyan-500 hover:bg-cyan-600 rounded-full px-4 py-2 leading-tight		'
              onClick={props.again}
            >
              Replay
            </button>
            <Link
              className='bg-cyan-500 hover:bg-cyan-600 rounded-full px-4 py-2 '
              to='/'
            >
              Pick Different Game
            </Link>
            <Link
              className='bg-cyan-500 hover:bg-cyan-600 rounded-full px-4 py-2 '
              to='../'
            >
              Pick Different Difficulty
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
