import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../assets/Model'; /* highlight-line */
import Navbar from './Navbar';

export default function Scene() {
  return (
    <div className='relative w-full'>
      <section className='w-full absolute top-0 z-10 text-white p-5'>
        <Navbar />
      </section>
      <Canvas
        camera={{ position: [0, 5, 20], fov: 10 }}
        style={{
          width: '100vw',
          height: '100vh',
        }}
        className='css-selector'
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
      {/* <footer className='h-screen'></footer> */}
    </div>
  );
}
