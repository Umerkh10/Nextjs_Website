"use client"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WebBanner = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        offset: 200,
    });
}, []);

const handleClick = () => {
  if (typeof window !== 'undefined' && typeof window.openChat !== 'undefined') {
    window.openChat();
  } else {
    console.error('openChat function is not available');
  }
};

  return (
    <div>
        <div className='grid lg:grid-cols-2 grid-cols-1 bg-slate-200 dark:bg-transparent'>
            <div className='p-5 ' data-aos="fade-up">

                <div className='group transition ease-in duration-500 delay-500'>
                <div className='lg:mt-52 mt-32 text-lg uppercase font-bold  pl-3'>Provide professional</div>
                <div className='uppercase pt-1 font-extrabold text-2xl md:text-[44px] text-purple-700 dark:text-gray-200   '>Corporate websites and </div>
                <div className='uppercase mt-0 md:mt-2  font-extrabold text-xl md:text-[28px] lg:text-[35px]   text-blue-950 dark:text-gray-200'>comprehensive services.</div>

                <div className='md:pt-6 pt-5 text-lg font-medium '>We create corporate websites and services adhering to top standards. Our responsive solutions are designed to seamlessly adapt to any user's device.</div>
                </div>

                <div className='lg:flex  '>
            <button onClick={handleClick} className='mt-5 border rounded-2xl w-[65vw] md:w-[40vw] lg:w-[22vw] h-[10vh] flex items-center justify-center relative overflow-hidden bg-purple-500 font-medium text-white group hover:bg-purple-800 transition ease-in duration-200 delay-200 '> 
                Let's Talk About Devlopment
                <ArrowRight className='ml-2 group-hover:translate-x-20 ease-in-out duration-200 delay-200'/>
            </button>
          
                  </div>
            </div>
            <div className='group p-5'>
                <div data-aos="fade-up" className=' transition ease-out duration-200 delay-200'><Image className='lg:mt-36 mt-10' loading='lazy' src="/imgs/WebBanner.webp" width={600} height={600} alt='webbnner'></Image></div>
            </div>
        </div>
    </div>
  )
}

export default WebBanner