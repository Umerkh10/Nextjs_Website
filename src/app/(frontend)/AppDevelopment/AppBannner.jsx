"use client"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AppBannner = () => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof window.openChat !== 'undefined') {
      window.openChat();
    } else {
      console.error('openChat function is not available');
    }
  };
  return (
    <div>
        <div style={{backgroundImage:"url('/imgs/App_banner.webp')",backgroundSize:'cover',backgroundPosition:'center' }} className='h-[170vh] lg:h-[100vh]' data-aos="zoom-in" >

        <div className='grid lg:grid-cols-2 grid-cols-1 pt-28'>
            <div className=' pl-10 pr-10 lg:pt-16 pt-5' data-aos="fade-up">
                <div className='text-gray-100 font-extrabold text-4xl md:text-5xl'>App Development</div>

                <div className='pt-5 text-gray-100 font-medium text-sm lg:text-base'>WebNike is a leading provider of innovative app development services, dedicated to transforming your ideas into dynamic and user-friendly applications. With a team of skilled developers and designers, we specialize in creating custom mobile apps that are both functional and visually appealing. Whether you need a robust business app, a captivating game, or a comprehensive e-commerce solution, WebNike ensures a seamless development process from concept to launch. Our commitment to quality and client satisfaction sets us apart, making us the go-to partner for all your app development needs. Let WebNike elevate your digital presence with cutting-edge technology and exceptional service.
                </div>

                <div className='lg:flex pt-5 '>
            <button onClick={handleClick} className='mt-5 border rounded-2xl w-[65vw] md:w-[35vw] lg:w-[22vw] h-[10vh] flex items-center justify-center relative overflow-hidden bg-sky-400 font-medium text-white group hover:bg-sky-700 transition ease-in duration-200 delay-200 '> 
                Let's Talk App Development
                <ArrowRight className='ml-2 group-hover:translate-x-20 ease-in-out duration-200 delay-200'/>
            </button>
                  </div>

            </div>
            <div className='lg:pt-0 pt-5' data-aos="fade-down">
                <Image className='-ml-5' src="/imgs/app-banner-2.webp" width={800} height={500} alt='app-banner'></Image>
            </div>
        </div>
        </div>
   
    </div>
  )
}

export default AppBannner