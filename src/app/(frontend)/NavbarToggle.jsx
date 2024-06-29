"use client"
import React from 'react'
import gsap from 'gsap';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavbarToggle = ({isMenuopen, setisMenuopen}) => {
  useEffect(() => {
    if (isMenuopen) {
      gsap.to('#nav', { y: 0, duration: 0.5, ease: 'power3.inOut' });
      gsap.to('#nav-right', { y: 0, duration: 0.5, ease: 'power3.inOut', delay: 0.4 });
    } else {
      gsap.to('#nav', { y: '-100%', duration: 0.5, ease: 'power3.inOut' });
      gsap.to('#nav-right', { y: '-100%', duration: 0.5, ease: 'power3.inOut', delay: 0.4 });
    }
  }, [isMenuopen]);

  return (
    <div className={isMenuopen ? "" : "hidden"}>
    <div id="nav" className="fixed h-full left-0 top-0 w-full sm:h-screen z-[999] bg-black md:w-[60%]  flex flex-col justify-center items-center">
      <div className="flex flex-col items-center  w-full md:h-full p-8">
        <div className="flex items-center justify-between mb-[-1rem] sm:mb-8  gap-4 w-full">
          <Link href="/">
            <Image src="/imgs/webmoon-white-logo.png" width={200} height={200} className="h-auto max-w-full mb-8" alt="webnike Logo"></Image>
          </Link>
          <button onClick={() => setisMenuopen(false)} className=' block md:hidden border rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[100px] p-1 bg-gray-600 hover:bg-purple-600 transition duration-500 ease-in'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
        </div>
        <nav className="text-white">
          <ul className="space-y-4 text-center">
            <li><Link href="/" className="text-3xl hover:text-purple-500 transition duration-300">Home</Link></li>
            <li><a href="#" className="text-3xl hover:text-purple-500 transition duration-300">About</a></li>
            <li><a href="#" className="text-3xl hover:text-purple-700 transition duration-300">Pages</a></li>
            <li><a href="#" className="text-3xl hover:text-purple-500 transition duration-300">Services</a></li>
            <li><a href="#" className="text-3xl hover:text-purple-500 transition duration-300">Blog</a></li>
            <li><Link href="/Contact" className="text-3xl hover:text-purple-500 transition duration-300">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="md:hidden mt-8 w-full px-4">
          <input type="text" placeholder="Search..." className="w-full pr-7 pl-7 h-14 mb-5 outline-none rounded-md text-gray-900" />
          <button className="w-full pt-2 pb-2 rounded-md bg-white font-medium text-gray-900 hover:text-white hover:bg-purple-800 transition duration-500 ease-in">
            <span className='flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              Search
            </span>
          </button>
        </div>
   
      </div>
    </div>

    <div id="nav-right" className='hidden md:block md:fixed md:right-0 md:top-0 md:w-[40%] h-screen z-[999] bg-neutral-900'>
      <div className=" md:pl-5 lg:pl-20 xl:h-full pt-16 pb-16 pl-48 ">
        <div className="flex flex-col items-start w-full h-full">
          <div className="flex items-center justify-center mb-40 gap-4 w-full">
            <button onClick={() => setisMenuopen(false)} className='border rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[100px] p-1 bg-gray-600 hover:bg-purple-600 transition duration-500 ease-in'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>

          <div className="mb-12">
            <input type="text" placeholder="Search..." className="pr-7 pl-7 h-14 mb-5 outline-none rounded-md text-gray-900" />
            <br />
            <button className=" pt-2 pb-2 pl-4 pr-4  rounded-md bg-white font-medium text-gray-900 hover:text-white hover:bg-purple-800 transition duration-500 ease-in">
              <span className='flex items-center pl-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                Search</span> </button>
          </div>
       
        </div>
      </div>
    </div>
  </div>
  )
}

export default NavbarToggle