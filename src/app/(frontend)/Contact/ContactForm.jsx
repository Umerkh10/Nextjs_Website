"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 200, 
        });
      }, []);
  return (
    <div className='pt-28'>
        <div className='grid lg:grid-cols-3 grid-cols-1 '>
            <div className='grid-cols-1 col-span-1 ml-3' data-aos='fade-down'>
                <Image src={"/imgs/contact_form.webp"} width={500} height={500} alt='contact-form'></Image>
            </div>
            <div className='grid-cols-1 col-span-2 ' data-aos='fade-up'>
                <div className='lg:ml-40'>
                <div className='flex items-center text-purple-600 font-semibold text-lg gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="" stroke="" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge stroke-purple-700 fill-purple-700"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/></svg>
                    Contact Us</div>
                    <div className='text-zinc-800 text-6xl mt-2 font-black'>Get in Touch with Our</div>
                    <div className='text-white text-stroke-3 text-6xl  mt-2 font-black '>  Lovely Team</div>
                    <form action="" >
                    <div className='grid lg:grid-cols-2 grid-cols-1 mt-5 gap-5'>
                        <div className='grid-cols-1 '>
                            <div className='rounded-full bg-slate-100 pt-4 pb-4  pl-4 pr-2'><input className='bg-slate-100 outline-none' type="text" name="first_name" id="" placeholder='First Name' required/></div>
                            <div className='rounded-full bg-slate-100 pt-4 pb-4 mt-3  pl-4 pr-2'><input className='bg-slate-100 outline-none' type="email" name="email_address" id="" placeholder='Email Address' required/></div>
                        </div>
                        <div className='grid-cols-1 '>
                        <div className='rounded-full bg-slate-100 pt-4 pb-4  pl-4 pr-2'><input className='bg-slate-100 outline-none' type="text" name="last_name" id="" placeholder='Last Name' required/></div>
                        <div className='rounded-full bg-slate-100 pt-4 pb-4 mt-3  pl-4 pr-2'><input className='bg-slate-100 outline-none' type="text" name="subject" id="" placeholder='Enter Subject'required/></div>
                        </div>
                    </div>
                    <div className='rounded-xl h-[25vh] pt-4 pl-4 bg-slate-100 mt-4'><textarea name="cover" className='bg-slate-100 outline-none' placeholder='Name Cover' id=""></textarea></div>
                    <div className='rounded-full w-1/4 mt-5 pt-4 pb-4 bg-violet-800 flex justify-center items-center group  hover:bg-violet-600 transition ease-in duration-200 delay-200 '>
                        <button className=' text-white font-semibold group-hover:animate-bounce ' type='submit'>Explore More</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm