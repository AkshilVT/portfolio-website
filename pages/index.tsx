import type { NextPage } from "next";
import React from "react";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Project from "../components/Project";
const AboutMe = React.lazy(() => import("../components/AboutMe"));
const CustomCursor = React.lazy(() => import("../components/CustomCursor.js"));
const Navbar = React.lazy(() => import("../components/Navbar"));

const Home: NextPage = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className="w-full bg-gray-100 h-screen">
      <div className="max-w-screen-2xl mx-auto">
        <CustomCursor />
        <section className="w-full bg-gray-100 text-white p-5">
          <Navbar active={active} setActive={setActive} />
        </section>
        {active == 0 && <AboutMe />}
        {active == 1 && <Project />}
        {active == 2 && <Experience />}
        {active == 3 && <Contact />}
      </div>
    </div>
  );
};

export default Home;
