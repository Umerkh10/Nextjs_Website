"use client"
import { ArrowRight } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useFormState,useFormStatus } from "react-dom"
import EmailAction from '@/app/(backend)/action/emailAction';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const SeoForm = () => {
    const [state, action] = useFormState(EmailAction, null);
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

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    return (
        <div className='lg:grid lg:grid-cols-2 flex flex-col  bg-purple-500 p-10 ' data-aos="fade-up" >
            <div className='sm:p-10 lg:mt-14' data-aos="flip-left">
                <div className='font-bold text-gray-200 text-3xl md:text-4xl'>Better Way To Get More Updates</div>
                <div className='pt-5 md:text-xl text-lg text-gray-200 font-medium'>Best Seo Optimization Agency</div>
                <div className='pt-5 font-medium text-white'>If you'd like to know more about how we can tap into your brand's potential, contact 219,576.6230! Fill out our form to learn more about our services or to get a quote for your next project.
                </div>
                <div className='grid grid-cols-2 lg:pt-16 pt-8 sm:gap-0 gap-4' ref={ref}>
                    <div className='text-center text-white text-xl md:text-3xl font-semibold '>{inView ? <CountUp end={950} duration={2.75} /> : '0'}+ <br />
                        Project Complete
                    </div>
                    <div className='text-center text-white text-xl md:text-3xl font-semibold '>{inView ? <CountUp end={850} duration={2.75} /> : '0'} +<br />
                        Satisfied Clients
                    </div>
                </div>

            </div>
            <div className='' data-aos="flip-right">
                <div className='bg-slate-200 rounded-2xl p-4 sm:p-10 mt-10'>
                    <div className='pt-7 font-bold text-3xl md:text-4xl text-purple-700 '>Free Consultation</div>
                    <div className='pt-3 font-normal text-lg text-purple-700 '>Get More Seo Updates</div>
                    <form action={action} ref={formRef}>
                        <div class="flex flex-col justify-end pt-10">
                            <input class="h-16 rounded-xl p-6 outline-none" type="text" name="name" placeholder="Full Name" id="" required />
                            <input class="h-16 rounded-xl mt-6 p-6 outline-none" type="email" name="email" placeholder="Email Address" id="" required />
                            <input class="h-16 rounded-xl mt-6 p-6 outline-none" type="number" name="phone" placeholder="Phone Number" id="" required />
                            <select class="h-[70px] rounded-xl mt-6 p-6 outline-none" name="selection" id="selection" required>
                                <option value="option">Subject</option>
                                <option value="IT Managment">IT Managment</option>
                                <option value="Cyber security">Cyber Security</option>
                                <option value="Cloud Computing">Cloud Computing</option>
                            </select>
                        </div>
                        <DynamicButton/>
                    </form>
                </div>
            </div>
        </div>
    )
}




function DynamicButton() {
    const {pending} = useFormStatus()
    return (
        <div className={`w-full border bg-purple-600 flex justify-center items-center mt-6 p-6 rounded-xl group text-slate-200 dark:hover:bg-slate-200  dark:hover:text-slate-900  hover:bg-slate-900 ${pending ? "text-opacity-70 bg-opacity-70 " : ""} transition ease-in duration-200 delay-100 overflow-hidden`}>
        <button disabled={pending} type='submit' className='flex items-center  font-semibold text-lg '>Get Consultations <ArrowRight className='ml-1  group-hover:translate-x-60 transition ease-out duration-150 delay-100' /></button>
        </div>
    )
}






export default SeoForm