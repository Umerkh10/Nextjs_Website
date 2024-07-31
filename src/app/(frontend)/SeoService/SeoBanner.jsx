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

const handleClick = () => {
  if (typeof window !== 'undefined' && typeof window.openChat !== 'undefined') {
    window.openChat();
  } else {
    console.error('openChat function is not available');
  }
};
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1' data-aos="fade-up" >
        <div className='bg-purple-400  p-5'>
            <div className='xl:pt-48 lg:pt-44 pt-24 flex flex-col'> <span className='lg:text-6xl md:text-5xl text-4xl text-gray-100  font-bold italic'>Leading Agency For <br /> SEO Optimization </span>
            <div className='mt-5 pl-2 text-lg text-gray-100 font-medium italic'>Unleash the full potential of your business with our top-notch SEO services, boosting organic growth and enhancing online visibility. </div>
            
            <div className='lg:flex  '>
            <button onClick={handleClick} className='mt-5 border rounded-2xl w-[60vw] md:w-[30vw] lg:w-[22vw] h-[10vh] flex items-center justify-center relative overflow-hidden bg-sky-600 font-medium text-white group hover:bg-purple-900 transition ease-in duration-200 delay-200 '> 
                Let's Talk About SEO
                <ArrowRight className='ml-2 group-hover:translate-x-20 ease-in-out duration-200 delay-200'/>
            </button>
    
                  </div>
            </div>
        </div>
        <div className='bg-purple-400  '>
            <div className='flex items-center justify-center xl:pt-24 lg:pt-28 pt-20 '><Image priority={true} src={"/imgs/seo-banner.png"} width={600} height={600} alt='Seo_banner' ></Image></div>
        </div>
    </div>
  )
}

export default SeoBanner