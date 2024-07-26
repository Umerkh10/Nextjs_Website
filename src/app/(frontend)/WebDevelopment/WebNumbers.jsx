"use client"
import React, { useEffect } from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WebNumbers = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
  return (
    <div className='bg-slate-200 dark:bg-transparent '>
        <div data-aos="fade-up" className='text-5xl font-extrabold pt-14 text-center'> <span className='text-purple-900 dark:text-gray-200'> Webnike</span> In Numbers</div>
        <div className='grid lg:grid-cols-4 grid-cols-2 lg:p-20 p-8 gap-5  ' ref={ref}>
            <div data-aos="fade-down" className='group border-[4px] border-purple-800 h-[25vh] rounded-lg hover:bg-purple-800 transition ease-in duration-200 delay-200 hover:border-sky-400 hover:rounded-2xl hover:scale-105 '>
                <div className='text-center font-extrabold text-3xl lg:text-4xl mt-5 md:mt-10 group-hover:text-gray-200'>+{inView ? <CountUp end={6} duration={2.75} /> : '0'}</div>
                <div className='text-center font-semibold text-lg lg:text-xl group-hover:text-gray-200'>Years on the Market</div>
            </div>

            <div data-aos="fade-up" className='group border-[4px] border-purple-800 h-[25vh] rounded-lg hover:bg-purple-800 transition ease-in duration-200 delay-200 hover:border-sky-400 hover:rounded-2xl hover:scale-105 '>
            <div className='text-center font-extrabold text-3xl lg:text-4xl mt-5 md:mt-10 group-hover:text-gray-200'>+{inView ? <CountUp end={60} duration={2.75} /> : '0'}</div>
            <div className='text-center font-semibold text-lg lg:text-xl group-hover:text-gray-200 '> Happy customers</div>
            </div>

            <div data-aos="fade-down" className='group border-[4px] border-purple-800 h-[25vh] rounded-lg hover:bg-purple-800 transition ease-in duration-200 delay-200 hover:border-sky-400 hover:rounded-2xl hover:scale-105 '>
            <div className='text-center font-extrabold text-3xl lg:text-4xl mt-5 md:mt-10 group-hover:text-gray-200'>+{inView ? <CountUp end={16} duration={2.75} /> : '0'}</div>
            <div className='text-center font-semibold text-lg lg:text-xl group-hover:text-gray-200'>Proven technologies</div>
            </div>

            <div data-aos="fade-up" className='group border-[4px] border-purple-800 h-[25vh] rounded-lg hover:bg-purple-800 transition ease-in duration-200 delay-200 hover:border-sky-400 hover:rounded-2xl hover:scale-105 '>
            <div className='text-center font-extrabold text-3xl lg:text-4xl mt-5 md:mt-10 group-hover:text-gray-200'>+{inView ? <CountUp end={25} duration={2.75} /> : '0'}</div>
            <div className='text-center font-semibold text-lg lg:text-xl group-hover:text-gray-200'>Cups of coffee consumed daily</div>
            </div>
        </div>
    </div>
  )
}

export default WebNumbers