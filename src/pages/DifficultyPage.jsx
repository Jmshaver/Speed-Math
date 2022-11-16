import React from 'react';
//import {useState} from 'react';
import Card from '../components/Card';
import {
  RiSignalWifi1Fill,
  RiSignalWifi2Fill,
  RiSignalWifiFill,
  RiSignalWifiErrorFill,
} from 'react-icons/ri';

export default function DifficultyPage(props) {
  //console.log(props.descriptions)
  return (
    <div className=' min-h-screen flex flex-col container mx-auto'>
      <h1 class='text-7xl text-center py-8 flex-grow-0 flex-shrink flex-basis-auto'>
        Select Difficulty
      </h1>
      <div className='flex-grow flex-shrink flex-basis-auto flex flex-col justify-around'>
        <section class='grid grid-cols-4 gap-4  px-4  h-max'>
          <Card
            linkPath='./easy'
            title='Easy'
            description={props.descriptions['/easy']}
          >
            <RiSignalWifi1Fill className={'text-9xl mx-auto my-3'} />
          </Card>
          <Card
            linkPath='./medium'
            title='Medium'
            description={props.descriptions['/medium']}
          >
            <RiSignalWifi2Fill className={'text-9xl mx-auto my-3'} />
          </Card>
          <Card
            linkPath='./hard'
            title='Hard'
            description={props.descriptions['/hard']}
          >
            <RiSignalWifiFill className={'text-9xl mx-auto my-3'} />
          </Card>
          <Card linkPath='' title='Dynamic' description='Under Construction'>
            <RiSignalWifiErrorFill className={'text-9xl mx-auto my-3'} />
          </Card>
        </section>
      </div>
      {props.children}
    </div>
  );
}
