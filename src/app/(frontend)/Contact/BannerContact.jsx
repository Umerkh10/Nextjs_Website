"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerContact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 200, 
    });
  }, []);
  return (
    <div className='bg-slate-700 h-screen  lg:h-[100vh] ' data-aos='fade-up'>
        <div style={{backgroundImage:"url('/imgs/contact-us-banner.webp')", backgroundSize:'cover', backgroundPosition:'center',backgroundRepeat:'no-repeat' }}
        className=' top-0 left-0 h-full  z-[-1] bg-blend-overlay bg-zinc-800 pt-[280px] pb-[180px] '>
            <div className='text-gray-200 flex items-center justify-start ml-10 text-3xl md:text-6xl font-extrabold mb-8'>Contact Us</div>
            <div className='border border-dashed border-purple-800 rounded-full w-[70%] md:w-[40%] lg:w-1/4 xl:w-1/5 flex items-center justify-start ml-10 pt-4 pb-4 pl-4 pr-4 mt-3'> 
            <div className='text-gray-200 md:text-[22px] font-semibold'>Home </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-right stroke-violet-800 ml-2 mr-2"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
            <div className='text-purple-600 text-opacity-75 md:text-[22px] font-semibold '>Contact Us</div>
            
            </div>
        </div>
    </div>
  )
}

export default BannerContact