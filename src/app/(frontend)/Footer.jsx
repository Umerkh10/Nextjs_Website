"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 200, 
    });
  }, []);
  return (
    <>
      <div>
        <div className='relative z-50 px-4'>
          <div className='lg:pb-5 pt-5 pl-6 pr-6 rounded-2xl' style={{ backgroundImage: "url('/imgs/newsletter-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center', }}>
            <div className='flex flex-col lg:grid lg:grid-cols-2'>
              <div className='lg:pt-0 pt-4 lg:order-1 order-2' data-aos="fade-up" >
                <div className='xl:h-[71vh] lg:h-[79vh] '>
                <Image src="/imgs/footer-bg-image.webp" width={500} height={400} alt='footer_bg'/>
                </div>
              </div>
              <div className='lg:order-2 order-1'>
                <div className='flex items-center'>
                  <h2 className='pt-20 text-white font-bold text-[38px]'>
                    Subscribe To Our <span className='underline'>Newsletter!</span>
                  </h2>
                </div>
                <div className='flex items-center justify-center'>
                  <p className='pt-4 text-white font-medium text-[20px]'>
                    We are 100+ professional software engineers with more than 10
                    years in delivering super products because you've seen it.
                  </p>
                </div>
                <div className="flex items-center mt-10">
                  <form className="relative w-full" action="" method="post">
                    <div className="relative w-full">
                      <input placeholder="Enter Your Email Address Here.." type="email" className="w-full h-[68px] rounded-[100px] border-0 outline-none px-6 pr-[150px] text-[rgba(69,71,83,0.5)] text-lg"/>
                      <button type="submit" className="absolute bg-orange-600 right-5 top-1/2 transform -translate-y-1/2 border-0 outline-none capitalize text-white font-medium text-lg py-3.5 px-8 rounded-[100px]">
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='relative mt-[-255px] mb-0 pt-[330px]' style={{ backgroundImage: "url('/imgs/footer_bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}>
          <div className='lg:grid lg:grid-cols-3 flex flex-col' data-aos="fade-right"  data-aos-offset="100" data-aos-easing="ease-in-sine" >
            <div className='pl-6'>
              <div className='' >
                <Link href='/'>
                <Image src={"/imgs/webmoon-white-logo.png"} width={200} height={200} alt='footer_logo' ></Image>
                </Link>
              </div>
              <div className='flex justify-start pt-3'>
                <p className='text-white'>We are 100+ professional software engine with more than 10 years of experience in delivering superior products Believe it be cause you've seen it.</p>
              </div>
            </div>
            <div className='pl-6 pt-4 lg:pt-0'>
              <div className='flex items-center gap-3'>
                <span className='text-white text-[26px] font-semibold '>Links </span>
                <div class="block w-full h-[2px] bg-white opacity-15 leading-[1.6rem]"></div>
              </div>
              <div className='mt-10'>
                <div className='flex flex-col lg:grid lg:grid-cols-2 '>
                  <div className=' '>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="orangered" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-orange-600 transition ease-in duration-100 delay-100'>
                        <Link href="/">Home</Link></span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="orangered" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-orange-600 transition ease-in duration-100 delay-100'>News & Blog</span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="orangered" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-orange-600 transition ease-in duration-100 delay-100'>
                        <Link href="/Contact">Contact Us</Link></span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="orangered" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-orange-600 transition ease-in duration-100 delay-100'>Testimonials</span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="orangered" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-orange-600 transition ease-in duration-100 delay-100'>Projects</span>
                    </div>
                  </div>
                  <div className=''>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="orangered" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-orange-600 transition ease-in duration-100 delay-100'>About</span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="orangered" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-orange-600 transition ease-in duration-100 delay-100'>FAQ</span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="orangered" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-orange-600 transition ease-in duration-100 delay-100'>Services</span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="orangered" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-orange-600 transition ease-in duration-100 delay-100'>Team</span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="orangered" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-orange-600 transition ease-in duration-100 delay-100'>Career</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='pl-6 pt-4 lg:pt-0 '>
              <div className='flex items-center gap-3'>
                <span className='text-white text-[20px] font-semibold'>Our Gallery</span>
                <div className="flex-grow h-[2px] bg-white opacity-15"></div>
              </div>
              <div className='mt-10'>
                <div className='lg:grid lg:grid-cols-3 flex flex-col gap-3'>
                  <div className=''>
                    <div class="inline-block h-[90px] rounded-[10px] overflow-hidden  relative z-[1]">
                      <Image src={"/imgs/footer-link-image-1.webp"} width={100} height={100} alt='link_images' ></Image>
                    </div>
                    <div class="inline-block h-[90px] rounded-[10px] overflow-hidden  relative z-[1]">
                      <Image src={"/imgs/footer-link-image-2.webp"} width={100} height={100} alt='link_images' ></Image>
                    </div>

                  </div>
                  <div className=''>
                    <div class="inline-block h-[90px] rounded-[10px] overflow-hidden  relative z-[1]">
                      <Image src={"/imgs/footer-link-image-3.webp"} width={100} height={100} alt='link_images' ></Image>
                    </div>
                    <div class="inline-block h-[90px] rounded-[10px] overflow-hidden  relative z-[1]">
                      <Image src={"/imgs/footer-link-image-4.webp"} width={100} height={100} alt='link_images' ></Image>
                    </div>
                  </div>
                  <div className=''>
                    <div class="inline-block h-[90px] rounded-[10px] overflow-hidden  relative z-[1]">
                      <Image src={"/imgs/footer-link-image-5.webp"} width={100} height={100} alt='link_images' ></Image>
                    </div>
                    <div class="inline-block h-[90px] rounded-[10px] overflow-hidden  relative z-[1]">
                      <Image src={"/imgs/footer-link-image-6.webp"} width={100} height={100} alt='link_images' ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-[1px] bg-gray-600 mt-8'></div>
          <div className='lg:grid lg:grid-cols-2' >
            <div className=''>
              <div className='pl-4 pt-4 pb-4 '><span className='text-gray-300  font-medium ' >© 2024 WEBNIKE All Rights Reserved.</span> </div>
            </div>
            <div className='gap-4'>
              <div className='flex justify-end'>
                <span className='text-gray-300 font-medium pl-4 pt-4 pb-4  pr-4 hover:cursor-pointer hover:text-orange-500 '>Privacy Policy</span>
                <span className='text-gray-300 font-medium pl-4 pt-4 pb-4  pr-4 hover:cursor-pointer hover:text-orange-500'>Terms Of Use</span>
                <span className='text-gray-300 font-medium pl-4 pt-4 pb-4 pr-8 hover:cursor-pointer hover:text-orange-500'>Blog</span>
            
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default Footer