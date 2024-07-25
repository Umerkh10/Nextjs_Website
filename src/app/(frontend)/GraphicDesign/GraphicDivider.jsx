"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const GraphicDivider = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <div className=''>
            <div style={{ backgroundImage: "url('/imgs/bg-graphic-design-divider.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: '#272627' }} className='xl:h-[65vh]
        lg:h-[100vh] h-[120vh] bg-fixed ' data-aos="zoom-in">
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-8 pt-24 gap-8' data-aos="fade-up">
                    <div className='lg:col-span-2 md:col-span-2 col-span-1'>
                    <div className='text-gray-200 font-extrabold tracking-tight text-3xl md:text-4xl lg:text-[40px]'>
                            Superior Quality in Graphic Design Execution
                        </div>
                        <div className='pt-5 text-gray-200/65 text-sm md:text-base'>At Webnike, we excel in delivering exceptional graphic design projects, consistently surpassing client expectations with high-quality designs delivered on schedule.
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-gray-200 font-extrabold text-2xl md:text-3xl lg:text-4xl'>
                        Outstanding Design Excellence
                        </div>
                        <div className='text-gray-200 pt-3 text-sm md:text-base'>
                        Each graphic design project is carefully created and subjected to rigorous quality reviews. Our dedication to precision guarantees that every design we produce meets the highest standards and aligns seamlessly with your brand vision.
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-gray-200 font-extrabold text-2xl md:text-3xl lg:text-4xl'>
                        Consistent & On-Time Delivery
                        </div>
                        <div className='text-gray-200 pt-5  text-sm md:text-base'>
                        We prioritize meeting your graphic design deadlines with precision. Thanks to our efficient workflows and devoted team, you can count on receiving high-quality designs right on schedule.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GraphicDivider