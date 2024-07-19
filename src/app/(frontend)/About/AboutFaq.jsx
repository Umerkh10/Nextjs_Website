"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import {  SwordsIcon } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutFaq = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);


    const [openIndex, setOpenIndex] = useState(null);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: '15 Years Of Experience', answer: 'We don’t just work with concrete and steel the best examples of creative websites concepts and ideas' },

        { question: '300 Project Complete', answer: 'We don’t just work with concrete and steel the best examples of creative websites concepts and ideas' },

        { question: '500 Happy Customers', answer: 'We don’t just work with concrete and steel the best examples of creative websites concepts and ideas' },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className='bg-gray-200 dark:bg-transparent pt-20'>

            <div className='grid lg:grid-cols-2 grid-cols-1 p-4'>
                <div className='pl-6'>
                    <div data-aos="fade-up" className='text-xl font-semibold gradient-text italic'>OVER 150,000+ CLIENTS</div>
                    <div data-aos="fade-down" className='pt-2 font-extrabold text-5xl '>About Us</div>
                </div>

                <div className='pr-6'>
                    <div data-aos="fade-up" className='font-semibold text-lg gradient-text italic'>We don’t just work with concrete and steel. We've collected the of creative websites, web design concepts and ideas work and steel We are Approachable,.</div>
                </div>
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-5'>
            <div className=''>
                <div data-aos="flip-up" className='flex items-center justify-center'>
                    <Image className='rounded-2xl' src="/imgs/about-faq.webp" width={600} height={600} alt='about-faq-bg'></Image>
                </div>
            </div>

            <div className=''>

            {questions.map((item, index) => (
                <div data-aos="flip-down" className="md:pt-6 pt-8 "  key={index}>
                    <div 
                        className="cursor-pointer py-6 px-4 rounded-xl text-lg md:text-3xl font-extrabold flex justify-between group bg-gradient-to-r from-purple-700 to-indigo-900 text-white transition ease-in duration-150 delay-100 "
                        onClick={() => toggleAccordion(index) }  >
                        {item.question}
                        <SwordsIcon className='  group-hover:rotate-180 group-hover:stroke-gray-100 transition ease-in duration-200 delay-100 '/>
                    </div>
                    {openIndex === index && (
                        <div className="  py-4 px-4 rounded rounded-br-[10px] rounded-bl-[10px] text-lg bg-gradient-to-r from-purple-700 to-indigo-900 text-white italic ">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
            </div>
        </div>


        </div>
    )
}

export default AboutFaq