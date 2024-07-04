import {  ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SeoBanner = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1  '>
        <div className='bg-slate-300 dark:bg-slate-800 p-5'>
            <div className='xl:pt-48 lg:pt-40 pt-20 flex flex-col'> <span className='md:text-7xl text-5xl dark:text-gray-300 text-blue-950 font-bold'>Best SEO <br /> Optimization <br /> Agency</span>
            <div className='mt-5 border rounded-2xl w-[50vw] md:w-[30vw] lg:w-[22vw] h-[10vh] flex items-center justify-center relative overflow-hidden bg-blue-600 font-medium text-white group hover:bg-blue-900 transition ease-in duration-200 delay-200 '> 
                Let's Talk About SEO
                <ArrowRight className='ml-2 group-hover:translate-x-20 ease-in-out duration-200 delay-200'/>
            </div>
            <div className='mt-3 text-lg font-medium '>We build strategic insights based on target audience interactions and interactions along with big data. </div>
            </div>
        </div>
        <div className='bg-slate-300 dark:bg-slate-800 '>
            <div className='flex items-center justify-center xl:pt-48 lg:pt-40 pt-20 '><Image src={"/imgs/Seo_Service_banner.png"} width={800} height={600} alt='Seo_banner' ></Image></div>
        </div>
    </div>
  )
}

export default SeoBanner