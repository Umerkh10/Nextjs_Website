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
  return (
    <div>
        <div className='grid lg:grid-cols-2 grid-cols-1 bg-slate-200 dark:bg-transparent'>
            <div className='p-5 ' data-aos="fade-up">

                <div className='group transition ease-in duration-500 delay-500'>
                <div className='lg:mt-52 mt-32 text-lg uppercase font-bold  group-hover:italic group-hover:animate-bounce pl-3'>Offer</div>
                <div className='uppercase pt-1 font-extrabold text-2xl md:text-[44px] text-purple-700 dark:text-gray-200  group-hover:italic group-hover:animate-bounce  '>Corporate websites and </div>
                <div className='uppercase mt-0 md:mt-2  font-extrabold text-xl md:text-[28px] lg:text-[35px] group-hover:italic group-hover:animate-bounce  text-blue-950 dark:text-gray-200'>Services</div>

                <div className='md:pt-10 pt-7 text-lg font-medium group-hover:italic group-hover:animate-bounce '>We design corporate websites and services based on the best standards. We always build responsive solutions that adapt to the user's device.</div>
                </div>

                <div className='lg:flex  '>
            <div className='mt-5 border rounded-2xl w-[65vw] md:w-[40vw] lg:w-[22vw] h-[10vh] flex items-center justify-center relative overflow-hidden bg-purple-500 font-medium text-white group hover:bg-purple-800 transition ease-in duration-200 delay-200 '> 
                Let's Talk About Devlopment
                <ArrowRight className='ml-2 group-hover:translate-x-20 ease-in-out duration-200 delay-200'/>
            </div>
                <a href="#" className='lg:ml-5 mt-5 flex justify-center items-center no-underline text-lg rounded-2xl w-[40vw] md:w-[20vw] lg:w-[12vw] h-[10vh]  border-[1px] group font-medium text-orange-500 border-orange-500 relative overflow-hidden transition duration-500  hover:bg-orange-500 hover:text-white  '>
                    <span className=' truncate pr-2'>Let's Talk </span>
                    <span className=' group-hover:-translate-y-12 group-hover:translate-x-12 transition duration-200 ease-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle "><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    </span>
                  </a>
                  </div>
            </div>
            <div className='group p-5'>
                <div data-aos="fade-up" className='group-hover:animate-bounce transition ease-out duration-700 delay-700'><Image className='lg:mt-36 mt-10' src="/imgs/WebBanner.webp" width={600} height={600} alt='webbnner'></Image></div>
            </div>
        </div>
    </div>
  )
}

export default WebBanner