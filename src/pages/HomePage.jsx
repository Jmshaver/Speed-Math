import React from 'react';
//import {useState} from 'react';
import Card from '../components/Card';
import {
  RiCheckboxMultipleBlankFill,
  RiAddFill,
  RiDivideFill,
  RiCloseFill,
  RiSubtractFill,
} from 'react-icons/ri';

export default function HomePage(props) {
  return (
    <>
      <h1 class='text-7xl py-8 text-center'>Speed Math</h1>
      <section className='container mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center place-content-center'>
        <Card linkPath='/complement' title='Complement' description=''>
          <RiCheckboxMultipleBlankFill className={'text-9xl mx-auto my-3'} />
        </Card>
        <Card linkPath='/addition' title='Addition' description=''>
          <RiAddFill className={'text-9xl mx-auto my-3'} />
        </Card>
        <Card linkPath='/multiplication' title='Multiplication' description=''>
          <RiCloseFill className={'text-9xl mx-auto my-3'} />
        </Card>
        <Card linkPath='/subtraction' title='Subtraction' description=''>
          <RiSubtractFill className={'text-9xl mx-auto my-3'} />
        </Card>
        <Card linkPath='/division' title='Division' description=''>
          <RiDivideFill className={'text-9xl mx-auto my-3'} />
        </Card>
      </section>
    </>
  );
}
