"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PrivacySection = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          offset: 200, 
        });
      }, []);
    return (
        <div className='ml-8 mr-8 mt-10 mb-10'data-aos='fade-right' >
            <div className='text-3xl text-slate-800 font-bold'>Respecting Your Data and Trust:</div>
            <div className='mt-3 text-base text-slate-900 font-medium '>Your privacy is of paramount importance to us. At Webnike, we are dedicated to ensuring that your personal and transactional information remains secure and protected. This policy highlights our commitment to safeguarding your data and the practices we employ to collect, store, and use the same.</div>
            <div className='text-3xl text-slate-800 font-bold mt-4'>1. Our Commitment to Privacy:</div>
            <div className='mt-3 text-base text-slate-900 font-medium'>We recognize the significance of maintaining your confidentiality. This section elaborates on our practices concerning the collection and use of your data, ensuring you are well-informed and confident in entrusting us with your information.</div>
            <div className='text-3xl text-slate-800 font-bold mt-4'>Information Collection Protocols:</div>
            <div className='mt-3 text-base text-slate-900 font-medium'>You have the autonomy to choose the amount of information you wish to share. Information is primarily collected when:</div>
            <ul className='flex flex-col mt-2 gap-1 '>
                <li className='flex font-medium text-base text-slate-800  gap-1'>  
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                   You subscribe to our newsletters.</li>
                <li className='flex font-medium text-base text-slate-800 gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                    You engage with our services.</li>
                <li className='flex font-medium text-base text-slate-800 gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                    You wish to receive periodic emails.</li>
                <li className='flex  font-medium text-base text-slate-800 gap-1' >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>  
                    You are interested in updates about our promotional deals.</li>
            </ul>

            <div className='text-3xl text-slate-800 font-bold mt-4'>Data Sharing:</div>
            <div className='mt-3 text-base text-slate-900 font-medium'>Upon engaging with our website, we may request certain information to better serve your needs:</div>
            
            <div className='text-3xl text-slate-800 font-bold mt-4'>The Requested Information:</div>
            <div className='mt-3 text-base text-slate-900 font-medium'>Upon engaging with our website, we may request certain information to better serve your needs</div>
            <ul className='flex flex-col mt-2 gap-1 '>
                <li className='flex font-medium text-base text-slate-800  gap-1'>  
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                Full Name</li>
                <li className='flex font-medium text-base text-slate-800 gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                Residential Address</li>
                <li className='flex font-medium text-base text-slate-800 gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                Email Address</li>
                <li className='flex  font-medium text-base text-slate-800 gap-1' >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>  
                Phone Number</li>
                <li className='flex  font-medium text-base text-slate-800 gap-1' >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>  
                Payment details (credit/debit card information)</li>
            </ul>

            <div className='text-3xl text-slate-800 font-bold mt-4'>Cookies Policy:</div>
            <div className='mt-3 text-base text-slate-900 font-medium'>Yes, we use cookies. Their purpose is to enhance user experience, gather data regarding website interactions and traffic, and ensure optimal service delivery. While cookies offer a streamlined experience, you retain the option to disable them through your browser settings. Please note that our cookies don't collect personal identifiable data.</div>

            <div className='text-3xl text-slate-800 font-bold mt-4'>Consent:</div>
            <div className='mt-3 text-base text-slate-900 font-medium'>Occasionally, we might host events or contests on our site. Participation in these might necessitate the provision of specific data. The collected information typically includes your contact data for Webnike purposes and basic demographic data.</div>


            <div className='text-3xl text-slate-800 font-bold mt-4'>Reaching Out:</div>
            <div className='mt-3 text-base text-slate-900 font-medium'>For any clarifications or further details about our policies, feel free to contact us via chat, call, or email.</div>


            <div className='text-3xl text-slate-800 font-bold mt-4'>Disclaimer:</div>
            <div className='mt-3 text-base text-slate-900 font-medium'>While we strive for accuracy, the content on our website is primarily for informative purposes. Some sections may contain data that's illustrative in nature, meant solely to provide visitors with a comprehensive understanding of our services. Always seek direct communication with us for precise information.</div>

            <div className='text-3xl text-slate-800 font-bold mt-4'>Remember:</div>
            <div className='mt-3 text-base text-slate-900 font-medium'>Your trust is invaluable. We are committed to doing everything in our power to retain it by ensuring maximum transparency and the highest levels of data protection.</div>

        </div>
    )
}

export default PrivacySection