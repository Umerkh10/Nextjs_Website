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
        { question: 'What types of graphic design services do you offer?', answer: 'We offer a wide range of graphic design services, including logo design, brand identity design, print design, packaging design, social media graphics, infographics, and motion graphics.' },

        { question: 'How long does it typically take to complete a design project?', answer: 'The timeline for a project depends on its complexity and scope. Generally, logo designs take about 2–3 working days, while more extensive projects like brand identity or packaging design can take 7–10 working days.' },

        { question: 'How many revisions are included in your design packages?', answer: 'We offer up to three revisions for each design project to ensure the final result meets your expectations. Additional revisions can be arranged if needed.' },

        { question: 'What is your process for creating custom designs?', answer: 'Our process includes four main steps: discovery & briefing, concept development, design & feedback, and final delivery. This ensures we understand your vision and deliver high-quality designs.' },

        { question: 'Do you provide files in different formats?', answer: 'Yes, we provide the final design files in various formats such as PNG, JPEG, PDF, and vector files like AI or EPS, depending on your requirements.' },
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
                <div data-aos="zoom-in"><Image src="/imgs/graphic-faq.webp" width={600} height={600} alt='graphic_faq'></Image></div>
            </div>
        </div>
    </div>
  )
}

export default GraphicFaq