"use client"

import React, { useEffect, useState, useRef } from 'react'
import NavbarToggle from './NavbarToggle';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ArrowDown, Menu, MessageCircle, PhoneCall, Sun } from 'lucide-react';


const Navbar = () => {
  const container = useRef(null);
  const [isMenuopen, setisMenuopen] = useState(false)
  const [open, setOpen] = useState(false)

  const { theme, setTheme } = useTheme()
  console.log("theme", theme);
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    }
    else {
      setTheme("light")
    }
    
  }


  useEffect(() => {
    if (isMenuopen) {
      gsap.to('#nav', { y: 0, duration: 0.5, ease: 'power3.inOut' });
      gsap.to('#nav-right', { y: 0, duration: 0.5, ease: 'power3.inOut', delay: 0.4 });
    } else {
      gsap.to('#nav', { y: '-100%', duration: 0.5, ease: 'power3.inOut' });
      gsap.to('#nav-right', { y: '100%', duration: 0.5, ease: 'power3.inOut', delay: 0.4 });
    }
  }, [isMenuopen]);

  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof window.openChat !== 'undefined') {
      window.openChat();
    } else {
      console.error('openChat function is not available');
    }
  };


  return (
    <>
      <NavbarToggle isMenuopen={isMenuopen} setisMenuopen={setisMenuopen} />
      <div id='overlay' className='sticky top-0 w-full left-0 right-0 transition delay-500ms z-[998]' ref={container}>
        <div className='relative'>
          <div className='absolute -mt-2.5 left-0 w-5/6 h-[110px] bg-purple-800 rounded-tl-none rounded-tr-[100px] rounded-br-[100px] rounded-bl-none z-[-2]'>
            <Link href="/" className='inline-block grow-0 shrink-0 basis-auto mr-0  ml-4'>
              <Image className='max-w-full h-auto pt-[1.5rem] pl-2' src="/imgs/webmoon-white-logo.png" alt="logo" width={150} height={100} priority={true} ></Image>
            </Link>
          </div>
          <div className=' absolute right-0 bg-slate-700 hidden sm:block md:w-3/6 lg:w-[75%] xl:w-[87%]  border-l-2 border-l-orange-600 h-20 z-[-1] rounded-tl-[100px] rounded-tr-none rounded-br-none rounded-bl-[100px]'>
            <nav className=' hidden lg:flex items-center  h-full space-x-5 px-4 xl:ml-0 text-base '>

              <Link href="/" className='text-gray-200 text-lg font-medium  hover:text-sky-600 transition duration-200 ease-in '>Home</Link>

              <Link href="/About" className='text-gray-200 text-lg font-medium  hover:text-sky-600 transition duration-200 ease-in'>About</Link>
         
              <div class="group inline-block">
                <button
                  class="outline-none focus:outline-none py-1 rounded-sm flex items-center min-w-10">
                  <span class="pr-1 text-gray-200 text-lg font-medium flex-1 hover:text-sky-600 transition duration-200 ease-in">
                    <Link href="/Services">Services</Link></span>
                  <span>
                    <ArrowDown className='fill-white stroke-white h-4 w-4 transform group-hover:-rotate-180
        transition duration-200 ease-in-out'/>
                  </span>
                </button>
                <ul
                  class="bg-slate-800 text-gray-200 text-lg font-medium mt-2 rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition  delay-300 ease-in origin-top min-w-32"
                >
                  <li class="rounded-sm px-3 py-1 hover:text-sky-500"><Link href="/SeoService">SEO Services</Link>  </li>
                  <li class="rounded-sm px-3 py-1 hover:text-sky-500"><Link href="/GraphicDesign"> Graphic Design</Link>  </li>
                  <li class="rounded-sm px-3 py-1 hover:text-sky-500"><Link href="/WebDevelopment">Website Development </Link> </li>
                  <li class="rounded-sm px-3 py-1 hover:text-sky-500"><Link href="/AppDevelopment"> App Development</Link> </li>
                  
                </ul>
              </div>

              <Link href="/Contact" className='text-gray-200 text-lg  font-medium hover:text-sky-600 transition duration-200 ease-in'>Contact Us</Link>

            </nav>
          </div>

          <div className='max-w-1920 mx-auto ml-auto mr-auto'>
            <div className='flex bg-transparent gap-8 pr-7 rounded-none justify-between z-[-1] '></div>
            <div className='absolute right-0 w-[45%] lg:w-[20%] md:w-[40%] xl:w-[50%] h-20 bg-slate-800 border-l-2 border-l-purple-700 rounded-tl-[100px] rounded-tr-none rounded-br-none rounded-bl-[100px]'>
              <div className=' flex items-center 2xl:gap-5 px-4 ml-8 pt-2'>
                <div className='hidden xl:flex items-center space-x-2'>
                
                  <button id="theme-button" onClick={handleTheme} aria-label='theme' className={`flex-grow-0 flex-shrink-0 basis-auto flex items-center justify-center leading-none w-[58px] h-[58px] ${theme === "dark" ? "bg-slate-950" : "bg-orange-500 " }  rounded-full outline-slate-800`}>
                   <Sun className='stroke-white'/>
                  </button>

                  <button onClick={handleClick} className=' flex no-underline text-lg rounded-full pt-4 pr-9 pb-4 pl-9 border-[1px] font-medium text-sky-500 border-sky-500 relative overflow-hidden transition duration-500 group hover:bg-sky-500 hover:text-white  '>
                    <span className='  truncate pr-2'>Let's Talk </span>
                    <span className=' group-hover:-translate-y-12 group-hover:translate-x-12 transition duration-200 ease-out'>
                      <MessageCircle className='fill-current'/>
                    </span>
                  </button>

                  <Link href="tel:02134155132" className='flex items-center gap-4'>
                    <span className='no-underline inline-flex justify-center items-center text-lg bg-sky-400 w-[58px] h-[58px] rounded-full  relative overflow-hidden transition duration-500 group '>
                <PhoneCall className='group-hover:animate-bounce stroke-white'/>
                    </span>
                    <span className='text-white text-sm block font-normal leading-6 group hover:text-sky-500'>Call Us Now <br /> <span className='font-semibold text-lg group-hover:text-sky-700 transition duration-200 ease-in truncate'> 021-34155132 </span> </span>
                  </Link>

                </div>

                <button id="theme-button" onClick={handleTheme} aria-label='theme' className={`xl:hidden flex-grow-0 flex-shrink-0 basis-auto flex items-center justify-center leading-none w-[58px] h-[58px] ${theme === "dark" ? "bg-slate-950" : "bg-orange-500 " }  rounded-full outline-slate-800`}>
                   <Sun className='stroke-white'/>
                  </button>

                <div className=" relative p-3  rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[100px] bg-current hover:bg-sky-500 transition ease-in duration-200 delay-300 dark:bg-white  dark:hover:bg-sky-500 sm:max-w-xl mx-auto ">
                  <nav>
                    <button className="text-gray-500 w-10 h-8 relative focus:outline-none  " onClick={() => setisMenuopen(isMenuopen ? false : true)}>
                      <span className="sr-only">Open main menu</span>
                      <div className=" block w-5  justify-center absolute left-1/2 top-1/2 transform transition ease-in delay-700 duration-700  -translate-x-[60%] -translate-y-[40%]">
                        <span aria-hidden="true" className={`items-center  group ${open ? 'opacity-0' : ''}`}>
                          <Menu className='stroke-white dark:stroke-slate-900'/>
                        </span>
                      </div>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}


export default Navbar