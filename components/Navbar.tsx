import { Card } from "@nextui-org/react";
import router from "next/router";
import React from "react";

function Navbar({ setActive, active }: any) {
  return (
    <nav className="w-full flex justify-center space-x-5">
      <Card
        isPressable
        isHoverable={active != 0 ? true : false}
        variant={active == 0 ? "shadow" : "flat"}
        className="nav-link "
        onClick={() => setActive(0)}
      >
        <a href="#" className="cursor-none">
          About Me
        </a>
      </Card>
      <Card
        isHoverable={active != 1 ? true : false}
        isPressable
        variant={active == 1 ? "shadow" : "flat"}
        className="nav-link max-w-[250px]"
        onClick={() => setActive(1)}
      >
        <a href="#" className="cursor-none">
          Projects & Tech Stack
        </a>
      </Card>
      <Card
        isHoverable={active != 2 ? true : false}
        isPressable
        variant={active == 2 ? "shadow" : "flat"}
        className="nav-link max-w-[270px]"
        onClick={() => setActive(2)}
      >
        <a href="#" className="cursor-none">
          Education & Experience
        </a>
      </Card>
      <Card
        isHoverable={active != 3 ? true : false}
        isPressable
        variant={active == 3 ? "shadow" : "flat"}
        className="nav-link "
        onClick={() => setActive(3)}
      >
        <a href="#" className="cursor-none">
          Contact Me
        </a>
      </Card>
      <Card
        isHoverable={active != 4 ? true : false}
        isPressable
        variant={active == 4 ? "shadow" : "bordered"}
        className="nav-link bg-gray-100"
        onClick={() => {
          setActive(4);
          router.push("/scene");
        }}
      >
        <a href="#" className="cursor-none">
          Playground
        </a>
      </Card>
    </nav>
  );
}

export default Navbar;
