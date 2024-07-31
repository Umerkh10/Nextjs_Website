"use client"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';

const UseSeo = () => {
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

      
      console.log(inView);

    const handleClick = () => {
        if (typeof window !== 'undefined' && typeof window.openChat !== 'undefined') {
          window.openChat();
        } else {
          console.error('openChat function is not available');
        }
      };
    return (
        <div className=' grid lg:grid-cols-2 grid-cols-1 '>
            <div className='bg-purple-900' data-aos="fade-down">
                <div className='flex justify-center items-center p-10  '>
                    <Image className='translate-y-10' priority={true} src={"/imgs/seo-whyus.webp"} width={500} height={500} alt='seo_use' ></Image>
                </div>
            </div>
            <div className='bg-purple-900 p-4' ref={ref} data-aos="fade-up">
                <div className='lg:pt-28 pt-8 mb-3' data-aos="fade-right">
                    <span className='md:text-5xl text-4xl font-bold text-gray-300'>Why Us For SEO</span>
                </div>
                <span className='capitalize text-teal-300 font-semibold md:text-[20px] text-lg' >best seo optimization agency</span>
                <div className='lg:w-[30vw] lg:h-[22vh] lg:mb-0 mb-5 mt-5' >
                    <span className='text-gray-300 font-medium '>Choose us for unparalleled expertise and proven results in SEO, ensuring your website achieves top rankings, increased visibility, and sustained organic traffic growth.</span>
                </div>
                <div className='flex'><Image src={"/imgs/bar-chart.png"} width={100} height={60} alt='stats' ></Image>
                    <div className='pl-4 lg:w-[30vw] text-gray-300 text-lg font-medium'> Our digital marketing prioritizes immediate engagement, leveraging the technical prowess typical of top marketing agencies.</div>
                </div>
                <button onClick={handleClick}  className='mt-8 border-[2px] dark:border-white rounded-lg w-[40vw] md:w-[25vw] lg:w-[15vw] h-[8vh] overflow-hidden flex justify-center items-center capitalize text-gray-300  font-semibold 
                group hover:bg-teal-400 hover:text-blue-900 transition ease-in duration-200 delay-200 cursor-pointer'> learn more
                <ArrowRight className='ml-1   group-hover:translate-x-20 transition ease-in duration-200 delay-200 '/>
                 </button>

            </div>
        </div>
    )
}

export default UseSeo