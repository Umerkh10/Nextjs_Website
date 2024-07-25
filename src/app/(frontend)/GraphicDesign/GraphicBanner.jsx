"use client"
import { ArrowRight, Phone } from 'lucide-react'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const GraphicBanner = () => {
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
        <div data-aos="flip-down" style={{ backgroundImage: "url('/imgs/bg-graphic-design.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }} className='md:h-[120vh] h-[140vh] lg:h-[110vh] lg:pt-0 md:pt-28 md:pl-16 md:pr-16 p-3 '>
        <div className='lg:pt-52 md:pt-14 pt-36 text-gray-400 text-center text-2xl md:text-3xl font-bold italic' data-aos="flip-up">Convert Your Vision into Achievements</div>
        <div className='mt-4 text-zinc-300 text-center text-3xl md:text-5xl font-extrabold ' data-aos="flip-down">Outstanding Graphic Design Solutions for a Memorable Impact</div>
        <div className='text-center pt-4 lg:pl-40 lg:pr-40 text-gray-300 font-medium italic'>At Webnike, we transform your concepts into visually striking designs that reflect your brand’s distinct personality. Our talented designers excel in crafting logos, vector illustrations, explainer videos, and dynamic motion graphics that captivate and engage your audience. Collaborate with us to enhance your visual identity and make a memorable impact.</div>
        <div className='flex md:flex-row flex-col items-center md:justify-center gap-5 mt-6 ' >
          <button onClick={handleClick} className='border-[2px] group border-white rounded-xl md:w-[30vw] w-[55vw] lg:w-[18vw] h-[10vh] flex justify-center items-center font-medium text-white hover:bg-sky-500 transition ease-in duration-200 delay-100 overflow-hidden' >
            Explore Solutions <ArrowRight className='ml-1 group-hover:translate-x-16 transition ease-out duration-200 delay-100 ' />
          </button>
          <div className='flex items-center justify-center'>
            <div className='border rounded-full w-16 h-16 flex items-center justify-center group hover:bg-sky-600 transition ease-in duration-200 delay-100 '><Phone className='stroke-white fill-white' /></div>
            <div className='font-medium text-white flex items-center text-center pl-2 '>Call Us On <br /> 021-34155132</div>
          </div>
        </div>
      </div>
    )
}

export default GraphicBanner