import React from 'react';
//import {useState} from 'react';
import { Link } from 'react-router-dom';
export default function Card(props) {
  return (
    <div class='rounded overflow-hidden shadow-lg bg-slate-700 hover:-translate-y-2 hover:text-cyan-500 transition-all '>
      <Link to={props.linkPath}>
        <div class='px-6 py-4 '>
          <div class='font-bold text-xl mb-2 text-center'>{props.title}</div>
          {props.children}
          <p class='text-base'>{props.description}</p>
        </div>
      </Link>
    </div>
  );
}
