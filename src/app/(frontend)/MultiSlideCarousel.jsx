// components/MultipleSlideCarousel.js
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MultipleSlideCarousel = () => {
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
    <div className="w-full relative pl-5 pr-5 gap-2" ref={ref} data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" >
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={20}

        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation,Autoplay]}
        breakpoints={{
          1920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1028: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          205: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        className="multiple-slide-carousel "
      >
        <SwiperSlide>
          <div className="bg-orange-600 rounded-2xl h-[100vh] xl:h-[80vh]">
            <div className='flex justify-center items-center pt-10 pb-7'>
              <Image src={"/carousel_imgs/content-management.png"} height={100} width={80} alt='content_manage' ></Image>
            </div>
            <div className='flex justify-center pb-5 group'>
              <div className='text-xl md:text-[26px] text-white font-bold group-hover:tracking-wide hover:transition ease-out duration-300 delay-100 '>Digital Strategy</div>
            </div>
            <div className='flex justify-center pl-7 pr-8 pb-6 '>
              <p className='text-white text-sm md:text-[16px] font-medium leading-[1.6]'> We craft smart digital strategies to boost client engagement and drive growth using the latest tech and creative content solutions.</p>
            </div>
            <div className='flex justify-center pt-3 group'>
              <Image className='group-hover:-translate-y-2 transition ease-out duration-200 delay-100 ' 
              src={"/carousel_imgs/carousel-1.webp"} width={220} height={220} alt='bg-orange-card-image' ></Image>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#ddf8fb] rounded-2xl h-[100vh] xl:h-[80vh] ">
          <div className='flex justify-center items-center pt-10 pb-7'>
              <Image src={"/carousel_imgs/product-research.png"} height={100} width={80} alt='content_manage' ></Image>
            </div>
            <div className='flex justify-center pb-5 group'>
              <div className='text-xl md:text-[26px] text-gray-800 font-bold group-hover:tracking-wide hover:transition ease-out duration-300 delay-100 '>Product Research</div>
            </div>
            <div className='flex justify-center pl-7 pr-8 pb-6 '>
              <p className='text-gray-800 text-sm md:text-[16px] font-medium leading-[1.6]'>Product research is all about digging deep into what customers want and finding gaps in the market to make our product stand out.</p>
            </div>
            <div className='flex justify-center pt-3 group'>
              <Image className='group-hover:-translate-y-2 transition ease-out duration-200 delay-100 ' 
              src={"/carousel_imgs/carousel-2.webp"} width={180} height={180} alt='bg-aqua-card-image' ></Image>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[#f8edff] rounded-2xl h-[100vh] xl:h-[80vh] ">
          <div className='flex justify-center items-center pt-10 pb-7'>
              <Image src={"/carousel_imgs/publishing.png"} height={100} width={80} alt='brand_design' ></Image>
            </div>
            <div className='flex justify-center pb-5 group'>
              <div className='text-xl md:text-[26px] text-gray-800 font-bold group-hover:tracking-wide hover:transition ease-out duration-300 delay-100 '>Brand Design Identity</div>
            </div>
            <div className='flex justify-center pl-7 pr-8 pb-6 '>
              <p className='text-gray-800 text-sm md:text-[16px] font-medium leading-[1.6]'>We create brand identities logos to color schemes, our designs are all about making your brand memorable and unique.</p>
            </div>
            <div className='flex justify-center pt-3 group'>
              <Image className='group-hover:-translate-y-2 transition ease-out duration-200 delay-100 ' 
              src={"/carousel_imgs/carousel-3.webp"} width={220} height={220} alt='bg-purple-card-image' ></Image>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-orange-600 rounded-2xl h-[100vh] xl:h-[80vh]">
            <div className='flex justify-center items-center pt-10 pb-7'>
              <Image src={"/carousel_imgs/content-management.png"} height={100} width={80} alt='content_manage' ></Image>
            </div>
            <div className='flex justify-center pb-5 group'>
              <div className='text-xl md:text-[26px] text-white font-bold group-hover:tracking-wide hover:transition ease-out duration-300 delay-100 '>Digital Strategy</div>
            </div>
            <div className='flex justify-center pl-7 pr-8 pb-6 '>
              <p className='text-white text-sm md:text-[16px] font-medium leading-[1.6]'> We craft smart digital strategies to boost client engagement and drive growth using the latest tech and creative content solutions.</p>
            </div>
            <div className='flex justify-center pt-3 group'>
              <Image className='group-hover:-translate-y-2 transition ease-out duration-200 delay-100 ' 
              src={"/carousel_imgs/carousel-1.webp"} width={220} height={220} alt='bg-orange-card-image' ></Image>
            </div>
          </div>
        </SwiperSlide>

       <SwiperSlide>
          <div className="bg-[#ddf8fb] rounded-2xl h-[100vh] xl:h-[80vh] ">
          <div className='flex justify-center items-center pt-10 pb-7'>
              <Image src={"/carousel_imgs/product-research.png"} height={100} width={80} alt='content_manage' ></Image>
            </div>
            <div className='flex justify-center pb-5 group'>
              <div className='text-xl md:text-[26px] text-gray-800 font-bold group-hover:tracking-wide hover:transition ease-out duration-300 delay-100 '>Product Research</div>
            </div>
            <div className='flex justify-center pl-7 pr-8 pb-6 '>
              <p className='text-gray-800 text-sm md:text-[16px] font-medium leading-[1.6]'>Product research is all about digging deep into what customers want and finding gaps in the market to make our product stand out.</p>
            </div>
            <div className='flex justify-center pt-3 group'>
              <Image className='group-hover:-translate-y-2 transition ease-out duration-200 delay-100 ' 
              src={"/carousel_imgs/carousel-2.webp"} width={180} height={180} alt='bg-aqua-card-image' ></Image>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default MultipleSlideCarousel;
