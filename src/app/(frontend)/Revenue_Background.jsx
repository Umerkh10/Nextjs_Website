"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const Revenue_Background = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 200, 
        });
      }, []);

      const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1, 
      });

      const [isVisible, setIsVisible] = useState(false);
      const containerRef = useRef(null);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
              }
            });
          },
          { threshold: 0.1 }
        );
    
        if (containerRef.current) {
          observer.observe(containerRef.current);
        }
    
        return () => {
          if (observer && observer.disconnect) {
            observer.disconnect();
          }
        };
      }, []);
    return (
        <>
    <div
      className='flex relative justify-center mt-16 pt-3 pb-10 w-full border rounded-tr-[150px] z-[10] rounded-tl-[150px] bl-[0px] br-[0px] bg-[#9028cc] h-[screen] md:h-[30vh]'
      style={{ zIndex: 1 }}
      data-aos="fade-up"
      ref={ref}
    >
      <div className='grid grid-cols-1 md:grid-cols-4 gap-[5.75rem] ml-10 mr-10 pl-4 pr-4 pt-4'>
        <div className='grid-cols-1 col-span-1'>
          <h4 className='text-[90px] md:text-[60px] lg:text-[100px] font-black leading-none opacity-[26%]'>
            {inView ? <CountUp end={12} duration={2.75} /> : '0'}K
          </h4>
          <p className='text-[20px] inline-block font-semibold leading-[1.15] text-white truncate lg:-translate-y-11'>PROJECTS DONE</p>
        </div>
        <div className='grid-cols-2 col-span-1'>
          <h4 className='text-[90px] md:text-[60px] lg:text-[100px] font-black leading-none opacity-[26%]'>
            {inView ? <CountUp end={35} duration={2.75} /> : '0'}+
          </h4>
          <p className='text-[20px] inline-block font-semibold leading-[1.15] text-white uppercase truncate lg:-translate-y-11'>Team Members</p>
        </div>
        <div className='grid-cols-3 col-span-1'>
          <h4 className='text-[90px] md:text-[60px] lg:text-[100px] font-black leading-none opacity-[26%]'>
            {inView ? <CountUp end={10} duration={2.75} /> : '0'}K
          </h4>
          <p className='text-[20px] inline-block font-semibold leading-[1.15] text-white uppercase truncate lg:-translate-y-11'>happy clients</p>
        </div>
        <div className='grid-cols-4 col-span-1'>
          <h4 className='text-[90px] md:text-[60px] lg:text-[100px] inline-block font-black leading-none opacity-[26%]'>
            {inView ? <CountUp end={18} duration={2.75} /> : '0'}+
          </h4>
          <p className='text-[20px] font-semibold leading-[1.15] text-white uppercase lg:-translate-y-11'>awards</p>
        </div>
      </div>
    </div>

<div className=" h-full md:h-full lg:h-[140vh] z-[12]  xl:h-[120vh] bg-[#0d0237]"
       ref={containerRef}
       style={{
         backgroundImage: isVisible ? "url('/imgs/revenue-bg.webp')" : 'none',
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         zIndex: 2,
         minHeight: '100vh' // ensure there's space for the observer to trigger
       }}
       data-aos="zoom-in">
  <div className='flex pt-28 h-full w-full pl-6 pr-6'>
    <div className='grid lg:grid-cols-3 grid-cols-1 z-[12] gap-12 lg:gap-0 w-full'>
      <div className='grid-cols-1 order-1 lg:order-1'>
        <div className='flex justify-start'>
          <div className='rounded-full pl-7 pr-7 pt-1 pb-1 bg-slate-800 text-purple-500 font-semibold text-lg'>Why Choose Us</div>
        </div>
        <h2 className='pt-6 leading-[3.25rem] text-[50px] text-white font-extrabold pb-6'>Boost Your Business Revenue </h2>
        <p className='text-[17px] text-white'>We are a team of over 100 seasoned software engineers with a decade of experience in delivering top-notch products. Believe it because you've seen it</p>
        <div className='flex items-center mt-4 group'>
          <button className='mt-8 text-sky-600 bg-transparent text-[18px] font-semibold leading-none capitalize border border-sky-500 rounded-full px-8 py-5 group-hover:translate-x-10 transition duration-300 hover:bg-sky-600 ease-in delay-100 hover:text-white group'>
            <span><Link href="/Services"> View  more </Link> </span>
          </button>
          <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-sky-600 mt-8 ml-2 group-hover:-translate-x-52 transition duration-200 delay-150 ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right">
              <path d="M13 5H19V11" />
              <path d="M19 5L5 19" />
            </svg>
          </div>
        </div>
      </div>
      <div className='grid-cols-1 col-span-1 order-3 lg:order-2' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
  <div className='overflow-hidden -z-50 xl:-translate-x-32 xl:translate-y-4 lg:h-[109vh] xl:h-[100vh] md:w-[50vw]'>
    <Image className='object-cover w-full h-full' src={"/imgs/revenue-center.webp"} width={800} height={600} alt='revenue_girl_bg' /></div>
</div>

      <div className='grid-cols-1 col-span-1 order-2 lg:order-3 text-white z-10'>
        <div className='flex justify-start items-center mb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="teal" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-badge-check">
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <div className='text-gray-100 font-semibold text-[26px] pl-2'>Premium Standards</div>
        </div>
        <div className='text-white text-[18px] mb-6'>A high standard represents the pinnacle of quality and excellence</div>
        <div className='flex justify-start items-center mb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="teal" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-badge-check">
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <div className='text-gray-100 font-semibold text-[26px] pl-2'>Prioritizing People</div>
        </div>
        <div className='text-white text-[18px] mb-6'>fostering meaningful connections, and creating environments where everyone can thrive.</div>
        <div className='flex justify-start items-center mb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="teal" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-badge-check">
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <div className='text-gray-100 font-semibold text-[26px] pl-2'>Innovative Approaches</div>
        </div>
        <div className='text-white text-[18px] mb-6'>Different thinking fuels innovation and opens doors to new possibilities</div>
        <div className='flex justify-start items-center mb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="teal" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-badge-check">
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <div className='text-gray-100 font-semibold text-[26px] pl-2'>The Expertise Team</div>
        </div>
        <div className='text-white text-[18px] mb-6'>Group dedicated to delivering exceptional results through their combined knowledge, experience, and collaboration.</div>
      </div>
    </div>
  </div>
</div>

   

   </>
    )
}

export default Revenue_Background