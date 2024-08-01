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
    <div className='lg:grid lg:grid-cols-3 flex flex-col pt-10 pl-4 pr-4 '>
        <div className=' '>
            <span className='md:text-lg text-blue-500 font-semibold ml-10'>AWARD</span>
            <div className='ml-5 text-3xl md:text-5xl font-extrabold'>Our Awards</div>
            <div className='mt-8'data-aos="fade-up" > <Image src={"/imgs/service-award.webp"} width={500} height={300} alt='service_award' ></Image></div>
        </div>
        <div className='col-span-2  p-8' data-aos="fade-down" >

            <div  className='flex justify-between items-center group '><div className='grayscale-[1] group-hover:grayscale-0 transition ease-in duration-200 delay-100'>
            <Image  src={"/imgs/service-awards-2.webp"} width={130} height={100} alt='service_award'></Image> 
            </div>
            <div className='md:text-xl font-semibold'>Recipient of the 2019 National Excellence Award
            <br /> 
            </div>
            <div className='text-blue-500 md:text-lg font-medium'>2019 - 2021</div>
            </div>

            <div  className='flex justify-between items-center mt-10 group '><div className='grayscale-[1] group-hover:grayscale-0 transition ease-in duration-200 delay-100'>
            <Image  src={"/imgs/service-awards-3.png"} width={130} height={100} alt='service_award'></Image> 
            </div>
            <div className='md:text-xl font-semibold'>Recipient of the 2019 Galaxy Award for Excellence 
            <br /> 
            </div>
            <div className='text-blue-500 md:text-lg font-medium'>2019 - 2021</div>
            </div>

            <div  className='flex justify-between items-center mt-10 group '><div className='grayscale-[1] group-hover:grayscale-0 transition ease-in duration-200 delay-100'>
            <Image  src={"/imgs/service-awards-4.png"} width={130} height={100} alt='service_award'></Image> 
            </div>
            <div className='md:text-xl font-semibold'>Celebrating excellence in global brand recognition.
            <br /> 
            </div>
            <div className='text-blue-500 md:text-lg font-medium'>2019 - 2021</div>
            </div>
        </div>
    </div>
  )
}

export default ServiceAwards