import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function AboutMe() {
  return (
    <div className="w-full h-full p-5 mt-10 flex flex-col xl:flex-row overflow-hidden lg:justify-around items-center">
      <motion.div
        animate={{ x: 100 }}
        transition={{
          type: "spring",
          stiffness: 100,
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: 1,
        }}
        className="w-5 h-5 rounded-full bg-pink-500 fixed top-20 left-20"
      />
      <div className="w-full lg:pl-5 xl:pl-20 text-center xl:text-left">
        <div className="w-full xl:w-[200px] mb-5 h-2 light-gradient rounded-full"></div>
        <h1 className="xl:text-4xl text-xl">Hello, I am</h1>
        <h6 className="text-4xl xl:text-7xl my-1">Akshil Thumar</h6>
        <div className="relative h-10 flex justify-center xl:justify-start">
          <div className="h-10 overflow-hidden absolute">
            <h5 className="text-xl xl:text-4xl">Fullstack Developer</h5>
            <h5 className="text-xl xl:text-4xl">Blockchain Enthusiast</h5>
            <h5 className="text-xl xl:text-4xl ">
              Aspiring Creative Developer
            </h5>
            <h5 className="text-xl xl:text-4xl ">AR-VR Developer</h5>
          </div>
        </div>
        <div className="w-full xl:w-[200px] mt-5 h-2 light-gradient rounded-full"></div>
      </div>
      <aside className="w-full h-full mt-5 xl:mt-0">
        <Image
          className=""
          src={"/photo2.png"}
          width="500px"
          height="500px"
          layout="responsive"
          alt="portrait"
        ></Image>
      </aside>
    </div>
  );
}

export default AboutMe;
