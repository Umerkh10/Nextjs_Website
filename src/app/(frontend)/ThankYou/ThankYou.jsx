import Image from 'next/image'
import React from 'react'

const ThankYou = () => {
  return (
    <div className='' data-aos="zoom-in">
      <div className='h-screen' style={{backgroundImage:"url('/imgs/thankbg.webp')",backgroundSize:'cover',backgroundPosition:'center'}}>
      <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
        <div data-aos="fade-up" className='pt-44 text-gray-200 font-bold text-4xl italic  transition ease-in duration-1000 delay-200 '>Thank You For Reaching Out to Us
        <div className='pt-5 text-lg font-medium italic'>Thank you for choosing WebNike! We sincerely appreciate your business and trust in our services. Our team is dedicated to delivering exceptional web solutions tailored to your unique needs. We hope your experience with us has been nothing short of excellent. Should you have any further questions or need additional assistance, please do not hesitate to reach out. Thank you for being a valued customer, and we look forward to continuing our partnership.</div>
        </div>
        <div>
          <Image data-aos="fade-down" src="/imgs/thankbanner.png" width={600} height={600} alt='thank'></Image>
        </div>
     
      </div>
      </div>
    </div>
  )
}

export default ThankYou