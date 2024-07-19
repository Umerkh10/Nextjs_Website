"use client"
import React, { useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './AboutTabs'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectTab = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 200, 
        });
      }, []);
  return (
    <div className='bg-gray-200 dark:bg-transparent pt-20'>
        <div className='text-center text-xl font-semibold uppercase gradient-text italic' data-aos="fade-down">Over 150,000+ clients</div>
        <div className='pt-2 font-extrabold text-5xl text-center uppercase' data-aos="fade-up">Our Projects</div>


        <Tabs data-aos="fade-down" defaultValue="seo" className="text-center p-8">
        <TabsList >
          <TabsTrigger  value="seo"><Image className='' src="/imgs/seo.png" width={40} height={40} alt='php'></Image>
            <div className='italic font-medium py-2'>Seo</div></TabsTrigger>

          <TabsTrigger value="web"><Image className='ml-2' src="/imgs/web-development.png" width={40} height={40} alt='php'></Image> <div className='italic font-medium py-2'>Web/App</div></TabsTrigger>

          <TabsTrigger value="graphic"><Image className='' src="/imgs/graphic-design.png" width={40} height={40} alt='php'></Image>
            <div className='italic font-medium py-2'>Graphic  </div> </TabsTrigger>

          <TabsTrigger value="digital"><Image className='ml-2' src="/imgs/marketing-app.png" width={40} height={40} alt='php'>
          </Image> <div className='italic font-medium py-2'>Digital</div></TabsTrigger>
        </TabsList>

        <TabsContent value="seo">
        <div className='text-center pt-5 text-4xl font-extrabold uppercase italic' data-aos="fade-up">SEO</div>
            <div className='grid lg:grid-cols-2 grid-cols-1  gap-5 p-8'>
                <div className='group '>
                    <div data-aos="flip-down" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                        <Image className='rounded-xl' src="/about_imgs/seo_about-us.webp" width={400} height={400} alt='about-tab'></Image>
                    </div>
                </div>

                 <div className='group '>
                    <div data-aos="flip-up"  className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                        <Image className='rounded-xl' src="/about_imgs/seo-about-1.webp" width={600} height={500} alt='about-tab'></Image>
                    </div>
                </div>
            </div>
        </TabsContent>

        <TabsContent value="web">
            <div className='text-center pt-8 text-4xl font-extrabold uppercase italic' data-aos="fade-down">
                Web Development</div>
             <div className='grid lg:grid-cols-2 grid-cols-1  gap-5 p-8'>
                <div className='group '>
                    <div data-aos="flip-up" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                        <Image className='rounded-xl' src="/about_imgs/about-web-1.webp" width={500} height={400} alt='about-tab'></Image>
                    </div>
                </div>

                 <div className='group '>
                    <div data-aos="flip-down" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                        <Image className='rounded-xl' src="/about_imgs/about-web-2.webp" width={550} height={500} alt='about-tab'></Image>
                    </div>
                </div>
            </div>

            <div className='text-center pt-8 text-4xl font-extrabold uppercase italic' data-aos="fade-up" >App Development</div>
             <div className='grid lg:grid-cols-2 grid-cols-1  gap-5 p-8'>
                <div className='group '>
                    <div data-aos="flip-down" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                        <Image className='rounded-xl' src="/about_imgs/about-app-1.webp" width={500} height={400} alt='about-tab'></Image>
                    </div>
                </div>

                 <div className='group '>
                    <div data-aos="flip-up" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                        <Image className='rounded-xl' src="/about_imgs/about-app-2.webp" width={550} height={500} alt='about-tab'></Image>
                    </div>
                </div>
            </div>

            </TabsContent>

        <TabsContent value="graphic">
                <div className='text-center pt-8 text-4xl font-extrabold uppercase italic' data-aos="fade-right">Graphic Design</div>
             <div className='grid lg:grid-cols-2 grid-cols-1  gap-5 p-8'>
                <div className='group '>
                    <div data-aos="flip-up" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                        <Image className='rounded-xl' src="/about_imgs/about-graphic-1.webp" width={500} height={400} alt='about-tab'></Image>
                    </div>
                </div>

                 <div className='group '>
                    <div data-aos="flip-down" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                        <Image className='rounded-xl' src="/about_imgs/about-graphic-2.webp" width={550} height={500} alt='about-tab'></Image>
                    </div>
                </div>
            </div>
        </TabsContent>

        <TabsContent value="digital">
    
            <div className='text-center pt-8 text-4xl font-extrabold uppercase italic' data-aos="fade-left">Digital Marketing</div>
             <div className='grid lg:grid-cols-2 grid-cols-1  gap-5 p-8'>
                <div className='group '>
                    <div data-aos="flip-up" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                        <Image className='rounded-xl' src="/about_imgs/about-digital-1.webp" width={500} height={400} alt='about-tab'></Image>
                    </div>
                </div>

                 <div className='group '>
                    <div data-aos="flip-down" className='flex justify-center items-center group-hover:scale-105 transition ease-in duration-200 delay-200'>
                        <Image className='rounded-xl' src="/about_imgs/about-digital-2.webp" width={550} height={500} alt='about-tab'></Image>
                    </div>
                </div>
            </div></TabsContent>
      </Tabs>

    </div>
  )
}

export default ProjectTab