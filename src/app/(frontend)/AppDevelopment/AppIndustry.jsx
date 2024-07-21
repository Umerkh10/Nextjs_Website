"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const AppIndustry = () => {
  const [image, setImage] = useState(0)

  const descriptions = [
    {
      title: "E-Commerce",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We also integrate the app with your existing ecommerce platform for custom retail development, inventory, orders, and customer data management."
    },
    {
      title: "Fashion",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We also integrate the app with your existing platform for custom retail development, inventory, orders, and customer data management."
    },
    {
      title: "HealthCare",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We also integrate the app existing ecommerce platform for custom retail development, inventory, orders, and customer data management."
    },
    {
      title: "Real Estate",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We also integrate the app commerce platform for custom retail development, inventory, orders, and customer data management."
    },
    {
      title: "BlockChain/NFTs",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We also integrate the app with your existing ecommerce platform for custom retail development, inventory, orders, and customer data management."
    },
    {
      title: "Fitness",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We also integrate the ecommerce platform for custom retail development, inventory, orders, and customer data management."
    },
    {
      title: "Metaverse",
      text: "We create customized merce businesses to boost sales and engage with customers. We also integrate the app with your existing ecommerce platform for custom retail development, inventory, orders, and customer data management."
    },
    {
      title: "Delivery",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We also integratewith your existing ecommerce platform for custom retail development, inventory, orders, and customer data management."
    },
    {
      title: "Travel",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We with your existing ecommerce platform for custom retail development, inventory, orders, and customer data management."
    },
    {
      title: "Entertainment",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We also integrate the app with your existing ecommerce platform for custom retail orders, and customer data management."
    },
    {
      title: "Social Networking",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We also integrate the app with your existing ecommerce platform for custom retail development, inventory, orders, management."
    },
    {
      title: "Sports",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We also integrate the app with your existing ecommerce platform for custom retail development, inventory, orders, management."
    },
    {
      title: "ELearning",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We also integrate the app with your existing ecommerce platform for custom retail development, inventory, orders."
    },
    {
      title: "Gaming",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We the app with your existing ecommerce platform for custom retail development, inventory, orders, and customer data management."
    },
    {
      title: "Fintech",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. the app with your existing ecommerce platform for custom retail development, inventory, orders, and customer data management."
    },
    {
      title: "OnDemand",
      text: "We create customized mobile apps for ecommerce businesses to boost sales and engage with customers. We also your existing ecommerce platform for custom retail development, inventory, orders, and customer data management."
    }
  ];

  const OnHover = (index) => {
    if (index >= 0 && index <= descriptions.length) {
      setImage(index + 1);
    }
  };



  const imageSources = [
    "/imgs/ecommerce.webp",
    "/imgs/Fashion-tab.webp",
    "/imgs/Healthcare.webp",
    "/imgs/Real-estate.webp",
    "/imgs/Blockchain.webp",
    "/imgs/industry_mob-1.webp",
    "/imgs/Metaverse.webp",
    "/imgs/Food-Delivery.webp",
    "/imgs/Travel.webp",
    "/imgs/Entertainment-tab.webp",
    "/imgs/Social-networking.webp",
    "/imgs/Sports.webp",
    "/imgs/e-Learning-tab.webp",
    "/imgs/Gaming.webp",
    "/imgs/Fintech.webp",
    "/imgs/On-Demand.webp"
  ];

  const currentImage = imageSources[image - 1] || imageSources[0];

  return (
    <div className='bg-slate-200 dark:bg-transparent pr-6 pl-6 pt-10'>

      <div className='grid lg:grid-cols-3 grid-cols-1 p-6 '>
        <div className='col-span-2'>
          <div className='text-4xl font-extrabold'>Industry Wise App Development Solutions</div>
          <div className="scroll-container grid md:grid-cols-2 grid-cols-1 h-[80vh] overflow-y-scroll scroll-smooth pr-5 gap-5 mt-5">
            {descriptions.map((desc, index) => (
              <div
                key={desc.title}
                onMouseEnter={() => OnHover(index)} // Only apply onMouseEnter to the first element (E-Commerce)
                onMouseLeave={() => setImage(0)} // Only apply onMouseLeave to the first element (E-Commerce)
                className="flex justify-center items-center group">
                <div className="border-[3px] border-sky-400 rounded-lg bg-purple-500 group-hover:bg-purple-700 
                transition ease-in duration-200 delay-200 group-hover:scale-105 p-4">
                  <div className="text-xl font-semibold text-gray-100 ">{desc.title}</div>
                  <div className='text-gray-100'>{desc.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=''>
          <div className='flex justify-center items-center mt-5'>
            <Image src={currentImage} width={300} height={300} alt='site-1'></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppIndustry