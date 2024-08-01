"use client"
import React, { useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tab'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

const FrontendTs = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        offset: 200,
    });
}, []);
  return (
    <div className='bg-slate-200 dark:bg-transparent pt-12 pb-12'>
        <div data-aos="fade-up" className=' text-center md:text-2xl text-xl font-extrabold text-purple-700'>Tech Stack </div>
    <div data-aos="fade-down" className='pt-2 text-center md:text-5xl text-3xl font-bold italic '>Frontend Development</div>
    <Tabs defaultValue="HTML" className="text-center p-8" data-aos="fade-down">
<TabsList>
<TabsTrigger value="HTML"><Image className='' src="/imgs/html-5.png" width={40} height={40} alt='php'></Image>
<div className='italic font-medium py-2'>HTML</div></TabsTrigger>

<TabsTrigger value="React"><Image className='' src="/imgs/react.png" width={40} height={40} alt='php'></Image> <div className='italic font-medium py-2'>React</div></TabsTrigger>

<TabsTrigger value="Next"><Image className='' src="/imgs/next-js.png" width={40} height={40} alt='php'></Image>
<div className='italic font-medium py-2'>Next-Js</div> </TabsTrigger>

<TabsTrigger value="JS"><Image className='ml-2' src="/imgs/js.png" width={40} height={40} alt='php'>
</Image> <div className='italic font-medium py-2'>Javascript</div></TabsTrigger>
</TabsList>

<TabsContent value="HTML"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
The acronym HTML stands for "HyperText Markup Language," which is the cornerstone of any website. As a markup language, it allows you to define the structure and presentation of web content, including headings, paragraphs, and links. Due to its flexibility and ease of use, it is an essential tool for every web developer. HTML not only serves as the foundation for every webpage but also plays a crucial role in ensuring accessibility and proper display across different browsers.</div></TabsContent>

<TabsContent value="React"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
React is a widely-used JavaScript library developed by Facebook, which has transformed the way interactive user interfaces are built. Its primary benefits include a component-based architecture that promotes code reuse and accelerates development. By leveraging the virtual DOM, React delivers high performance through smart updates and rendering. Additionally, React is highly flexible, making it easy to integrate with various backends and other libraries or frameworks. In summary, React is favored by many developers for its effectiveness, efficiency, and adaptability.
</div></TabsContent>

<TabsContent value="Next"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
Next.js is an advanced framework built on React that elevates web application development. It offers server-side rendering (SSR) and static site generation (SSG), enhancing both performance and SEO. With automatic code splitting, Next.js applications are more efficient and load quickly. The integrated development environment and hot-reloading feature accelerate the development process, while its compatibility with various data sources makes Next.js a robust solution for contemporary web projects.
</div>
</TabsContent>

<TabsContent value="JS"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
Opting for JavaScript means selecting one of the most versatile programming languages globally, enabling the creation of dynamic websites and robust web applications. Its ongoing evolution and strong community support have made JavaScript essential for modern, responsive design. Whether crafting interactive user interfaces or ensuring smooth integration with various backend technologies, JavaScript brings your online vision to life.
</div></TabsContent>
</Tabs>

</div>
  )
}

export default FrontendTs