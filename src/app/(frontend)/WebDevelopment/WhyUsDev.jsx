"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';

const WhyUsDev = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1, 
      });

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
          });
      }, [inView]);

      
      console.log(inView);
  return (
    <div className='bg-gray-200 dark:bg-transparent p-4'  ref={ref}>
        <div className='grid lg:grid-cols-2 grid-cols-1 'data-aos="fade-up" >
            <div className='mt-10 p-5'>
                <div>
                    <div className='text-purple-700  text-lg font-semibold italic'>WHY US</div>
                    <span className='text-slate-800 dark:text-gray-200 text-4xl font-bold'>What Are We Guided By</span>
                    <div className='text-slate-800 dark:text-gray-200 text-3xl font-extrabold'>When Working</div>
                </div>
            </div>
            <div className='lg:mt-20 p-5 '>
                <div className='text-purple-700 text-base font-semibold italic'> We do not implement a single CMS. We work on many solutions and advise which ones will work best depending on the project and expectations.</div>
            </div>
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 p-5' data-aos="fade-up">

            <div className='group p-4 border-black rounded-full bg-transparent hover:bg-sky-200'  >
                <div className='flex items-center justify-center'>
                <div className='border rounded-full w-28 h-28 bg-sky-200 group-hover:bg-purple-500 transition ease-in duration-200 delay-100 '>
                    <div className='flex justify-center'>
                        <Image className='items-center mt-5  group-hover:rotate-45 transition ease-in duration-200 delay-100' src="/imgs/safety.png" width={70} height={60} alt='safety'></Image>
                    </div>
                </div>
                </div>
                <div className='flex justify-center items-center italic mt-4 text-lg font-bold uppercase group-hover:animate-bounce group-hover:text-black transition ease-in duration-200 delay-100 '>Safety</div>
            </div>

            <div className=' group p-4 border-black rounded-full bg-transparent hover:bg-sky-200' >
                <div className='flex items-center justify-center'>
                <div className='border rounded-full w-28 h-28 bg-sky-200 group-hover:bg-purple-500 transition ease-in duration-200 delay-100 '>
                    <div className='flex justify-center'>
                        <Image className='items-center mt-5 group-hover:rotate-45 transition ease-in duration-200 delay-100' src="/imgs/scalability.png" width={70} height={60} alt='safety'></Image>
                    </div>
                </div>
                </div>
                <div className='flex justify-center items-center italic mt-4 text-lg font-bold uppercase group-hover:animate-bounce group-hover:text-black transition ease-in duration-200 delay-200'>Scalablity</div>
            </div>

             <div className='group p-4 border-black rounded-full bg-transparent hover:bg-sky-200' >
                <div className='flex items-center justify-center'>
                <div className='border rounded-full w-28 h-28 bg-sky-200 group-hover:bg-purple-500 transition ease-in duration-200 delay-100 '>
                    <div className='flex justify-center'>
                        <Image className='items-center mt-5 group-hover:rotate-45 transition ease-in duration-200 delay-100' src="/imgs/exam.png" width={70} height={60} alt='safety'></Image>
                    </div>
                </div>
                </div>
                <div className='flex justify-center items-center italic mt-4 text-lg font-bold uppercase group-hover:animate-bounce group-hover:text-black transition ease-in duration-200 delay-200'>Tests</div>
            </div>

             <div className='group p-4 border-black rounded-full bg-transparent hover:bg-sky-200' >
                <div className='flex items-center justify-center'>
                <div className='border rounded-full w-28 h-28 bg-sky-200 group-hover:bg-purple-500 transition ease-in duration-200 delay-100 '>
                    <div className='flex justify-center'>
                        <Image className='items-center mt-5 group-hover:rotate-45 transition ease-in duration-200 delay-100' src="/imgs/settings.png" width={60} height={60} alt='safety'></Image>
                    </div>
                </div>
                </div>
                <div className='flex justify-center items-center italic mt-4 text-[17px] font-bold uppercase group-hover:animate-bounce group-hover:text-black transition ease-in duration-200 delay-200'>Selection of Tools</div>
            </div>

              <div className=' group p-4 border-black rounded-full bg-transparent hover:bg-sky-200' >
                <div className='flex items-center justify-center'>
                <div className='border rounded-full w-28 h-28 bg-sky-200 group-hover:bg-purple-500 transition ease-in duration-200 delay-100 '>
                    <div className='flex justify-center'>
                        <Image className='items-center mt-5 group-hover:rotate-45 transition ease-in duration-200 delay-100' src="/imgs/seo.png" width={60} height={60} alt='safety'></Image>
                    </div>
                </div>
                </div>
                <div className='flex justify-center items-center italic mt-4 text-lg font-bold uppercase group-hover:animate-bounce group-hover:text-black transition ease-in duration-200 delay-200'>SEO</div>
            </div>

        </div>
    </div>
  )
}

export default WhyUsDev