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
      <div data-aos="fade-down" className='pt-6 text-center md:text-2xl text-xl font-extrabold text-purple-700'>Tech Stack</div>
      <div data-aos="fade-up" className='pt-2 text-center md:text-5xl text-3xl font-bold italic '>Backend Development</div>
      <Tabs defaultValue="account" data-aos="fade-up" className="text-center p-8">
        <TabsList>
          <TabsTrigger value="PHP"><Image className='' src="/imgs/php-code.png" width={40} height={40} alt='php'></Image>
            <div className='italic font-medium py-2'>PHP</div></TabsTrigger>

          <TabsTrigger value="Laravel"><Image className='' src="/imgs/laravel.png" width={40} height={40} alt='php'></Image> <div className='italic font-medium py-2'>Laravel</div></TabsTrigger>

          <TabsTrigger value="Node"><Image className='' src="/imgs/node.png" width={40} height={40} alt='php'></Image>
            <div className='italic font-medium py-2'>Node</div> </TabsTrigger>

          <TabsTrigger value="WordPress"><Image className='ml-2' src="/imgs/wordpress.png" width={40} height={40} alt='php'>
          </Image> <div className='italic font-medium py-2'>WordPress</div></TabsTrigger>
        </TabsList>

        <TabsContent value="PHP"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
          When you choose PHP for your project, you are investing in a technology with over twenty years of history, which guarantees maturity and stability. PHP not only ensures reliability and broad database support, but also enables cost-effective and quick creation of applications - both small and complex. Without licensing fees and with an active open-source community, PHP is the perfect solution for your online business.</div></TabsContent>

        <TabsContent value="Laravel"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
          Laravel is one of the most popular PHP frameworks, which impresses with both its ease of use and its extensive set of functions. Its elegant syntactic sugar and intuitive API make it easy to quickly deploy and develop applications, and built-in authentication and security mechanisms provide a solid foundation for any project. Thanks to its rich ecosystem and integrated tools for database management, task queuing and testing, Laravel is an extremely flexible and scalable solution, perfect for a wide range of web projects.</div></TabsContent>

        <TabsContent value="Node"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
          Node.js is a server-side JavaScript runtime that is revolutionizing web app development. Its asynchronous, event-based architecture guarantees high performance, even with multiple simultaneous requests. With the comprehensive npm package manager, developers have access to a huge library of modules, which speeds development and facilitates integration. Additionally, the uniformity of JavaScript on both client and server sides simplifies the development process and improves application consistency. In short, Node.js is the key to a fast, scalable and efficient back-end for today's web applications.</div>
        </TabsContent>

        <TabsContent value="WordPress"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
          Although WordPress is not known for the most sophisticated code architecture, its flexibility and ease of use cannot be overstated. Moreover, for those who are looking for more advanced and flexible solutions, there are various frameworks that allow you to create more extensive and scalable WordPress applications. These frameworks add a layer of abstraction and offer a more elegant code structure, which is particularly beneficial for advanced projects. In addition, SEO tools and social media integration options remain important advantages. Regular updates and an active developer community ensure that WordPress, even with additional frameworks, is a secure and supported content management tool. Ultimately, this makes it a practical choice for a wide range of users, from small bloggers to large corporations, who want to manage their online presence.</div></TabsContent>
      </Tabs>

    </div>
  )
}

export default BackendTs
