import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./Navbar')  );
const Slider = dynamic(() => import('./Slider'));
const Rating = dynamic(() => import('./Rating'));
const ImageParallax = dynamic(() => import('./Image_Parallax'));
const CardCarousel = dynamic(() => import('./Card_Carousel'));
const OurProject = dynamic(() => import('./OurProject'));
const WorkProcess = dynamic(() => import('./Work_Process'));
const Testimonials = dynamic(() => import('./Testimonials'));
const Footer = dynamic(() => import('./Footer'));
const RevenueBackground = dynamic(() => import('./Revenue_Background'));

export const metadata = {
  title: 'Home | Webnike',
  description: "Webnike Portfolio Website",
};

const HomePage = () => {
  return (
    <div className='relative'>
      <>
        <Navbar />
        <Slider />
        <Rating />
        <ImageParallax />
        <CardCarousel />
        <RevenueBackground />
        <OurProject />
        <WorkProcess />
        <Testimonials />
        <Footer />
      </>
    </div>
  );
};

export default HomePage;
