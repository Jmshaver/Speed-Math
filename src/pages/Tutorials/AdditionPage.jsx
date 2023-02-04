import React from 'react';
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import TutorialPage from './TutorialPage';

export default function AdditionPage(props) {
  return (
    <TutorialPage>
      <h1 className='text-7xl py-8 text-center'>How To a</h1>
      <section className='container mx-auto'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          praesentium perspiciatis sint hic fugit provident excepturi quas
          blanditiis, possimus id iure, eos earum recusandae ducimus, eaque
          incidunt dolorum cum deserunt rerum saepe. Sequi hic rerum deleniti
          dolorem sapiente accusantium incidunt tenetur ducimus, commodi quidem
          maiores facilis modi ex sunt nesciunt. Cumque tenetur corrupti non at
          tempora reprehenderit corporis quaerat laudantium, expedita deleniti
          soluta alias eum voluptatibus, voluptates natus ducimus obcaecati.
          Neque totam exercitationem veritatis aut quos commodi harum aspernatur
          quae fugit ipsum temporibus corrupti, corporis recusandae delectus
          laborum ad non eius ullam ea fuga? Dolores aut fugit dolorem inventore
          eaque?
        </p>
        <div class='grid grid-cols-1 w-fit mx-auto my-2 bg-slate-700 py-4 px-8 rounded'>
          <a class='text-2xl text-right'>{11111111}</a>
          <a class='text-2xl text-right'>
            {'+'} {2222}
          </a>
          <hr class='my-2 h-0.5 bg-slate-50 border-0 w-100'></hr>
          <a class='text-2xl text-right'>{3333}</a>
        </div>
      </section>
    </TutorialPage>
  );
}
