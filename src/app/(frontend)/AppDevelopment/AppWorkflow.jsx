"use client"
import { Dot } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AppWorkflow = () => {
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
    <div className='bg-slate-200 dark:bg-transparent pr-6 pl-6 pt-16'>
        <div className='text-center font-extrabold text-3xl md:text-5xl' data-aos="fade-up">App Development WorkFlow</div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-6' ref={ref}>

            <div className='group' data-aos="flip-right">
                <div className=' border-black border-[4px] h-[57vh] sm:h-[45vh] rounded-xl  bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/planner.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>01</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>Planning</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Crafting a compelling vision for the app. </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Generating innovative concepts </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Analyze the Market</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Evaluating the Rivals</div>
                </div>
            </div>


            <div className='group' data-aos="flip-left">
                <div className=' border-black border-[4px] h-[57vh] sm:h-[45vh] rounded-xl  bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/wireframe.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>02</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>Layout Design</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Understanding the requirments </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Project wireframing by the manager</div>
                    
                </div>
            </div>

            <div className='group' data-aos="flip-right">
                <div className=' border-black border-[4px] h-[57vh] sm:h-[45vh] rounded-xl  bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/user-interface.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>03</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>Application Design
                    </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Designing UI for Prototypes </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Creating Frameworks for User Experience</div>
                </div>
            </div>

                  <div className='group' data-aos="flip-down">
                <div className=' border-black border-[4px] h-[57vh] sm:h-[45vh] rounded-xl  bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/plan.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>04</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>Development</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Front-end Development </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Backend Development </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Overall integrations </div>
                    
                </div>
            </div>

                  <div className='group' data-aos="flip-up">
                <div className=' border-black border-[4px] h-[57vh] sm:h-[45vh] rounded-xl  bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/quality-control.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>05</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>Quality Control & Evaluation</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Security Measures</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>User Experience </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Working</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Efficiency</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Compatibility Check</div>
                </div>
            </div>

                  <div className='group' data-aos="flip-left">
                <div className=' border-black border-[4px] h-[57vh] sm:h-[45vh] rounded-xl  bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/rocket.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>06</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>Commence</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Project Commencement </div>
                
                </div>
            </div>

                  <div className='group' data-aos="flip-right">
                <div className=' border-black border-[4px] h-[57vh] sm:h-[45vh] rounded-xl  bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/technical-support.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>07</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>Aftercare Assistance</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Support </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Improving</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Error Handling</div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default AppWorkflow