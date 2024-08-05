"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    imageSrc: "/testimonial_slider/testimonial-1.png",
    imageAlt: "testimonial-1",
    quote: "“You just cannot ask more of them. They give it all. Amazing concepts. Creative suggestions. Good customer service and fast turnaround times.”",
    name: "Thomas Halvorson",
    fontSize: "md:text-[20px]"
  },
  {
    imageSrc: "/testimonial_slider/testimonial-2.png",
    imageAlt: "testimonial-2",
    quote: "“Totally the agency you would want to be on your side! I love the way they take interest in your work and treat is like their very own, phenomenal creations and delivery.”",
    name: "Megan Bremer",
    fontSize: "md:text-[18px]"
  },
  {
    imageSrc: "/testimonial_slider/testimonial-3.png",
    imageAlt: "testimonial-3",
    quote: "“Top-notch service, incredible designs. There is nothing more you could ask for! Thanks to the Webnike Team for their remarkable effort.”",
    name: "Jason Bartz",
    fontSize: "md:text-[20px]"
  },
  {
    imageSrc: "/testimonial_slider/testimonial-4.png",
    imageAlt: "testimonial-4",
    quote: "“They came up with some seriously cool concepts for my project, way more than I even expected. On top of that, they were super helpful throughout the whole process.”",
    name: "Roy Wilson",
    fontSize: "md:text-[18px]"
  }
];



const TestimonialCard = ({ testimonial }) => (
  <div className="bg-[#f8edff] rounded-2xl md:h-[380px] flex justify-center items-center p-4">
    <div className="flex flex-col md:grid md:grid-cols-2 gap-0 px-3.75 pb-0">
      <div>
        <Image src={testimonial.imageSrc} width={220} height={150} alt={testimonial.imageAlt} />
      </div>
      <div className="xl:-translate-x-14 pt-4 md:pt-24">
        <div className="flex items-center justify-start">
          {Array(5).fill(<StarIcon className='fill-yellow-500'/>)}
        </div>
        <div className="flex justify-center items-center pt-4">
          <p className={`font-normal ${testimonial.fontSize}`}>{testimonial.quote}</p>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-2.5 p-6 px-7.5 border-t border-l-slate-500">
        <span className="text-slate-800 font-semibold text-xl">{testimonial.name}</span>
      </div>
    </div>
  </div>
);

const Testimonial_Slider = () => {
  return (
    <div className="w-full relative pr-4 pl-4 dark:text-background">
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay, Navigation]}
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
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial_Slider;
