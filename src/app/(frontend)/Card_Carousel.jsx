"use client"
import React, { useEffect } from 'react'
import MultipleSlideCarousel from './MultiSlideCarousel'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';


const Card_Carousel = () => {
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
    <div className='text-foreground/80  mt-8 lg:-mt-36 xl:-mt-72'>
        <div className='text-center' ref={ref} data-aos="fade-up" >
        <div className='text-purple-700 font-semibold md:text-lg mb-2 '>Our Best Services</div>
        <div className='font-extrabold text-3xl md:text-5xl mb-5'> We Provide Best Services </div>
        </div>
        <MultipleSlideCarousel/>
        </div>
    

    
  )
}

export default Card_Carousel