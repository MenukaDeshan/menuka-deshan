"use client";
import React, { useEffect } from 'react';
import { motion as m } from 'framer-motion';



const Navbar = () => {
  useEffect(() => {
    // Burger menus
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (burger.length && menu.length) {
      for (let i = 0; i < burger.length; i++) {
        burger[i].addEventListener('click', function () {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }

    if (close.length) {
      for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function () {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }

    if (backdrop.length) {
      for (let i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener('click', function () {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }
  }, []);

  return (
    <nav class="fixed top-0 left-0 right-0 z-10 px-20 py-4 flex justify-between items-center bg-black/70 md:bg-black/20 md:backdrop-blur-lg">
		<a class="text-3xl font-bold leading-none" href="#">
			<h1>Deshan</h1>
		</a>
		<div class="md:hidden">
			<button class="navbar-burger flex items-center text-purple-600 p-3">
				<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:mx-auto md:flex md:items-center md:w-auto md:space-x-6">
			<li><a class="text-sm text-purple-600 font-bold" href="#Hero">Home</a></li>

			<li><a class="text-sm text-gray-400 hover:text-gray-500" href="#aboutme">About Me</a></li>

			<li><a class="text-sm text-gray-400 hover:text-gray-500" href="#projects">My Projects</a></li>

			<li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
		</ul>
		
		<a class="hidden md:inline-block py-2 px-6 bg-purple-500 hover:bg-purple-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Resume</a>
    <div class="navbar-menu relative z-50 hidden">
      <div class="navbar-backdrop fixed inset-0 bg-black/20 opacity-25"></div>
      <div class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black/20 backdrop-blur-lg border-r overflow-y-auto">
        <div class="flex items-center mb-8">
          <a class="mr-auto text-3xl font-bold leading-none" href="#">
            <h1>Deshan</h1>
          </a>
          <button class="navbar-close">
            <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li class="mb-1">
              <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-900 hover:text-purple-50 rounded" href="#Hero">Home</a>
            </li>
            <li class="mb-1">
              <a class="block p-4 text-sm font-semibold text-gray-400 h hover:bg-purple-900 hover:text-purple-50 rounded" href="#aboutme">About Me</a>
            </li>
            <li class="mb-1">
              <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-900 hover:text-purple-50 rounded" href="#projects">My Projects</a>
            </li>
            <li class="mb-1">
              <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-900 hover:text-purple-50 rounded" href="#">Pricing</a>
            </li>
            <li class="mb-1">
              <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-900 hover:text-purple-50 rounded" href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <div class="pt-6">
            <a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-purple-600 hover:bg-purple-700  rounded-xl" href="#">Resume</a>
          </div>
          <p class="my-4 text-xs text-center text-gray-400">
            <span>Copyright © 2023</span>
          </p>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
