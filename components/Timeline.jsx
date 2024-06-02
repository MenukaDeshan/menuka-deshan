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
    image: '/profile-psic.png', // Replace with the actual path to your image
  },
  {
    period: '2018 - 2020',
    title: 'G.C.E Advanced Level - (A/L)',
    institution: 'Wadduwa Central Collage',
    details: 'Got 1C 2S / Maths S : Physics C : ICT S',
    image: '/profile-psic.png', // Replace with the actual path to your image
  },
  {
    period: '2021 - 2024',
    title: 'Higher National Diploma in Information Technology',
    institution: 'SLIATE Dehiwala',
    details: 'Programming, Web deV, PHP, JAVA',
    image: '/profile-psic.png', // Replace with the actual path to your image
  },
];

const TimelineSection = () => {
  const [activeTab, setActiveTab] = useState('education');
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return  (
    <section id="timeline" className="justify-center w-full h-auto pb-10 mb-24">
      <div className="max-w-full p-8 mx-auto font-sans text-white bg-black rounded-lg">
        <h2 className="py-4 mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-2">
          TimeLine
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
