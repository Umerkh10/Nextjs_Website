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
    <div className='text-foreground/80  mt-8 lg:-mt-36 xl:-mt-64'>
        <div className='text-center' ref={ref} data-aos="fade-up" >
        <h4 className='text-purple-700 font-semibold md:text-lg mb-2 '>Our Best Services</h4>
        <h2 className='font-extrabold text-3xl md:text-5xl mb-5'> We Provide Best Services </h2>
        </div>
        <MultipleSlideCarousel/>
        </div>
    

    
  )
}

export default Card_Carousel