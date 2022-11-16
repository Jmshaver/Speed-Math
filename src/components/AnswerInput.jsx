import React from 'react';
//import {useState} from 'react';

import './AnswerInput.css';

export default function AnswerInput(props) {
  const handleChange = (event) => {
    if (event.target.value == props.answer) {
      console.log('✅ Correct');
      event.target.value = '';
      props.update();
    }
  };
  return <div></div>;
}
