"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useFormState, useFormStatus } from "react-dom"
import NewsletterEmail from '../(backend)/action/NewsletterEmail';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const [state, action] = useFormState(NewsletterEmail, null);
  const formRef = useRef(null)
  const { pending } = useFormStatus()
  console.log(pending);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  const router = useRouter()

  useEffect(() => {
    if (state?.success) {
      formRef?.current?.reset()
      // toast.success(state.success)
      router.push('/ThankYou')

    }
    if (state?.error) {
      toast.error(state.error)
    }
  }, [state])

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, []);
  return (
    <>
      <div>
        <div className='relative z-50 px-4'>
          <div className='lg:pb-5 pt-5 pl-6 pr-6 rounded-2xl' ref={containerRef} style={{ backgroundImage: "url('/imgs/bg-newsletter.webp')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '80vh' }}>
            <div className='flex flex-col lg:grid lg:grid-cols-2'>
              <div className='lg:pt-0 pt-4 lg:order-1 order-2' data-aos="fade-up" >
                <div className='xl:h-[71vh] lg:h-[79vh] overflow-hidden'>
                  <Image className='md:translate-x-16 ' src="/imgs/newsletter-img.png" width={400} height={400} alt='footer_bg' />
                </div>
              </div>
              <div className='lg:order-2 order-1'>
                <div className='flex items-center'>
                  <h2 className='pt-20 text-white font-bold text-[38px]'>
                    Join Our Mailing  <span className='underline'>List for Updates!</span>
                  </h2>
                </div>
                <div className='flex items-center justify-center'>
                  <p className='pt-4 text-white font-medium text-[20px]'>
                    We’re team of over 100 seasoned software engineers, each with over a decade of experience in crafting exceptional products
                  </p>
                </div>
                <div className="flex items-center mt-10">
                  <form className="relative w-full" action={action} ref={formRef}>
                    <div className="relative w-full">
                      <input
                      placeholder='Email Address'
                        required
                        class="w-full h-[68px] rounded-[100px] border-0 outline-none px-6 pr-[150px] text-black bg-white"
                        type="email"
                        name="email"/>
                        <button disabled={pending} className=" absolute bg-orange-600 right-5 top-1/2 transform -translate-y-1/2 border-0 outline-none capitalize text-white font-medium text-lg py-3.5 px-8 rounded-[100px]">
                          Subscribe Now
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='relative mt-[-255px] mb-0 pt-[330px]' ref={containerRef} style={{ backgroundImage: "url('/imgs/footer-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
          <div className='lg:grid lg:grid-cols-3 flex flex-col' data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" >
            <div className='pl-6'>
              <div className='' >
                <Link href='/'>
                  <Image src={"/imgs/webmoon-white-logo.png"} width={200} height={200} alt='footer_logo' ></Image>
                </Link>
              </div>
              <div className='flex justify-start pt-3'>
                <p className='text-white'>We’re a team of over 100 seasoned software engineers, each with more than a decade of experience, committed to delivering exceptional products. Experience the excellence for yourself.</p>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="purple" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-sky-500 transition ease-in duration-100 delay-100'>
                        <Link href="/Services">Service</Link></span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="purple" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-sky-500 transition ease-in duration-100 delay-100'><Link href="/SeoService">SEO Service</Link></span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="purple" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-sky-500 transition ease-in duration-100 delay-100'>
                        <Link href="/GraphicDesign">Graphic Design</Link></span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="purple" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-sky-500 transition ease-in duration-100 delay-100'><Link href="/WebDevelopment">Web Development </Link></span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="purple" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-sky-500 transition ease-in duration-100 delay-100'><Link href="/AppDevelopment">App Development </Link></span>
                    </div>
                  </div>
                  <div className=''>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="purple" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-sky-500 transition ease-in duration-100 delay-100'><Link href="/About">About</Link></span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="purple" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-sky-500 transition ease-in duration-100 delay-100'><Link href="/Terms">Terms</Link></span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="purple" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-sky-500 transition ease-in duration-100 delay-100'><Link href="/Contact">Contact Us</Link></span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="purple" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-sky-500 transition ease-in duration-100 delay-100'><Link href="/Privacy">Privacy Policy</Link></span>
                    </div>
                    <div className='flex items-center group pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="purple" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right  group-hover:translate-x-2 transition ease-in duration-100 delay-100 "><path d="m9 18 6-6-6-6" /></svg>
                      <span className='text-white text-[18px] pl-2 group-hover:text-sky-500 transition ease-in duration-100 delay-100'><Link href="/ReturnRefund">Return Refund</Link></span>
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
                      <Image src={"/imgs/footer-link-1.webp"} width={130} height={100} alt='link_images' ></Image>
                    </div>
                    <div class="inline-block h-[90px] rounded-[10px] overflow-hidden  relative z-[1]">
                      <Image src={"/imgs/footer-link-2.webp"} width={130} height={100} alt='link_images' ></Image>
                    </div>

                  </div>
                  <div className=''>
                    <div class="inline-block h-[90px] rounded-[10px] overflow-hidden  relative z-[1]">
                      <Image src={"/imgs/footer-link-3.webp"} width={130} height={100} alt='link_images' ></Image>
                    </div>
                    <div class="inline-block h-[90px] rounded-[10px] overflow-hidden  relative z-[1]">
                      <Image src={"/imgs/footer-link-4.webp"} width={130} height={100} alt='link_images' ></Image>
                    </div>
                  </div>
                  <div className=''>
                    <div class="inline-block h-[90px] rounded-[10px] overflow-hidden  relative z-[1]">
                      <Image src={"/imgs/footer-link-5.webp"} width={130} height={100} alt='link_images' ></Image>
                    </div>
                    <div class="inline-block h-[90px] rounded-[10px] overflow-hidden  relative z-[1]">
                      <Image src={"/imgs/footer-link-6.webp"} width={130} height={100} alt='link_images' ></Image>
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
                <span className='text-gray-300 font-medium pl-4 pt-4 pb-4  pr-4 hover:cursor-pointer hover:text-sky-500 '> <Link href="/Privacy"> Privacy Policy</Link></span>
                <span className='text-gray-300 font-medium pl-4 pt-4 pb-4  pr-4 hover:cursor-pointer hover:text-sky-500'><Link href="/Terms"> Terms Of Use</Link> </span>


              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer