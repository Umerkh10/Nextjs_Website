"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Work_Process = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 200, 
        });
      }, []);
  return (
    <>
    <div className='flex justify-center mt-24 text-purple-700 font-semibold text-lg uppercase ' data-aos="fade-up">Work Process</div>
    <div className='flex justify-center text-slate-900 mt-3 font-extrabold text-4xl uppercase mb-5' data-aos="fade-up">Our Work Process</div>
    <div className='flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 pl-3 pr-3 mb-5' >
    
      <div className='group  ' data-aos="fade-up">
        <div class=" max-w-[202px] h-[202px] mx-auto mb-[22px] rounded-full overflow-hidden">
            <Image className='object-cover' src={"/imgs/image_parallax_3.webp"} width={220} height={100} alt='work_process_1' ></Image>
        </div>
        <div className='flex justify-center' > 
        <div class=" text-[56px] font-bold leading-[1.17] text-[rgba(254,117,36,0.15)] relative z-[1] mr-7 mb-[25px] group-hover:text-orange-500 transition ease-in duration-200 delay-200 ">01 
        <span className=' text-[56px] text-orange-600 font-light '>| </span>
        </div>
        </div>
        <div className='flex justify-center'>
            <span className='text-slate-900 font-semibold text-[20px] '>Listen Problems</span>
        </div>
        <div className='flex justify-center pr-5 pl-10'>
            <span className='text-slate-900 font-medium text-[14px]'>We're here to listen and solve any digital issues you face—just hit us up!</span>
        </div>
        </div>

        <div className='group  ' data-aos="fade-down">
        <div className='flex justify-center'>
            <span className='text-slate-900 font-semibold text-[20px] '> Make Some Research </span>
        </div>
        <div className='flex justify-center pb-2 pr-5 pl-10'>
            <span className='text-slate-900 font-medium text-[14px]'>We're exploring digital agencies to help our online presence stay tuned!</span>
        </div>
      
        <div className='flex justify-center' > 
        <div class=" text-[56px] font-bold leading-[1.17] text-[rgba(254,117,36,0.15)] relative z-[1] mr-7 mb-[25px] group-hover:text-orange-500 transition ease-in duration-200 delay-200 ">02 
        <span className=' text-[56px] text-orange-600 font-light '>| </span>
        </div>
        </div>
   
        <div class=" max-w-[202px] h-[202px] mx-auto mb-[22px] rounded-full overflow-hidden">
            <Image className='object-cover' src={"/imgs/work_process_2.webp"} width={220} height={100} alt='work_process_2' ></Image>
        </div>
        </div>

    
        <div className='group  'data-aos="fade-up">
        <div class=" max-w-[202px] h-[202px] mx-auto mb-[22px] rounded-full overflow-hidden">
            <Image className='object-cover' src={"/imgs/work_process_3.webp"} width={220} height={100} alt='work_process_3' ></Image>
        </div>
        <div className='flex justify-center' > 
        <div class=" text-[56px] font-bold leading-[1.17] text-[rgba(254,117,36,0.15)] relative z-[1] mr-7 mb-[25px] group-hover:text-orange-500 transition ease-in duration-200 delay-200 ">03 
        <span className=' text-[56px] text-orange-600 font-light '>| </span>
        </div>
        </div>
        <div className='flex justify-center'>
            <span className='text-slate-900 font-semibold text-[20px] '>Make Shorting</span>
        </div>
        <div className='flex justify-center pr-5 pl-10'>
            <span className='text-slate-900 font-medium text-[14px]'>Let’s streamline our tasks to boost efficiency and clarity.</span>
        </div>
        </div>

  
        <div className='group  'data-aos="fade-down">
        <div className='flex justify-center'>
            <span className='text-slate-900 font-semibold text-[20px] '> Do Final Work</span>
        </div>
        <div className='flex justify-center pb-2 pr-5 pl-10'>
            <span className='text-slate-900 font-medium text-[14px]'>Wrapping up the final touches on our project—almost there!</span>
        </div>
      
        <div className='flex justify-center' > 
        <div class=" text-[56px] font-bold leading-[1.17] text-[rgba(254,117,36,0.15)] relative z-[1] mr-7 mb-[25px] group-hover:text-orange-500 transition ease-in duration-200 delay-200 ">04 
        <span className=' text-[56px] text-orange-600 font-light '>| </span>
        </div>
        </div>
   
        <div class=" max-w-[202px] h-[202px] mx-auto mb-[22px] rounded-full overflow-hidden">
            <Image className='object-cover' src={"/imgs/work_process_4.webp"} width={220} height={100} alt='work_process_4' ></Image>
        </div>
        </div>
    </div>
    </>
  )
}

export default Work_Process