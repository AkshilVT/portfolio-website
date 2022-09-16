import React from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { MdOutlineImage } from "react-icons/md";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiTypescript,
  SiFirebase,
  SiSvelte,
  SiSupabase,
  SiJavascript,
  SiEthereum,
  SiUnity,
  SiGithub,
} from "react-icons/si";
import ProjectCard from "./ProjectCard";

const data = [
  {
    img: "/engageML.png",
    name: "EngageML",
    link: (
      <MdOutlineImage className="w-8 h-8 hover:text-black text-black md:text-gray-500" />
    ),
    description: `EngageML is a platform that lets users interact with the No-code AI engine developed at PureML. I contributed significantly to creating a User Interface and Integrating it with the backend APIs.`,
    tech: [
      <SiNextdotjs
        key={0}
        className="w-8 h-8 hover:text-black text-black md:text-gray-500"
      />,
      // <FaReact
      //   key={1}
      //   className='w-8 h-8 hover:text-[#00D1F2] text-[#00D1F2] md:text-gray-500'
      // />,
      <SiFirebase
        key={1}
        className="w-8 h-8 hover:text-[#FFCC30] text-[#FFCC30] md:text-gray-500"
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
    img: "/pureML3.png",
    name: "Tapeit",
    link: (
      <MdOutlineImage className="w-8 h-8 hover:text-black text-black md:text-gray-500" />
    ),
    description: `Tapeit is a software that manages the Inventory of Florescent tapes (used on vehicles). I led the frontend team and developed a robust and user-friendly interface.`,
    tech: [
      <SiSvelte
        key={1}
        className="w-8 h-8 hover:text-[#F73C00] text-[#F73C00] md:text-gray-500"
      />,
      <SiJavascript
        key={2}
        className="w-8 h-8 hover:text-[#E4D04B] text-[#E4D04B] md:text-gray-500"
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
      <SiSupabase
        key={6}
        className="w-8 h-8 hover:text-[#3BC488] text-[#3BC488] md:text-gray-500"
      />,
    ],
  },
  {
    img: "/Votechain.png",
    name: "Votechain",
    link: (
      <>
        <a href="https://github.com/AkshilVT/VoteChain" target="blank">
          <SiGithub className="w-8 h-8 hover:text-black text-black md:text-gray-500" />
        </a>
        <MdOutlineImage className="w-8 h-8 hover:text-black text-black md:text-gray-500" />
      </>
    ),
    description: `Votechain is a decentralized governance platform. It helps DAOs to hold elections on various proposals. We won the track prize of Saftey Net with this Project in the Ingenious Hackathon.`,
    tech: [
      <FaReact
        key={1}
        className="w-8 h-8 hover:text-[#00D1F2] text-[#00D1F2] md:text-gray-500"
      />,
      <SiJavascript
        key={2}
        className="w-8 h-8 hover:text-[#E4D04B] text-[#E4D04B] md:text-gray-500"
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
      <SiEthereum
        key={6}
        className="w-8 h-8 hover:text-[#3A3A39] text-[#3A3A39] md:text-gray-500"
      />,
      <p
        key={7}
        className="hover:text-[#7B43D9] text-[#7B43D9] md:text-gray-500"
      >
        {" "}
        Polygon
      </p>,
    ],
  },
  {
    img: "/TeachTech.png",
    name: "TeachTech",
    link: (
      <MdOutlineImage className="w-8 h-8 hover:text-black text-black md:text-gray-500" />
    ),
    description: `Developed an immersive AR app that shows the 3D model of numerous chemical compounds, and when two compounds are in close proximity, it stimulates a reaction between them.`,
    tech: [
      <SiUnity
        key={0}
        className="w-8 h-8 hover:text-black text-black md:text-gray-500"
      />,
      <p key={1} className="h-8 hover:text-black text-black md:text-gray-500">
        {" "}
        Vuforia
      </p>,
    ],
  },
];

function Project({ loading, setLoading }: any) {
  const [id, setId] = React.useState(-1);
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
          {/* <div className='fixed p-5 rounded-xl bottom-0 bg-white/50 z-50'>
            {' '}
            This page is under development
          </div> */}
          <section className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full gap-5">
            {data.map((item: any, index: number) => {
              return (
                <ProjectCard
                  id={id}
                  setId={setId}
                  key={index}
                  number={index}
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
