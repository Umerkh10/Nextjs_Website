import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
const Slider = dynamic(() => import('./Slider'), { ssr: false });
const Rating = dynamic(() => import('./Rating'), { ssr: false });
const ImageParallax = dynamic(() => import('./Image_Parallax'), { ssr: false });
const CardCarousel = dynamic(() => import('./Card_Carousel'), { ssr: false });
const OurProject = dynamic(() => import('./OurProject'), { ssr: false });
const WorkProcess = dynamic(() => import('./Work_Process'), { ssr: false });
const Testimonials = dynamic(() => import('./Testimonials'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });
const RevenueBackground = dynamic(() => import('./Revenue_Background'), { ssr: false });


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
