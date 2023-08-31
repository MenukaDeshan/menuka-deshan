"use client";
import { useState, useEffect } from 'react'
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar";
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import profile from '../public/profile-pic.png';

export const Hero = () => {
  
  return (
    <div className="flex flex-col-reverse justify-center w-full h-screen md:flex-row md:h-screen" id="Hero">
      <div className="flex items-center justify-center p-10 h-1/4 md:h-full md:w-2/5">
        <div id="text" className="text-center md:text-left">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">Menuka Deshan</h1>
          <p className="text-sm tracking-widest capitalize md:text-md">
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
              className="py-2 font-light"
            />
          </p>
          <p className="text-sm md:text-md">Developer and Designer</p>
          <p className="text-sm md:text-md">
            I am a versatility and easily adapt to different hats.
            I love exploring new tech stacks.
          </p>
          <button className="px-4 py-2 mt-4 text-white bg-purple-500 rounded">Learn More</button>
        </div>
      </div>

      <div className="relative overflow-visible h-4/5 md:h-full md:w-3/5">
        {/* 3d MODEL */}
        <Canvas style={{ width: '100%', height: '100%' }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 70, 100]} scale={1.8}>
            <MeshDistortMaterial color="#7a00d7" attach="material" distort={0.5} speed={1} />
          </Sphere>
        </Canvas>
        <div className="flex items-center justify-center">
       <Image
            src={profile} 
            alt="horebanner"
            className="absolute top-0 bottom-0 left-0 right-0 object-contain h-auto m-auto mx-auto rounded-full"
            width={600}     
            priority
          />
        </div>
      </div>
    </div>
  );
};
