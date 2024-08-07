import dynamic from 'next/dynamic';


const Navbar = dynamic(() => import('./Navbar'));
const Slider = dynamic(() => import('./Slider'));
import Rating from './Rating';
const ImageParallax = dynamic(() => import('./Image_Parallax'));
import Card_Carousel from './Card_Carousel';
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
        <Card_Carousel />
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
