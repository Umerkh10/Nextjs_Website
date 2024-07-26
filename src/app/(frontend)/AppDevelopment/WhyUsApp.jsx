"use client"
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const WhyUsApp = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const handleClick = () => {
        if (typeof window !== 'undefined' && typeof window.openChat !== 'undefined') {
          window.openChat();
        } else {
          console.error('openChat function is not available');
        }
      };
  return (
    <div className='bg-slate-200 dark:bg-transparent pt-10'>
        <div className='grid lg:grid-cols-3 grid-cols-1 p-5'>
            <div className='col-span-2' data-aos="fade-up">
                <div className='text-5xl font-extrabold'>Why Choose Webnike For <br />App Development</div>

                <div className=' font-medium pt-4'>WebNike is a leading provider of top-notch app development services, dedicated to transforming your innovative ideas into powerful, user-friendly applications. With a team of highly skilled developers, cutting-edge technology, and a commitment to excellence,</div>

                <div className='font-medium pt-4'>WebNike ensures your app not only stands out in the market but also delivers a seamless user experience. Choose WebNike for your app development needs and benefit from our personalized approach, timely delivery, and unparalleled support, guaranteeing your project’s success from concept to launch and beyond.</div>

                <div className='grid grid-cols-2 pt-8' ref={ref}>
                    <div className='flex justify-center items-center group' data-aos="flip-up">
                        <div className=' border-[5px] border-orange-500 rounded-lg h-[25vh] lg:h-[20vh] lg:w-[14vw] bg-purple-700 p-1 group-hover:border-sky-300 group-hover:scale-110 transition ease-in duration-200 delay-200 '>
                            <div className='text-center mt-8 font-extrabold text-3xl text-white '>{inView ? <CountUp end={800} duration={2.75} /> : '0'}+</div>
                            <div className='text-center font-semibold text-lg text-white'>Projects Launched</div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center group' data-aos="flip-down">
                        <div className=' border-[5px] border-orange-500 rounded-lg h-[25vh] lg:h-[20vh] lg:w-[14vw] bg-purple-700  group-hover:border-sky-300 group-hover:scale-110 transition ease-in duration-200 delay-200  '>
                            <div className='text-center mt-8 font-extrabold text-3xl text-white '>{inView ? <CountUp end={6} duration={2.75} /> : '0'}+</div>
                            <div className='text-center font-semibold text-lg text-white'>Years Of Experience</div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center group mt-4' data-aos="flip-left">
                        <div className=' border-[5px] border-orange-500 rounded-lg h-[25vh] lg:h-[20vh] lg:w-[14vw] bg-purple-700 p-1 group-hover:border-sky-300 group-hover:scale-110 transition ease-in duration-200 delay-200  '>
                            <div className='text-center mt-8 font-extrabold text-3xl text-white'>{inView ? <CountUp end={400} duration={2.75} /> : '0'}+</div>
                            <div className='text-center font-semibold text-lg text-white'>Delighted Clients</div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center group mt-4' data-aos="flip-right">
                        <div className=' border-[5px] border-orange-500 rounded-lg h-[25vh] lg:h-[20vh] lg:w-[14vw] bg-purple-700 p-1 group-hover:border-sky-300 group-hover:scale-110 transition ease-in duration-200 delay-200  '>
                            <div className='text-center mt-8 font-extrabold text-3xl text-white '>{inView ? <CountUp end={95} duration={2.75} /> : '0'}%</div>
                            <div className='text-center font-semibold text-lg text-white'>Client Retention</div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className='p-5 lg:h-[40vh] mt-5 rounded-2xl ' style={{backgroundImage:"url('/imgs/bg-graphic-design.webp')",backgroundSize:'cover',backgroundPosition:'center' }}>
                <div className='text-gray-200 pt-3 text-3xl font-bold text-center'>The Benefits of Professional App Development</div>
                <div className='text-gray-200 text-lg pt-3 font-semibold text-center'> Unlock your business's potential with expertly crafted apps designed to drive growth, enhance user experience, and stay ahead of the competition.</div>

                <div className='flex justify-center pt-5 '>
            <button onClick={handleClick} className='mt-5 border rounded-2xl w-[60vw] md:w-[35vw] lg:w-[22vw] h-[10vh] flex items-center justify-center relative overflow-hidden bg-sky-500 font-medium text-white group hover:bg-sky-700 transition ease-in duration-200 delay-200 '> 
                Let's Talk App Development
                <ArrowRight className='ml-2 group-hover:translate-x-20 ease-in-out duration-200 delay-200'/>
            </button>
                  </div>
                </div>

            </div>
            <div className=' '>
                <div className='p-8' data-aos="fade-down">

                    <div data-aos="flip-down" className='group border-[3px] dark:border-gray-100  border-black rounded-lg h-32 w-44 bg-sky-300 hover:scale-110 transition ease-in duration-200 delay-200 hover:border-purple-600  '>
                        <div className='flex justify-center items-center'>
                        <Image className='group-hover:rotate-doors mt-4' src="/imgs/people.png" width={60} height={50} alt='group' ></Image>
                        </div>
                        <div className='text-base font-semibold text-center text-slate-900'>Experienced Team</div>
                    </div>

                    <div data-aos="flip-up" className='pt-4 flex justify-end'>
                    <div className='group border-[3px] dark:border-gray-100 border-black rounded-lg h-32 w-44 bg-sky-300 hover:scale-110 transition ease-in duration-200 delay-200 hover:border-purple-600 '>
                        <div className='flex justify-center items-center'>
                        <Image className='group-hover:rotate-doors mt-4' src="/imgs/scalability.png" width={60} height={50} alt='group' ></Image>
                        </div>
                        <div className='text-base font-semibold text-center text-slate-900 pt-2'>Enhanced ROI</div>
                    </div>
                    </div>

                    <div data-aos="flip-down" className='group border-[3px] dark:border-gray-100 border-black rounded-lg h-32 w-44 bg-sky-300 hover:scale-110 transition ease-in duration-200 delay-200 hover:border-purple-600 '>
                        <div className='flex justify-center items-center'>
                        <Image className='group-hover:rotate-doors mt-4' src="/imgs/medal.png" width={60} height={50} alt='group' ></Image>
                        </div>
                        <div className='text-base font-semibold text-center text-slate-900'> Customer Commitment</div>
                    </div>

                    <div data-aos="flip-up" className='pt-4 flex justify-end'>
                    <div className='group border-[3px] dark:border-gray-100 border-black rounded-lg h-32 w-44 bg-sky-300 hover:scale-110 transition ease-in duration-200 delay-200 hover:border-purple-600 '>
                        <div className='flex justify-center items-center'>
                        <Image className='group-hover:rotate-doors mt-4' src="/imgs/solution.png" width={60} height={50} alt='group' ></Image>
                        </div>
                        <div className='text-base font-semibold text-center text-slate-900 pt-2'>Agile Approach</div>
                    </div>
                    </div>

                    <div data-aos="flip-down" className='group border-[3px] dark:border-gray-100 border-black rounded-lg h-32 w-44 bg-sky-300 hover:scale-110 transition ease-in duration-200 delay-200 hover:border-purple-600 '>
                        <div className='flex justify-center items-center'>
                        <Image className='group-hover:rotate-doors mt-4' src="/imgs/ux.png" width={60} height={50} alt='group' ></Image>
                        </div>
                        <div className='text-base font-semibold text-center text-slate-900'>Captivating UX Design</div>
                    </div>

                    <div data-aos="flip-up" className='pt-4 flex justify-end'>
                    <div className='group border-[3px] dark:border-gray-100 border-black rounded-lg h-32 w-44 bg-sky-300 hover:scale-110 transition ease-in duration-200 delay-200 hover:border-purple-600 '>
                        <div className='flex justify-center items-center'>
                        <Image className='group-hover:rotate-doors mt-4' src="/imgs/encrypted.png" width={60} height={50} alt='group' ></Image>
                        </div>
                        <div className='text-base font-semibold text-center text-slate-900 pt-2'>Secured</div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUsApp