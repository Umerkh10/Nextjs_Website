"use client"
import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCards = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 200, 
        });
      }, []);
    return (
        <>
            <div className='mt-20 text-center text-foreground/85'>
                <span className='text-blue-800 md:text-lg font-semibold'>Best Services</span>
                <h2 className='text-3xl md:text-5xl font-extrabold mt-3'>We Provide Best Services</h2>
            </div>

            <div className='lg:grid lg:grid-cols-3 gap-5 flex flex-col pl-5 pr-5 pt-10 mt-4'>
                <div data-aos="fade-up" className='bg-gray-100 rounded-2xl h-[350px] dark:bg-black dark:hover:bg-purple-700 p-4 group hover:bg-purple-700 transition ease-in duration-150 delay-200 '>
                    <div className='flex justify-between'>
                        <div className='border rounded-full w-24 h-24 bg-purple-700 flex justify-center items-center'>
                            <Image src={"/imgs/service_seo.png"} width={50} height={30} alt='seo' ></Image> </div>
                            <div className='opacity-0 group-hover:opacity-30 transition ease-in duration-200 delay-200'><Image src={"/imgs/service_seo.png"} width={120} height={60} alt='hover_seo'></Image> </div>
                    </div>
                    <div className=' text-2xl md:text-3xl font-bold group-hover:text-white '>Seo Service</div>
                    <div className='md:text-lg font-medium group-hover:text-white '>Boost your online visibility with our expert SEO services, designed to drive targeted traffic and improve your search engine rankings!
                    </div>
                    <div className='mt-4 md:text-lg group-hover:text-white font-semibold opacity-0 translate-y-20 group-hover:-translate-y-2 group-hover:opacity-100 tracking-wider transition ease-in duration-200 delay-200'>
                        <Link href="/SeoService"> Read More</Link>  </div>
                </div>

                <div data-aos="fade-down" className='bg-gray-100 rounded-2xl h-[350px] dark:bg-black dark:hover:bg-purple-700 p-4 group hover:bg-purple-700 transition ease-in duration-150 delay-200 '>
                    <div className='flex justify-between'>
                        <div className='border rounded-full w-24 h-24 bg-purple-700 flex justify-center items-center'>
                            <Image src={"/imgs/service_coding.png"} width={50} height={30} alt='seo' ></Image> </div>
                            <div className='opacity-0 group-hover:opacity-30 transition ease-in duration-200 delay-200'><Image src={"/imgs/service_coding.png"} width={120} height={60} alt='hover_seo'></Image> </div>
                    </div>
                    <div className=' text-2xl md:text-3xl font-bold group-hover:text-white '>Website Development</div>
                    <div className='md:text-lg font-medium group-hover:text-white '>Enhance your online presence with our top-tier web development services, tailored to deliver exceptional user experiences and robust, scalable solutions.</div>
                    <div className='mt-4 md:text-lg group-hover:text-white font-semibold opacity-0 translate-y-20 group-hover:-translate-y-2 group-hover:opacity-100 tracking-wider transition ease-in duration-200 delay-200'><Link href="/WebDevelopment">Read More </Link></div>
                </div>

                <div data-aos="fade-up" className='bg-gray-100 rounded-2xl h-[350px] dark:bg-black dark:hover:bg-purple-700 p-4 group hover:bg-purple-700 transition ease-in duration-150 delay-200 '>
                    <div className='flex justify-between'>
                        <div className='border rounded-full w-24 h-24 bg-purple-700 flex justify-center items-center'>
                            <Image src={"/imgs/service_animate.png"} width={50} height={30} alt='seo' ></Image> </div>
                            <div className='opacity-0 group-hover:opacity-30 transition ease-in duration-200 delay-200'><Image src={"/imgs/service_animate.png"} width={120} height={60} alt='hover_seo'></Image> </div>
                    </div>
                    <div className=' text-2xl md:text-3xl font-bold group-hover:text-white '>Graphic Design</div>
                    <div className='md:text-lg font-medium group-hover:text-white '>Transform your vision into stunning visuals with our expert graphic design services, tailored to make your brand stand out.</div>
                    <div className='mt-4 md:text-lg group-hover:text-white font-semibold opacity-0 translate-y-20 group-hover:-translate-y-2 group-hover:opacity-100 tracking-wider transition ease-in duration-200 delay-200'><Link href="/GraphicDesign">Read More </Link> </div>
                </div>

                <div data-aos="fade-up" className='bg-gray-100 rounded-2xl h-[350px] dark:bg-black dark:hover:bg-purple-700 p-4 group hover:bg-purple-700 transition ease-in duration-150 delay-200 '>
                    <div className='flex justify-between'>
                        <div className='border rounded-full w-24 h-24 bg-purple-700 flex justify-center items-center'>
                            <Image src={"/imgs/service_app-development.png"} width={50} height={30} alt='seo' ></Image> </div>
                            <div className='opacity-0 group-hover:opacity-30 transition ease-in duration-200 delay-200'><Image src={"/imgs/service_app-development.png"} width={120} height={60} alt='hover_seo'></Image> </div>
                    </div>
                    <div className=' text-2xl md:text-3xl font-bold group-hover:text-white '>App Development</div>
                    <div className='md:text-lg font-medium group-hover:text-white '> Our expert app development services, crafted by a team of over 100 seasoned software engineers with more than a decade of experience in delivering superior products</div>
                    <div className='mt-4 md:text-lg group-hover:text-white font-semibold opacity-0 translate-y-20 group-hover:-translate-y-2 group-hover:opacity-100 tracking-wider transition ease-in duration-200 delay-200'>
                        <Link href="/AppDevelopment">Read More </Link> </div>
                </div>

            </div>

        </>
    )
}

export default ServiceCards