"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Check, MoveUpRight, PhoneCallIcon } from 'lucide-react';


const Image_Parallax = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1, 
    });

    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-rows-2 md:pb-0 pb-20 sm:grid-cols-1 pt-8 pr-4 pl-4 gap-4 text-foreground/85'>
            <div className='grid grid-rows-2 col-span-4 mt-2 md:col-span-2' data-aos="fade-up">
                <div className='col-span-1 relative'>
                    <Image className='rounded-2xl' src={"/imgs/image_parallax_1.webp"} width={600} height={600} alt='parallax1'></Image>
                </div>
                <div className='col-span-1 mt-3 lg:w-[30vw] lg:h-[45vh]  relative h-[40vh] w-[90vw] md:h-[50vh] md:w-[46vw] xl:h-[50vh] xl:w-[48vw]' >
                    <Image className='rounded-2xl' src={"/imgs/Image-parallax-2.webp"} width={600} height={500} alt='parallax2'></Image>
                </div>
            </div>
            <div className=' col-span-4 md:col-span-2 relative' data-aos="fade-up" ref={ref}>
                <Image className='rounded-2xl' src={"/imgs/image_parallax_3.webp"} width={600} height={600} alt='parallax3'></Image>
                <div className='absolute rotate-[90deg] top-[105px] md:top-[130px] md:right-[-135px] right-[-115px] xl:right-[-95px] bg-purple-800 border-[5px] border-[#F0E3F8] rounded-[100px] p-[20px] px-[10px]'>
                    <span className='font-extrabold text-white text-xl md:text-2xl'> {inView ? <CountUp end={10} duration={2.75} /> : '0'}</span>
                    <span className='text-white  md:text-xl font-medium'>+ Years of Working Experience</span>
                </div>
            </div>

            <div className='grid col-span-4' data-aos="fade-right">
                <div className='relative ml-5'>
                    <div className='mb-7'>
                        <div className='font-semibold text-[14px] pt-3 pb-5 text-purple-600 uppercase leading-6'>About Us</div>
                        <div className='font-extrabold text-3xl md:text-5xl mb-6'>Committed to Delivering <br /> Outstanding Service</div>
                        <p className='font-normal leading-6 text-[15px]'>Our team comprises over 100 professional software engineers, each with more than a decade of experience in delivering exceptional products. Trust the numbers, they speak for themselves.</p>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mb-7'>
                            <div className='flex items-center gap-2'>
                                <div className='w-[68px] h-[68px] flex items-center justify-center bg-purple-200 border-purple-700 border border-dashed rounded-lg group'>
                                    <Image className='group-hover:animate-bounce' src={"/imgs/charity.png"} width={40} height={40} alt='charity'></Image>
                                </div>
                                <div className='font-semibold capitalize md:text-lg'>Save More with Our Solutions</div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className='w-[68px] h-[68px] flex items-center justify-center bg-purple-200 border-purple-700 border border-dashed rounded-lg group'>
                                    <Image className='group-hover:animate-bounce' src={"/imgs/time-passing.png"} width={40} height={60} alt='time-passing'></Image>
                                </div>
                                <div className='font-semibold capitalize md:text-lg'> Detailed Delivery Schedule</div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 pl-1'>
                            <div className='col-span-1'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-[25px] h-[25px] rounded-full border-2 border-black flex items-center mb-3'>
                                       <Check className='stroke-purple-500'/>
                                    </div>
                                    <span className='font-medium text-[15px]'>Production or trading of goods</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='w-[25px] h-[25px] rounded-full border-2 border-black flex items-center'>
                                       <Check className='stroke-purple-500'/>
                                    </div>
                                    <span className='font-medium text-[15px]'>100% Better results</span>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='flex items-center gap-2 mt-2'>
                                   <PhoneCallIcon className='w-14 h-14 stroke-purple-600'/>
                                    <div className='leading-[0.6] pl-2'>
                                        <div className='font-bold text-[20px]'>021-34155132</div>
                                        <br />
                                        <p className='text-[14px] font-semibold text-sky-600'>Have Any Question?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-[1px] bg-gray-600 mt-8'>
                            <div className='flex items-center w-[95%] xl:w-[20%] lg:w-[26%] md:w-[40%] group'>
                                <Link href="/Services" className='mt-8 text-sky-600 bg-transparent md:text-[18px] font-semibold leading-none capitalize border border-sky-500 rounded-full px-8 py-5 group-hover:translate-x-10 transition duration-300 hover:bg-sky-600 ease-in delay-100 hover:text-white group'>
                                    <span> View all more</span>
                                </Link>
                                <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-sky-600 mt-8 ml-2 group-hover:-translate-x-52 transition duration-200 delay-150 ease-in-out'>
                                    <MoveUpRight className='stroke-white' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Image_Parallax