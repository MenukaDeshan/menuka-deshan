"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const experiences = [
  {
    role: "G.C.E. (O/L) EXAMINATION",
    company: "@Wadduwa Central Collage",
    link: "https://www.doenets.lk/examresults",
    period: "2016",
    location: "Sri Lanka",
    description: "Got 3A / 2B / 4C : A for Maths, ICT, English"
  },
  {
    role: "G.C.E. (A/L) EXAMINATION",
    company: "@Wadduwa Central Collage",
    link: "",
    period: "2020",
    location: "Sri Lanka",
    description: "Got 1C Phycsis / 2S For ICT and Maths"
  },
  {
    role: "HND In IT",
    company: "@SLIATE Dehiwala",
    link: "https://amazon.com",
    period: "2021-2024",
    location: "Sri Lanka, Deh",
    description: "The Higher National Diploma in Information Technology (HNDIT)"
  },
  {
    role: "Full Stack Developer",
    company: "@University Of Moratuwa",
    link: "",
    period: "2023-Present",
    location: "Sri Lanka, Deh",
    description: "Web Design for Beginners/ Python Programming/ Front-End Web Development"
  }
];

const TimelineSection = () => {
  const [activeTab, setActiveTab] = useState('education');
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return  (
    <section id="timeline" className="justify-center w-full h-auto mb-5">
      <div className="max-w-full px-8 mx-auto font-sans text-white bg-black rounded-lg">
        <h2 className="py-4 mb-8 text-5xl font-bold text-center text-white md:mb-2">
          TimeLine
        </h2>
        <div className="flex justify-center mb-6">
          <button
            className={`mx-2 py-2 px-4 ${activeTab === 'education' ? 'border-b-2 border-violet-950 text-purple-950' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={`mx-2 py-2 px-4 ${activeTab === 'work' ? 'border-b-2 border-blue-500 text-purple-950' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            Work
          </button>
        </div>

        {activeTab === 'education' && (

         <div className="my-10 space-y-6">
          <div className="relative w-[40%] mx-auto lg:w-[40%] md:w-full">
            <div className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl"></div>
            <ul className="flex flex-col items-start justify-between w-full ml-8 xs:ml-2">
              {experiences.map((exp, index) => (
                <li key={index} className="relative pl-4 mb-3">
                  <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-blue-500"></div>
                  {index !== experiences.length - 1 && 
                  <div className="absolute h-full border-l-4 border-blue-500 left-2 top-6"></div>}
                  <div className="w-[90%] mx-auto flex flex-col items-start justify-between md:w-[90%]">
                    <div className="relative">
                      <h3 className="text-4xl font-bold capitalize text-sky-400 sm:text-2xl xs:text-4xl">
                        {exp.role} 
                        <a className="text-xl capitalize text-sky-900 text-primary dark:text-primaryDark" 
                        href={exp.link} target="_blank"><br/>{exp.company}</a>
                      </h3>
                      <span className="font-medium capitalize text-dark/75 dark:text-light/50 xs:text-sm">
                        {exp.period} | {exp.location}
                      </span>
                      <p className="w-full font-medium text-md md:text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        )}

        {activeTab === 'work' && (
          <div className="my-10 space-y-6">
            {/* Add work experiences here */}
            <p>No work experience added yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};


export default TimelineSection;
