"use client"
import { ArrowRight } from 'lucide-react'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const SeoForm = () => {
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
        <div className='lg:grid lg:grid-cols-2 flex flex-col  bg-blue-500 p-10 '>
            <div className='p-10 lg:mt-14' data-aos="fade-up">
                <div className='font-bold text-white text-5xl'>Better Way To Get More Updates</div>
                <div className='pt-5 text-xl text-white font-medium'>Best Seo Optimization Agency</div>
                <div className='pt-5 font-medium text-white'>If you'd like to know more about how we can tap into your brand's potential, contact 219,576.6230! Fill out our form to learn more about our services or to get a quote for your next project.
                </div>
                <div className='grid grid-cols-2 pt-16' ref={ref}>
                    <div className='text-center text-white text-3xl font-semibold '>{inView ? <CountUp end={950} duration={2.75} /> : '0'}+ <br />
                        Project Complete
                    </div>
                    <div className='text-center text-white text-3xl font-semibold '>{inView ? <CountUp end={850} duration={2.75} /> : '0'} +<br />
                        Satisfied Clients
                    </div>
                </div>

            </div>
            <div className='' data-aos="fade-down">
                <div className='bg-slate-200 rounded-2xl p-10 mt-10'>
                    <div className='pt-7 font-bold text-4xl text-blue-700 '>Free Consultation</div>
                    <div className='pt-3 font-normal text-lg text-blue-700 '>Get More Seo Updates</div>
                    <form action="">
                        <div class="flex flex-col justify-end pt-10">
                            <input class="h-16 rounded-xl p-6 outline-none" type="text" name="name" placeholder="Full Name" id="" required />
                            <input class="h-16 rounded-xl mt-6 p-6 outline-none" type="email" name="email" placeholder="Email Address" id="" required />
                            <input class="h-16 rounded-xl mt-6 p-6 outline-none" type="number" name="phone" placeholder="Phone Number" id="" required />
                            <select class="h-[70px] rounded-xl mt-6 p-6 outline-none"  name="selection" id="selection" required>
                                <option value="option1">Subject</option>
                                <option value="option2">IT Managment</option>
                                <option value="option3">Cyber Security</option>
                                <option value="option3">Cloud Computing</option>
                            </select>
                        </div>
                        <div className='w-full border bg-blue-700 flex justify-center items-center mt-6 p-6 rounded-xl group text-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-900  hover:bg-slate-900 transition ease-in duration-200 delay-100 overflow-hidden'>
                            <button type='submit' className='flex items-center  font-semibold text-lg '>Get Consultations <ArrowRight className='ml-1  group-hover:translate-x-60 transition ease-out duration-150 delay-100'/></button></div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SeoForm