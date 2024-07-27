"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReturnRefund = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <>
            <div className='bg-slate-700 h-screen  lg:h-[100vh]' data-aos='fade-up'>
                <div style={{ backgroundImage: "url('/imgs/terms-banner.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                    className=' top-0 left-0 h-full  z-[-1] bg-blend-overlay bg-zinc-800 pt-[280px] pb-[180px] '>
                    <div className='text-gray-200 flex items-center justify-start ml-10 text-6xl font-extrabold mb-8'>Return Refund Policy</div>
                    <div className='border border-dashed border-purple-800 rounded-full w-[70%] md:w-1/3 lg:w-1/4 xl:w-1/4 flex items-center justify-start ml-10 pt-4 pb-4 pl-4 pr-4 mt-3'>
                        <div className='text-gray-200 text-[22px] font-semibold'>Home </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-right stroke-violet-800 ml-2 mr-2"><path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" /></svg>
                        <div className='text-purple-600 text-opacity-75 text-[22px] font-semibold '>Refund Policy </div>

                    </div>
                </div>
            </div>
            <div className='ml-8 mr-8 mt-10 mb-10 text-foreground/85' data-aos='fade-right' >
                <div className='text-4xl  font-extrabold'>Return Refund Policy</div>
                <div className='mt-3 text-base  opacity-80 font-medium '>Refund provides you Webnike Enterprises designs. Our design package allows the users to get the 100% refund granted by Webnike Enterprises while our 100% policy is not available on banner design, stationary design, brochure design, and website design. According to our refund policy:</div>

                <ul className='flex flex-col mt-5 gap-1 '>
                    <li className='flex font-medium text-base  mb-2 gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24" fill="" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle fill-purple-800 stroke-purple-800"><circle cx="12" cy="12" r="10" /></svg>
                        If you are not contented with the primary design then you are allowed to request the re-draw or cancellation of the design
                        Keep in mind that the order that needs to be delivered within 24 hours or less than 24 hours is not allowed to be cancelled
                        After the consent of the primary design, no refunds would be paid because the process of coding and development is initiated</li>

                    <li className='flex font-medium text-base  mb-2 gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle fill-purple-800 stroke-purple-800"><circle cx="12" cy="12" r="10" /></svg>
                        If the customer contacted us after two weeks of release, then he/she may not be allowed to any refund.</li>
                    <li className='flex font-medium text-base  mb-2 gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle fill-purple-800 stroke-purple-800"><circle cx="12" cy="12" r="10" /></svg>
                        If the customer has picked the Webnike Enterprises design, then no refund will be offered</li>
                    <li className='flex  font-medium text-base  mb-2 gap-3' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle fill-purple-800 stroke-purple-800 "><circle cx="12" cy="12" r="10" /></svg>
                        If the client asked for a refund then he/she is not allowed to use the primary design ideas. Unless the client fully paid the dues, the Patent remains the authority of the Webnike Enterprises designs.</li>
                </ul>

            </div>
        </>
    )
}

export default ReturnRefund