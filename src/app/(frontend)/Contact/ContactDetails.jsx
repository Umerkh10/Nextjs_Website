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
  <div className='absolute top-14 w-full h-[60vh] -z-10'>
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4836398911185!2d144.9537363154465!3d-37.8172097420219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777f2c4c8e3df0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1575593280328!5m2!1sen!2sau"
  frameBorder="0"
  style={{border:'0',width:'100%',height:'80vh' }}
  allowFullScreen=""
  aria-hidden="false"
  tabIndex="0"
></iframe>
  </div>
  <div className='relative z-10'data-aos='fade-up' > 
    <div style={{backgroundImage:"url('/imgs/contact-info-bg.png')",backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat' }}
    className=' md:max-w-[460px] m-auto xl:ml-[700px] pt-12 pb-12 pr-10 pl-10 h-[90vh] '>
      <span className='text-gray-200 text-5xl font-extrabold flex justify-center'>Contact Info</span>
      <div className='flex  gap-0 mt-10'>
        <div className=' rounded-full h-16 w-24 bg-purple-700'><Image className='m-auto pt-3' src={"/imgs/contact_info_home.png"} width={35} height={40} alt='contact_info_home'  ></Image></div>
        <div className='flex flex-col'>
          <div className='pl-4 text-gray-200 font-bold text-xl'>Office Address</div>
          <div className='text-gray-200 opacity-70 pl-4'>B-31 Sardar Ali Sabri Rd, Block 5 Gulshan-e-Iqbal, Karachi</div>
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