"use client"
import {  ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SeoBanner = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        offset: 200,
    });
}, []);
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1' data-aos="fade-up" >
        <div className='bg-slate-300 dark:bg-slate-800 p-5'>
            <div className='xl:pt-48 lg:pt-40 pt-20 flex flex-col'> <span className='md:text-6xl text-5xl dark:text-gray-300 text-blue-950 font-bold'>Best SEO <br /> Optimization Agency</span>
            <div className='mt-5 pl-2 text-lg font-medium '>We build strategic insights based on target audience interactions and interactions along with big data. </div>
            
            <div className='lg:flex  '>
            <div className='mt-5 border rounded-2xl w-[60vw] md:w-[30vw] lg:w-[22vw] h-[10vh] flex items-center justify-center relative overflow-hidden bg-blue-600 font-medium text-white group hover:bg-blue-900 transition ease-in duration-200 delay-200 '> 
                Let's Talk About SEO
                <ArrowRight className='ml-2 group-hover:translate-x-20 ease-in-out duration-200 delay-200'/>
            </div>
                <a href="#" className='lg:ml-5 mt-5 flex justify-center items-center no-underline text-lg rounded-2xl w-[40vw] md:w-[20vw] lg:w-[12vw] h-[10vh]  border-[1px] font-medium text-orange-500 border-orange-500 relative overflow-hidden transition duration-500 group hover:bg-orange-500 hover:text-white  '>
                    <span className=' truncate pr-2'>Let's Talk </span>
                    <span className=' group-hover:-translate-y-12 group-hover:translate-x-12 transition duration-200 ease-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle "><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    </span>
                  </a>
                  </div>
            </div>
        </div>
        <div className='bg-slate-300 dark:bg-slate-800 '>
            <div className='flex items-center justify-center xl:pt-48 lg:pt-40 pt-20 '><Image src={"/imgs/Seo_Service_banner.png"} width={800} height={600} alt='Seo_banner' ></Image></div>
        </div>
    </div>
  )
}

export default SeoBanner