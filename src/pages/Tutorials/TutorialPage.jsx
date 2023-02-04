import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';

export default function TutorialPage(props) {
  return (
    <>
      <div>
        <div class='w-60 h-full bg-slate-700 shadow-md fixed'>
          <ul class='relative p-4'>
            <li class='relative'>
              <a class='flex items-center text-sm py-4 px-2 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-slate-500 transition-all cursor-pointer justify-between'>
                <span>Addition</span>
                <RiArrowDropDownLine className='text-2xl' />
              </a>
              <ul class='relative'>
                <li>
                  <a class='flex items-center text-sm py-2 px-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-slate-500 transition-all cursor-pointer justify-between'>
                    <span>Left to right</span>
                  </a>
                </li>
                <li>
                  <a class='flex items-center text-sm py-2 px-6  overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-slate-500 transition-all cursor-pointer justify-between'>
                    <span>2 digit</span>
                  </a>
                </li>
                <li>
                  <a class='flex items-center text-sm py-2 px-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-slate-500 transition-all cursor-pointer justify-between'>
                    <span>3 digit</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className='ml-60 px-4'>{props.children}</div>
      </div>
    </>
  );
}
