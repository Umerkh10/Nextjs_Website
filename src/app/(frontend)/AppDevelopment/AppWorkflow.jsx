import { Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AppWorkflow = () => {
  return (
    <div className='bg-slate-200 dark:bg-transparent pr-6 pl-6 pt-16'>
        <div className='text-center font-extrabold text-3xl md:text-5xl' data-aos="fade-up">App Development WorkFlow</div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-6'>

            <div className='group' data-aos="flip-right">
                <div className=' border-black border-[4px] rounded-xl h-[40vh] bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/planner.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>01</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>Planner</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Developing a vision for the app </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Brainstorming the ideas </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Research the Market</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Analyzing the competition </div>
                </div>
            </div>


            <div className='group' data-aos="flip-left">
                <div className=' border-black border-[4px] rounded-xl h-[40vh] bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/wireframe.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>02</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>Wireframing</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Understanding the needs </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Wireframing of project by manager </div>
                    
                </div>
            </div>

            <div className='group' data-aos="flip-right">
                <div className=' border-black border-[4px] rounded-xl h-[40vh] bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/user-interface.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>03</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>App Design</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Prototyping User-Interface </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Wireframing User-Experience </div>
                </div>
            </div>

                  <div className='group' data-aos="flip-down">
                <div className=' border-black border-[4px] rounded-xl h-[40vh] bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/plan.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>04</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>Implementation</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Front-end Coding </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Backend Development </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Overall integrations </div>
                    
                </div>
            </div>

                  <div className='group' data-aos="flip-up">
                <div className=' border-black border-[4px] rounded-xl h-[40vh] bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/quality-control.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>05</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>Quality Analysis and Testing</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Security </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Usablity </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Functional </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Performance </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Compatablity </div>
                </div>
            </div>

                  <div className='group' data-aos="flip-left">
                <div className=' border-black border-[4px] rounded-xl h-[40vh] bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/rocket.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>06</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>Set in Motion</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Launch of Project </div>
                
                </div>
            </div>

                  <div className='group' data-aos="flip-right">
                <div className=' border-black border-[4px] rounded-xl h-[40vh] bg-purple-500 pl-4 pr-4 group-hover:border-sky-300 group-hover:border-[4px] group-hover:scale-105 group-hover:shadow-2xl transition ease-in duration-200 delay-150 '>
                    <div className='p-3 flex justify-between items-center'>
                        <div className='rounded-full h-14 w-14 border-black bg-sky-400 flex items-center 
                        justify-center '><Image className='group-hover:rotate-doors' src="/imgs/technical-support.png" width={35} height={35} alt='planner' ></Image></div>
                        <div className='text-6xl font-extrabold text-gray-100/50 '>07</div>
                    </div>
                    <div className='text-lg font-extrabold text-gray-200'>Post-Service Support</div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Maintenance </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Upgrading </div>
                    <div className='flex  font-medium italic text-gray-200 '> <Dot/>Troubleshooting</div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default AppWorkflow