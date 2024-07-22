import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AppBannner = () => {
  return (
    <div>
        <div style={{backgroundImage:"url('/imgs/App_banner.webp')",backgroundSize:'cover',backgroundPosition:'center' }} className='h-[170vh] lg:h-[100vh]' data-aos="zoom-in" >

        <div className='grid lg:grid-cols-2 grid-cols-1 pt-28'>
            <div className=' pl-10 pr-10 lg:pt-16 pt-5' data-aos="fade-up">
                <div className='text-gray-100 font-extrabold text-4xl md:text-5xl'>App Development</div>

                <div className='pt-5 text-gray-100 font-medium text-sm lg:text-base'>WebNike is a leading provider of innovative app development services, dedicated to transforming your ideas into dynamic and user-friendly applications. With a team of skilled developers and designers, we specialize in creating custom mobile apps that are both functional and visually appealing. Whether you need a robust business app, a captivating game, or a comprehensive e-commerce solution, WebNike ensures a seamless development process from concept to launch. Our commitment to quality and client satisfaction sets us apart, making us the go-to partner for all your app development needs. Let WebNike elevate your digital presence with cutting-edge technology and exceptional service.
                </div>

                <div className='lg:flex pt-5 '>
            <div className='mt-5 border rounded-2xl w-[60vw] md:w-[35vw] lg:w-[22vw] h-[10vh] flex items-center justify-center relative overflow-hidden bg-sky-400 font-medium text-white group hover:bg-sky-700 transition ease-in duration-200 delay-200 '> 
                Let's Talk App Development
                <ArrowRight className='ml-2 group-hover:translate-x-20 ease-in-out duration-200 delay-200'/>
            </div>
                <a href="#" className='lg:ml-5 mt-5 flex justify-center items-center no-underline text-lg rounded-2xl w-[40vw] md:w-[20vw] lg:w-[12vw] h-[10vh]  border-[1px] font-medium text-orange-500 border-orange-500 relative overflow-hidden transition duration-500 group hover:bg-orange-500 hover:text-white  '>
                    <span className=' truncate pr-2'>Let's Talk </span>
                    <span className=' group-hover:-translate-y-12 group-hover:translate-x-12 transition duration-200 ease-out'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle "><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    </span>
                  </a>
                  </div>

            </div>
            <div className='lg:pt-0 pt-5' data-aos="fade-down">
                <Image className='-ml-5' src="/imgs/app-banner-2.webp" width={800} height={500} alt='app-banner'></Image>
            </div>
        </div>
        </div>
   
    </div>
  )
}

export default AppBannner