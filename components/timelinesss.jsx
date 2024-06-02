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
  const [activeTab, setActiveTab] = useState('education');
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
  <section id="timeline" className="justify-center w-full h-auto px-20 pb-10 mb-24 ">
      <div className="max-w-2xl p-8 mx-auto font-sans text-white bg-gray-900 rounded-lg">
      <h2 className="mb-6 text-2xl text-center">
        My <span className="text-blue-500">personal journey</span>
      </h2>
      <div className="flex justify-center mb-6">
        <button
          className={`mx-2 py-2 px-4 ${activeTab === 'education' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          className={`mx-2 py-2 px-4 ${activeTab === 'work' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
          onClick={() => setActiveTab('work')}
        >
          Work
        </button>
      </div>

      {activeTab === 'education' && (
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              {timelineData.map((item, index) => (
                  <div key={index} className="relative pl-8 mb-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500"></div>
                    {index !== timelineData.length - 1 && <div className="absolute h-full border-l-2 border-blue-500 left-2 top-5"></div>}
                    <div className={`ml-8 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
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
      )}

      {activeTab === 'work' && (
        <div className="space-y-6">
          {/* Add work experiences here */}
          <p>No work experience added yet.</p>
        </div>
      )}
    </div>
  </section>
  );
};

export default TimelineSection;
