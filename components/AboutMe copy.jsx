"use client";
import { useState, useEffect } from 'react'
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import { OrbitControls, Sphere, MeshDistortMaterial,Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Char from './Char';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const AboutMe = () => {
  return (
    <section className="flex flex-col-reverse justify-center w-full h-screen mt-16 md:flex-row md:h-screen" id='aboutme'>
      <div className="flex items-center justify-center h-4/5 md:h-full md:w-1/2">
        <div id="text" className="text-center md:text-left">
         {/*3d MODEL*/}
         <Canvas style={{ width: '100%', height: '100%' }}>
          <Stage environment="city" intensity={0.6}>
            <Char/>
          </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
        </Canvas>
        </div>
      </div>

      <div className="relative overflow-visible h-1/5 md:h-full md:w-1/2">
      <div id="text" className="text-center md:text-left">
        <h1 id='name' className="mb-2 text-3xl font-bold uppercase md:text-5xl hover:text-purple-400">Menuka Deshan</h1>
          {/* Icons */}
          <div className='flex justify-center md:justify-start'>
            <h2 className='flex text-2xl'>
            <a href='https://github.com/MenukaDeshan' target='blank' className='m-1 hover:text-purple-500'><BsGithub/></a>
            <a href='https://github.com/MenukaDeshan' target='blank' className='m-1 hover:text-purple-500'><BsFacebook/></a>
            <a href='https://github.com/MenukaDeshan' target='blank' className='m-1 hover:text-purple-500'><BsInstagram/></a>
            </h2>
          </div>
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
          </p>
          <p className="text-lg md:text-2xl" id='dev'>Developer and Designer</p>
          <p className="text-sm font-thin md:text-md">
          I am a passionate and enthusiastic beginner programmer with a strong desire to explore the exciting world of coding. 
          I am constantly eager to learn and improve my skills, and I enjoy tackling coding challenges and building small projects. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe