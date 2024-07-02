
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