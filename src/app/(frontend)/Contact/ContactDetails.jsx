"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 200, 
    });
  }, []);
  return (
<div className='relative w-full h-full mt-8 '>
<div className='absolute top-14 w-full h-[90vh] -z-10' 
       style={{ 
         backgroundImage: "url('/imgs/Contact_details_bg.webp')", 
         backgroundSize: 'cover', 
         backgroundPosition: 'center' 
       }}>
  </div>
  <div className='relative z-10'data-aos='fade-up' > 
    <div style={{backgroundImage:"url('/imgs/footer-bg.webp')",backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat' }}
    className=' md:max-w-[460px] m-auto xl:ml-[700px] pt-12 pb-12 pr-10 pl-10 h-[90vh] '>
      <span className='text-gray-200 text-5xl font-extrabold flex justify-center'>Contact Info</span>
      <div className='flex  gap-0 mt-10'>
        <div className=' rounded-full h-16 w-24 bg-purple-700'><Image className='m-auto pt-3' src={"/imgs/contact_info_home.png"} width={35} height={40} alt='contact_info_home'  ></Image></div>
        <div className='flex flex-col'>
          <div className='pl-4 text-gray-200 font-bold text-xl'>Office Address</div>
          <div className='text-gray-200 opacity-70 pl-4'>60a Oldham St, Manchester M4 1LE, United Kingdom</div>
          </div>
      </div>

      <div className='flex  gap-0 mt-10'>
        <div className=' rounded-full h-16 w-16 bg-purple-700'><Image className='m-auto pt-3' src={"/imgs/Contact_telephone.png"} width={35} height={40} alt='contact_info_home'  ></Image></div>
        <div className='flex flex-col'>
          <div className='pl-3 text-gray-200 font-bold text-xl'>Phone Number</div>
          <div className='text-gray-200 opacity-70 pl-3'>021-34155132</div>
          <div className='text-gray-200 opacity-70 pl-3'>021-34155132</div>
          </div>
      </div>

      <div className='flex  gap-0 mt-10'>
        <div className=' rounded-full h-16 w-16 bg-purple-700'><Image className='m-auto pt-3' src={"/imgs/email.png"} width={35} height={40} alt='contact_info_home'  ></Image></div>
        <div className='flex flex-col'>
          <div className='pl-3 text-gray-200 font-bold text-xl'>Mail Address</div>
          <div className='text-gray-200 opacity-70 pl-3'>support@webnike.com </div>
          </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ContactDetails