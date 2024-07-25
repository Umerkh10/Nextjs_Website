"use client"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import React from 'react'

const AppService = () => {
    const handleClick = () => {
        if (typeof window !== 'undefined' && typeof window.openChat !== 'undefined') {
          window.openChat();
        } else {
          console.error('openChat function is not available');
        }
      };
      
    return (
        <div className='bg-slate-200 dark:bg-transparent pt-10'>
            <div className='text-center font-extrabold text-3xl md:text-5xl' data-aos="fade-down">Our App Development Services</div>

            <div className='text-center font-semibold text-base italic pt-5 pl-20 pr-20'data-aos="fade-up"> We provide comprehensive app development services, specializing in creating custom, high-performance mobile and web applications tailored to your business needs. Our team ensures seamless functionality, intuitive user interfaces, and cutting-edge technology to deliver an exceptional user experience. From initial concept to final deployment, we focus on quality and efficiency to bring your vision to life.</div>


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
                            <div className='relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-sky-400 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:rotate-180 transition ease-in duration-200 delay-100' src="/imgs/flutter.png" width={60} height={60} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500 '>01</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Flutter App Development</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>Flutter framework allows for developing high-quality apps for iOS and Android platforms using a single codebase.</div>
                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' /></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-sky-400 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-180 transition ease-in duration-200 delay-100' src="/imgs/unity.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500'>02</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Unity App Development</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>Unity is a powerful and popular game engine that helps businesses create high-quality mobile applications.</div>
                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                    Get Started <ArrowRight className='-rotate-45 ml-1 ' /></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-sky-400 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-180 transition ease-in duration-200 delay-100' src="/imgs/science.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500'>03</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>React Native</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>Our React Native developers are committed to delivering top-quality iOS and Android apps that meet and exceed our client’s expectations.</div>
                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                    Get Started <ArrowRight className='-rotate-45 ml-1 ' /></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className=' relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-sky-400 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-90 transition ease-in duration-200 delay-100' src="/imgs/cross-platform.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500 '>04</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Cross-Platform Development</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>Cross-Platform app development is the perfect solution for businesses targeting multiple platforms while reducing development time and cost.</div>
                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                    Get Started <ArrowRight className='-rotate-45 ml-1 ' /></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-sky-400 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-180 transition ease-in duration-200 delay-100' src="/imgs/hybrid.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500 '>05</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Hybrid App Development</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>With our team of experienced developers, companies can leverage the power of hybrid technology to build top-quality mobile apps.</div>
                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                    Get Started <ArrowRight className='-rotate-45 ml-1 ' /></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-sky-400 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:-rotate-180 transition ease-in duration-200 delay-100' src="/imgs/android.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500 '>06</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Android App Development</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>Android is the most widely used OS; developing an Android app can help businesses reach a broad audience.</div>
                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                        Get Started <ArrowRight className='-rotate-45 ml-1 ' /></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='group mt-5'>
                            <div className='relative group-hover:scale-105 group-hover:border-violet-800 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-sky-400 lg:h-[55vh] lg:w-[25vw] rounded-xl p-4 overflow-hidden'>
                                <div style={{ backgroundImage: "url('/imgs/graphic_card_bg.png')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                                <div className='relative z-10'>
                                    <div className='flex justify-between'>
                                        <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                            <Image className='group-hover:rotate-180 transition ease-in duration-200 delay-100' src="/imgs/apple.png" width={64} height={64} alt='pen'></Image>
                                        </div>
                                        <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-violet-500 '>07</div>
                                    </div>
                                    <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>IOS App Development</div>
                                    <div className='pt-3 text-base font-medium group-hover:text-gray-200'>iOS apps are built with security in mind, protecting user data and preventing potential security threats.</div>
                                    <button onClick={handleClick} className=' border-black group-hover:border-white dark:border-white group-hover:text-gray-200 border rounded-xl lg:w-[14vw] md:w-[20vw] w-[40vw] h-[8vh] lg:h-[6vh] flex justify-center items-center mt-5 hover:bg-orange-600 ease-in transition duration-200 delay-100 overflow-hidden '>
                                    Get Started <ArrowRight className='-rotate-45 ml-1 ' /></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    )
}

export default AppService