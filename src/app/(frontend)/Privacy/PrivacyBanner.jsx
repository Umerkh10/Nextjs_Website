"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronsRight } from 'lucide-react';

const PrivacyBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 200, 
    });
  }, []);
  return (
    <div className='bg-slate-700 h-screen  lg:h-[100vh]' data-aos='fade-up'>
    <div style={{backgroundImage:"url('/imgs/terms-banner.webp')", backgroundSize:'cover', backgroundPosition:'center',backgroundRepeat:'no-repeat' }}
    className=' top-0 left-0 h-full  z-[-1] bg-blend-overlay bg-zinc-800 pt-[280px] pb-[180px] '>
        <div className='text-gray-200 flex items-center justify-start ml-10 text-2xl sm:text-6xl font-extrabold mb-8'>Privacy Policy</div>
        <div className='border border-dashed border-purple-800 rounded-full w-[90%] md:w-1/3 lg:w-1/4 xl:w-1/4 flex items-center justify-start ml-5 sm:ml-10 pt-4 pb-4 pl-4 pr-4 mt-3'> 
        <div className='text-gray-200 text-lg md:text-[22px] font-semibold'>Home </div>
       <ChevronsRight className='stroke-violet-800 ml-2 mr-2'/>
        <div className='text-purple-600 text-opacity-75 text-lg md:text-[22px] font-semibold '>Privacy Policy </div>
        
        </div>
    </div>
</div>
  )
}

export default PrivacyBanner