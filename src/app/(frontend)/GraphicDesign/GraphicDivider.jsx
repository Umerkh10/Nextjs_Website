import React from 'react'

const GraphicDivider = () => {
    return (
        <div className=''>
            <div style={{ backgroundImage: "url('/imgs/bg-graphic-design-divider.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: '#272627' }} className='xl:h-[65vh]
        lg:h-[100vh] h-[120vh] bg-fixed'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-8 pt-24 gap-8'>
                    <div className='lg:col-span-2 md:col-span-2 col-span-1'>
                        <div className='text-gray-200 font-extrabold tracking-tight lg:text-[40px]'>
                            Excellence in Graphic Design Delivery
                        </div>
                        <div className='pt-2 text-gray-200/65 text-sm md:text-base'>
                            At Webnike, our success in delivering outstanding graphic design projects is unparalleled. We consistently exceed client expectations by providing high-quality designs on time, every time.
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-gray-200 font-extrabold text-2xl md:text-3xl lg:text-4xl'>
                            Exceptional Design Quality
                        </div>
                        <div className='text-gray-200 pt-5 text-sm md:text-base'>
                            Each graphic design project is meticulously crafted and undergoes thorough quality checks. Our attention to detail ensures that every design we deliver is of the highest standard and perfectly aligned with your brand vision.
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-gray-200 font-extrabold text-2xl md:text-3xl lg:text-4xl'>
                            Reliable Timely Delivery
                        </div>
                        <div className='text-gray-200 pt-5 text-sm md:text-base'>
                            We are committed to delivering your graphic design projects within the agreed timelines. Our streamlined processes and dedicated team ensure that your designs are ready when you need them, without sacrificing quality.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GraphicDivider