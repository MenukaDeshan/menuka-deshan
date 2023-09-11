"use client";
import AboutMe from '@/components/AboutMe'
import { Hero } from '@/components/Hero'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react'
import Cursor from '@/components/Cursor';

export default function Home(router) {
  return (
    <main className={"flex flex-col items-center justify-between min-h-screen max-w-[1400px] h-full mx-auto ${styles.cursor}"}>
      <Cursor/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </main>
  )
}
