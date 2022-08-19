import React from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiTypescript,
} from "react-icons/si";
import ProjectCard from "./ProjectCard";

const data = [
  {
    img: "/engageML.png",
    name: "Project 1",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ipsa corrupti deleniti esse debitis, reiciendis numquam. Porro
                  temporibus sed animi.`,
    tech: [
      <SiNextdotjs
        key={0}
        className="w-8 h-8 hover:text-black text-black md:text-gray-500"
      />,
      <FaReact
        key={1}
        className="w-8 h-8 hover:text-[#00D1F2] text-[#00D1F2] md:text-gray-500"
      />,
      <SiTypescript
        key={2}
        className="w-8 h-8 hover:text-[#0074C2] text-[#0074C2] md:text-gray-500"
      />,
      <FaHtml5
        key={3}
        className="w-8 h-8 hover:text-[#DD4B25] text-[#DD4B25] md:text-gray-500"
      />,
      <FaCss3Alt
        key={4}
        className="w-8 h-8 hover:text-[#2449D8] text-[#2449D8] md:text-gray-500"
      />,
      <SiTailwindcss
        key={5}
        className="w-8 h-8 hover:text-[#38BDF8] text-[#38BDF8] md:text-gray-500"
      />,
      <SiDjango
        key={6}
        className="w-8 h-8 hover:text-[#003B29] text-[#003B29] md:text-gray-500"
      />,
    ],
  },
  {
    img: "/pureML.png",
    name: "Project 1",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ipsa corrupti deleniti esse debitis, reiciendis numquam. Porro
                  temporibus sed animi.`,
    tech: [
      <SiNextdotjs
        key={0}
        className="w-8 h-8 hover:text-black text-black md:text-gray-500"
      />,
      <FaReact
        key={1}
        className="w-8 h-8 hover:text-[#00D1F2] text-[#00D1F2] md:text-gray-500"
      />,
      <SiTypescript
        key={2}
        className="w-8 h-8 hover:text-[#0074C2] text-[#0074C2] md:text-gray-500"
      />,
      <FaHtml5
        key={3}
        className="w-8 h-8 hover:text-[#DD4B25] text-[#DD4B25] md:text-gray-500"
      />,
      <FaCss3Alt
        key={4}
        className="w-8 h-8 hover:text-[#2449D8] text-[#2449D8] md:text-gray-500"
      />,
      <SiTailwindcss
        key={5}
        className="w-8 h-8 hover:text-[#38BDF8] text-[#38BDF8] md:text-gray-500"
      />,
      <SiDjango
        key={6}
        className="w-8 h-8 hover:text-[#003B29] text-[#003B29] md:text-gray-500"
      />,
    ],
  },
  {
    img: "/Votechain.png",
    name: "Project 1",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ipsa corrupti deleniti esse debitis, reiciendis numquam. Porro
                  temporibus sed animi.`,
    tech: [
      <SiNextdotjs
        key={0}
        className="w-8 h-8 hover:text-black text-black md:text-gray-500"
      />,
      <FaReact
        key={1}
        className="w-8 h-8 hover:text-[#00D1F2] text-[#00D1F2] md:text-gray-500"
      />,
      <SiTypescript
        key={2}
        className="w-8 h-8 hover:text-[#0074C2] text-[#0074C2] md:text-gray-500"
      />,
      <FaHtml5
        key={3}
        className="w-8 h-8 hover:text-[#DD4B25] text-[#DD4B25] md:text-gray-500"
      />,
      <FaCss3Alt
        key={4}
        className="w-8 h-8 hover:text-[#2449D8] text-[#2449D8] md:text-gray-500"
      />,
      <SiTailwindcss
        key={5}
        className="w-8 h-8 hover:text-[#38BDF8] text-[#38BDF8] md:text-gray-500"
      />,
      <SiDjango
        key={6}
        className="w-8 h-8 hover:text-[#003B29] text-[#003B29] md:text-gray-500"
      />,
    ],
  },
  {
    img: "/TeachTech.png",
    name: "Project 1",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ipsa corrupti deleniti esse debitis, reiciendis numquam. Porro
                  temporibus sed animi.`,
    tech: [
      <SiNextdotjs
        key={0}
        className="w-8 h-8 hover:text-black text-black md:text-gray-500"
      />,
      <FaReact
        key={1}
        className="w-8 h-8 hover:text-[#00D1F2] text-[#00D1F2] md:text-gray-500"
      />,
      <SiTypescript
        key={2}
        className="w-8 h-8 hover:text-[#0074C2] text-[#0074C2] md:text-gray-500"
      />,
      <FaHtml5
        key={3}
        className="w-8 h-8 hover:text-[#DD4B25] text-[#DD4B25] md:text-gray-500"
      />,
      <FaCss3Alt
        key={4}
        className="w-8 h-8 hover:text-[#2449D8] text-[#2449D8] md:text-gray-500"
      />,
      <SiTailwindcss
        key={5}
        className="w-8 h-8 hover:text-[#38BDF8] text-[#38BDF8] md:text-gray-500"
      />,
      <SiDjango
        key={6}
        className="w-8 h-8 hover:text-[#003B29] text-[#003B29] md:text-gray-500"
      />,
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
        <div className="flex flex-col space-y-3 justify-center items-center h-screen cursor-wait">
          <div className="w-10 h-10 border-r-2 animate-spin border-r-black rounded-full" />
          <p className="text-xl">Loading</p>
        </div>
      ) : (
        <div className="w-full h-full p-5 md:mt-10 flex justify-around items-center bg-gray-100 ">
          <section className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full gap-5">
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
