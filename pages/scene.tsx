import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Button, Card } from "@nextui-org/react";
import router from "next/router";
import CustomCursor from "../components/CustomCursor";
// import Model from '../assets/Model';
const Model = React.lazy(() => import("../assets/Model"));
// import Navbar from './Navbar';

export default function Scene() {
  return (
    <div className="relative w-full">
      <CustomCursor />

      <Card
        isHoverable
        isPressable
        className="nav-link absolute z-10 top-0 m-5"
        onClick={() => {
          router.push("/");
        }}
      >
        <a href="#" className="cursor-none">
          {"<"} Go Back
        </a>
      </Card>
      <Canvas
        camera={{ position: [0, 5, 20], fov: 10 }}
        style={{
          width: "100vw",
          height: "100vh",
        }}
        className="css-selector"
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense
          fallback={
            // <iframe src='https://embed.lottiefiles.com/animation/100035'></iframe>
            null
          }
        >
          <Model />
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
      {/* <footer className='h-screen'></footer> */}
    </div>
  );
}
