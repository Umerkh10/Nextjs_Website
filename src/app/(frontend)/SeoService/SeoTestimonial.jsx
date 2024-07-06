"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SeoTestimonial = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 h-[90vh] mt-20 '>
            <div className='p-8 mt-6' data-aos="fade-up">
                <Image src={"/imgs/seo_testimonal_bg.webp"} width={800} height={600} alt='seo_testimonial'></Image>
            </div>
            <div className='p-4' data-aos="fade-down">
                <div className='text-4xl font-bold mt-10 '>What Client's Say About Us</div>
                <div className='mt-4 font-medium text-blue-600 text-lg '>Best Seo Optimization Agency</div>

                <Swiper
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    modules={[Navigation, Autoplay]}
                    data-aos="flip-left"
                >
                    <SwiperSlide className='p-5'>
                        <>
                        <div className=' border rounded-lg w-full mt-4 p-8 font-medium bg-slate-900 dark:bg-slate-200 text-white dark:text-blue-900 text-lg group hover:scale-105 hover:shadow-2xl transition ease-in duration-150 delay-100 '>
                            Fast and simple - that's why we chose to work with Bravis Team. They actively research the market and understand the customer. Their insights are directly applicable to Qolle's retail, foodservice and direct-to-consumer businesses.
                        </div>
                        <div className='flex  mt-5'>
                            <div className='border flex items-center justify-center rounded-full w-20 h-20 overflow-hidden'>
                                <Image className='object-cover' src={"/imgs/seo_testimonial_slider_1.png"} width={80}  height={80} alt='testimonial_slider'/>
                            </div>
                            
                            <div className='font-semibold text-2xl text-blue-900 pt-3 pl-3 dark:text-gray-300'> Michael Goodrich
                                <br /> <span className='text-blue-600 text-lg dark:text-gray-300'>Senior Manager</span>
                            </div>
                        </div>
                        </>
                    </SwiperSlide>

                    <SwiperSlide className='p-5'>
                        <div className='border rounded-lg w-full mt-4 p-8 font-medium bg-slate-900 dark:bg-slate-200 text-white dark:text-blue-900 text-lg group hover:scale-105 hover:shadow-2xl transition ease-in duration-150 delay-100 '>
                        Great design, code quality, simple functionality and backend, fast help, young, potential and creative development team always uphold quality. This is one of the best themes we have purchased on Envato.
                        </div>
                        <div className='flex  mt-5'>
                            <div className='border flex items-center justify-center rounded-full w-20 h-20 overflow-hidden'>
                                <Image className='object-cover' src={"/imgs/seo_testimonial_slider_2.png"} width={80}  height={80} alt='testimonial_slider'/>
                            </div>
                            
                            <div className='font-semibold text-2xl text-blue-900 pt-3 pl-3 dark:text-gray-300'> William Harris
                                <br /> <span className='text-blue-600 text-lg dark:text-gray-300'>Senior Manager</span>
                            </div>
                        </div>


                    </SwiperSlide>

                    <SwiperSlide className='p-5'>
                        <div className='border rounded-lg w-full mt-4 p-8 font-medium bg-slate-900 dark:bg-slate-200 text-white dark:text-blue-900 text-lg group hover:scale-105 hover:shadow-2xl transition ease-in duration-150 delay-100 '>
                        I have had many opportunities and many years of experience collaborating and working with a variety of press themes and templates from over the years, I can only say this is the best template of any level.
                        </div>
                        <div className='flex  mt-5'>
                            <div className='border flex items-center justify-center rounded-full w-20 h-20 overflow-hidden'>
                                <Image className='object-cover' src={"/imgs/seo_testimonial_slider_3.png"} width={80}  height={80} alt='testimonial_slider'/>
                            </div>
                            
                            <div className='font-semibold text-2xl text-blue-900 pt-3 pl-3 dark:text-gray-300'> James David
                                <br /> <span className='text-blue-600 text-lg dark:text-gray-300'>Senior Manager</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='p-5'>
                        <div className='border rounded-lg w-full mt-4 p-8 font-medium bg-slate-900 dark:bg-slate-200 text-white dark:text-blue-900 text-lg group hover:scale-105 hover:shadow-2xl transition ease-in duration-150 delay-100 '>
                        Great product, very easy to use, excellent support team, they assisted me and solved my problem within 5 hours. I am really satisfied and I will definitely be one of their longtime customers.
                        </div>
                        <div className='flex  mt-5'>
                            <div className='border flex items-center justify-center rounded-full w-20 h-20 overflow-hidden'>
                                <Image  src={"/imgs/seo_testimonial_slider_4.png"} width={80}  height={80} alt='testimonial_slider'/>
                            </div>
                            
                            <div className='font-semibold text-2xl text-blue-900 pt-3 pl-3 dark:text-gray-300'> Lanna Lynn
                                <br /> <span className='text-blue-600 text-lg dark:text-gray-300'>Senior Manager</span>
                            </div>
                        </div>
                    </SwiperSlide>



                </Swiper>

            </div>
        </div>
    )
}

export default SeoTestimonial