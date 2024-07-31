
import React, { Suspense } from 'react';
const Navbar = React.lazy(() => import('./Navbar'));
const Slider = React.lazy(() => import('./Slider'));
const Rating = React.lazy(() => import('./Rating'));
const Image_Parallax = React.lazy(() => import('./Image_Parallax'));
const Card_Carousel = React.lazy(() => import('./Card_Carousel'));
const OurProject = React.lazy(() => import('./OurProject'));
const Work_Process = React.lazy(() => import('./Work_Process'));
const Testimonials = React.lazy(() => import('./Testimonials'));
const Footer = React.lazy(() => import('./Footer'));
const Revenue_Background = React.lazy(() => import('./Revenue_Background'));


export const metadata = {
  title: 'Home | Webnike',
  description: "Webnike Portfolio Website",
};


const HomePage = () => {

  return (
    <div className='relative'>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Slider />
        <Rating />
        <Image_Parallax />
        <Card_Carousel />
        <Revenue_Background />
        <OurProject />
        <Work_Process />
        <Testimonials />
        <Footer />
      </Suspense>
    </div>
  )
}

export default HomePage