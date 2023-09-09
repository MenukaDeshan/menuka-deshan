<<<<<<< HEAD
"use client";
import { useState, useEffect } from 'react'
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar";
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import profile from '../public/profile-pic.png';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

export const Hero = () => {
  
  return (
    <section className="flex flex-col-reverse justify-center w-full h-screen md:flex-row md:h-screen" id="Hero">
      <div className="flex items-center justify-center p-10 h-1/5 md:h-full md:w-2/5">
        <div id="text" className="text-center md:text-left">
        <h1 id='name' className="mb-2 text-3xl font-bold uppercase md:text-5xl hover:text-purple-400">Menuka Deshan</h1>
          {/*
          <p className="text-sm tracking-widest capitalize md:text-md">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "In the depths of code, secrets are revealed.",
                2000,
                "",
              ]}
              wrapper="span"
              speed={5}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
              className="py-2 font-light"
            />
          </p>*/}
          <p className="text-lg md:text-2xl" id='dev'>Web Developer</p>
          <p className="text-sm font-thin md:text-md">
          &ldquo;Bugs are the footprints of the programmer&rsquo;s journey.&rdquo;
          </p>
          {/* Icons */}
          <div className='flex justify-center mt-1 md:justify-start'>
            <h2 className='flex text-2xl'>
            <a href='https://github.com/MenukaDeshan' target='blank' className='m-1 hover:text-purple-500'><BsGithub/></a>
            <a href='https://github.com/MenukaDeshan' target='blank' className='m-1 hover:text-purple-500'><BsFacebook/></a>
            <a href='https://github.com/MenukaDeshan' target='blank' className='m-1 hover:text-purple-500'><BsInstagram/></a>
            </h2>
          </div>
           {/* 3d MODEL 
          <button className="px-4 py-2 mt-4 text-white bg-purple-500 rounded">Learn More</button>*/}
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
            width={550}     
            priority
          />
        </div>
      </div>
    </section>
  );
};
=======
"use client";
import { useState, useEffect } from 'react'
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar";
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import profile from '../public/profile-pic.png';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

export const Hero = () => {
  
  return (
    <section className="flex flex-col-reverse justify-center w-full h-screen md:flex-row md:h-screen" id="Hero">
      <div className="flex items-center justify-center p-10 h-1/5 md:h-full md:w-2/5">
        <div id="text" className="text-center md:text-left">
        <h1 id='name' className="mb-2 text-3xl font-bold uppercase md:text-5xl hover:text-purple-400">Menuka Deshan</h1>
          {/*
          <p className="text-sm tracking-widest capitalize md:text-md">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "In the depths of code, secrets are revealed.",
                2000,
                "",
              ]}
              wrapper="span"
              speed={5}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
              className="py-2 font-light"
            />
          </p>*/}
          <p className="text-lg md:text-2xl" id='dev'>Web Developer</p>
          <p className="text-sm font-thin md:text-md">
          &ldquo;Bugs are the footprints of the programmer&rsquo;s journey.&rdquo;
          </p>
          {/* Icons */}
          <div className='flex justify-center mt-1 md:justify-start'>
            <h2 className='flex text-2xl'>
            <a href='https://github.com/MenukaDeshan' target='blank' className='m-1 hover:text-purple-500'><BsGithub/></a>
            <a href='https://github.com/MenukaDeshan' target='blank' className='m-1 hover:text-purple-500'><BsFacebook/></a>
            <a href='https://github.com/MenukaDeshan' target='blank' className='m-1 hover:text-purple-500'><BsInstagram/></a>
            </h2>
          </div>
           {/* 3d MODEL 
          <button className="px-4 py-2 mt-4 text-white bg-purple-500 rounded">Learn More</button>*/}
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
            width={550}     
            priority
          />
        </div>
      </div>
    </section>
  );
};
>>>>>>> de5c37688b804723b18832cf1e2b736d0514d873
