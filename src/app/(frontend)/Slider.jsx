'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Slider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      const handleSlideChange = () => {
        const allSlides = document.querySelectorAll('.swiper-slide');
        
        allSlides.forEach(slide => {
          const textElements = slide.querySelectorAll('.text-to-reveal');
          textElements.forEach(el => el.classList.remove('reveal'));
        });

        const activeSlide = allSlides[swiperInstance.activeIndex];
        if (activeSlide) {
          const textElements = activeSlide.querySelectorAll('.text-to-reveal');
          textElements.forEach(el => el.classList.add('reveal'));
        }
      };

      swiperInstance.on('slideChange', handleSlideChange);

      handleSlideChange();
    }
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof window.openChat !== 'undefined') {
      window.openChat();
    } else {
      console.error('openChat function is not available');
    }
  };

  return (
    <div className=' xl:h-[110vh] lg:h-[125vh] pt-36 max-w-screen w-full relative overflow-hidden bg-none'>
      <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        className='absolute top-0 left-0 h-full w-full z-[-1] '>
        <div className='flex justify-center items-center h-full mt-[380px] mr-32 '>
          <div className='absolute -bottom-[800px] left-[-20rem] md:top-[39rem] md:left-[-10rem] lg:top-24 lg:-left-14 xl:top-20 xl:left-40 w-[640px] bg-transparent h-[1185px] xl:h-[1375px] lg:h-[1375px] md:h-[1375px] transform rotate-[39deg] rounded-tr-[500px] rounded-tl-[500px] bg-gradient-to-r from-[#5aa8cc] to-[#1f8b9e] transition duration-[1000ms]'>
          </div>
        </div>
      </div>

      <Swiper modules={[ Autoplay,]} spaceBetween={30} slidesPerView={1}
       autoplay={{ delay: 5000, disableOnInteraction: true }}  loop={true} ref={swiperRef} className='w-full h-full'>
        {/* First Slide */}
        <SwiperSlide>
        <div id='slider' className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
          <div className='col-span-1 order-2 lg:order-1 w-full mx-auto relative'>
       
            <Image className='xl:ml-16 -translate-x-[4.25rem] md:-translate-x-0 lg:-translate-x-0 xl:-translate-x-0 translate-y-16 xl:-translate-y-12 lg:translate-y-4 md:-translate-y-48 text-to-reveal' src='/imgs/home-banner-2.webp' width={600} height={600} alt='banner' />
          </div>
          <div className='col-span-1 order-1 lg:order-2 mx-auto flex items-center w-full'>
            <div className='flex flex-col h-full w-2/3 mt md:pl-10'>
              <div className='h-auto w-full mt-5'>
                <span className='inline-block text-white font-extrabold text-3xl md:text-5xl lg:translate-y-10 lg:translate-x-[-2rem] translate-y-6 translate-x-4 text-to-reveal'>We Are</span>
              </div>
              <div className='h-auto w-full'>
                <span className='inline-block text-white font-extrabold text-[90px] md:text-[140px] lg:translate-y-1 lg:translate-x-[-3.5rem] translate-y-1 translate-x-2 mb-2 text-to-reveal'>Creat</span>
              </div>
              <div className='h-auto w-full'>
                <span className='inline-block text-white font-extrabold uppercase text-[80px] md:text-[140px] lg:-translate-y-24 lg:translate-x-[-3rem] md:-translate-y-[5.5rem]  -translate-y-12 translate-x-4 text-to-reveal'>Ive</span>

                <span className='inline-block rotate-[90deg] font-black text-white text-[22px] md:text-[42px] 
                translate-x-[7.25rem] translate-y-[-9.5rem] md:-translate-x-8 md:-translate-y-28 lg:-translate-y-[215px] lg:translate-x-[143px] xl:-translate-y-[115px] xl:translate-x-[-95px] text-to-reveal'>Digital</span>
              </div>
              <div className='h-auto w-full'>
                <span className='inline-block -translate-y-[5rem] translate-x-4 lg:-translate-y-[14rem] lg:translate-x-[-3.5rem] xl:-translate-y-[165px] xl:translate-x-[-3.5rem] md:translate-x-4 md:-translate-y-[150px] font-extrabold text-white text-[30px] md:text-[60px] text-to-reveal'>Agency</span>

                <p className='font-medium text-white text-[15px] inline-block md:-tra -translate-y-20 translate-x-3 lg:-translate-y-56 lg:translate-x-[-3.25rem] xl:-translate-y-[10.5rem] xl:translate-x-[-3.5rem] md:-translate-y-40 md:translate-x-2 text-to-reveal'>At Webnike, we blend innovation with design, crafting compelling digital experiences that captivate and engage your audience.</p>

                <button onClick={handleClick} className='relative text-to-reveal right-28 lg:-translate-y-[16.5rem] lg:translate-x-[22rem] flex -translate-y-12 translate-x-44 xl:-translate-y-[10rem] xl:translate-x-[29rem] md:-translate-y-36 md:translate-x-[140px] items-center text-white bg-transparent lg:text-[18px] font-semibold leading-none capitalize border border-sky-500 rounded-full px-8 py-4 group-hover:translate-x-6 transition duration-200 hover:bg-sky-600 ease-in delay-100 hover:text-white group'>
                  <span>Get Started</span>
                  <div className='flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-[70px] w-[60px] h-[60px] rounded-full bg-sky-600 text-white text-center leading-[60px] transition ease duration-200 group-hover:translate-x-[-170px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin='round' className='lucide lucide-arrow-up-right m-auto'>
                      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

        <SwiperSlide>
        <div  className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
          <div className='col-span-1 order-2 lg:order-1 w-full mx-auto relative'>
            <Image className='xl:ml-8 -translate-x-[1.75rem] md:-translate-x-0 lg:-translate-x-0 xl:translate-x-10 translate-y-40 xl:translate-y-4 lg:translate-y-4 md:-translate-y-48 text-to-reveal'
             src='/imgs/home_1.webp' width={700} height={700} alt='banner' />
          </div>
          <div className='col-span-1 order-1 lg:order-2 mx-auto flex items-center w-full'>
            <div className='flex flex-col h-full w-2/3 mt md:pl-10'>
              <div className='h-auto w-full mt-5'>
                <span className='inline-block text-white font-extrabold text-3xl md:text-5xl lg:translate-y-10 lg:translate-x-[-2rem] translate-y-6 translate-x-4 text-to-reveal'>We Are</span>
              </div>
              <div className='h-auto w-full'>
                <span className='inline-block text-white font-extrabold text-[90px] md:text-[140px] lg:translate-y-1 lg:translate-x-[-3.5rem] translate-y-1 translate-x-2 mb-2 text-to-reveal'>Creat</span>
              </div>
              <div className='h-auto w-full'>
                <span className='inline-block text-white font-extrabold uppercase text-[80px] md:text-[140px] lg:-translate-y-24 lg:translate-x-[-3rem] md:-translate-y-[5.5rem]  -translate-y-12 translate-x-4 text-to-reveal'>Ive</span>

                <span className='inline-block rotate-[90deg] font-black text-white text-[22px] md:text-[42px] 
                translate-x-[7.25rem] translate-y-[-9.5rem] md:-translate-x-8 md:-translate-y-28 lg:-translate-y-[215px] lg:translate-x-[143px] xl:-translate-y-[115px] xl:translate-x-[-95px] text-to-reveal'>Digital</span>
              </div>
              <div className='h-auto w-full'>
                <span className='inline-block -translate-y-[5rem] translate-x-4 lg:-translate-y-[14rem] lg:translate-x-[-3.5rem] xl:-translate-y-[165px] xl:translate-x-[-3.5rem] md:translate-x-4 md:-translate-y-[150px] font-extrabold text-white text-[30px] md:text-[60px] text-to-reveal'>Agency</span>

                <p className='font-medium text-white text-[15px] inline-block md:-tra -translate-y-20 translate-x-3 lg:-translate-y-56 lg:translate-x-[-3.25rem] xl:-translate-y-[10.5rem] xl:translate-x-[-3.5rem] md:-translate-y-40 md:translate-x-2 text-to-reveal'>At Webnike, we blend innovation with design, crafting compelling digital experiences that captivate and engage your audience.</p>

                <button onClick={handleClick} className='relative text-to-reveal right-28 lg:-translate-y-[16.5rem] lg:translate-x-[22rem] flex -translate-y-12 translate-x-44 xl:-translate-y-[10rem] xl:translate-x-[29rem] md:-translate-y-36 md:translate-x-[140px] items-center text-white bg-transparent lg:text-[18px] font-semibold leading-none capitalize border border-sky-500 rounded-full px-8 py-4 group-hover:translate-x-6 transition duration-200 hover:bg-sky-600 ease-in delay-100 hover:text-white group'>
                  <span>Get Started</span>
                  <div className='flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-[70px] w-[60px] h-[60px] rounded-full bg-sky-600 text-white text-center leading-[60px] transition ease duration-200 group-hover:translate-x-[-170px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin='round' className='lucide lucide-arrow-up-right m-auto'>
                      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
          <div className='col-span-1 order-2 lg:order-1 w-full mx-auto relative'>
            <div className='hidden  lg:flex mt-20 pl-7 text-to-reveal' > 
            </div>
            <Image className='lg:flex mt-20 pl-7 xl:ml-16 -translate-x-[2.25rem] md:translate-x-10 lg:-translate-x-0 xl:-translate-x-9 translate-y-24 xl:-translate-y-20 lg:-translate-y-28 md:-translate-y-48 text-to-reveal'
             src='/imgs/home-banner-3.webp' width={700} height={700} alt='banner' />
          </div>
          <div className='col-span-1 order-1 lg:order-2 mx-auto flex items-center w-full'>
            <div className='flex flex-col h-full w-2/3 mt md:pl-10'>
              <div className='h-auto w-full mt-5'>
                <span className='inline-block text-white font-extrabold text-3xl md:text-5xl lg:translate-y-10 lg:translate-x-[-2rem] translate-y-6 translate-x-4 text-to-reveal'>We Are</span>
              </div>
              <div className='h-auto w-full'>
                <span className='inline-block text-white font-extrabold text-[90px] md:text-[140px] lg:translate-y-1 lg:translate-x-[-3.5rem] translate-y-1 translate-x-2 mb-2 text-to-reveal'>Creat</span>
              </div>
              <div className='h-auto w-full'>
                <span className='inline-block text-white font-extrabold uppercase text-[80px] md:text-[140px] lg:-translate-y-24 lg:translate-x-[-3rem] md:-translate-y-[5.5rem]  -translate-y-12 translate-x-4 text-to-reveal'>Ive</span>

                <span className='inline-block rotate-[90deg] font-black text-white text-[22px] md:text-[42px] 
                translate-x-[7.25rem] translate-y-[-9.5rem] md:-translate-x-8 md:-translate-y-28 lg:-translate-y-[215px] lg:translate-x-[143px] xl:-translate-y-[115px] xl:translate-x-[-95px] text-to-reveal'>Digital</span>
              </div>
              <div className='h-auto w-full'>
                <span className='inline-block -translate-y-[5rem] translate-x-4 lg:-translate-y-[14rem] lg:translate-x-[-3.5rem] xl:-translate-y-[165px] xl:translate-x-[-3.5rem] md:translate-x-4 md:-translate-y-[150px] font-extrabold text-white text-[30px] md:text-[60px] text-to-reveal'>Agency</span>

                <p className='font-medium text-white text-[15px] inline-block md:-tra -translate-y-20 translate-x-3 lg:-translate-y-56 lg:translate-x-[-3.25rem] xl:-translate-y-[10.5rem] xl:translate-x-[-3.5rem] md:-translate-y-40 md:translate-x-2 text-to-reveal'>At Webnike, we blend innovation with design, crafting compelling digital experiences that captivate and engage your audience.</p>

                <button onClick={handleClick} className='relative text-to-reveal right-28 lg:-translate-y-[16.5rem] lg:translate-x-[22rem] flex -translate-y-12 translate-x-44 xl:-translate-y-[10rem] xl:translate-x-[29rem] md:-translate-y-36 md:translate-x-[140px] items-center text-white bg-transparent md:text-[18px] font-semibold leading-none capitalize border border-sky-500 rounded-full px-8 py-4 group-hover:translate-x-6 transition duration-200 hover:bg-sky-600 ease-in delay-100 hover:text-white group'>
                  <span>Get Started</span>
                  <div className='flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-[70px] w-[60px] h-[60px] rounded-full bg-sky-600 text-white text-center leading-[60px] transition ease duration-200 group-hover:translate-x-[-170px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin='round' className='lucide lucide-arrow-up-right m-auto'>
                      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
         </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Slider
