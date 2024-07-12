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
   
    return (
        <div data-aos="flip-down" style={{ backgroundImage: "url('/imgs/bg-graphic-design.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }} className='md:h-[120vh] h-[140vh] lg:h-[110vh] lg:pt-0 md:pt-28 md:pl-16 md:pr-16 p-3 '>
        <div className='lg:pt-52 md:pt-14 pt-36 text-gray-400 text-center text-2xl md:text-3xl font-bold ' data-aos="flip-up">Transform Your Vision Into Reality</div>
        <div className='mt-4 text-zinc-300 text-center text-3xl md:text-5xl font-extrabold ' data-aos="flip-down">Exceptional Graphic Design Services for a Lasting Impression</div>
        <div className='text-center pt-4 lg:pl-40 lg:pr-40 text-gray-300 font-medium '>At Webnike, we bring your ideas to life with stunning graphic design solutions tailored to your brand’s unique identity. Our expert designers are skilled in creating logos, vector art, explainer videos, and motion graphics that captivate and engage your audience. Partner with us to elevate your visual presence and leave a lasting impression.</div>
        <div className='flex md:flex-row flex-col items-center md:justify-center gap-5 mt-6 ' >
          <div className='border-[2px] group border-white rounded-xl md:w-[30vw] w-[55vw] lg:w-[18vw] h-[10vh] flex justify-center items-center font-medium text-white hover:bg-orange-600 transition ease-in duration-200 delay-100 overflow-hidden' >
            Explore Solutions <ArrowRight className='ml-1 group-hover:translate-x-16 transition ease-out duration-200 delay-100 ' />
          </div>
          <div className='flex items-center justify-center'>
            <div className='border rounded-full w-16 h-16 flex items-center justify-center group hover:bg-orange-600 transition ease-in duration-200 delay-100 '><Phone className='stroke-white fill-white' /></div>
            <div className='font-medium text-white flex items-center text-center pl-2 '>Call Us On <br /> 021-34155132</div>
          </div>
        </div>
      </div>
    )
}

export default GraphicBanner