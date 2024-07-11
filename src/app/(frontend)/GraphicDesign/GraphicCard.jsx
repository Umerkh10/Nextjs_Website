"use client"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import React, { useEffect } from 'react'

const GraphicCard = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <div className=' bg-gray-200 dark:bg-transparent' data-aos="fade-up">
            <div className='pt-14 text-xl font-bold text-orange-500 text-center'>Comprehensive Graphic Design Solutions</div>
            <div className='mt-2 text-4xl font-extrabold text-center'>Explore Our Expertise in Graphic Design Services</div>
            <div className='lg:pl-28 lg:pr-28 text-opacity-50 mt-4 text-center '>Our diverse range of graphic design services ensures that your brand stands out in every aspect. From creating eye-catching logos to producing engaging explainer videos, we cover all your visual needs. Discover the specific services we offer to elevate your brand’s visual identity and effectively communicate your message to your audience.</div>

            <div className='p-3 lg:p-10'>
                <Swiper
                    loop={true}
                    spaceBetween={20}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    modules={[Navigation, Autoplay]}
                    data-aos="flip-left"
                    breakpoints={{

                        325: {
                            slidesPerView: 1,
                        },

                        768: {
                            slidesPerView: 2,
                        },

                        1024: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}

                >
                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-gray-600 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/pen-tool.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-gray-200 '>01</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Logo Design</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>We craft unique, memorable logos that capture your brand's essence and resonate with your audience.</div>
                                    <div className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-gray-600 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/achieve.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-gray-200 '>02</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Brand Identity Design</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>We develop cohesive brand identities that reflect your vision, ensuring a consistent and compelling look across all platforms.</div>
                                    <div className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-gray-600 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/print.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-gray-200 '>03</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Print Design</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>We create striking print designs, from brochures to business cards, that effectively communicate your message.</div>
                                    <div className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className=' relative group-hover:scale-105 group-hover:border-gray-600 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/product-design.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-gray-200 '>04</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Packaging Design</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>We design eye-catching and functional packaging that highlights your product’s best features and enhances brand appeal.</div>
                                    <div className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-gray-600 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/digital.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-gray-200 '>05</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Social Media Graphics</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>We create engaging social media graphics that capture attention and drive user interaction across all platforms.</div>
                                    <div className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-gray-600 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/infographic-elements.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-gray-200 '>06</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Infographics Design</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>We design compelling infographics that simplify complex information, making it easy to understand and visually appealing.</div>
                                    <div className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-gray-600 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/motion-graphic.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-gray-200 '>07</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Motion Graphics & Design</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>We produce dynamic motion graphics that bring your story to life, enhancing engagement and impactful content.</div>
                                    <div className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default GraphicCard