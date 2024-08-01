"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import Testimonial_Slider from './Testimonial_Slider'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
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

  
  console.log(inView);
  return (
    <div className='pb-10 pt-32 relative z-[1]' ref={ref} data-aos="fade-right">
        <div class="absolute mt-24 top-0 left-0 h-screen md:h-[125vh] lg:w-[58%] lg:h-[78vh] rounded rounded-r-[500px] overflow-hidden -z-10">
            <Image src={"/imgs/Contact_details_bg.webp"} width={800} height={800} alt='bg-testimonial' ></Image>
</div>
 <div className='w-[34%] md:w-1/4 lg:w-1/6 border rounded-full pt-1 pb-1 text-center ml-4 bg-gray-200'> <span className='text-purple-700 font-semibold'>Our Testimonials </span> </div>
 <div className='pt-4 pl-4 mb-5'>
    <span className='text-4xl text-white font-bold' >What Our Clients Say </span>
 </div>
 <Testimonial_Slider/>
</div>
  )
}

export default Testimonials