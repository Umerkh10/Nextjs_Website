"use client"
import { PlusIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const AboutCard = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <div className='bg-gray-200 dark:bg-transparent'>
            <div className='pt-14'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-3 p-5'>

                    <div data-aos="fade-up" className=' '>
                        <div className='text-2xl font-extrabold underline underline-offset-4 decoration-purple-600 italic'>SEO</div>
                        <div className='flex gap-5 pt-3 group'>
                            <div className='flex justify-center items-center border rounded-3xl w-14 h-24 bg-purple-700'>
                                <Image className='group-hover:animate-bounce transition ease-in duration-200 delay-200 ' src="/imgs/seo.png" width={40} height={40} alt='seo_about' ></Image>
                            </div>
                            <div className='font-extrabold text-4xl '>SEO <br /> Service</div>
                        </div>
                        <div className='pt-4 text-lg font-medium pr-6 italic '>We don’t just work with concrete and steel. We are Approachable, with even</div>

                        <Link href="/SeoService" >  <div className='flex justify-center items-center mt-4 rounded-full w-[35vw] h-[12vh]  md:w-[20vw] md:h-[10vh] lg:w-[14vw] lg:h-[8vh]  border-[3px] border-purple-700 font-semibold group bg-zinc-900 dark:bg-gray-200 dark:text-black
                dark:hover:bg-purple-700 dark:hover:text-gray-100 hover:bg-purple-600 text-gray-100 transition ease-in duration-200 delay-100 hover:border-black '>More Info  <PlusIcon className='p-1 group-hover:rotate-180 transition ease-in duration-200 ' />
                </div>   </Link>
                    </div>

                    <div data-aos="fade-left" className=' '>
                        <div className='text-2xl font-extrabold underline underline-offset-4 decoration-purple-600 italic'>WEB</div>
                        <div className='flex gap-5 pt-3 group'>
                            <div className='flex justify-center items-center border rounded-3xl w-14 h-24 bg-purple-700'>
                                <Image className='group-hover:animate-bounce transition ease-in duration-200 delay-200 ' src="/imgs/web-development.png" width={40} height={40} alt='seo_about' ></Image>
                            </div>
                            <div className='font-extrabold text-4xl '>Web <br /> Development</div>
                        </div>
                        <div className='pt-4 text-lg font-medium pr-6 italic'>We don’t just work with concrete and steel. We are Approachable, with even</div>

                        <Link href="/WebDevelopment" > <div className='flex justify-center items-center mt-4 rounded-full w-[35vw] h-[12vh]  md:w-[20vw] md:h-[10vh] lg:w-[14vw] lg:h-[8vh]  border-[3px] border-purple-700 font-semibold group bg-zinc-900 dark:bg-gray-200 dark:text-black
                dark:hover:bg-purple-700 dark:hover:text-gray-100 hover:bg-purple-600 text-gray-100 transition ease-in duration-200 delay-100 hover:border-black '>
                    More Info  <PlusIcon className='p-1 group-hover:rotate-180 transition ease-in duration-200 ' />
                    </div>
                    </Link>
                    </div>

                    <div data-aos="fade-down" className=' '>
                        <div className='text-2xl font-extrabold underline underline-offset-4 decoration-purple-600 italic'>GRAPHIC</div>
                        <div className='flex gap-5 pt-3 group'>
                            <div className='flex justify-center items-center border rounded-3xl w-14 h-24 bg-purple-700'>
                                <Image className='group-hover:animate-bounce transition ease-in duration-200 delay-200 ' src="/imgs/graphic-design.png" width={40} height={40} alt='seo_about' ></Image>
                            </div>
                            <div className='font-extrabold text-4xl '>Graphic <br /> Design</div>
                        </div>
                        <div className='pt-4 text-lg font-medium pr-6 italic'>We don’t just work with concrete and steel. We are Approachable, with even</div>

                        <Link href="/GraphicDesign"><div className='flex justify-center items-center mt-4 rounded-full w-[35vw] h-[12vh]  md:w-[20vw] md:h-[10vh] lg:w-[14vw] lg:h-[8vh]  border-[3px] border-purple-700 font-semibold group bg-zinc-900 dark:bg-gray-200 dark:text-black
                dark:hover:bg-purple-700 dark:hover:text-gray-100 hover:bg-purple-600 text-gray-100 transition ease-in duration-200 delay-100 hover:border-black '>
                     More Info  <PlusIcon className='p-1 group-hover:rotate-180 transition ease-in duration-200 ' /></div>
                     </Link>
                    </div>

                    <div data-aos="fade-left" className='mt-4 '>
                        <div className='text-2xl font-extrabold underline underline-offset-4 decoration-purple-600 italic'>App</div>
                        <div className='flex gap-5 pt-3 group'>
                            <div className='flex justify-center items-center border rounded-3xl w-14 h-24 bg-purple-700'>
                                <Image className='group-hover:animate-bounce transition ease-in duration-200 delay-200 ' src="/imgs/web-development.png" width={40} height={40} alt='seo_about' ></Image>
                            </div>
                            <div className='font-extrabold text-4xl '>App <br /> Development</div>
                        </div>
                        <div className='pt-4 text-lg font-medium pr-6 italic'>We don’t just work with concrete and steel. We are Approachable, with even</div>

                        <Link href="/AppDevelopment" > <div className='flex justify-center items-center mt-4 rounded-full w-[35vw] h-[12vh]  md:w-[20vw] md:h-[10vh] lg:w-[14vw] lg:h-[8vh]  border-[3px] border-purple-700 font-semibold group bg-zinc-900 dark:bg-gray-200 dark:text-black
                dark:hover:bg-purple-700 dark:hover:text-gray-100 hover:bg-purple-600 text-gray-100 transition ease-in duration-200 delay-100 hover:border-black '>
                    More Info  <PlusIcon className='p-1 group-hover:rotate-180 transition ease-in duration-200 ' />
                    </div>
                    </Link>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default AboutCard