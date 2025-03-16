import React from 'react';
import HeaderContent from '../assets/components/navbar/header-content';
import Divider from '../assets/components/divider/divider';
import Projects from '../assets/components/projects/Projects';
import Header from '../assets/components/navbar/Header';
const Home = () => {
  return (
    <>
      <div className='mx-8'>
        <Header />
        <HeaderContent />
      </div>
      <Divider />
      <div className='max-w-[1536px] mx-auto px-4'>
        <Projects />
      </div>
    </>
  );
};

export default Home;
