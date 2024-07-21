"use client"
import Image from 'next/image';
import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const WhyUsApp = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
  return (
    <div className='bg-slate-200 dark:bg-transparent pt-10'>
        <div className='grid lg:grid-cols-3 grid-cols-1 p-5'>
            <div className='col-span-2'>
                <div className='text-5xl font-extrabold'>Why Choose Webnike For <br />App Development</div>

                <div className=' font-medium pt-4'>WebNike is a leading provider of top-notch app development services, dedicated to transforming your innovative ideas into powerful, user-friendly applications. With a team of highly skilled developers, cutting-edge technology, and a commitment to excellence,</div>

                <div className='font-medium pt-4'>WebNike ensures your app not only stands out in the market but also delivers a seamless user experience. Choose WebNike for your app development needs and benefit from our personalized approach, timely delivery, and unparalleled support, guaranteeing your project’s success from concept to launch and beyond.</div>

                <div className='grid grid-cols-2 pt-8' ref={ref}>
                    <div className='flex justify-center items-center group'>
                        <div className=' border-[5px] border-orange-500 rounded-lg h-[25vh] lg:h-[20vh] lg:w-[14vw] bg-purple-700 p-1 group-hover:border-sky-300 group-hover:scale-110 transition ease-in duration-200 delay-200 '>
                            <div className='text-center mt-8 font-extrabold text-3xl text-white '>{inView ? <CountUp end={1000} duration={2.75} /> : '0'}+</div>
                            <div className='text-center font-semibold text-lg text-white'>Projects Launched</div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center group'>
                        <div className=' border-[5px] border-orange-500 rounded-lg h-[25vh] lg:h-[20vh] lg:w-[14vw] bg-purple-700  group-hover:border-sky-300 group-hover:scale-110 transition ease-in duration-200 delay-200  '>
                            <div className='text-center mt-8 font-extrabold text-3xl text-white '>{inView ? <CountUp end={10} duration={2.75} /> : '0'}+</div>
                            <div className='text-center font-semibold text-lg text-white'>Years Of Experience</div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center group mt-4'>
                        <div className=' border-[5px] border-orange-500 rounded-lg h-[25vh] lg:h-[20vh] lg:w-[14vw] bg-purple-700 p-1 group-hover:border-sky-300 group-hover:scale-110 transition ease-in duration-200 delay-200  '>
                            <div className='text-center mt-8 font-extrabold text-3xl text-white'>{inView ? <CountUp end={450} duration={2.75} /> : '0'}+</div>
                            <div className='text-center font-semibold text-lg text-white'>Delighted Clients</div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center group mt-4'>
                        <div className=' border-[5px] border-orange-500 rounded-lg h-[25vh] lg:h-[20vh] lg:w-[14vw] bg-purple-700 p-1 group-hover:border-sky-300 group-hover:scale-110 transition ease-in duration-200 delay-200  '>
                            <div className='text-center mt-8 font-extrabold text-3xl text-white '>{inView ? <CountUp end={90} duration={2.75} /> : '0'}%</div>
                            <div className='text-center font-semibold text-lg text-white'>Client Retention</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' '>
                <div className='p-8'>
                    <div className='group border-[3px] dark:border-gray-100  border-black rounded-lg h-32 w-44 bg-sky-300 hover:scale-110 transition ease-in duration-200 delay-200 hover:border-purple-600  '>
                        <div className='flex justify-center items-center'>
                        <Image className='group-hover:rotate-doors mt-4' src="/imgs/people.png" width={60} height={50} alt='group' ></Image>
                        </div>
                        <div className='text-base font-semibold text-center text-slate-900'>Skilled Team</div>
                    </div>

                    <div className='pt-4 flex justify-end'>
                    <div className='group border-[3px] dark:border-gray-100 border-black rounded-lg h-32 w-44 bg-sky-300 hover:scale-110 transition ease-in duration-200 delay-200 hover:border-purple-600 '>
                        <div className='flex justify-center items-center'>
                        <Image className='group-hover:rotate-doors mt-4' src="/imgs/scalability.png" width={60} height={50} alt='group' ></Image>
                        </div>
                        <div className='text-base font-semibold text-center text-slate-900 pt-2'>Increased ROI</div>
                    </div>
                    </div>

                    <div className='group border-[3px] dark:border-gray-100 border-black rounded-lg h-32 w-44 bg-sky-300 hover:scale-110 transition ease-in duration-200 delay-200 hover:border-purple-600 '>
                        <div className='flex justify-center items-center'>
                        <Image className='group-hover:rotate-doors mt-4' src="/imgs/medal.png" width={60} height={50} alt='group' ></Image>
                        </div>
                        <div className='text-base font-semibold text-center text-slate-900'>Great Customer Loyalty</div>
                    </div>

                    <div className='pt-4 flex justify-end'>
                    <div className='group border-[3px] dark:border-gray-100 border-black rounded-lg h-32 w-44 bg-sky-300 hover:scale-110 transition ease-in duration-200 delay-200 hover:border-purple-600 '>
                        <div className='flex justify-center items-center'>
                        <Image className='group-hover:rotate-doors mt-4' src="/imgs/solution.png" width={60} height={50} alt='group' ></Image>
                        </div>
                        <div className='text-base font-semibold text-center text-slate-900 pt-2'>Agile Methodology</div>
                    </div>
                    </div>

                    <div className='group border-[3px] dark:border-gray-100 border-black rounded-lg h-32 w-44 bg-sky-300 hover:scale-110 transition ease-in duration-200 delay-200 hover:border-purple-600 '>
                        <div className='flex justify-center items-center'>
                        <Image className='group-hover:rotate-doors mt-4' src="/imgs/ux.png" width={60} height={50} alt='group' ></Image>
                        </div>
                        <div className='text-base font-semibold text-center text-slate-900'>Engaging UX Design</div>
                    </div>

                    <div className='pt-4 flex justify-end'>
                    <div className='group border-[3px] dark:border-gray-100 border-black rounded-lg h-32 w-44 bg-sky-300 hover:scale-110 transition ease-in duration-200 delay-200 hover:border-purple-600 '>
                        <div className='flex justify-center items-center'>
                        <Image className='group-hover:rotate-doors mt-4' src="/imgs/encrypted.png" width={60} height={50} alt='group' ></Image>
                        </div>
                        <div className='text-base font-semibold text-center text-slate-900 pt-2'>100% Secured</div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUsApp