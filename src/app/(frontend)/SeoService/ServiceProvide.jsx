"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceProvide = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <>
        <div className='bg-gray-200 dark:bg-transparent '>
            <div className='text-center pt-24' data-aos="fade-up">
                <span className=' md:text-5xl text-4xl font-extrabold'>Service We Provide</span>
            </div>
            <div className='pt-3 text-center italic md:text-lg font-semibold' data-aos="fade-up">Best SEO Optimization Agency</div>
            <div className='lg:grid lg:grid-cols-2 flex flex-col lg:p-0 p-3' data-aos="fade-up">
                <div className=''>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 lg:pt-10 pt-5 lg:gap-0 mt-5 lg:ml-0 md:ml-20 lg:p-10'>
                        <div className='group'>
                            <div className='flex flex-col justify-center items-center border-[5px] border-black/70 rounded-xl w-full sm:w-[40vw] md:w-[30vw] lg:w-[20vw] p-4 group-hover:scale-105 transition ease-in duration-200 delay-100 group-hover:border-purple-700'>
                                <div className='flex flex-col pt-6 justify-center items-center h-full w-full'>
                                    <Image className='group-hover:rotate-doors' src={"/imgs/seo-email.png"} width={70} height={50} alt='seo_email' />
                                    <span className='text-center pt-5 text-purple-900 dark:text-gray-200 text-lg font-semibold'> Email Marketing </span>
                                    <span className='text-center pt-1 text-black/50 dark:text-gray-200 text-base font-medium pb-5'>This is a popular marketing method today.</span>
                                </div>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='flex flex-col justify-center items-center border-[5px] border-black/70 rounded-xl w-full sm:w-[40vw] md:w-[30vw] lg:w-[20vw] p-4 group-hover:scale-105 transition ease-in duration-200 delay-100 group-hover:border-purple-700'>
                                <div className='flex flex-col pt-6 justify-center items-center h-full w-full'>
                                    <Image className='group-hover:rotate-doors' src={"/imgs/seo-data-analysis.png"} width={70} height={50} alt='seo_email' />
                                    <span className='text-center pt-5 text-purple-900 dark:text-gray-200 text-lg font-semibold'> Data Analysis </span>
                                    <span className='text-center pt-1 text-black/50 dark:text-gray-200 text-base font-medium pb-5'>Big data can help capture customer sentiment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 lg:pt-0 pt-5 lg:gap-0 lg:ml-0 md:ml-20  lg:p-10'>
                        <div className='group'>
                            <div className='flex flex-col justify-center items-center border-[5px] border-black/70 rounded-xl w-full sm:w-[40vw] md:w-[30vw] lg:w-[20vw] p-4 group-hover:scale-105 transition ease-in duration-200 delay-100 group-hover:border-purple-700'>
                                <div className='flex flex-col pt-6 justify-center items-center h-full w-full'>
                                    <Image className='group-hover:rotate-doors' src={"/imgs/seo-optimization.png"} width={70} height={50} alt='seo_email' />
                                    <span className='text-center pt-5 text-purple-900 dark:text-gray-200 text-lg font-semibold'> Optimization </span>
                                    <span className='text-center pt-1 text-black/50 dark:text-gray-200 text-base font-medium pb-5'>Search engine optimization is a marketing tool.</span>
                                </div>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='flex flex-col justify-center items-center border-[5px] border-black/70 rounded-xl w-full sm:w-[40vw] md:w-[30vw] lg:w-[20vw] p-4 group-hover:scale-105 transition ease-in duration-200 delay-100 group-hover:border-purple-700'>
                                <div className='flex flex-col pt-6 justify-center items-center h-full w-full'>
                                    <Image className='group-hover:rotate-doors' src={"/imgs/seo-ppc.png"} width={70} height={50} alt='seo_email' />
                                    <span className='text-center pt-5 text-purple-900 dark:text-gray-200 text-lg font-semibold'> Pay-Per-Click </span>
                                    <span className='text-center pt-1 text-black/50 dark:text-gray-200 text-base font-medium pb-5'>Post an ad on a platform and pay per click.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='pb-4' data-aos="fade-down">
                    <div><Image src={"/imgs/seo-provide-1.webp"} width={600} height={600} alt='seo_provide'></Image></div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ServiceProvide