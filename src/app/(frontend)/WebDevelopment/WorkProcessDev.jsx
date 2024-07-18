"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkProcessDev = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <div className='bg-gray-200 dark:bg-transparent p-4'>
            <div className='grid lg:grid-cols-2 grid-cols-1' data-aos="fade-up">
                <div className='mt-10 p-5'>
                    <div>
                        <div className='text-purple-700 text-lg font-semibold italic'>WHY US</div>
                        <span className='text-slate-800 dark:text-gray-200 text-4xl font-bold'>How Do We Build Corporate</span>
                        <div className='text-slate-800 dark:text-gray-200 text-3xl font-extrabold'>Services</div>
                    </div>
                </div>
                <div className='mt-20 p-5 '>
                    <div className='text-purple-700  text-base font-semibold italic'> We try to understand the specifics of your business and industry to provide the best-suited solutions. Find out how we do it!
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5 mt-5'>
                <div className='p-4 ' data-aos="flip-down">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/inventory.png" width={64} height={64} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>01</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>We collect requirements</div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>We collect expectations for the project. We determine what goals the service is to achieve and what processes it should support.</div>
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4' data-aos="flip-up">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:rotate-45 transition ease-in duration-200 delay-100' src="/imgs/analysis.png" width={64} height={64} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>02</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Person Analysis</div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>We analyse who is the recipient of the website, for what purpose and in what context they will use it.</div>
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4' data-aos="flip-down">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/template.png" width={64} height={64} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>03</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Mock-ups, schematics and prototypes</div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>We build website mockups, develop flows for individual functionalities and create prototypes based on collected and analysed data.</div>                           
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4 ' data-aos="flip-up">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:rotate-45 transition ease-in duration-200 delay-100' src="/imgs/graphic-design.png" width={64} height={64} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>04</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Graphic design
                                </div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>We design graphics of individual subpages that correspond to the developed communication hierarchy and are consistent with BrandBook and Corporate Identity.</div>
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4 ' data-aos="flip-down">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src="/imgs/web-development.png" width={64} height={64} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>05</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Programming works</div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>We turn the developed assumptions and drawn designs into functional solutions prepared for design sprints.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4 ' data-aos="flip-up">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:rotate-45 transition ease-in duration-200 delay-100' src="/imgs/responsive-design.png" width={64} height={64} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>06</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Multi-platform tests</div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>We test the entire website along with the developed functionalities on various platforms, browsers and scenarios.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WorkProcessDev