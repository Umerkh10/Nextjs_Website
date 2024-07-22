import Image from 'next/image'
import React from 'react'

const AppTechnology = () => {
  return (
    <div className='bg-slate-200 dark:bg-transparent pr-6 pl-6 pt-10'>
        <div className='text-4xl font-extrabold' data-aos="fade-right" >Our Expertise In Leading App Development Technologies </div>

        <div className='pt-4  lg:w-[80vw] text-base font-semibold italic' data-aos="fade-up">Webnike stands at the forefront of app development, leveraging the latest technologies to deliver innovative and high-performing solutions. Our team of skilled developers employs cutting-edge tools and frameworks such as React Native, Flutter, and Swift to create seamless, user-friendly applications across various platforms. By integrating advanced AI and machine learning algorithms, we ensure that our apps are not only intuitive but also capable of providing personalized user experiences. At Webnike, we prioritize quality and efficiency, ensuring that our clients receive robust, scalable, and secure applications that meet their unique business needs.</div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5 mt-5'>

                <div className='p-4 ' data-aos="flip-down">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:-rotate-180 transition ease-in duration-200 delay-100' src="/imgs/flutter.png" width={60} height={60} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>01</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Flutter</div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>Flutter is an open-source UI development framework. It uses the Dart programming language to build high-quality, cross-platform mobile applications for Android & iOS.</div>
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4' data-aos="flip-up">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:rotate-180 transition ease-in duration-200 delay-100' src="/imgs/python.png" width={64} height={64} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>02</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Python</div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>Python is a popular technology for mobile app development because of its simplicity, flexibility, and ease of use. It is a versatile and powerful language that can be used for high-quality mobile app development.</div>
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4' data-aos="flip-down">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:-rotate-180 transition ease-in duration-200 delay-100' src="/imgs/java.png" width={64} height={64} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>03</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Java</div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>Java is a robust and reliable language that offers many benefits for app development services, particularly for enterprise applications that require high performance, scalability, and security.</div>                           
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4 ' data-aos="flip-up">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:rotate-180 transition ease-in duration-200 delay-100' src="/imgs/swift.png" width={64} height={64} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>04</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Swift
                                </div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>iOS apps built with Swift offer native performance, an easy learning curve, strong community support, interoperability with other languages, safer code, and future-proofing since it is developed and maintained by Apple.</div>
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4 ' data-aos="flip-down">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:-rotate-180 transition ease-in duration-200 delay-100' src="/imgs/science.png" width={64} height={64} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>05</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>React Native</div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>React Native allows app developers to use a single codebase to create apps for both iOS and Android platforms. It helps to build high-performance apps that can utilize the device’s capabilities.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4 ' data-aos="flip-up">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:rotate-180 transition ease-in duration-200 delay-100' src="/imgs/kotlin.png" width={64} height={64} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>06</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Kotlin</div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>Kotlin is a powerful language for Android app development that provides many benefits, such as interoperability with Java and modern features for faster and safer app development.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4 ' data-aos="flip-down">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:-rotate-180 transition ease-in duration-200 delay-100' src="/imgs/reaction.png" width={60} height={60} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>07</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Ionic</div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>Ionic is a popular open-source framework used for building hybrid mobile applications. It uses web technologies such as HTML, CSS, and JavaScript to create applications that work on iOS and Android devices.</div>
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4' data-aos="flip-up">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:rotate-180 transition ease-in duration-200 delay-100' src="/imgs/xamarin.png" width={64} height={64} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>08</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Xamarin</div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>Xamarin technology is used for building cross-platform mobile applications with native performance and a shared codebase in C#. It provides access to native features and integration with Visual Studio, making it a powerful and efficient development framework.</div>
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-4' data-aos="flip-down">
                    <div className='group '>
                        <div className='relative group-hover:scale-105 group-hover:border-sky-200 border-[5px]  group-hover:bg-slate-900 transition ease-in duration-200 delay-100 border-violet-800 lg:h-[55vh] lg:w-[25vw] rounded-md group-hover:rounded-2xl p-4 overflow-hidden'>
                            <div style={{ backgroundImage: "url('/imgs/bg-workprocess-web.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full  group-hover:translate-y-0'></div>
                            <div className='relative z-10'>
                                <div className='flex justify-between'>
                                    <div className='bg-slate-300 group-hover:bg-sky-200 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
                                        <Image className='group-hover:-rotate-180 transition ease-in duration-200 delay-100' src="/imgs/phonegap.png" width={64} height={64} alt='pen'></Image>
                                    </div>
                                    <div className='font-extrabold text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-sky-200 '>09</div>
                                </div>
                                <div className='group-hover:text-gray-200 text-[20px] font-bold pt-4'>Phonegap</div>
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>PhoneGap technology is used for developing mobile apps using technologies like HTML, CSS, and JavaScript. It provides access to native features and integration with Adobe Creative Cloud, which makes it a powerful and efficient app development framework.</div>                           
                            </div>
                        </div>
                    </div>
                </div>


            </div>

    </div>
  )
}

export default AppTechnology