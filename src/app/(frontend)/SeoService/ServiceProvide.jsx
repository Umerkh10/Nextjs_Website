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
            <div className='text-center mt-14' data-aos="fade-up">
                <span className='text-sky-800 dark:text-gray-300 text-5xl font-bold'>Service We Provide</span>
            </div>
            <div className='pt-5 text-center text-blue-700 dark:text-gray-300 text-lg font-medium' data-aos="fade-up">Best SEO Optimization Agency</div>
            <div className='lg:grid lg:grid-cols-2 flex flex-col' data-aos="fade-up">
                <div className=''>
                    <div className='grid grid-cols-2 gap-2 p-4 lg:p-10'>
                        <div className='group'>
                            <div className='flex flex-col justify-center items-center border-[5px] rounded-xl w-full sm:w-[40vw] md:w-[30vw] lg:w-[20vw] p-4 group-hover:scale-105 transition ease-in duration-200 delay-100 group-hover:border-blue-700'>
                                <div className='flex flex-col pt-6 justify-center items-center h-full w-full'>
                                    <Image className='group-hover:rotate-doors' src={"/imgs/Seo_email_provide.png"} width={70} height={50} alt='seo_email' />
                                    <span className='text-center pt-5 text-blue-900 dark:text-blue-500 text-lg font-semibold'> Email Marketing </span>
                                    <span className='text-center pt-1 text-black/50 dark:text-blue-500 text-base font-medium pb-5'>This is a popular marketing method today.</span>
                                </div>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='flex flex-col justify-center items-center border-[5px] rounded-xl w-full sm:w-[40vw] md:w-[30vw] lg:w-[20vw] p-4 group-hover:scale-105 transition ease-in duration-200 delay-100 group-hover:border-blue-700'>
                                <div className='flex flex-col pt-6 justify-center items-center h-full w-full'>
                                    <Image className='group-hover:rotate-doors' src={"/imgs/seo_data_provide.png"} width={70} height={50} alt='seo_email' />
                                    <span className='text-center pt-5 text-blue-900 dark:text-blue-500 text-lg font-semibold'> Data Analysis </span>
                                    <span className='text-center pt-1 text-black/50 dark:text-blue-500 text-base font-medium pb-5'>Big data can help capture customer sentiment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-2 p-4 lg:p-10'>
                        <div className='group'>
                            <div className='flex flex-col justify-center items-center border-[5px] rounded-xl w-full sm:w-[40vw] md:w-[30vw] lg:w-[20vw] p-4 group-hover:scale-105 transition ease-in duration-200 delay-100 group-hover:border-blue-700'>
                                <div className='flex flex-col pt-6 justify-center items-center h-full w-full'>
                                    <Image className='group-hover:rotate-doors' src={"/imgs/seo_optimization_provide.png"} width={70} height={50} alt='seo_email' />
                                    <span className='text-center pt-5 text-blue-900 dark:text-blue-500 text-lg font-semibold'> Optimization </span>
                                    <span className='text-center pt-1 text-black/50 dark:text-blue-500 text-base font-medium pb-5'>Search engine optimization is a marketing tool.</span>
                                </div>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='flex flex-col justify-center items-center border-[5px] rounded-xl w-full sm:w-[40vw] md:w-[30vw] lg:w-[20vw] p-4 group-hover:scale-105 transition ease-in duration-200 delay-100 group-hover:border-blue-700'>
                                <div className='flex flex-col pt-6 justify-center items-center h-full w-full'>
                                    <Image className='group-hover:rotate-doors' src={"/imgs/seo_ppc_provide.png"} width={70} height={50} alt='seo_email' />
                                    <span className='text-center pt-5 text-blue-900 dark:text-blue-500 text-lg font-semibold'> Pay-Per-Click </span>
                                    <span className='text-center pt-1 text-black/50 dark:text-blue-500 text-base font-medium pb-5'>Post an ad on a platform and pay per click.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='mb-4' data-aos="fade-down">
                    <div><Image src={"/imgs/Seo_provide_image.png"} width={600} height={600} alt='seo_provide'></Image></div>
                </div>
            </div>
        </>
    )
}

export default ServiceProvide