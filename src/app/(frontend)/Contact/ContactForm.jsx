"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactEmail from '@/app/(backend)/action/ContactEmail';
import { useFormState, useFormStatus } from "react-dom"
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Badge } from 'lucide-react';



const ContactForm = () => {
    const [state, action] = useFormState(ContactEmail, null);
    const formRef = useRef(null)
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    const router= useRouter()

    useEffect(()=>{
        if(state?.success){
            formRef?.current?.reset()
            // toast.success(state.success)
            router.push('/ThankYou')

        }
        if(state?.error){
            toast.error(state.error)
        }
    },[state])
    return (
        <div className='pt-28'>
            <div className='grid lg:grid-cols-3 grid-cols-1 p-4 '>
                <div className='grid-cols-1 col-span-1 ml-3' data-aos='fade-down'>
                    <Image src={"/imgs/contact-form.webp"} width={500} height={500} alt='contact-form'></Image>
                </div>
                <div className='grid-cols-1 col-span-2 ' data-aos='fade-up'>
                    <div className='lg:ml-40'>
                        <div className='flex items-center text-purple-600 font-semibold md:text-lg gap-2'>
                          <Badge className='stroke-purple-700 fill-purple-700'/>
                            Contact Us</div>
                        <div className=' text-4xl md:text-6xl mt-2 font-black'>Get in Touch with Our</div>
                        <div className='text-white text-stroke-3 text-4xl md:text-6xl font-semibold mt-2 md:font-bold '>  Lovely Team</div>
                        
                        <form action={action}ref={formRef} >
                            <div className='grid lg:grid-cols-2 grid-cols-1 mt-5 gap-5'>
                                <div className='grid-cols-1 '>
                                    <div className='rounded-full pt-4 pb-4  pl-4 pr-2 bg-slate-200 text-black'><input className=' bg-slate-200 outline-none' type="text" name="first_name" id="" placeholder='First Name' required /></div>
                                    <div className='rounded-full pt-4 pb-4 mt-3  pl-4 pr-2 bg-slate-200 text-black'><input className=' bg-slate-200 outline-none' type="email" name="email_address" id="" placeholder='Email Address' required /></div>
                                </div>
                                <div className='grid-cols-1 '>
                                    <div className='rounded-full pt-4 pb-4  pl-4 pr-2 bg-slate-200 text-black'><input className=' bg-slate-200 outline-none' type="text" name="last_name" id="" placeholder='Last Name' required /></div>
                                    <div className='rounded-full pt-4 pb-4 mt-3  pl-4 pr-2 bg-slate-200 text-black'><input className='bg-slate-200 outline-none' type="text" name="subject" id="" placeholder='Enter Subject' required /></div>
                                </div>
                            </div>
                            <div className='rounded-xl h-[25vh]   pt-4 pl-4 mt-4 bg-slate-200 text-black'><textarea name="cover" className='p-2 bg-slate-200 w-full outline-none' placeholder='Name Cover' id=""></textarea></div>
                            <DynamicButton/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



function DynamicButton() {
    const { pending } = useFormStatus()
    return (
        // <div className={`w-full border bg-blue-700 flex justify-center items-center mt-6 p-6 rounded-xl group text-slate-200 dark:hover:bg-slate-200  dark:hover:text-slate-900  hover:bg-slate-900 ${pending ? "text-opacity-70 bg-opacity-70 " : ""} transition ease-in duration-200 delay-100 overflow-hidden`}>
        // <button disabled={pending} type='submit' className='flex items-center  font-semibold text-lg '>Get Consultations <ArrowRight className='ml-1  group-hover:translate-x-60 transition ease-out duration-150 delay-100' /></button>
        // </div>

        <div className={`rounded-full md:w-[30%] mt-5 pt-4 pb-4 bg-violet-800 flex justify-center items-center group  hover:bg-violet-600 transition ease-in duration-200 delay-200 ${pending ? "text-opacity-70 bg-opacity-70 " : ""}`}>
            <button disabled={pending} className={` text-white font-semibold ${pending && 'animate-bounce'} `} type='submit'>Explore More</button>
        </div>

    )
}


export default ContactForm