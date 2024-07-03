"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceAwards = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 200, 
        });
      }, []);
  return (
    <div className='lg:grid lg:grid-cols-3 flex flex-col pl-4 pr-4 '>
        <div className=' '>
            <span className='text-lg text-blue-500 font-semibold ml-10'>AWARD</span>
            <h2 className='ml-5 text-5xl font-extrabold'>Our Awards</h2>
            <div className='mt-8'data-aos="fade-up" > <Image src={"/imgs/Service_Award.webp"} width={500} height={300} alt='service_award' ></Image></div>
        </div>
        <div className='col-span-2  p-8' >

            <div data-aos="fade-down" className='flex justify-between items-center group '><div className='grayscale-[1] group-hover:grayscale-0 transition ease-in duration-200 delay-100'>
            <Image  src={"/imgs/Service_Award-2.webp"} width={130} height={100} alt='service_award'></Image> 
            </div>
            <div className='text-xl font-semibold'>Recognizing Excellence
            <br /> <span className='mt-4'>Suspendisse finibus dolo et phar etra porta.</span>
            </div>
            <div className='text-blue-500 text-lg font-medium'>2023 - 2021</div>
            </div>

            <div data-aos="fade-down" className='flex justify-between items-center mt-10 group '><div className='grayscale-[1] group-hover:grayscale-0 transition ease-in duration-200 delay-100'>
            <Image  src={"/imgs/Service_Award-3.webp"} width={130} height={100} alt='service_award'></Image> 
            </div>
            <div className='text-xl font-semibold'>Recognizing Excellence
            <br /> <span className='mt-4'>Suspendisse finibus dolo et phar etra porta.</span>
            </div>
            <div className='text-blue-500 text-lg font-medium'>2023 - 2021</div>
            </div>

            <div data-aos="fade-down" className='flex justify-between items-center mt-10 group '><div className='grayscale-[1] group-hover:grayscale-0 transition ease-in duration-200 delay-100'>
            <Image  src={"/imgs/Service_Award-4.webp"} width={130} height={100} alt='service_award'></Image> 
            </div>
            <div className='text-xl font-semibold'>Recognizing Excellence
            <br /> <span className='mt-4'>Suspendisse finibus dolo et phar etra porta.</span>
            </div>
            <div className='text-blue-500 text-lg font-medium'>2023 - 2021</div>
            </div>
        </div>
    </div>
  )
}

export default ServiceAwards