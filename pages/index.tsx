import type { NextPage } from 'next';
import Header from '../components/Header';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { useState } from 'react';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className={`mt-32 flex flex-col items-center px-8`}>
        <div className='w-52 h-52 rounded-full border-2 bg-sky-200'></div>
        <h2 className='font-bold mt-10 text-2xl'>Hello!, I&apos;m Newbie.</h2>
        <p className='font-light mx-auto mt-8 w-full text-gray-400 break-all'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <BsChevronDoubleDown className='mt-16 animate-bounce' size={30} color='gray' />
        <h3 className='font-bold text-slate-700 text-2xl w-full mt-10'>Stacks</h3>
        <ul className='flex w-full flex-col mt-8 gap-2 mb-20'>
          <li>
            <p className='font-semibold text-slate-500 break-all'>First - There are many variations of passages of Lorem Ipsum available</p>
          </li>
          <li>
            <p className='font-semibold text-slate-500 break-all'>Second - There are many variations of passages of Lorem Ipsum available</p>
          </li>
          <li>
            <p className='font-semibold text-slate-500 break-all'>Third - There are many variations of passages of Lorem Ipsum available</p>
          </li>
          <li>
            <p className='font-semibold text-slate-500 break-all'>Fourth - There are many variations of passages of Lorem Ipsum available</p>
          </li>
        </ul>
      </main>

      <footer className='bg-slate-400 py-10'>
        <p className='font-light text-center text-white text-lg'>Thanks for visiting my portfolio!</p>
        <p className='font-bold text-sky-300 text-center mt-4 text-lg'>tailwindcss is good!</p>
      </footer>
    </>
  );
};

export default Home;
