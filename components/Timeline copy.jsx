"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const timelineData = [
  
  {
    period: '2016 - 2017',
    title: 'G.C.E Ordinary Level - (O/L)',
    institution: 'Wadduwa Central Collage',
    details: 'got 3A,2B,4C at my O/Ls',
  },
  {
    period: '2018 - 2020',
    title: 'G.C.E Advanced Level - (A/L)',
    institution: 'Wadduwa Central Collage',
    details: 'Got 1C 2S / Maths S : Physics C : ICT S',
  },
  {
    period: '2021 - 2024',
    title: 'HND In IT',
    institution: 'SLIATE Dehiwala',
    details: 'Programming, Web designing, Computer network and systems, PHP, JAVA',
  },
  
];

const TimelineSection = () => {
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="timeline" className="justify-center w-full h-auto px-20 pb-10 mb-24 ">
      <h2 className="py-4 mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-2">
        TimeLine
      </h2>
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
      
      <div className="flex space-x-8">
        <div className="w-2/3">
          <div className="relative">
            {timelineData.map((item, index) => (
              <div key={index} className="relative pl-8 mb-8">
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500"></div>
                {index !== timelineData.length - 1 && <div className="absolute h-full border-l-2 border-blue-500 left-2 top-5"></div>}
                <div className="ml-8">
                  <p className="text-sm font-semibold">{item.period}</p>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm italic">{item.institution}</p>
                  <p className="text-sm">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default TimelineSection;
