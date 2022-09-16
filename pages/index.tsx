import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Project from "../components/Project";
const AboutMe = React.lazy(() => import("../components/AboutMe"));
const CustomCursor = React.lazy(() => import("../components/CustomCursor.js"));
const Navbar = React.lazy(() => import("../components/Navbar"));

const Home: NextPage = ({ setLoading }: any) => {
  useEffect(() => {
    setLoading(false);
  }, []);
  const [load0, setLoad0] = React.useState(true);
  const [load1, setLoad1] = React.useState(true);
  const [load2, setLoad2] = React.useState(true);
  const [load3, setLoad3] = React.useState(true);
  const [title, setTitle] = React.useState("404");
  const [active, setActive] = React.useState(0);
  useEffect(() => {
    if (active == 0) {
      setTitle("About Me");
    } else if (active == 1) {
      setTitle("Project & Tech Stack");
    } else if (active == 3) {
      setTitle("Contact Me");
    } else if (active == 2) {
      setTitle("Education & Experience");
    } else {
      setTitle("404");
    }
  });

  return (
    <>
      <Head>
        <title>Akshil Thumar | {title}</title>
        <link rel="icon" href="logot.png" type="image/icon type" />
      </Head>
      <div className="w-full bg-gray-100 h-screen">
        <div className="max-w-screen-2xl mx-auto">
          <div className="hidden lg:block">
            <CustomCursor />
          </div>
          <section className="w-full bg-gray-100 text-white p-5">
            <Navbar active={active} setActive={setActive} title={title} />
          </section>
          {active == 0 && <AboutMe loading={load0} setLoading={setLoad0} />}
          {active == 1 && <Project loading={load1} setLoading={setLoad1} />}
          {active == 2 && <Experience loading={load2} setLoading={setLoad2} />}
          {active == 3 && <Contact loading={load3} setLoading={setLoad3} />}
        </div>
      </div>
    </>
  );
};

export default Home;
