"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';

const Work_Process = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1, 
      });

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
          });
      }, [inView]);

      
  return (
    <>
<div className="flex justify-center mt-24 text-purple-700 font-bold md:text-lg uppercase">
  Work Process
</div>
<div className="flex justify-center mt-3 font-black md:text-4xl text-3xl uppercase mb-5">
  Our Work Process
</div>
<div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 pl-3 pr-3 mb-5 text-foreground/80" ref={ref}>
  {[
    {
      step: "01",
      title: "Listen Problems",
      description: "We're here to assist with any digital challenges you encounter—just reach out to us!",
      imgSrc: "/imgs/work_process_1.webp",
      aos: "fade-up",
    },
    {
      step: "02",
      title: "Make Some Research",
      description: "We're partnering with digital agencies to enhance our online presence—stay tuned!",
      imgSrc: "/imgs/work_process_2.webp",
      aos: "fade-down",
    },
    {
      step: "03",
      title: "Make Shorting",
      description: "Let's optimize our tasks for better efficiency and clarity.",
      imgSrc: "/imgs/work_process_3.webp",
      aos: "fade-up",
    },
    {
      step: "04",
      title: "Do Final Work",
      description: "Putting the finishing touches on our project—so close to completion!",
      imgSrc: "/imgs/work_process_4.webp",
      aos: "fade-down",
    },
  ].map((item, index) => (
    <div className="group" data-aos={item.aos} key={index}>
      <div className="max-w-[202px] h-[202px] mx-auto mb-[22px] rounded-full overflow-hidden">
        <Image className="object-cover" src={item.imgSrc} width={220} height={100} alt={item.title.toLowerCase().replace(/\s+/g, "_")} />
      </div>
      <div className="flex justify-center">
        <div className="text-[56px] font-bold leading-[1.17] text-[rgba(254,117,36,0.15)] relative z-[1] mr-7 mb-[25px] group-hover:text-purple-500 transition ease-in duration-200 delay-200">
          {item.step} <span className="text-[56px] text-sky-600 font-light">| </span>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="font-semibold md:text-[20px]">{item.title}</span>
      </div>
      <div className="flex justify-center pr-5 pl-10">
        <span className="font-medium text-[14px]">{item.description}</span>
      </div>
    </div>
  ))}
</div>
    </>
  )
}

export default Work_Process