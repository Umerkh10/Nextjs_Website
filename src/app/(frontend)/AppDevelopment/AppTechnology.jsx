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
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>Flutter is a versatile, open-source UI toolkit that leverages the Dart programming language to create high-performance, cross-platform mobile apps for both Android and iOS.</div>
                            
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
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>Python is a favored choice for mobile app development due to its straightforwardness, adaptability, and user-friendliness. It’s a robust and versatile language that excels in creating high-quality mobile applications.</div>
                            
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
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>Java is a powerful and dependable language that provides numerous advantages for app development, especially for enterprise solutions that demand top-notch performance, scalability, and security.</div>                           
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
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>iOS apps developed using Swift provide native performance, a smooth learning experience, robust community support, compatibility with other languages, enhanced code safety, and future-proofing due to its ongoing development and maintenance by Apple.</div>
                            
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
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>
                                React Native enables developers to build apps for both iOS and Android using a unified codebase. This framework supports the creation of high-performance applications that leverage the full potential of the device.</div>
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
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>
                                Kotlin is an excellent language for Android app development, offering advantages like seamless Java interoperability and modern features that enhance both the speed and security of app creation.</div>
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
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>Ionic is a widely-used open-source framework designed for developing hybrid mobile apps. It leverages web technologies like HTML, CSS, and JavaScript to build applications that run seamlessly on both iOS and Android platforms.</div>
                            
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
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>Xamarin technology enables the creation of cross-platform mobile apps with native performance and a unified C# codebase. It offers access to native functionalities and seamless integration with Visual Studio, making it a robust and effective development framework.</div>
                            
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
                                <div className='pt-3 text-[14px] font-medium group-hover:text-gray-200'>PhoneGap is a framework for building mobile applications with web technologies such as HTML, CSS, and JavaScript. It enables access to native device capabilities and integrates with Adobe Creative Cloud, making it a robust and effective tool for app development.</div>                           
                            </div>
                        </div>
                    </div>
                </div>


            </div>

    </div>
  )
}

export default AppTechnology