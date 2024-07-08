"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Seo_WorkProcess = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <div className='mt-14' >
            <div className='text-center text-5xl font-semibold text-blue-800 dark:text-gray-300' data-aos="fade-down">Work Process</div>
            <div className='text-center mt-4 text-lg font-medium text-blue-800  dark:text-gray-300' data-aos="fade-down">Best Seo Optimization Agency</div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-7 gap-10 mb-5 '>
                <div className='group' data-aos="fade-down">
                    <div className=' border-[5px] rounded rounded-tl-full  rounded-bl-full rounded-br-full h-[45vh] md:h-[45vh] lg:h-[40vh] group-hover:border-blue-800 group-hover:scale-105 group-hover:shadow-2xl dark:group-hover:bg-gray-200 ease-in transition duration-200 delay-150 '>
                        <div className='flex items-center justify-center  max-w-20 h-20 rounded-full bg-blue-600'>
                            <span className='text-2xl text-white font-semibold'>01</span>
                        </div>
                        <div className='flex justify-center group-hover:rotate-doors mt-[-30px]'>
                            <Image src={"/imgs/social-justice.png"} width={70} height={60} alt='process'></Image>
                        </div>
                        <div className='flex justify-center items-center text-blue-500  pt-4 text-xl font-semibold'>
                            Welcome To Webnike
                        </div>
                    </div>
                </div>

                <div className='group lg:mt-10 ' data-aos="fade-up">
                    <div className=' border-[5px] rounded rounded-tl-full rounded-bl-full rounded-br-full group-hover:border-blue-800 h-[45vh] md:h-[45vh] lg:h-[40vh] group-hover:scale-105 group-hover:shadow-2xl dark:group-hover:bg-gray-200 ease-in transition duration-200 delay-150 '>
                        <div className='flex items-center justify-center  max-w-20 h-20 rounded-full bg-blue-600'>
                            <span className='text-2xl text-white font-semibold'>02</span>
                        </div>
                        <div className='flex justify-center group-hover:rotate-doors mt-[-30px]'>
                            <Image src={"/imgs/self-service.png"} width={70} height={60} alt='process'></Image>
                        </div>
                        <div className='flex justify-center items-center text-blue-500 pt-4 text-xl font-semibold'>
                            Choose Your Services
                        </div>
                    </div>
                </div>

                <div className='group' data-aos="fade-up">
                    <div className=' border-[5px] rounded rounded-tl-full rounded-bl-full rounded-br-full group-hover:border-blue-800 h-[45vh] md:h-[45vh] lg:h-[40vh] group-hover:scale-105 group-hover:shadow-2xl dark:group-hover:bg-gray-200 ease-in transition duration-200 delay-150 '>
                        <div className='flex items-center justify-center  max-w-20 h-20 rounded-full bg-blue-600'>
                            <span className='text-2xl text-white font-semibold'>03</span>
                        </div>
                        <div className='flex justify-center group-hover:rotate-doors mt-[-30px]'>
                            <Image src={"/imgs/study.png"} width={70} height={60} alt='process'></Image>
                        </div>
                        <div className='flex justify-center items-center text-blue-500 pt-4 text-xl font-semibold'>
                        Your Project Analysis
                        </div>
                    </div>
                </div>

                    <div className='group lg:mt-10' data-aos="fade-down">
                    <div className=' border-[5px] rounded rounded-tl-full rounded-bl-full rounded-br-full h-[45vh] md:h-[45vh] lg:h-[40vh] group-hover:border-blue-800 group-hover:scale-105 group-hover:shadow-2xl dark:group-hover:bg-gray-200 ease-in transition duration-200 delay-150 '>
                        <div className='flex items-center justify-center  max-w-20 h-20 rounded-full bg-blue-600'>
                            <span className='text-2xl text-white font-semibold'>04</span>
                        </div>
                        <div className='flex justify-center group-hover:rotate-doors mt-[-30px]'>
                            <Image src={"/imgs/focus.png"} width={70} height={60} alt='process'></Image>
                        </div>
                        <div className='flex justify-center items-center text-blue-500 pt-4 text-xl font-semibold'>
                        Get Final Results
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Seo_WorkProcess