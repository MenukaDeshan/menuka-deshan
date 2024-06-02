"use client";
import AboutMe from '@/components/AboutMe'
import { Hero } from '@/components/Hero'
import Projects from '@/components/Projects'
import Timelines from '@/components/Timeline'
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react'
import Cursor from '@/components/Cursor';
import { Timeline } from 'gsap/gsap-core';

export default function Home(router) {
  return (
    <main className={"flex flex-col items-center justify-between min-h-screen max-w-screen h-full mx-auto ${styles.cursor} bg-black text-white"}>
      <Cursor/>
      <Hero/>
      <AboutMe/>
      <Timelines/>
      <Projects/>
      <Footer/>
    </main>
  )
}
