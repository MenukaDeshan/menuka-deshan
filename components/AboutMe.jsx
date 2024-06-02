"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { OrbitControls, Sphere, MeshDistortMaterial,Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Char from './Char';
import react from '../public/images/logos/react.png';
import html from '../public/images/logos/html.png'
import css from '../public/images/logos/css.png'
import js from '../public/images/logos/javascript.png'
import bs from '../public/images/logos/bootstrap.png'
import tw from '../public/images/logos/tailwind.png'
import java from '../public/images/logos/java.webp'
import mysql from '../public/images/logos/mysql.png'
import gh from '../public/images/logos/github1.png'
import three from '../public/images/logos/threejs.png'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="justify-center w-auto h-auto mb-24 text-white mx-22" id="aboutme">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 xl:px-16 bg-slate-950">
        {/*3d MODEL*/}
        <Canvas style={{ width: '100%', height: '100%' }}>
          <Stage environment="city" intensity={0.6}>
            <Char/>
          </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
        </Canvas>
        <div className="flex flex-col w-full h-full px-4 mx-3 mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base sm:text-sm lg:text-lg" >
          I am a passionate and enthusiastic beginner programmer with a strong desire to explore the exciting world of coding. 
          I have a solid foundation in the basics of programming languages such as Python, JavaScript, and HTML/CSS. 
          I am constantly eager to learn and improve my skills, and I enjoy tackling coding challenges and building small projects. 
          My goal is to grow as a programmer and eventually contribute to innovative software solutions that can make a positive impact on people s lives.
          </p>
          <div className="flex flex-row flex-wrap justify-start mt-8">
          <Image className="mt-2 mr-2"
            src={html}
            width={40}
            height={40}
            alt="/"
          />
          <Image className="mt-2 mr-2"
            src={css}
            width={40}
            height={40}
            alt="/"
          />
          <Image className="mt-2 mr-2"
            src={js}
            width={40}
            height={40}
            alt="/"
          />
          <Image className="mt-2 mr-2"
            src={bs}
            width={40}
            height={40}
            alt="/"
          />
          <Image className="mt-2 mr-2"
            src={tw}
            width={40}
            height={40}
            alt="/"
          /> 
          <Image className="mt-2 mr-2"
            src={react}
            width={40}
            height={40}
            alt="/"
          />
          <Image className="mt-2 mr-2"
            src={mysql}
            width={40}
            height={40}
            alt="/"
          />
          <Image className="mt-2 mr-2"
            src={java}
            width={40}
            height={40}
            alt="/"
          />
         <Image className="mt-2 mr-2"
            src={three}
            width={40}
            height={40}
            alt="/"
          />
        <Image className="mt-2 mr-2"
            src={gh}
            width={40}
            height={40}
            alt="/"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
