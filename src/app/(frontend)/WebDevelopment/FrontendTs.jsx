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
    <div className='bg-slate-200 dark:bg-transparent'>
        <div data-aos="fade-up" className='pt-6 text-center md:text-2xl text-xl font-extrabold text-purple-700'>Tech Stack </div>
    <div data-aos="fade-down" className='pt-2 text-center md:text-5xl text-3xl font-bold italic '>Frontend Development</div>
    <Tabs defaultValue="account" className="text-center p-8" data-aos="fade-down">
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
The HTML abbreviation comes from "HyperText Markup Language" and forms the foundation of any website. As a markup language, it enables you to structurally describe the content and visual elements of your website, such as headings, paragraphs and links. Thanks to its versatility and simplicity of use, it is an indispensable tool for every webmaster. HTML not only serves as the starting point for every page, but is also key to ensuring that it is accessible and displays correctly in various browsers.</div></TabsContent>

<TabsContent value="React"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
React is a popular JavaScript library created by Facebook that has revolutionised the development of interactive user interfaces. Its main advantages are component architecture enabling code reuse, significantly speeding up the development process. Thanks to the virtual DOM, React ensures optimal performance through intelligent updates and rendering. It is also extremely flexible, allowing integration with different backends and other libraries or frameworks. In short, React is the choice of many developers because of its effectiveness, efficiency, and versatility.
</div></TabsContent>

<TabsContent value="Next"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
It is a modern framework based on React that takes the development of web applications to a higher level. It provides support for server-side rendering (SSR) and static page generation (SSG), resulting in better performance and SEO optimisation. Due to automatic code splitting, applications created in Next.js are lighter and load faster. The built-in development environment and hot-reloading speed up the creation process, while its integration with multiple data sources makes Next.js a comprehensive solution for modern web projects.
</div>
</TabsContent>

<TabsContent value="JS"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
By choosing JavaScript, you are choosing one of the most comprehensive programming languages in the world, which allows you to create dynamic websites and extensive web applications. Thanks to continuous evolution and huge support from the community, JavaScript is becoming the key to modern and responsive design. From interactive user interfaces to seamless connections to a variety of backend technologies, JavaScript enables your vision to become a reality on the Internet.
</div></TabsContent>
</Tabs>

</div>
  )
}

export default FrontendTs