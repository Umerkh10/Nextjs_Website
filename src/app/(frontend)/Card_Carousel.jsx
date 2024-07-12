"use client"
import React, { useEffect } from 'react'
import MultipleSlideCarousel from './MultiSlideCarousel'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Card_Carousel = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 200, 
    });
  }, []);
  return (
    <div className='text-foreground/80 lg:-mt-24'>
        <div className='text-center' data-aos="fade-up" >
        <h4 className='text-purple-700 font-semibold text-lg mb-2 '>Our Best Services</h4>
        <h2 className='font-extrabold text-5xl mb-5'> We Provide Best Services </h2>
        </div>
        <MultipleSlideCarousel/>
        </div>
    

    
  )
}

export default Card_Carousel