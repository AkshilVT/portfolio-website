import { Button, Card } from '@nextui-org/react';
import React from 'react';
import { GrClose } from 'react-icons/gr';
import { RiStackFill } from 'react-icons/ri';
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiTypescript,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const data = [
  {
    img: '/photo.png',
    name: 'Project 1',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ipsa corrupti deleniti esse debitis, reiciendis numquam. Porro
                  temporibus sed animi.`,
    tech: [
      <SiNextdotjs key={0} className='w-8 h-8 hover:text-black' />,
      <FaReact key={1} className='w-8 h-8 hover:text-[#00D1F2]' />,
      <SiTypescript key={2} className='w-8 h-8 hover:text-[#0074C2]' />,
      <FaHtml5 key={3} className='w-8 h-8 hover:text-[#DD4B25]' />,
      <FaCss3Alt key={4} className='w-8 h-8 hover:text-[#2449D8]' />,
      <SiTailwindcss key={5} className='w-8 h-8 hover:text-[#38BDF8]' />,
      <SiDjango key={6} className='w-8 h-8 hover:text-[#003B29]' />,
    ],
  },
  {
    img: '/photo.png',
    name: 'Project 2',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ipsa corrupti deleniti esse debitis, reiciendis numquam. Porro
                  temporibus sed animi.`,
    tech: [
      <SiNextdotjs key={0} className='w-8 h-8 hover:text-black' />,
      <FaReact key={1} className='w-8 h-8 hover:text-[#00D1F2]' />,
      <SiTypescript key={2} className='w-8 h-8 hover:text-[#0074C2]' />,
      <FaHtml5 key={3} className='w-8 h-8 hover:text-[#DD4B25]' />,
      <FaCss3Alt key={4} className='w-8 h-8 hover:text-[#2449D8]' />,
      <SiTailwindcss key={5} className='w-8 h-8 hover:text-[#38BDF8]' />,
      <SiDjango key={6} className='w-8 h-8 hover:text-[#003B29]' />,
    ],
  },

  {
    img: '/photo.png',
    name: 'Project 3',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ipsa corrupti deleniti esse debitis, reiciendis numquam. Porro
                  temporibus sed animi.`,
    tech: [
      <SiNextdotjs key={0} className='w-8 h-8 hover:text-black' />,
      <FaReact key={1} className='w-8 h-8 hover:text-[#00D1F2]' />,
      <SiTypescript key={2} className='w-8 h-8 hover:text-[#0074C2]' />,
      <FaHtml5 key={3} className='w-8 h-8 hover:text-[#DD4B25]' />,
      <FaCss3Alt key={4} className='w-8 h-8 hover:text-[#2449D8]' />,
      <SiTailwindcss key={5} className='w-8 h-8 hover:text-[#38BDF8]' />,
      <SiDjango key={6} className='w-8 h-8 hover:text-[#003B29]' />,
    ],
  },
  {
    img: '/photo.png',
    name: 'Project 4',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ipsa corrupti deleniti esse debitis, reiciendis numquam. Porro
                  temporibus sed animi.`,
    tech: [
      <SiNextdotjs key={0} className='w-8 h-8 hover:text-black' />,
      <FaReact key={1} className='w-8 h-8 hover:text-[#00D1F2]' />,
      <SiTypescript key={2} className='w-8 h-8 hover:text-[#0074C2]' />,
      <FaHtml5 key={3} className='w-8 h-8 hover:text-[#DD4B25]' />,
      <FaCss3Alt key={4} className='w-8 h-8 hover:text-[#2449D8]' />,
      <SiTailwindcss key={5} className='w-8 h-8 hover:text-[#38BDF8]' />,
      <SiDjango key={6} className='w-8 h-8 hover:text-[#003B29]' />,
    ],
  },
];

function Project({ loading, setLoading }: any) {
  const [id, setId] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className='flex flex-col space-y-3 justify-center items-center h-screen'>
          <div className='w-10 h-10 border-r-2 animate-spin border-r-black rounded-full' />
          <p className='text-xl'>Loading</p>
        </div>
      ) : (
        <div className='w-full h-full p-5 mt-10 flex justify-around items-center '>
          <section className='grid xl:grid-cols-3 2xl:grid-cols-4 w-full gap-5'>
            {data.map((item: any, index: number) => {
              return (
                <ProjectCard
                  id={id}
                  setId={setId}
                  key={index}
                  number={index + 1}
                  content={item}
                />
              );
            })}
          </section>
        </div>
      )}
    </>
  );
}

export default Project;
