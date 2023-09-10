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
    <section className="flex flex-col-reverse justify-center w-full h-screen md:flex-row md:h-screen" id='aboutme'>
     <div className="relative overflow-visible h-2/3 md:h-full md:w-3/5">
         {/*3d MODEL*/}
         <Canvas style={{ width: '100%', height: '100%' }}>
          <Stage environment="city" intensity={0.6}>
            <Char/>
          </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
        </Canvas>
      </div>
      <div className="flex items-center justify-center p-10 h-1/3 md:h-full md:w-2/5">
        <div id="text" className="text-center md:text-left">
        <h1 className="mb-2 text-lg font-bold text-transparent uppercase md:text-xl bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500">
        Hello
        </h1>
          {/* Icons */}
          <h1 className="text-4xl font-extrabold tracking-widest capitalize md:text-md">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Menuka Deshan",
                1000,
                "Web Developer",
                1000,
                "Ethical Hacker",
                1000,
                "Gamer",
                1000,
              ]}
              wrapper="span"
              speed={5}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
              className="py-2 font-extrabold"
            />
          </h1>
          <p className="text-sm font-thin md:text-md">
          I am a passionate and enthusiastic beginner programmer with a strong desire to explore the exciting world of coding. 
          I have a solid foundation in the basics of programming languages such as Python, JavaScript, and HTML/CSS. 
          I am constantly eager to learn and improve my skills, and I enjoy tackling coding challenges and building small projects. 
          My goal is to grow as a programmer and eventually contribute to innovative software solutions that can make a positive impact on people s lives.
          </p>
        </div>
      </div>

     
    </section>
  )
}

export default AboutMe