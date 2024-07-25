"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const GraphicWorkProcess = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <div className=''>
            <div style={{ backgroundImage: "url('/imgs/process_bg_1.webp')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgb(232 222 238)' }} className='p-5' 
            data-aos="zoom-in">
                <div className='pt-20 text-center italic text-purple-700 text-lg font-bold' data-aos="fade-down">OUR EFFORTLESS WORKFLOW</div>
                <div className='text-center text-zinc-800  text-3xl md:text-4xl font-extrabold pt-3' data-aos="fade-up" >Our Streamlined Method for Graphic Design</div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 gap-3 '>
                    <div className='group p-4 ' data-aos="flip-right">
                        <div className='p-2 border-violet-800 border-[5px]  group-hover:border-zinc-900 group-hover:scale-110 group-hover:bg-violet-800 transition ease-in duration-200 delay-150 rounded-lg h-[40vh]'>
                        <div className='border-[5px] border-violet-800 group-hover:border-white rounded-full w-16 h-16 flex justify-center items-center font-bold text-violet-800 text-2xl group-hover:bg-violet-800 group-hover:text-gray-200  transition ease-in duration-200 delay-150 '>01 </div>
                        <div className='flex justify-center items-center'>
                            <Image className='flex -mt-8 group-hover:rotate-doors  ' src='/imgs/planning.webp' width={70} height={70 } alt='graphic_process'></Image>
                        </div>
                            <div className='pt-2 pl-8 pr-8 text-zinc-800 group-hover:text-gray-200 font-semibold text-xl text-center '>Exploration & Strategy </div>
                            <div className='pt-2 pl-8 pr-8 font-medium text-zinc-800 group-hover:text-gray-200  text-[16px] text-center'>Grasping your goals and specifications</div>
                        </div>
                    </div>

                    <div className='group p-4 ' data-aos="flip-left">
                        <div className='p-2 border-[5px] border-violet-800 group-hover:border-zinc-900 group-hover:scale-110 group-hover:bg-violet-800  transition ease-in duration-200 delay-150 rounded-lg h-[40vh]'>
                        <div className='border-[5px] border-violet-800 group-hover:border-white rounded-full w-16 h-16 flex justify-center items-center font-bold text-violet-800 text-2xl group-hover:bg-violet-800 group-hover:text-gray-200 transition ease-in duration-200 delay-150 '>02 </div>
                        <div className='flex justify-center items-center'>
                            <Image className='flex -mt-8 group-hover:rotate-doors ' src='/imgs/product-development.webp' width={70} height={70 } alt='graphic_process'></Image>
                        </div>
                            <div className='pt-2 pl-8 pr-8 text-zinc-800 group-hover:text-gray-200  font-semibold text-xl text-center '>Coming up with ideas</div>
                            <div className='pt-2 pl-8 pr-8 font-medium text-zinc-800 group-hover:text-gray-200 text-[15px] text-center'>Generating and developing initial design ideas.</div>
                        </div>
                    </div>

                    <div className='group p-4 ' data-aos="flip-right">
                        <div className='p-2 border-[5px] border-violet-800 group-hover:border-zinc-900 group-hover:scale-110 group-hover:bg-violet-800  transition ease-in duration-200 delay-150 rounded-lg h-[40vh]'>
                        <div className='border-[5px] border-violet-800 group-hover:border-white rounded-full w-16 h-16 flex justify-center items-center font-bold text-violet-800 text-2xl group-hover:bg-violet-800 group-hover:text-gray-200  transition ease-in duration-200 delay-150 '>03 </div>
                        <div className='flex justify-center items-center'>
                            <Image className='flex -mt-10 group-hover:rotate-doors ' src='/imgs/feedback.webp' width={70} height={70 } alt='graphic_process'></Image>
                        </div>
                            <div className='pt-2 pl-8 pr-8 text-zinc-800 group-hover:text-gray-200 font-semibold text-xl text-center '>Concept Development</div>
                            <div className='pt-2 pl-8 pr-8 font-medium text-zinc-800 group-hover:text-gray-200 text-[16px] text-center'>Submitting drafts for review and incorporating feedback.</div>
                        </div>
                    </div>

                    <div className='group p-4 ' data-aos="flip-left">
                        <div className='p-2 border-[5px] border-violet-800 group-hover:border-zinc-900 group-hover:scale-110 group-hover:bg-violet-800 transition ease-in duration-200 delay-150 rounded-lg h-[40vh]'>
                        <div className='border-[5px] border-violet-800 group-hover:border-white rounded-full w-16 h-16 flex justify-center items-center font-bold text-violet-800 text-2xl group-hover:bg-violet-800 group-hover:text-gray-200  transition ease-in duration-200 delay-150 '>04 </div>
                        <div className='flex justify-center items-center'>
                            <Image className='flex lg:-mt-8 -mt-14 group-hover:rotate-doors ' src='/imgs/project-management.webp' width={70} height={70 } alt='graphic_process'></Image>
                        </div>
                            <div className='pt-2 pl-8 pr-8 text-zinc-800 group-hover:text-gray-200  font-semibold text-xl text-center '>Completion & Handover</div>
                            <div className='pt-2 pl-8 pr-8 font-medium text-zinc-800 group-hover:text-gray-200  text-[15px] text-center'>Providing polished, top-tier graphics.</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GraphicWorkProcess