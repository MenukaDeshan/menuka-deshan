"use client";
import React from "react";
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar";
import { OrbitControls, Sphere,MeshDistortMaterial} from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import profile from '../public/profile-pic.png'

export const Hero = () => {
  return (
    <div className="flex justify-center w-full h-screen" id="Hero">
        <div className="flex flex-row">
            <div className="flex flex-col justify-center w-2/5 p-10 mx-auto flex-c fle it flex-ms-center">
              <h1>Menuka Deshan</h1>
              <h2></h2>
              <p className="tracking-widest capitalize">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Wake up to reality",
                  2000,
                  "",
                ]}
                wrapper="span"
                speed={5}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
                className="py-2 font-light text-md"
              />
            </p>
                <p>Developer and Designer</p>
              <p>I am a versatility and easily adapt to different hats (Beginner level Designer 🎨 and a Developer) . I love exploring new tech stacks.</p>
              <button>Learn More</button>
            </div>

            <div className="relative flex items-center justify-center w-3/5 mx-auto overflow-visible">
              {/*3d MODEL*/}
              <Canvas>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]}/>
                <Sphere args={[1,100,200]} scale={1.8}>
                <MeshDistortMaterial color="#7a00d7" attach="material" distort={0.5} speed={2}/>
                </Sphere>
              </Canvas>
              <div className="flex items-center justify-center">
                <Image
                  src={profile}
                  alt="horebanner"
                  className="absolute top-0 bottom-0 left-0 right-0 object-contain h-auto m-auto mx-auto rounded-full"
                  width={600}
                  height={700}
                  priority
                />
              </div>
            </div>
            
          </div>
    </div>
  );
};
