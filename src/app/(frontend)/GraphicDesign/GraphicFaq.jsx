"use client"
import { Cross, CrossIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const GraphicFaq = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);


    const [openIndex, setOpenIndex] = useState(null);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: 'What kinds of graphic design solutions are available from your team?', answer: 'We provide a comprehensive array of graphic design solutions, encompassing logo creation, brand identity development, print materials, packaging design, social media visuals, infographics, and motion graphics.' },

        { question: 'How much time does it usually require to finish a design project?', answer: 'The duration of a project is influenced by its complexity and scope. Typically, logo designs require approximately 2–3 working days, whereas more comprehensive projects such as brand identity or packaging design might span 7–10 working days' },

        { question: 'How many design revisions are offered with your packages?', answer: 'We provide up to three revisions for every design project to guarantee that the final outcome aligns with your vision. If further adjustments are necessary, additional revisions can be accommodated.' },

        { question: 'How do you approach designing custom solutions?', answer: 'Our approach consists of four key stages: initial consultation, concept creation, design refinement, and final execution. This structured process helps us grasp your vision and produce top-notch designs.' },

        { question: 'Do you offer files in various formats?', answer: 'Absolutely, we deliver the final design files in multiple formats including PNG, JPEG, PDF, and vector files like AI or EPS, tailored to your needs.' },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

 

  return (
    <div className='bg-gray-200 dark:bg-transparent' data-aos="fade-up" >
        <div className='grid lg:grid-cols-2 grid-cols-1 p-10'>
            <div className='' data-aos="flip-down">
                <div className='text-purple-600 italic text-lg md:text-xl font-semibold pt-10' >FREQUENTLY ASK QUESTION</div>
                <div className='pt-4 text-4xl md:text-5xl font-extrabold' >Got Questions? Find Answers Here!</div>


            {questions.map((item, index) => (
                <div className="md:pt-6 pt-8 "  key={index}>
                    <div 
                        className="cursor-pointer p-4 rounded-xl text-lg md:text-xl font-semibold flex justify-between group hover:bg-purple-500 hover:text-white transition ease-in duration-150 delay-100 "
                        onClick={() => toggleAccordion(index) }  >
                        {item.question}
                        <CrossIcon className=' group-hover:rotate-45 group-hover:stroke-sky-300 transition ease-in duration-200 delay-100 '/>
                    </div>
                    {openIndex === index && (
                        <div className="p-4 text-lg  ">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}

            </div>
            <div className='lg:pt-10 lg:pl-10'>
                <div data-aos="zoom-in"><Image src="/imgs/graphic_faq.webp" width={600} height={600} alt='graphic_faq'></Image></div>
            </div>
        </div>
    </div>
  )
}

export default GraphicFaq