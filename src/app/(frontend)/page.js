import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
const Slider = dynamic(() => import('./Slider'), { ssr: false });
const Rating = dynamic(() => import('./Rating'), { ssr: false });
const Image_Parallax = dynamic(() => import('./Image_Parallax'), { ssr: false });
const Card_Carousel = dynamic(() => import('./Card_Carousel'), { ssr: false });
const OurProject = dynamic(() => import('./OurProject'), { ssr: false });
const Work_Process = dynamic(() => import('./Work_Process'), { ssr: false });
const Testimonials = dynamic(() => import('./Testimonials'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });
const Revenue_Background = dynamic(() => import('./Revenue_Background'), { ssr: false });

export const metadata = {
  title: 'Home | Webnike',
  description: "Webnike Portfolio Website",
};


const HomePage = () => {

  return (
    <div className='relative '>
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
      

    </div>
  )
}

export default HomePage