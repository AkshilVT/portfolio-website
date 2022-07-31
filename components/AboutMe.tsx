import Image from 'next/image';
import React from 'react';

function AboutMe() {
  return (
    <div className='w-full h-full p-5 mt-10 flex flex-col lg:flex-row overflow-hidden justify-around items-center'>
      <div className='w-full lg:pl-5 xl:pl-20'>
        <div className='w-full lg:w-[200px] mb-5 h-2 light-gradient rounded-full'></div>
        <h1 className='lg:text-4xl text-xl'>Hello, I am</h1>
        <h6 className='text-4xl lg:text-7xl my-1'>Akshil Thumar</h6>
        <div className='relative h-10'>
          <div className='h-10 overflow-hidden absolute'>
            <h5 className='text-xl lg:text-4xl'>Fullstack Developer</h5>
            <h5 className='text-xl lg:text-4xl'>Blockchain Enthusiast</h5>
            <h5 className='text-xl lg:text-4xl '>
              Aspiring Creative Developer
            </h5>
            <h5 className='text-xl lg:text-4xl '>AR-VR Developer</h5>
          </div>
        </div>
        <div className='w-full lg:w-[200px] mt-5 h-2 light-gradient rounded-full'></div>
      </div>
      <aside className='w-full h-full mt-5 lg:mt-0'>
        <Image
          className=''
          src={'/photo2.png'}
          width='500px'
          height='500px'
          layout='responsive'
          alt='portrait'
        ></Image>
      </aside>
    </div>
  );
}

export default AboutMe;
