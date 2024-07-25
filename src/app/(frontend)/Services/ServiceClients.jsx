"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceClients = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 200, 
        });
      }, []);
    return (
        <div className='mt-10 lg:grid lg:grid-cols-2 grid-cols-1 h-full w-full '>
            <div data-aos="fade-down" className='bg-purple-600 h-[80vh] p-5 -z-10 group'>
                <div className=' flex slider-track-service slider-item-service  gap-4'>
                    <div className='border rounded-xl flex justify-center items-center    h-[20vh] w-[20vw] image-container transition ease-in duration-200 delay-150'>
                        <Image className='object-contain' src={"/service_slider/client-logo-1.webp"} width={130} height={140} alt='client_slider' />
                    </div>

                    <div className='border rounded-xl flex justify-center items-center  h-[20vh] w-[20vw] image-container transition ease-in duration-200 delay-150'>
                        <Image className='object-contain' src={"/service_slider/client-logo-2.webp"} width={130} height={140} alt='client_slider' />
                    </div>

                    <div className='border rounded-xl flex justify-center items-center  h-[20vh] w-[20vw] image-container  transition ease-in duration-200 delay-150'>
                        <Image className='object-contain' src={"/service_slider/client-logo-3.webp"} width={130} height={140} alt='client_slider' />
                    </div>

                    <div className='border rounded-xl flex justify-center items-center  h-[20vh] w-[20vw] image-container transition ease-in duration-200 delay-150'>
                        <Image className='object-contain' src={"/service_slider/client-logo-4.webp"} width={130} height={140} alt='client_slider' />
                    </div>
                </div>

                <div className='flex slider-track-service slider-item-service gap-4 mt-5'>
                    <div className='border rounded-xl flex justify-center items-center  h-[20vh] w-[20vw] image-container'>
                        <Image className='object-contain' src={"/service_slider/client-logo-5.webp"} width={130} height={140} alt='client_slider' />
                    </div>

                    <div className='border rounded-xl flex justify-center items-center  h-[20vh] w-[20vw] image-container'>
                        <Image className='object-contain' src={"/service_slider/client-logo-6.webp"} width={130} height={140} alt='client_slider' />
                    </div>

                    <div className='border rounded-xl flex justify-center items-center  h-[20vh] w-[20vw] image-container'>
                        <Image className='object-contain' src={"/service_slider/client-logo-4.webp"} width={130} height={140} alt='client_slider' />
                    </div>

                    <div className='border rounded-xl flex justify-center items-center  h-[20vh] w-[20vw] image-container'>
                        <Image className='object-contain' src={"/service_slider/client-logo-1.webp"} width={130} height={140} alt='client_slider' />
                    </div>
                </div>

                <div className='flex slider-track-service slider-item-service gap-4 mt-5'>
                    <div className='border rounded-xl flex justify-center items-center  h-[20vh] w-[20vw] image-container'>
                        <Image className='object-contain' src={"/service_slider/client-logo-7.webp"} width={130} height={140} alt='client_slider' />
                    </div>

                    <div className='border rounded-xl flex justify-center items-center  h-[20vh] w-[20vw] image-container'>
                        <Image className='object-contain' src={"/service_slider/client-logo-8.webp"} width={130} height={140} alt='client_slider' />
                    </div>

                    <div className='border rounded-xl flex justify-center items-center  h-[20vh] w-[20vw] image-container'>
                        <Image className='object-contain' src={"/service_slider/client-logo-5.webp"} width={130} height={140} alt='client_slider' />
                    </div>

                    <div className='border rounded-xl flex justify-center items-center  h-[20vh] w-[20vw] image-container'>
                        <Image className='object-contain' src={"/service_slider/client-logo-3.webp"} width={130} height={140} alt='client_slider' />
                    </div>
                </div>

            </div>
            <div data-aos="fade-up" className='bg-gray-50 dark:bg-slate-950  h-[85vh] z-30 p-5 '>
                <div className=' text-xl font-semibold text-sky-500 dark:text-white'> Our Clients </div>
                <div className=' mt-5 text-5xl font-extrabold dark:text-white'> We Build With <br />Modern Experience Brands </div>

                <a href="#" className='flex justify-center items-center mt-5 no-underline text-lg rounded-xl w-[35%] h-[12%] border-[1px] font-medium text-sky-400 border-sky-500 relative overflow-hidden transition duration-500 group hover:bg-purple-700 hover:text-white  '>
                    <span className=' truncate pr-2'>View All Services </span>
                    <span className=' group-hover:-translate-y-12 group-hover:translate-x-12 transition duration-200 ease-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
                    </span>
                  </a>
                
            </div>
        </div>
    )
}

export default ServiceClients