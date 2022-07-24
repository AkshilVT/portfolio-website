import type { NextPage } from "next";
import React from "react";
const AboutMe = React.lazy(() => import("../components/AboutMe"));
const CustomCursor = React.lazy(() => import("../components/CustomCursor.js"));
const Navbar = React.lazy(() => import("../components/Navbar"));

const Home: NextPage = () => {
  const [active, setActive] = React.useState(0);
  console.log(active);
  return (
    <div className="w-full bg-gray-100 h-screen">
      <div className="max-w-screen-2xl mx-auto">
        <CustomCursor />
        <section className="w-full bg-gray-100 text-white p-5">
          <Navbar active={active} setActive={setActive} />
        </section>
        {active == 0 && <AboutMe />}
      </div>
    </div>
  );
};

export default Home;
