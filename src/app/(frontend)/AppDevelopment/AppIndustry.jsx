"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const AppIndustry = () => {
  const [image, setImage] = useState(0)

  const descriptions = [
    {
      title: "E-Commerce",
      text: "E-commerce apps provide a convenient and seamless shopping experience by allowing users to browse, purchase, and manage products directly from their mobile devices."
    },
    {
      title: "Fashion",
      text: "Fashion apps offer users a convenient and personalized shopping experience, allowing them to discover, try on, and purchase the latest trends directly from their mobile devices."
    },
    {
      title: "HealthCare",
      text: "Healthcare apps empower individuals to manage their health and wellness by providing easy access to medical information, tracking health metrics, and facilitating communication with healthcare providers."
    },
    {
      title: "Real Estate",
      text: "Real estate apps streamline the property search process by offering intuitive interfaces, advanced search filters, and real-time updates, making it easier for users to find their perfect home or investment opportunity."
    },
    {
      title: "BlockChain/NFTs",
      text: "Blockchain and NFT apps leverage decentralized technology to enable secure, transparent transactions and digital ownership, revolutionizing how we interact with digital assets."
    },
    {
      title: "Fitness",
      text: "Fitness apps offer personalized workout plans and progress tracking to help users achieve their health goals with convenience and motivation."
    },
    {
      title: "Metaverse",
      text: "Metaverse apps create immersive digital worlds where users can interact, socialize, and explore new experiences in a virtual space."
    },
    {
      title: "Delivery",
      text: "Delivery apps bring the convenience of your favorite meals and essentials straight to your doorstep, redefining how we experience shopping and dining"
    },
    {
      title: "Travel",
      text: "Travel apps are designed to simplify the journey, offering everything from real-time navigation and booking options to local recommendations and itinerary management."
    },
    {
      title: "Entertainment",
      text: "Entertainment apps are designed to provide users with engaging content and activities, from streaming movies and music to interactive games and social media experiences."
    },
    {
      title: "Social Networking",
      text: "Social networking apps connect people across the globe, fostering communication, sharing, and community-building in the digital age."
    },
    {
      title: "Sports",
      text: "Sports apps bring the excitement of live games to your fingertips, offering real-time scores, stats, and updates to keep fans connected and engaged."
    },
    {
      title: "ELearning",
      text: "eLearning apps provide convenient, interactive, and flexible learning experiences, enabling users to access educational content anytime and anywhere."
    },
    {
      title: "Gaming",
      text: "Gaming apps are a dynamic playground where creativity and technology converge to offer immersive experiences and endless entertainment at your fingertips."
    },
    {
      title: "Fintech",
      text: "Fintech apps are revolutionizing the way we manage our finances, offering everything from seamless payments to advanced investment tools right at our fingertips."
    },
    {
      title: "OnDemand",
      text: "On-demand apps provide users with immediate access to services or products, delivering convenience and efficiency through real-time solutions tailored to individual needs."
    }
  ];

  const OnHover = (index) => {
    if (index >= 0 && index <= descriptions.length) {
      setImage(index + 1);
    }
  };



  const imageSources = [
    "/imgs/ecommerce-app.webp",
    "/imgs/fashion-app.webp",
    "/imgs/health-app.webp",
    "/imgs/realestate-app.webp",
    "/imgs/blockchain-app.webp",
    "/imgs/fitness-app.webp",
    "/imgs/metaverse-app.webp",
    "/imgs/delivery-app.webp",
    "/imgs/travel-app.webp",
    "/imgs/entertainment-app.webp",
    "/imgs/social-networking-app.webp",
    "/imgs/sports-app.webp",
    "/imgs/elearning-app.webp",
    "/imgs/gaming-app.webp",
    "/imgs/fintech-app.webp",
    "/imgs/on-demand-app.webp"
  ];

  const currentImage = imageSources[image - 1] || imageSources[0];

  return (
    <div className='bg-slate-200 dark:bg-transparent pr-6 pl-6 pt-10'>

      <div className='grid lg:grid-cols-3 grid-cols-1 p-6 '>
        <div className='col-span-2' data-aos="fade-up">
          <div className='text-4xl font-extrabold'>Industry Wise App Development Solutions</div>
          <div className="scroll-container grid md:grid-cols-2 grid-cols-1 h-[80vh] overflow-y-scroll scroll-smooth pr-5 gap-5 mt-5">
            {descriptions.map((desc, index) => (
              <div
                key={desc.title}
                onMouseEnter={() => OnHover(index)} // Only apply onMouseEnter to the first element (E-Commerce)
                onMouseLeave={() => setImage(0)} // Only apply onMouseLeave to the first element (E-Commerce)
                className="flex justify-center items-center group">
                <div className="border-[3px] h-[45vh] lg:h-[32vh] border-sky-400 rounded-lg bg-purple-500 group-hover:bg-purple-700 
                transition ease-in duration-200 delay-200 group-hover:scale-105 p-4">
                  <div className="text-xl font-semibold text-gray-100 ">{desc.title}</div>
                  <div className='text-gray-100'>{desc.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='' data-aos="fade-down">
          <div className='flex justify-center items-center mt-10'>
            <Image className='rounded-xl' src={currentImage} width={300} height={300} alt='site-1'></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppIndustry