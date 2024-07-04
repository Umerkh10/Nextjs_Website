import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const UseSeo = () => {
    return (
        <div className=' grid lg:grid-cols-2 grid-cols-1 '>
            <div className='bg-blue-900'>
                <div className='flex justify-center items-center p-10  '>
                    <Image src={"/imgs/Seo_Service_use.png"} width={600} height={600} alt='seo_use' ></Image>
                </div>
            </div>
            <div className='bg-blue-900 p-4 '>
                <div className='lg:pt-28 mb-3 '>
                    <span className='text-5xl font-bold text-gray-300'>Why Us For SEO</span>
                </div>
                <span className='capitalize text-teal-300 font-semibold text-[20px]'>best seo optimization agency</span>
                <div className='lg:w-[30vw] lg:h-[22vh] lg:mb-0 mb-5 mt-5'>
                    <span className='text-gray-300 font-medium '>Seo is truly an integral part of digital marketing. It takes your website visibility higher and keeps you ahead of all your competitors. It increases website visibility, user traffic, conversion rates.</span>
                </div>
                <div className='flex'><Image src={"/imgs/bar-chart.png"} width={100} height={60} alt='stats' ></Image>
                    <div className='pl-4 lg:w-[30vw] text-gray-300 text-lg font-medium'>Digital marketing focuses on direct response. We have the digital expertise of virtually any technical marketing agency.</div>
                </div>
                <div className='mt-8 border-[2px] dark:border-white rounded-lg w-[40vw] md:w-[25vw] lg:w-[15vw] h-[8vh] overflow-hidden flex justify-center items-center capitalize text-gray-300  font-semibold 
                group hover:bg-teal-400 hover:text-blue-900 transition ease-in duration-200 delay-200 cursor-pointer'> learn more
                <ArrowRight className='ml-1   group-hover:translate-x-20 transition ease-in duration-200 delay-200 '/>
                 </div>

            </div>
        </div>
    )
}

export default UseSeo