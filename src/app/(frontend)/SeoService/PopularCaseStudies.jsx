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
        <div className='bg-gray-200 dark:bg-transparent'>
            <div className='pt-28 text-center md:text-5xl text-4xl font-bold'data-aos="fade-up" > Popular Case Studies</div>
            <div className='pt-2 text-center text-lg font-semibold' data-aos="fade-down" >Best SEO Optimization Agency</div>


            <div className='lg:grid lg:grid-cols-4 flex flex-col p-8 lg:p-5 '>
                <div className='group ' data-aos="flip-right">
                <div className='p-4 group-hover:scale-110 transition ease-in duration-200 delay-100 '>
                        <div className=" bg-sky-200 rounded-2xl ">
                            <div className="flex flex-col items-center lg:h-[65vh] px-3.75">
                                <div className="">
                                    <Image src={"/imgs/casestudy-1.png"} width={370} height={150} alt='testimonial' />
                                </div>
                                <div className="text-center pt-8">
                                    <p className="font-medium text-[17px] text-slate-900 pt-2">Business Planning</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-[20px] text-purple-700  pt-2 pb-4">Email Marketing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' group' data-aos="flip-left">
                <div className='p-4 group-hover:scale-110 transition ease-in duration-200 delay-100 '>
                        <div className=" bg-sky-200 rounded-2xl ">
                            <div className="flex flex-col items-center lg:h-[65vh] px-3.75">
                                <div className="">
                                    <Image src={"/imgs/case-study-2.png"} width={300} height={100} alt='testimonial' />
                                </div>
                                <div className="text-center">
                                    <p className="font-normal text-[17px] text-slate-900 pt-2">Market Research</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-[20px] text-purple-700  pt-2 pb-4">Data Analysis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' group' data-aos="flip-right">
                <div className='p-4 group-hover:scale-110 transition ease-in duration-200 delay-100'>
                        <div className=" bg-sky-200 rounded-2xl ">
                            <div className="flex flex-col items-center lg:h-[65vh] px-3.75">
                                <div className="">
                                    <Image src={"/imgs/casestudy-3.png"} width={370} height={150} alt='testimonial' />
                                </div>
                                <div className="text-center pt-5">
                                    <p className="font-normal text-[17px] text-slate-900 pt-2">Marketing Strategy</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-[20px]  text-purple-700 pt-2 pb-4">Optimization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='group' data-aos="flip-left">
                <div className='p-4 group-hover:scale-110 transition ease-in duration-200 delay-100'>
                        <div className=" bg-sky-200 rounded-2xl ">
                            <div className="flex flex-col items-center lg:h-[65vh] px-3.75">
                                <div className=" mb-4">
                                    <Image src={"/imgs/case-study-4.png"} width={370} height={150} alt='testimonial' />
                                </div>
                                <div className="text-center -mt-4">
                                    <p className="font-normal text-[17px] text-slate-900   pt-2">Seo Optimization</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-[20px] text-purple-700  pt-2 pb-4">Pay-Per-Click</p>
                                </div>
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