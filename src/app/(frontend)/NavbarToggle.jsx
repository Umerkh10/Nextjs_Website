"use client"
import React, { useState } from 'react'
import gsap from 'gsap';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowDown, MenuIcon } from 'lucide-react';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';

const NavbarToggle = ({ isMenuopen, setisMenuopen }) => {
  useEffect(() => {
    if (isMenuopen) {
      gsap.to('#nav', { y: 0, duration: 0.5, ease: 'power3.inOut' });
      gsap.to('#nav-right', { y: 0, duration: 0.5, ease: 'power3.inOut', delay: 0.4 });
    } else {
      gsap.to('#nav', { y: '-100%', duration: 0.5, ease: 'power3.inOut' });
      gsap.to('#nav-right', { y: '-100%', duration: 0.5, ease: 'power3.inOut', delay: 0.4 });
    }
  }, [isMenuopen]);

  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setsearchInput] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const serviceDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={isMenuopen ? "" : "hidden"}>
      <div id="nav" className="fixed h-full left-0 top-0 w-full sm:h-screen z-[999] bg-black md:w-[60%]  flex flex-col justify-center items-center">
        <div className="flex flex-col items-center  w-full md:overflow-hidden overflow-scroll h-full p-8">
          <div className="flex items-center justify-between mb-[1rem] sm:mb-8  gap-4 w-full">
            <Link href="/">
              <Image loading='eager' src="/imgs/webmoon-white-logo.png" width={200} height={100} className="h-auto max-w-full mb-8" alt="webnike Logo"></Image>
            </Link>
            <button onClick={() => setisMenuopen(false)} className=' block md:hidden -mt-14 border rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[100px] p-1 bg-gray-600 hover:bg-purple-600 transition duration-500 ease-in'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
          <nav className="text-white">
            <ul className="space-y-4 text-center">
              <li><Link href="/" className="md:text-3xl text-2xl hover:text-purple-500 transition duration-300">Home</Link></li>
              <li><Link href="/About" className="md:text-3xl text-2xl hover:text-purple-500 transition duration-300">About</Link></li>

              <li><Link href="/Contact" className="md:text-3xl text-2xl hover:text-purple-500 transition duration-300">Contact Us</Link></li>


              <div className="relative group">
                <button
                  className="md:text-3xl flex items-center text-2xl hover:text-purple-500 transition duration-300"
                  onClick={serviceDropdown}>
                  <Link className='pr-3' href="/Services"> Services</Link>    <MenuIcon/>
                </button>
                {isDropdownVisible && (
                  <ul className="absolute top-full left-0 mt-2 bg-slate-900 shadow-lg rounded-lg w-48 opacity-100 visible transition-all duration-200 ease-in-out transform translate-y-0">
                    <li>
                      <Link href="/SeoService" className="block px-4 py-2 text-gray-200 hover:bg-purple-500 transition ease-in duration-200">
                        Seo Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/GraphicDesign" className="block px-4 py-2 text-gray-200 hover:bg-purple-500 transition ease-in duration-200">
                        Graphic Design
                      </Link>
                    </li>
                    <li>
                      <Link href="/WebDevelopment" className="block px-4 py-2 text-gray-200 hover:bg-purple-500 transition ease-in duration-200">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/AppDevelopment" className="block px-4 py-2 text-gray-200 hover:bg-purple-500 transition ease-in duration-200">
                        App Development
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

            </ul>
          </nav>

          <div className="md:hidden mt-20 w-full px-4">
            <Command >
              <CommandInput  placeholder=" Search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandItem><Link href="/Services">Services </Link></CommandItem>
                <CommandItem><Link href="/SeoService">Seo Service </Link></CommandItem>
                <CommandItem><Link href="/GraphicDesign">Graphic Design </Link></CommandItem>
                <CommandItem><Link href="/WebDevelopment">Web Development</Link></CommandItem>
                <CommandItem><Link href="/AppDevelopment">App Development</Link></CommandItem>
                <CommandSeparator />
                <CommandItem><Link href="/About"> About Us</Link> </CommandItem>
                <CommandItem><Link href="/Contact"> Contact Us</Link></CommandItem>
                <CommandItem><Link href="/Privacy"> Privacy Policy</Link></CommandItem>
                <CommandItem><Link href="/Terms"> Terms & Condition </Link></CommandItem>
                <CommandItem><Link href="/ReturnRefund"> Return Refund Policy </Link></CommandItem>
              </CommandList>
            </Command>
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

            <div className='mr-4 -mt-20 '>
              <Command >
                <CommandInput placeholder=" Search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>

                  <CommandItem><Link href="/Services">Services </Link></CommandItem>
                  <CommandItem><Link href="/SeoService">Seo Service </Link></CommandItem>
                  <CommandItem><Link href="/GraphicDesign">Graphic Design </Link></CommandItem>
                  <CommandItem><Link href="/WebDevelopment">Web Development</Link></CommandItem>
                  <CommandItem><Link href="/AppDevelopment">App Development</Link></CommandItem>
                  <CommandSeparator />
                  <CommandItem><Link href="/About"> About Us</Link> </CommandItem>
                  <CommandItem><Link href="/Contact"> Contact Us</Link></CommandItem>
                  <CommandItem><Link href="/Privacy"> Privacy Policy</Link></CommandItem>
                  <CommandItem><Link href="/Terms"> Terms & Condition </Link></CommandItem>
                  <CommandItem><Link href="/ReturnRefund"> Return Refund Policy </Link></CommandItem>
                </CommandList>
              </Command>
            </div>


 

          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarToggle