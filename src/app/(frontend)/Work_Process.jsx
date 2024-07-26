"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';

const Work_Process = () => {
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
    <>
        <div className='flex justify-center mt-24 text-purple-700 font-bold md:text-lg uppercase'>Work Process</div>
      <div className='flex justify-center mt-3 font-black md:text-4xl text-3xl uppercase mb-5'>Our Work Process</div>
      <div className='flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 pl-3 pr-3 mb-5 text-foreground/80' ref={ref}>
        
        <div className='group' data-aos="fade-up">
          <div className="max-w-[202px] h-[202px] mx-auto mb-[22px] rounded-full overflow-hidden">
            <Image className='object-cover' src="/imgs/work_process_1.webp" width={220} height={100} alt='work_process_1' />
          </div>
          <div className='flex justify-center'>
            <div className="text-[56px] font-bold leading-[1.17] text-[rgba(254,117,36,0.15)] relative z-[1] mr-7 mb-[25px] group-hover:text-purple-500 transition ease-in duration-200 delay-200">
              01 <span className='text-[56px] text-sky-600 font-light'>| </span>
            </div>
          </div>
          <div className='flex justify-center'>
            <span className='font-semibold text-[20px]'>Listen Problems</span>
          </div>
          <div className='flex justify-center pr-5 pl-10'>
            <span className='font-medium text-[14px]'>We're here to assist with any digital challenges you encounter—just reach out to us!</span>
          </div>
        </div>

        <div className='group' data-aos="fade-down">
          <div className='flex justify-center'>
            <span className='font-semibold text-[20px]'>Make Some Research</span>
          </div>
          <div className='flex justify-center pb-2 pr-5 pl-10'>
            <span className='font-medium text-[14px]'>We're partnering with digital agencies to enhance our online presence—stay tuned!</span>
          </div>
          <div className='flex justify-center'>
            <div className="text-[56px] font-bold leading-[1.17] text-[rgba(254,117,36,0.15)] relative z-[1] mr-7 mb-[25px] group-hover:text-purple-500 transition ease-in duration-200 delay-200">
              02 <span className='text-[56px] text-sky-600 font-light'>| </span>
            </div>
          </div>
          <div className="max-w-[202px] h-[202px] mx-auto mb-[22px] rounded-full overflow-hidden">
            <Image className='object-cover' src="/imgs/work_process_2.webp" width={220} height={100} alt='work_process_2' />
          </div>
        </div>

        <div className='group' data-aos="fade-up">
          <div className="max-w-[202px] h-[202px] mx-auto mb-[22px] rounded-full overflow-hidden">
            <Image className='object-cover' src="/imgs/work_process_3.webp" width={220} height={100} alt='work_process_3' />
          </div>
          <div className='flex justify-center'>
            <div className="text-[56px] font-bold leading-[1.17] text-[rgba(254,117,36,0.15)] relative z-[1] mr-7 mb-[25px] group-hover:text-purple-500 transition ease-in duration-200 delay-200">
              03 <span className='text-[56px] text-sky-600 font-light'>| </span>
            </div>
          </div>
          <div className='flex justify-center'>
            <span className='font-semibold text-[20px]'>Make Shorting</span>
          </div>
          <div className='flex justify-center pr-5 pl-10'>
            <span className='font-medium text-[14px]'>Let's optimize our tasks for better efficiency and clarity.</span>
          </div>
        </div>

        <div className='group' data-aos="fade-down">
          <div className='flex justify-center'>
            <span className='font-semibold text-[20px]'>Do Final Work</span>
          </div>
          <div className='flex justify-center pb-2 pr-5 pl-10'>
            <span className='font-medium text-[14px]'>Putting the finishing touches on our project—so close to completion!</span>
          </div>
          <div className='flex justify-center'>
            <div className="text-[56px] font-bold leading-[1.17] text-[rgba(254,117,36,0.15)] relative z-[1] mr-7 mb-[25px] group-hover:text-purple-500 transition ease-in duration-200 delay-200">
              04 <span className='text-[56px] text-sky-600 font-light'>| </span>
            </div>
          </div>
          <div className="max-w-[202px] h-[202px] mx-auto mb-[22px] rounded-full overflow-hidden">
            <Image className='object-cover' src="/imgs/work_process_4.webp" width={220} height={100} alt='work_process_4' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Work_Process