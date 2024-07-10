import Image from 'next/image'
import React from 'react'

const GraphicWorkProcess = () => {
    return (
        <div className=''>
            <div style={{ backgroundImage: "url('/imgs/process_bg_1.webp')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: '#90c6c1' }} className='p-5'>
                <div className='pt-20 text-center text-orange-600 text-lg font-bold'>OUR SEAMLESS WORK PROCESS</div>
                <div className='text-center text-slate-800  text-4xl font-extrabold pt-3'>Our Simplified Approach To Graphic Design</div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 gap-3 '>
                    <div className='group p-4 '>
                        <div className='p-2 border-[5px]  group-hover:border-blue-600 group-hover:scale-110 transition ease-in duration-200 delay-150 rounded-lg h-[40vh]'>
                        <div className='border-[5px] border-blue-700 rounded-full w-16 h-16 flex justify-center items-center font-semibold text-blue-700 text-2xl  transition ease-in duration-200 delay-150 '>01 </div>
                        <div className='flex justify-center items-center'>
                            <Image className='flex -mt-8 group-hover:rotate-doors ' src='/imgs/graphic-process-1.webp' width={70} height={70 } alt='graphic_process'></Image>
                        </div>
                            <div className='pt-2 pl-8 pr-8 text-zinc-800 font-semibold text-xl text-center '>Discovery & Planning</div>
                            <div className='pt-2 pl-8 pr-8 font-medium text-zinc-800 text-[16px] text-center'>Understanding your vision and requirements</div>
                        </div>
                    </div>

                    <div className='group p-4 '>
                        <div className='p-2 border-[5px]  group-hover:border-blue-600 group-hover:scale-110 transition ease-in duration-200 delay-150 rounded-lg h-[40vh]'>
                        <div className='border-[5px] border-blue-700 rounded-full w-16 h-16 flex justify-center items-center font-semibold text-blue-700 text-2xl transition ease-in duration-200 delay-150 '>02 </div>
                        <div className='flex justify-center items-center'>
                            <Image className='flex -mt-8 group-hover:rotate-doors ' src='/imgs/concept.png' width={70} height={70 } alt='graphic_process'></Image>
                        </div>
                            <div className='pt-2 pl-8 pr-8 text-zinc-800 font-semibold text-xl text-center '>Concept Development</div>
                            <div className='pt-2 pl-8 pr-8 font-medium text-zinc-800 text-[15px] text-center'>Brainstorming and creating initial design concepts.</div>
                        </div>
                    </div>

                    <div className='group p-4 '>
                        <div className='p-2 border-[5px]  group-hover:border-blue-600 group-hover:scale-110 transition ease-in duration-200 delay-150 rounded-lg h-[40vh]'>
                        <div className='border-[5px] border-blue-700 rounded-full w-16 h-16 flex justify-center items-center font-semibold text-blue-700 text-2xl  transition ease-in duration-200 delay-150 '>03 </div>
                        <div className='flex justify-center items-center'>
                            <Image className='flex -mt-8 group-hover:rotate-doors ' src='/imgs/feedback.png' width={70} height={70 } alt='graphic_process'></Image>
                        </div>
                            <div className='pt-2 pl-8 pr-8 text-zinc-800 font-semibold text-xl text-center '>Design & Feedback</div>
                            <div className='pt-2 pl-8 pr-8 font-medium text-zinc-800 text-[16px] text-center'>Sharing drafts for feedback and making revisions.</div>
                        </div>
                    </div>

                    <div className='group p-4 '>
                        <div className='p-2 border-[5px]  group-hover:border-blue-600 group-hover:scale-110 transition ease-in duration-200 delay-150 rounded-lg h-[40vh]'>
                        <div className='border-[5px] border-blue-700 rounded-full w-16 h-16 flex justify-center items-center font-semibold text-blue-700 text-2xl  transition ease-in duration-200 delay-150 '>04 </div>
                        <div className='flex justify-center items-center'>
                            <Image className='flex lg:-mt-8 -mt-14 group-hover:rotate-doors ' src='/imgs/final.png' width={70} height={70 } alt='graphic_process'></Image>
                        </div>
                            <div className='pt-2 pl-8 pr-8 text-zinc-800 font-semibold text-xl text-center '>Final Submission & Delivery</div>
                            <div className='pt-2 pl-8 pr-8 font-medium text-zinc-800 text-[15px] text-center'>Delivering high-quality, finalized graphics.</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GraphicWorkProcess