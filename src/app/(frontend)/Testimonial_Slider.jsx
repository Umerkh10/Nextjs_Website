"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

const Testimonial_Slider = () => {
  return (
    <div className="w-full relative pr-4 pl-4 dark:text-background" >
    <Swiper
      loop={true}
      slidesPerView={3}
      spaceBetween={20}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay]}
      breakpoints={{
        1920: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          205: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
      }}
    >
      <SwiperSlide>
        <div className="bg-[#f8edff] rounded-2xl  md:h-[380px] flex justify-center items-center p-4">
        <div class="flex flex-col md:grid md:grid-cols-2 gap-0 px-3.75  pb-0">
            <div className=''>
                <Image src={"/testimonial_slider/testimonial-1.png"} width={220} height={150} alt='testimonial' ></Image>
            </div>
            <div className='xl:-translate-x-14 pt-4 md:pt-24'>
            <div className='flex items-center justify-start ' >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div className='flex justify-center items-center pt-4'>
            <p className='font-normal md:text-[20px] '>“You just cannot ask more of them. They give it all. Amazing concepts. Creative suggestions. Good customer service and fast turnaround times.”</p>
            </div>
            </div>
            <div class="flex items-center justify-between flex-wrap gap-2.5 p-6 px-7.5 border-t border-l-slate-500">
                <span className='text-slate-800 font-semibold text-xl '>Thomas Halvorson</span>
            </div>
       </div>
        </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-[#f8edff] rounded-2xl  md:h-[380px] flex justify-center items-center p-4">
        <div class="flex flex-col md:grid md:grid-cols-2 gap-0 px-3.75  pb-0">
            <div className=''>
                <Image src={"/testimonial_slider/testimonial-2.png"} width={220} height={150} alt='testimonial' ></Image>
            </div>
            <div className='xl:-translate-x-14 pt-4 md:pt-24'>
            <div className='flex items-center justify-start ' >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div className='flex justify-center items-center pt-4'>
            <p className='font-normal md:text-[18px] '>“Totally the agency you would want to be on your side! I love the way they take interest in your work and treat is like their very own, phenomenal creations and delivery.”</p>
            </div>
            </div>
            <div class="flex items-center justify-between flex-wrap gap-2.5 p-6 px-7.5 border-t border-l-slate-500">
                <span className='text-slate-800 font-semibold text-xl '>Megan bremer</span>
            </div>
       </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-[#f8edff] rounded-2xl  md:h-[380px] flex justify-center items-center p-4">
        <div class="flex flex-col md:grid md:grid-cols-2 gap-0 px-3.75  pb-0">
            <div className=''>
                <Image src={"/testimonial_slider/testimonial-3.png"} width={220} height={150} alt='testimonial' ></Image>
            </div>
            <div className='xl:-translate-x-14 pt-4 md:pt-24'>
            <div className='flex items-center justify-start ' >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div className='flex justify-center items-center pt-4'>
            <p className='font-normal md:text-[20px] '>“Top-notch service, incredible designs. There is nothing more you could ask for! Thanks to the Webnike Team for their remarkable effort.”</p>
            </div>
            </div>
            <div class="flex items-center justify-between flex-wrap gap-2.5 p-6 px-7.5 border-t border-l-slate-500">
                <span className='text-slate-800 font-semibold text-xl '>Jason Bartz</span>
            </div>
       </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-[#f8edff] rounded-2xl  md:h-[380px] flex justify-center items-center p-4" >
        <div class="flex flex-col md:grid md:grid-cols-2 gap-0 px-3.75  pb-0">
            <div className=''>
                <Image src={"/testimonial_slider/testimonial-4.png"} width={220} height={150} alt='testimonial' ></Image>
            </div>
            <div className='xl:-translate-x-14 pt-4 md:pt-24'>
            <div className='flex items-center justify-start ' >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div className='flex justify-center items-center pt-4'>
            <p className='font-normal md:text-[18px] '>“ They came up with some seriously cool concepts for my project, way more than I even expected. On top of that, they were super helpful throughout the whole process”</p>
            </div>
            </div>
            <div class="flex items-center justify-between flex-wrap gap-2.5 p-6 px-7.5 border-t border-l-slate-500">
                <span className='text-slate-800 font-semibold text-xl '>Roy Wilson</span>
            </div>
       </div>
        </div>
      </SwiperSlide>
    </Swiper>

  </div>
);
};

export default Testimonial_Slider