"use client"
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularCaseStudies = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <>
            <div className='mt-20 text-center md:text-5xl text-4xl  text-blue-900 dark:text-gray-300 font-bold'data-aos="fade-up" > Popular Case Studies</div>
            <div className='mt-4 text-center text-lg text-blue-600 dark:text-gray-300 font-semibold' data-aos="fade-down" >Best SEO Optimization Agency</div>


            <div className='lg:grid lg:grid-cols-4 flex flex-col p-8 lg:p-5 mb-10'>
                <div className='group' data-aos="flip-right">
                <div className='p-4 group-hover:scale-110 transition ease-in duration-200 delay-100 '>
                        <div className="bg-slate-800 dark:bg-slate-200 rounded-2xl ">
                            <div className="flex flex-col items-center px-3.75">
                                <div className="mb-4">
                                    <Image src={"/imgs/seo_service_slider.png"} width={370} height={150} alt='testimonial' />
                                </div>
                                <div className="text-center">
                                    <p className="font-medium text-[17px] text-gray-300 dark:text-slate-900 pt-2">Business Planning</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-[20px] text-gray-300 dark:text-blue-700  pt-2 pb-4">Email Marketing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' group' data-aos="flip-left">
                <div className='p-4 group-hover:scale-110 transition ease-in duration-200 delay-100 '>
                        <div className="bg-slate-800 dark:bg-slate-200 rounded-2xl ">
                            <div className="flex flex-col items-center px-3.75">
                                <div className="mb-4">
                                    <Image src={"/imgs/seo_service_slider-1.png"} width={370} height={150} alt='testimonial' />
                                </div>
                                <div className="text-center">
                                    <p className="font-normal text-[17px] text-gray-300 dark:text-slate-900 pt-2">Market Research</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-[20px] text-gray-300 dark:text-blue-700  pt-2 pb-4">Data Analysis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' group' data-aos="flip-right">
                <div className='p-4 group-hover:scale-110 transition ease-in duration-200 delay-100'>
                        <div className="bg-slate-800 dark:bg-slate-200 rounded-2xl ">
                            <div className="flex flex-col items-center px-3.75">
                                <div className="mb-4">
                                    <Image src={"/imgs/seo_service_slider-2.png"} width={370} height={150} alt='testimonial' />
                                </div>
                                <div className="text-center">
                                    <p className="font-normal text-[17px] text-gray-300 dark:text-slate-900 pt-2">Marketing Strategy</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-[20px] text-gray-300 dark:text-blue-700 pt-2 pb-4">Optimization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='group' data-aos="flip-left">
                <div className='p-4 group-hover:scale-110 transition ease-in duration-200 delay-100'>
                        <div className="bg-slate-800 dark:bg-slate-200 rounded-2xl ">
                            <div className="flex flex-col items-center px-3.75">
                                <div className="mb-4">
                                    <Image src={"/imgs/seo_service_slider-3.png"} width={370} height={150} alt='testimonial' />
                                </div>
                                <div className="text-center">
                                    <p className="font-normal text-[17px] text-gray-300 dark:text-slate-900   pt-2">Seo Optimization</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-[20px] text-gray-300 dark:text-blue-700  pt-2 pb-4">Pay-Per-Click</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
  
                 

          
        </>
    )
}

export default PopularCaseStudies