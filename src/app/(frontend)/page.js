"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import NavbarToggle from './NavbarToggle'
import Slider from './Slider'
import Rating from './Rating'
import Image_Parallax from './Image_Parallax'
import Card_Carousel from './Card_Carousel'
import OurProject from './OurProject'
import Work_Process from './Work_Process'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Revenue_Background from './Revenue_Background'
import Loader from './Loader'


const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 seconds
  }, []);
  return (
    <div className='relative '>

      {
        loading ?
          (<Loader />)
          :
          (
            <>
              <Navbar />
              <Slider />
              <Rating />
              <Image_Parallax />
              <Card_Carousel />
              <Revenue_Background />
              <OurProject />
              <Work_Process />
              <Testimonials />
              <Footer /></>
          )
      }

    </div>
  )
}

export default HomePage