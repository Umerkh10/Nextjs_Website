"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './AppTabs'
import Image from 'next/image'

const AppIntegration = () => {
    return (
        <div className='bg-slate-200 dark:bg-transparent pr-6 pl-6 pt-16'>
            <div className='text-center font-extrabold text-5xl '>Application Integration</div>

            <div className='pt-5 pl-8 pr-8 text-center text-sm italic font-semibold'>App integration involves connecting different software applications to work together seamlessly, enabling data exchange and coordinated functionality. This process allows disparate systems to communicate, share information, and leverage each other’s capabilities, thus enhancing overall efficiency and productivity. Integration can occur through various methods, such as APIs, webhooks, middleware, or custom coding, depending on the complexity and requirements of the systems involved. Effective app integration ensures that information flows smoothly between applications, reducing manual data entry, minimizing errors, and providing a unified user experience. This is particularly crucial in business environments where multiple applications, such as CRM, ERP, and marketing automation tools, need to interact to provide comprehensive and real-time insights for decision-making.</div>

            <div className='mt-5'>
                <Tabs defaultValue="thirdparty" className="text-center p-8" data-aos="fade-down">
                    <TabsList>
                        <TabsTrigger value="thirdparty"><Image className='' src="/imgs/thirdpartyintegration.png" width={80} height={80} alt='php'></Image></TabsTrigger>

                        <TabsTrigger value="crm"><Image className='' src="/imgs/integration.png" width={90} height={90} alt='php'></Image> </TabsTrigger>

                        <TabsTrigger value="ecommerce"><Image className='' src="/imgs/shopping.png" width={80} height={80} alt='php'></Image>
                        </TabsTrigger>


                    </TabsList>

                    <TabsContent value="thirdparty"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
                        <div className='font-extrabold md:text-3xl text-2xl uppercase italic lg:mt-4 mt-8 '>Third Party App Integration</div>

                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-6'>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/map.png" width={50} height={50} alt='api'></Image> Google Map API</div>
                            </div>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/facebook.png" width={50} height={50} alt='api'></Image> Facebook API</div>
                            </div>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/booking.png" width={50} height={50} alt='api'></Image> Booking API</div>
                            </div>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/Skyscanner.png" width={50} height={50} alt='api'></Image>Skyscanner API</div>
                            </div>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/uber.png" width={50} height={50} alt='api'></Image> Uber API</div>
                            </div>
                        </div>

                        <div className='mt-4 font-semibold md:text-lg text-center italic '> Third-party app integration enables external applications to connect and work seamlessly with existing software systems. This enhances functionality, streamlines workflows, and improves user experience by combining diverse tools and services into a unified platform.</div>

                    </div></TabsContent>

                    <TabsContent value="crm"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>
                        <div className='font-extrabold md:text-3xl text-2xl uppercase italic lg:mt-4 mt-8 '>CRM Integration
                            Applications
                        </div>

                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-6'>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/salesforce.png" width={50} height={50} alt='api'></Image> SalesForceCRM API</div>
                            </div>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/social.png" width={50} height={50} alt='api'></Image> Shopify Theme</div>
                            </div>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/zoho.png" width={50} height={50} alt='api'></Image> Zoho CRM API</div>
                            </div>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/hubspot.png" width={50} height={50} alt='api'></Image>HubSpot CRM API</div>
                            </div>

                        </div>

                        <div className='mt-4 font-semibold md:text-lg text-center italic '>
                        CRM app integration connects customer relationship management software with other business tools to streamline operations and improve customer service. It unifies data from email marketing, e-commerce, and support systems, automating workflows and providing insights into customer behavior, which enhances decision-making and efficiency.</div>


                    </div></TabsContent>

                    <TabsContent value="ecommerce"><div className='md:pl-24 md:pr-24 pl-10 pr-10 pt-5'>

                    <div className='font-extrabold md:text-3xl text-2xl uppercase italic lg:mt-4 mt-8 '>E-Commerce App Integration</div>

                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-6'>


                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/social.png" width={50} height={50} alt='api'></Image> Shopify API</div>
                            </div>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/woocommerce.png" width={50} height={50} alt='api'></Image> WooCommerce API</div>
                            </div>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/bigcommerce.png" width={50} height={50} alt='api'></Image> BigCommerce API</div>
                            </div>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/magento.png" width={50} height={50} alt='api'></Image>Magento API</div>
                            </div>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/squarespace.png" width={50} height={50} alt='api'></Image>Squarespace API</div>
                            </div>

                            <div className='group'>
                                <div className='flex justify-center items-center p-2 text-gray-200 rounded border-sky-300 border-[4px] bg-purple-600 text-lg italic font-medium group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:border-purple-700 transition ease-in duration-200 delay-150 '><Image className='mr-3' src="/imgs/shopware.png" width={50} height={50} alt='api'></Image>Shopware API</div>
                            </div>

                        </div>

                        <div className='mt-4 font-semibold md:text-lg text-center italic '>
                        E-commerce app integration connects various software and services, like payment gateways and CRM tools, to enhance online shopping platforms. This integration streamlines operations, improves user experience, and boosts sales by creating a seamless, efficient system.</div>
                    </div>
                    </TabsContent>
                </Tabs>

            </div>

        </div>
    )
}

export default AppIntegration