"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurProject = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 200, 
        });
      }, []);
      
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
        <>
        <div className=' mx-auto mt-10 w-full text-foreground/80' data-aos="fade-right" >
            <div className='pl-10 md:pb-8 pb-4 text-[20px] text-purple-700 font-bold'>Our Projects</div>
            <div className='flex flex-col lg:flex-row lg:justify-between  pl-10 pr-10 '>
                <div className='md:text-5xl text-4xl font-black '> Explore Our Best <br /> Recently Completed Projects </div>
                <div className='flex justify-end items-center w-[72%] xl:w-[20%] lg:w-[27%] md:w-[40%] group'>
                    <button className='mt-8 text-orange-600 bg-transparent text-[18px] font-semibold leading-none capitalize border border-orange-500 rounded-full px-8 py-5 group-hover:translate-x-10 transition duration-300 hover:bg-orange-600 ease-in delay-100 hover:text-white group'>
                        <span>View all more</span>
                    </button>
                    <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-orange-600 mt-8 ml-2 group-hover:-translate-x-52 transition duration-200 delay-150 ease-in-out '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col lg:grid lg:grid-cols-2 mt-10  text-foreground/80 p-4 ' data-aos="fade-down">
    <div className='pl-10 pr-10'>
        <div className='pt-10 text-orange-600 text-[20px] font-normal'>10 February 2024</div>
        <div className='h-[1px] bg-gray-400 mt-4'></div>
        <div className='flex mt-4'>
            <span className='text-gray-500 text-lg font-medium'>Client:</span>
            <span className='pl-14  text-lg font-medium'>Devon Lane</span>
        </div>
        <div className='h-[1px] bg-gray-400 mt-4'></div>
        <div className='flex mt-4'>
            <span className='text-gray-500 text-lg font-medium'>Services:</span>
            <div className='flex flex-col pl-10'>
                <li className='list-disc marker:text-purple-700  text-lg font-medium'>Brand Guidelines</li>
                <li className='list-disc marker:text-purple-700  text-lg font-medium'>Website Design</li>
                <li className='list-disc marker:text-purple-700  text-lg font-medium'>Content Creation</li>
                <li className='list-disc marker:text-purple-700  text-lg font-medium'>Frontend Development</li>
                <li className='list-disc marker:text-purple-700  text-lg font-medium'>Backend Development</li>
            </div>
        </div>
    </div>
    <div className='mt-10 lg:mt-0 lg:ml-10 group '>
        <div className='text-3xl font-bold cursor-pointer  group-hover:text-orange-600 transition ease-in delay-100 duration-100'>
            AI CHATTING WEBSITE DESIGN
        </div>
        <div className='relative mt-5 transition ease-in duration-200 delay-100' onMouseMove={handleMouseMove}onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <Image src="/imgs/our-project-image.webp" width={600} height={500} alt="our-project-image"className={isImageHovered ? 'grayscale-[1]' : ''}/>
            {isImageHovered && (
                <div className="absolute flex justify-center items-center bg-orange-600 rounded-full" style={{ width: '80px', height: '80px', left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`, transform: 'translate(-50%, -50%)',transition: 'transform 0.1s ease-out', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>

                </div>
            )}
        </div>
    </div>
</div>
<div className='flex flex-col lg:grid lg:grid-cols-2 mt-10 text-foreground/80 p-4 ' data-aos="fade-up">
    <div className='pl-10 pr-10 order-2'>
        <div className='pt-10 text-orange-600 text-[20px] font-normal'>10 February 2024</div>
        <div className='h-[1px] bg-gray-400 mt-4'></div>
        <div className='flex mt-4'>
            <span className='text-gray-500 text-lg font-medium'>Client:</span>
            <span className='pl-14 text-lg font-medium'>Devon Lane</span>
        </div>
        <div className='h-[1px] bg-gray-400 mt-4'></div>
        <div className='flex mt-4'>
            <span className='text-gray-500 text-lg font-medium'>Services:</span>
            <div className='flex flex-col pl-10'>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Brand Guidelines</li>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Website Design</li>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Content Creation</li>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Frontend Development</li>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Backend Development</li>
            </div>
        </div>
    </div>
    <div className='mt-10 lg:mt-0 lg:ml-10 order-1 group'>
        <div className='text-3xl font-bold cursor-pointer group-hover:text-orange-600 transition ease-in delay-100 duration-100'>
        CAR BOOKING APPS DESIGN
        </div>
        <div className='relative mt-5 transition ease-in duration-200 delay-100' onMouseMove={handleMouseMove}onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <Image src="/imgs/our-project-image-2.webp" width={600} height={500} alt="our-project-image"className={isImageHovered ? 'grayscale-[1]' : ''}/>
            {isImageHovered && (
                <div className="absolute flex justify-center items-center bg-orange-600 rounded-full" style={{ width: '80px', height: '80px', left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`, transform: 'translate(-50%, -50%)',transition: 'transform 0.1s ease-out', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>

                </div>
            )}
        </div>
    </div>
</div>
<div className='flex flex-col lg:grid lg:grid-cols-2 mt-10 text-foreground/80' data-aos="fade-down">
    <div className='pl-10 pr-10'>
        <div className='pt-10 text-orange-600 text-[20px] font-normal'>10 February 2024</div>
        <div className='h-[1px] bg-gray-400 mt-4'></div>
        <div className='flex mt-4'>
            <span className='text-gray-500 text-lg font-medium'>Client:</span>
            <span className='pl-14 text-lg font-medium'>Devon Lane</span>
        </div>
        <div className='h-[1px] bg-gray-400 mt-4'></div>
        <div className='flex mt-4'>
            <span className='text-gray-500 text-lg font-medium'>Services:</span>
            <div className='flex flex-col pl-10'>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Brand Guidelines</li>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Website Design</li>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Content Creation</li>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Frontend Development</li>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Backend Development</li>
            </div>
        </div>
    </div>
    <div className='mt-10 lg:mt-0 lg:ml-10 group'>
        <div className='text-3xl font-bold cursor-pointer group-hover:text-orange-600 transition ease-in delay-100 duration-100'>
        3D PORTFOLIO WEBSITE
        </div>
        <div className='relative mt-5 transition ease-in duration-200 delay-100' onMouseMove={handleMouseMove}onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <Image src="/imgs/our-project-image-3.webp" width={600} height={500} alt="our-project-image"className={isImageHovered ? 'grayscale-[1]' : ''}/>
            {isImageHovered && (
                <div className="absolute flex justify-center items-center bg-orange-600 rounded-full" style={{ width: '80px', height: '80px', left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`, transform: 'translate(-50%, -50%)',transition: 'transform 0.1s ease-out', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>

                </div>
            )}
        </div>
    </div>
</div>
<div className='flex flex-col lg:grid lg:grid-cols-2 mt-10 text-foreground/80'data-aos="fade-up" >
    <div className='pl-10 pr-10 order-2'>
        <div className='pt-10 text-orange-600 text-[20px] font-normal'>10 February 2024</div>
        <div className='h-[1px] bg-gray-400 mt-4'></div>
        <div className='flex mt-4'>
            <span className='text-gray-500 text-lg font-medium'>Client:</span>
            <span className='pl-14 text-lg font-medium'>Devon Lane</span>
        </div>
        <div className='h-[1px] bg-gray-400 mt-4'></div>
        <div className='flex mt-4'>
            <span className='text-gray-500 text-lg font-medium'>Services:</span>
            <div className='flex flex-col pl-10'>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Brand Guidelines</li>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Website Design</li>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Content Creation</li>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Frontend Development</li>
                <li className='list-disc marker:text-purple-700 text-lg font-medium'>Backend Development</li>
            </div>
        </div>
    </div>
    <div className='mt-10 lg:mt-0 lg:ml-10 order-1 group'>
        <div className='text-3xl font-bold cursor-pointer group-hover:text-orange-600 transition ease-in delay-100 duration-100'>
        MOBILE APPLICATION DESIGN
        </div>
        <div className='relative mt-5 transition ease-in duration-200 delay-100' onMouseMove={handleMouseMove}onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <Image src="/imgs/our-project-image-4.webp" width={600} height={500} alt="our-project-image"className={isImageHovered ? 'grayscale-[1]' : ''}/>
            {isImageHovered && (
                <div className="absolute flex justify-center items-center bg-orange-600 rounded-full" style={{ width: '80px', height: '80px', left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`, transform: 'translate(-50%, -50%)',transition: 'transform 0.1s ease-out', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>

                </div>
            )}
        </div>
    </div>
</div>

        </>
    )
}

export default OurProject