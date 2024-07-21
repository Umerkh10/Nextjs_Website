"use client"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import React from 'react'

const AppProjects = () => {
  return (
    <div className='bg-slate-200 dark:bg-transparent pr-6 pl-6 pt-10'>
        <div className='text-5xl font-extrabold text-center'>Our App Development Projects</div>

        <div className='pt-4 text-center font-semibold italic pl-10 pr-10 text-sm'>Webnike specializes in innovative app development, delivering high-quality, user-friendly applications tailored to clients' needs. Our expert team utilizes the latest technologies to create seamless, efficient, and engaging mobile experiences. Whether it's for iOS or Android, Webnike transforms your vision into reality with precision and creativity. Partner with us to elevate your digital presence and achieve your business goals through cutting-edge app solutions.
        </div>


        <Swiper
                 modules={[ Autoplay,Navigation]} spaceBetween={30} slidesPerView={1} autoplay={{ delay: 5000, disableOnInteraction: false }}  loop={true} className='mt-10'>

                    <SwiperSlide>
                   <div className='flex justify-center items-center group p-10'>
                    <Image className='rounded-xl group-hover:scale-110 transition ease-in duration-200 delay-100 group-hover:shadow-2xl' src="/about_imgs/about-app-2.webp" width={800} height={600} alt='project'></Image>

                   </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className='flex justify-center items-center group p-10'>
                    <Image className='rounded-xl group-hover:scale-110 transition ease-in duration-200 delay-100 group-hover:shadow-2xl' src="/imgs/project-app-1.webp" width={800} height={600} alt='project'></Image>

                   </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className='flex justify-center items-center group p-10'>
                    <Image className='rounded-xl group-hover:scale-110 transition ease-in duration-200 delay-100 group-hover:shadow-2xl' src="/imgs/project-app-2.webp" width={800} height={600} alt='project'></Image>

                   </div>
                    </SwiperSlide>
                    </Swiper>

    </div>
  )
}

export default AppProjects