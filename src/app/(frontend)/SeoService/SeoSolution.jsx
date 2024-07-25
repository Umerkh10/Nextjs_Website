"use client"
import { ArrowRight, CircleDot } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SeoSolution = () => {
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
    <div className='lg:h-[80vh] xl:h-[70vh] bg-purple-900 mt-[550px] xl:mt-0 lg:mt-10' data-aos="fade-down"> 
    <div  style={{backgroundImage:"url('/imgs/seo_solution_bg.webp')",backgroundSize:'cover', backgroundPosition:'center',backgroundBlendMode:'overlay'}}></div>

    <div className='grid lg:grid-cols-2 grid-cols-1 p-10 gap-5 '>
        <div className=' '>
            <div className='pt-10 text-3xl md:text-4xl text-white font-bold'>Elevate Your Business with Our Expert SEO Services!</div>
            <div className='pt-7 text-white text-lg md:text-xl font-medium'>Celebrating 25 Years of Expert SEO Services</div>

            <div className='flex items-center'>
            <CircleDot strokeWidth={3} className='mt-4 stroke-yellow-500'/>
            <div className='pl-5 mt-5 text-white text-lg '>Get Every Update</div>
            </div>

            <button onClick={handleClick} className='group border  md:w-[35vw] h-[15vh] lg:w-[25vw] lg:h-[10vh] flex justify-center items-center mt-5 rounded-xl hover:bg-yellow-500
            transition ease-in duration-200 delay-100 overflow-hidden' >
                <div className=' text-white font-semibold group-hover:text-blue-900'>Let's Talk SEO Expertise</div>
                <ArrowRight className='stroke-white ml-2 group-hover:translate-x-40 transition ease-out duration-200 delay-100 '/>
            </button>

        </div>
        <div className=' '>
            <div data-aos="flip-down">
                <Image src="/imgs/seo-expertise-banner.png" width={400} height={400} alt='seo_solution'></Image>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SeoSolution