"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { BadgeCheck, MoveUpRightIcon } from 'lucide-react';

const Revenue_Background = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, []);

  const stats = [
    { end: 10, label: 'PROJECTS DONE', unit: 'K' },
    { end: 65, label: 'Team Members', unit: '+' },
    { end: 8, label: 'happy clients', unit: 'K' },
    { end: 15, label: 'awards', unit: '+' }
  ];

  const reasons = [
    { icon: 'badge-check', title: 'Premium Standards', description: 'A high standard represents the pinnacle of quality and excellence' },
    { icon: 'badge-check', title: 'Prioritizing People', description: 'fostering meaningful connections, and creating environments where everyone can thrive.' },
    { icon: 'badge-check', title: 'Innovative Approaches', description: 'Different thinking fuels innovation and opens doors to new possibilities' },
    { icon: 'badge-check', title: 'The Expertise Team', description: 'Group dedicated to delivering exceptional results through their combined knowledge, experience, and collaboration.' }
  ];

  return (
    <>
      <div
        className='flex relative justify-center mt-12 pt-3 pb-10 w-full border rounded-tr-[150px] z-[10] rounded-tl-[150px] bl-[0px] br-[0px] bg-[#9028cc] h-[screen] md:h-[30vh]'
        style={{ zIndex: 1 }}
        data-aos="fade-up"
        ref={ref}
      >
        <div className='grid grid-cols-1 md:grid-cols-4 gap-[5.75rem] ml-10 mr-10 pl-4 pr-4 pt-4'>
          {stats.map((stat, index) => (
            <div key={index} className='grid-cols-1 col-span-1'>
              <div className='text-[60px] lg:text-[100px] font-black leading-none opacity-[26%]'>
                {inView ? <CountUp end={stat.end} duration={2.75} /> : '0'}{stat.unit}
              </div>
              <p className='md:text-[20px] inline-block font-semibold leading-[1.15] text-white truncate lg:-translate-y-11'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-full md:h-full lg:h-[140vh] z-[12] xl:h-[120vh] bg-[#0d0237]"
        ref={containerRef}
        style={{
          backgroundImage: isVisible ? "url('/imgs/revenue-bg.webp')" : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 2,
          minHeight: '100vh'
        }}
        data-aos="zoom-in">
        <div className='flex pt-28 h-full w-full pl-6 pr-6'>
          <div className='grid lg:grid-cols-3 grid-cols-1 z-[12] gap-12 lg:gap-0 w-full'>
            <div className='grid-cols-1 order-1 lg:order-1'>
              <div className='flex justify-start'>
                <div className='rounded-full pl-7 pr-7 pt-1 pb-1 bg-slate-800 text-purple-500 font-semibold text-lg'>Why Choose Us</div>
              </div>
              <div className='pt-6 leading-[3.25rem] text-4xl md:text-[50px] text-white font-extrabold pb-6'>Boost Your Business Revenue</div>
              <p className='md:text-[17px] text-white'>
                We are a team of over 100 seasoned software engineers with a decade of experience in delivering top-notch products. Believe it because you've seen it.
              </p>
              <div className='flex items-center mt-4 group'>
                <button className='mt-8 text-sky-600 bg-transparent md:text-[18px] font-semibold leading-none capitalize border border-sky-500 rounded-full px-8 py-5 group-hover:translate-x-10 transition duration-300 hover:bg-sky-600 ease-in delay-100 hover:text-white'>
                  <Link href="/Services">
                    <span>View more</span>
                  </Link>
                </button>
                <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-sky-600 mt-8 ml-2 group-hover:-translate-x-52 transition duration-200 delay-150 ease-in-out'>
                <MoveUpRightIcon className='stroke-white'/>
                </div>
              </div>
            </div>
            <div className='grid-cols-1 col-span-1 order-3 lg:order-2' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <div className='overflow-hidden -z-50 xl:-translate-x-32 xl:translate-y-4 lg:h-[109vh] xl:h-[100vh] md:w-[50vw]'>
                <Image className='object-cover w-full h-full' src={"/imgs/revenue-center.webp"} width={800} height={600} alt='revenue_girl_bg' />
              </div>
            </div>
            <div className='grid-cols-1 col-span-1 order-2 lg:order-3 text-white z-10'>
              {reasons.map((reason, index) => (
                <div key={index} className='mb-6'>
                  <div className='flex justify-start items-center mb-3'>
                   <BadgeCheck className='stroke-sky-400'/>
                    <div className='text-gray-100 font-semibold text-xl md:text-[26px] pl-2'>{reason.title}</div>
                  </div>
                  <div className='text-white md:text-[18px]'>{reason.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Revenue_Background;
