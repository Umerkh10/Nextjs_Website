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
        <div className='grid lg:grid-cols-2 grid-cols-1 h-[90vh] pt-20  bg-gray-200 dark:bg-transparent '>
            <div className='p-8 mt-6' data-aos="fade-up">
                <Image src={"/imgs/seo_testimonal_bg.webp"} width={800} height={600} alt='seo_testimonial'></Image>
            </div>
            <div className='p-4' data-aos="fade-down">
                <div className='text-4xl font-bold mt-10 '>What Client's Say About Us</div>
                <div className='mt-4 font-medium text-purple-600 text-lg '>Best Seo Optimization Agency</div>

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
                        <div className=' border rounded-lg w-full mt-4 p-8 font-medium bg-slate-900 dark:bg-slate-200 text-white dark:text-purple-900 text-lg group hover:scale-105 hover:shadow-2xl transition ease-in duration-150 delay-100 '>WebNike's SEO expertise transformed our online presence. Our traffic has skyrocketed, and our business is thriving like never before!
                        </div>
                        <div className='flex  mt-5'>
                            <div className='border flex items-center justify-center rounded-full w-20 h-20 overflow-hidden'>
                                <Image className='' src={"/imgs/seo-testimonial.png"} width={80}  height={80} alt='testimonial_slider'/>
                            </div>
                            
                            <div className='font-semibold text-2xl text-purple-900 pt-3 pl-3 dark:text-gray-300'> Michael Pierson
                                <br /> <span className='text-purple-600 text-lg dark:text-gray-300'>Senior Manager</span>
                            </div>
                        </div>
                        </>
                    </SwiperSlide>

                    <SwiperSlide className='p-5'>
                        <div className='border rounded-lg w-full mt-4 p-8 font-medium bg-slate-900 dark:bg-slate-200 text-white dark:text-purple-900 text-lg group hover:scale-105 hover:shadow-2xl transition ease-in duration-150 delay-100 '>WebNike's SEO team is knowledgeable and responsive. They provided us with a customized strategy that perfectly suited our needs.
                        </div>
                        <div className='flex  mt-5'>
                            <div className='border flex items-center justify-center rounded-full w-20 h-20 overflow-hidden'>
                                <Image className='object-cover' src={"/imgs/seo-testimonial-2.png"} width={80}  height={80} alt='testimonial_slider'/>
                            </div>
                            
                            <div className='font-semibold text-2xl text-purple-900 pt-3 pl-3 dark:text-gray-300'> Steve Harris
                                <br /> <span className='text-purple-600 text-lg dark:text-gray-300'>Senior Manager</span>
                            </div>
                        </div>


                    </SwiperSlide>

                    <SwiperSlide className='p-5'>
                        <div className='border rounded-lg w-full mt-4 p-8 font-medium bg-slate-900 dark:bg-slate-200 text-white dark:text-purple-900 text-lg group hover:scale-105 hover:shadow-2xl transition ease-in duration-150 delay-100 '>Partnering with WebNike was the best decision for our SEO needs. Their professionalism and results-oriented approach are unmatched
                        </div>
                        <div className='flex  mt-5'>
                            <div className='border flex items-center justify-center rounded-full w-20 h-20 overflow-hidden'>
                                <Image className='object-cover ml-1' src={"/imgs/seo-testimonial-3.png"} width={100}  height={80} alt='testimonial_slider'/>
                            </div>
                            
                            <div className='font-semibold text-2xl text-purple-900 pt-3 pl-3 dark:text-gray-300'> David Hayes
                                <br /> <span className='text-purple-600 text-lg dark:text-gray-300'>Senior Manager</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='p-5'>
                        <div className='border rounded-lg w-full mt-4 p-8 font-medium bg-slate-900 dark:bg-slate-200 text-white dark:text-purple-900 text-lg group hover:scale-105 hover:shadow-2xl transition ease-in duration-150 delay-100 '>WebNike delivered exceptional SEO results for our company. Their expertise and dedication are evident in the increased traffic and leads we've received.
                        </div>
                        <div className='flex  mt-5'>
                            <div className='border flex items-center justify-center rounded-full w-20 h-20 overflow-hidden'>
                                <Image  className='object-cover pr-2' src={"/imgs/seo-testimonial-4.webp"} width={70}  height={70} alt='testimonial_slider'/>
                            </div>
                            
                            <div className='font-semibold text-2xl text-purple-900 pt-3 pl-3 dark:text-gray-300'> Allison Woods
                                <br /> <span className='text-purple-600 text-lg dark:text-gray-300'>Senior Manager</span>
                            </div>
                        </div>
                    </SwiperSlide>



                </Swiper>

            </div>
        </div>
    )
}

export default SeoTestimonial