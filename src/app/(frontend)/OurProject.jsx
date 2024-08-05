"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const projects = [
    {
        date: '17 January 2024',
        client: 'Thomas Halvorson',
        services: ['Brand Guidelines', 'Website Design', 'Content Creation', 'Frontend Development', 'Backend Development'],
        title: 'SEO WEBSITE DESIGN',
        image: '/about_imgs/seo-about-1.webp',
        link: 'SeoService',
        dataAos: 'fade-down'
    },
    {
        date: '20 April 2022',
        client: 'Megan Bremer',
        services: ['Brand Guidelines', 'Website Design', 'Content Creation', 'Frontend Development', 'Backend Development'],
        title: 'GRAPHIC WEBSITE DESIGN',
        image: '/about_imgs/about-graphic-2.webp',
        link: 'GraphicDesign',
        dataAos: 'fade-up'
    },
    {
        date: '10 March 2021',
        client: 'Roy Wilson',
        services: ['Brand Guidelines', 'Website Design', 'Content Creation', 'Frontend Development', 'Backend Development'],
        title: 'WEBSITE DEVELOPMENT DESIGN',
        image: '/about_imgs/about-web-2.webp',
        link: 'WebDevelopment',
        dataAos: 'fade-down'
    },
    {
        date: '09 February 2019',
        client: 'Jason Bartz',
        services: ['Brand Guidelines', 'Website Design', 'Content Creation', 'Frontend Development', 'Backend Development'],
        title: 'APP DEVELOPMENT DESIGN',
        image: '/about_imgs/about-app-2.webp',
        link: 'AppDevelopment',
        dataAos: 'fade-up'
    }
];

const OurProject = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
        });
    }, [inView]);

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isImageHovered, setIsImageHovered] = useState(false);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setCursorPosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsImageHovered(true);
    };

    const handleMouseLeave = () => {
        setIsImageHovered(false);
    };

    return (
        <div ref={ref}>
            <div className='mx-auto mt-14 w-full text-foreground/80' data-aos="fade-right">
                <div className='pl-10 md:pb-8 pb-4 md:text-[20px] text-purple-700 font-bold'>Our Projects</div>
                <div className='flex flex-col lg:flex-row lg:justify-between pl-10 pr-10'>
                    <div className='md:text-5xl text-3xl font-black'>
                        Explore Our Best <br /> Recently Completed Projects
                    </div>
                    <div className='flex justify-end items-center w-[72%] xl:w-[20%] lg:w-[27%] md:w-[40%] group'>
                        <button className='mt-8 text-sky-600 bg-transparent md:text-[18px] font-semibold leading-none capitalize border border-sky-500 rounded-full px-8 py-5 group-hover:translate-x-10 transition duration-300 hover:bg-sky-600 ease-in delay-100 hover:text-white group'>
                            <span><Link href="/About">View more</Link></span>
                        </button>
                        <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-sky-600 mt-8 ml-2 group-hover:-translate-x-52 transition duration-200 delay-150 ease-in-out'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-up-right">
                                <path d="M13 5H19V11" />
                                <path d="M19 5L5 19" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {projects.map((project, index) => (
                <div key={index} className={`flex flex-col lg:grid lg:grid-cols-2 mt-10 text-foreground/80 p-4`} data-aos={project.dataAos}>
                    <div className={`pl-10 pr-10 ${index % 2 === 1 ? 'order-2' : ''}`}>
                        <div className='pt-10 text-sky-600 md:text-[20px] font-normal'>{project.date}</div>
                        <div className='h-[1px] bg-gray-400 mt-4'></div>
                        <div className='flex mt-4'>
                            <span className='text-gray-500 md:text-lg font-medium'>Client:</span>
                            <span className='pl-14 md:text-lg font-medium'>{project.client}</span>
                        </div>
                        <div className='h-[1px] bg-gray-400 mt-4'></div>
                        <div className='flex mt-4'>
                            <span className='text-gray-500 md:text-lg font-medium'>Services:</span>
                            <div className='flex flex-col pl-10'>
                                {project.services.map((service, i) => (
                                    <li key={i} className='list-disc marker:text-purple-700 md:text-lg font-medium'>{service}</li>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={`mt-10 lg:mt-0 lg:ml-10 ${index % 2 === 1 ? 'order-1' : ''} group`}>
                        <div className='text-3xl font-bold cursor-pointer group-hover:text-purple-600 transition ease-in delay-100 duration-100'>
                            {project.title}
                        </div>
                        <Link href={project.link}>
                            <div className='relative mt-5 transition ease-in duration-200 delay-100' onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <Image src={project.image} width={600} height={500} alt="our-project-image" className={isImageHovered ? 'grayscale-[1]' : ''} />
                                {isImageHovered && (
                                    <div className="absolute flex justify-center items-center bg-sky-600 rounded-full" style={{ width: '80px', height: '80px', left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`, transform: 'translate(-50%, -50%)', transition: 'transform 0.1s ease-out' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OurProject;
