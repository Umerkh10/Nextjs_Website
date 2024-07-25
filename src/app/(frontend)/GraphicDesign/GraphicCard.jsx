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
    const handleClick = () => {
        if (typeof window !== 'undefined' && typeof window.openChat !== 'undefined') {
          window.openChat();
        } else {
          console.error('openChat function is not available');
        }
      };
         
    return (
        <div className=' bg-gray-200 dark:bg-transparent p-5' data-aos="fade-up">
            <div className='pt-14 md:text-xl text-lg font-bold text-purple-600 text-center italic'>All-Inclusive Visual Design Services</div>
            <div className='mt-2 md:text-4xl text-2xl font-extrabold text-center'>Discover Our Mastery in Graphic Design Solutions</div>
            <div className='lg:pl-28 lg:pr-28 text-opacity-50 font-medium mt-4 text-center italic '>Our extensive graphic design services guarantee your brand makes a memorable impression in every facet. Whether it's designing striking logos or crafting compelling explainer videos, we handle all your visual requirements. </div>

            <div className='p-3 lg:p-6'>
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
                            <div className='relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/footer-bg.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/pen-tool.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500 '>01</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Logo Design</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>We design distinctive and impactful logos that embody your brand’s core identity and connect deeply with your audience.</div>

                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-sky-500 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/footer-bg.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/achieve.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500'>02</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Brand Identity Design</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>We craft unified brand identities that embody your vision, delivering a seamless and impactful appearance across every platform.</div>
                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-sky-500 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/footer-bg.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/print.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500'>03</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Print Design</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>
                                    We craft eye-catching print materials, from brochures to business cards, that powerfully convey your message.</div>
                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-sky-500 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className=' relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/footer-bg.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/product-design.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500 '>04</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Packaging Design</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>Crafting visually striking and practical packaging that showcases your product’s key attributes and elevates your brand’s presence.</div>
                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-sky-500 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/footer-bg.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/digital.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500 '>05</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Social Media Graphics</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>
                                    We design captivating social media visuals that grab attention and boost engagement across every platform.</div>
                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-sky-500 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/footer-bg.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/infographic-elements.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500 '>06</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Infographics Design</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>We create engaging infographics that distill intricate details, making them straightforward and easy to grasp.</div>
                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-sky-500 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-black/45 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/footer-bg.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/motion-graphic.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500 '>07</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Motion Graphics & Design</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>We create captivating motion graphics that energize your narrative, boosting engagement and delivering compelling content.</div>
                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-sky-500 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' />
                                    </button>
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