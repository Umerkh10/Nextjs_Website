"use client"
import React, { useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tab'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BackendTs = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        offset: 200,
    });
}, []);
  return (
    <div className='bg-slate-200 dark:bg-transparent'>
      <div data-aos="fade-down" className='pt-12 text-center md:text-2xl text-xl font-extrabold text-purple-700'>Tech Stack</div>
      <div data-aos="fade-up" className='pt-2 text-center md:text-5xl text-3xl font-bold italic '>Backend Development</div>
      <Tabs defaultValue="PHP" data-aos="fade-up" className="text-center p-4">
        <TabsList  >
          <TabsTrigger  value="PHP"><Image className='' src="/imgs/php-code.png" width={40} height={40} alt='php'></Image>
            <div className='italic font-medium py-2'>PHP</div></TabsTrigger>

          <TabsTrigger value="Laravel"><Image className='' src="/imgs/laravel.png" width={40} height={40} alt='php'></Image> <div className='italic font-medium py-2'>Laravel</div></TabsTrigger>

          <TabsTrigger value="Node"><Image className='' src="/imgs/node.png" width={40} height={40} alt='php'></Image>
            <div className='italic font-medium py-2'>Node</div> </TabsTrigger>

          <TabsTrigger value="WordPress"><Image className='ml-2' src="/imgs/wordpress.png" width={40} height={40} alt='php'>
          </Image> <div className='italic font-medium py-2'>WordPress</div></TabsTrigger>
        </TabsList>

        <TabsContent value="PHP"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
        Opting for PHP for your project means selecting a technology with over two decades of proven history, ensuring both maturity and stability. PHP guarantees reliability and extensive database support while enabling the rapid and cost-efficient development of applications, regardless of their complexity. With no licensing fees and backed by a vibrant open-source community, PHP is an ideal choice for your online business.</div></TabsContent>

        <TabsContent value="Laravel"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
        Laravel stands out as one of the leading PHP frameworks, celebrated for its simplicity and comprehensive features. Its elegant syntax and user-friendly API facilitate rapid application development and deployment. Laravel's built-in authentication and security features offer a robust foundation for any project. With a vibrant ecosystem and integrated tools for database management, task scheduling, and testing, Laravel proves to be a highly adaptable and scalable solution, suitable for a diverse array of web projects.</div></TabsContent>

        <TabsContent value="Node"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
        Node.js is transforming web app development as a server-side JavaScript runtime. Its asynchronous, event-driven architecture ensures high performance, even under heavy loads. The npm package manager provides developers with an extensive library of modules, accelerating development and enhancing integration. Moreover, the use of JavaScript on both client and server sides streamlines development and boosts application consistency. In essence, Node.js is essential for creating fast, scalable, and efficient back-ends for modern web applications.</div>
        </TabsContent>

        <TabsContent value="WordPress"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
        While WordPress may not boast the most advanced code architecture, its unmatched flexibility and user-friendliness are undeniable. For those seeking more sophisticated and adaptable solutions, numerous frameworks enable the creation of more complex and scalable WordPress applications. These frameworks introduce a layer of abstraction and provide a more refined code structure, which is especially advantageous for advanced projects. Additionally, the platform's SEO tools and social media integration features remain significant benefits. Regular updates and a vibrant developer community ensure that WordPress, even when enhanced with additional frameworks, remains a secure and supported content management system. Consequently, it serves as a practical option for a diverse range of users, from individual bloggers to large enterprises, aiming to manage their online presence effectively.</div></TabsContent>
      </Tabs>

    </div>
  )
}

export default BackendTs
