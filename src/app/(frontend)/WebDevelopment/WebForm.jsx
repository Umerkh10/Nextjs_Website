"use client"
import { ArrowRight } from 'lucide-react'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FormAction } from '@/app/(backend)/action/FormAction';
import { useFormState,useFormStatus } from "react-dom"

const WebForm = () => {
    const [state, action] = useFormState(FormAction, null);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
  return (
    <div className='lg:grid lg:grid-cols-2 flex flex-col  bg-blue-500 p-10 ' data-aos="fade-up" >
    <div className='sm:p-10 lg:mt-14' data-aos="flip-left">
        <div className='font-bold text-gray-200 text-2xl md:text-4xl'>Starting Your Web Development Project With Webnike</div>
        <div className='pt-5 md:text-xl text-lg text-gray-200 font-semibold'>START A PROJECT</div>
        <div className='pt-5 font-medium text-white'>Boost your digital presence with Webnike! Our expert web development team turns your ideas into dynamic, visually stunning websites. From design to deployment, we ensure your site captures your brand and delivers an outstanding user experience.</div>
        <div className='grid grid-cols-2 pt-7 md:pt-16 sm:gap-0 gap-4' ref={ref}>

            <div className='text-center text-gray-200 text-xl md:text-3xl font-semibold '>{inView ? <CountUp end={950} duration={2.75} /> : '0'}+ <br />
                Project Complete
            </div>
            <div className='text-center text-gray-200 text-xl md:text-3xl font-semibold '>{inView ? <CountUp end={850} duration={2.75} /> : '0'} +<br />
                Satisfied Clients
            </div>
        </div>

    </div>
    <div className='' data-aos="flip-right">
        <div className='bg-slate-200 rounded-2xl p-4 sm:p-10 mt-10'>
            <div className='pt-7 font-bold text-3xl md:text-4xl text-blue-700 '>Free Consultation</div>
            <div className='pt-3 font-normal text-lg text-blue-700 '>Get More Web Development Updates</div>
            <form action={action}>
                <div class="flex flex-col justify-end pt-10">
                    <input class="h-16 rounded-xl p-6 outline-none" type="text" name="name" placeholder="Full Name" id="" required />
                    <input class="h-16 rounded-xl mt-6 p-6 outline-none" type="email" name="email" placeholder="Email Address" id="" required />
                    <input class="h-16 rounded-xl mt-6 p-6 outline-none" type="number" name="phone" placeholder="Phone Number" id="" required />
                    <select class="h-[70px] rounded-xl mt-6 p-6 outline-none"  name="selection" id="selection" required>
                        <option value="option">Select Technology</option>
                        <option value="PHP">PHP</option>
                        <option value="Laravel">Laravel</option>
                        <option value="Python">Python</option>
                        <option value="Django">Django</option>
                        <option value="React">React</option>
                        <option value="WordPress">WordPress</option>
                        <option value="Next-JS">Next-JS</option>
                        <option value="Frontend-Technologies(HTML,CSS)">Frontend-Technologies(HTML,CSS)</option>
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
console.log(pending);
return (
<div className={`w-full border bg-blue-700 flex justify-center items-center mt-6 p-6 rounded-xl group text-slate-200 dark:hover:bg-slate-200  dark:hover:text-slate-900  hover:bg-slate-900 ${pending ? "text-opacity-70 bg-opacity-70 " : ""} transition ease-in duration-200 delay-100 overflow-hidden`}>
<button disabled={pending} type='submit' className='flex items-center  font-semibold text-lg '>Get Consultations <ArrowRight className='ml-1  group-hover:translate-x-60 transition ease-out duration-150 delay-100' /></button>
</div>
)
}


export default WebForm