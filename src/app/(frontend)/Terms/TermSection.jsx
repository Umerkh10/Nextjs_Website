"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TermSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 200, 
    });
  }, []);
  return (
    <div className='ml-8 mr-8 mt-10 mb-10' data-aos='fade-right'>
    <div className='text-3xl text-slate-800 font-bold'>Terms And Conditions</div>
    <div className='mt-3 text-base text-slate-900 font-medium '>These terms explain how you can use our service. Agreeing to them lets you continue, and disagreeing means you shouldn't use it. We can change these terms later, but you'll always know.</div>
    <div className='mt-3 text-base text-slate-900 font-medium '>Show drafts volume_up This document outlines the terms and conditions that govern your access and use of our service. By using our service, you acknowledge that you have read, understood, and agree to be bound by these terms. If you disagree with any of these terms, you are prohibited from using the service. We reserve the right to update these terms at any time without prior notice. </div>
    
    <div className=' mt-5 text-3xl text-slate-800 font-bold'>Product Delivery</div>
    <div className='mt-3 text-base text-slate-900 font-medium '>Excellent news! Your order for the [product name] is on its way. Our fulfillment center is meticulously packaging it to ensure it arrives in pristine condition. Once it ships, you'll receive an email notification containing a tracking code. This unique code grants you access to a real-time map where you can follow your package's progress, from leaving the warehouse to reaching your doorstep. We understand the thrill of anticipation, so feel free to use the tracker to monitor its exciting journey (but please, avoid stalking the delivery person!).</div>

    <div className=' mt-5 text-3xl text-slate-800 font-bold'>Product Compatibility / Updates</div>
    <div className='mt-3 text-base text-slate-900 font-medium '>Ensuring product compatibility is key to a well-functioning system.  Before adding a new device or software, check the manufacturer's website for compatibility information.  They often have resources like compatibility charts or tools to verify if your existing products will work with the new addition. </div>
    <div className='mt-3 text-base text-slate-900 font-medium '>We collect Device Information using the following technologies:</div>
    <ul className='flex flex-col mt-2 gap-1 '>
                <li className='flex font-medium text-base text-slate-800  gap-1'>  
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle fill-purple-800 stroke-purple-800"><circle cx="12" cy="12" r="10"/></svg>
                Nam quis lacus elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</li>
                <li className='flex font-medium text-base text-slate-800 gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle fill-purple-800 stroke-purple-800"><circle cx="12" cy="12" r="10"/></svg>
                Ut fermentum, augue id dapibus vehicula, tortor nisi molestie quam, a auctor nibh lacus eu orci.</li>
                <li className='flex font-medium text-base text-slate-800 gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle fill-purple-800 stroke-purple-800"><circle cx="12" cy="12" r="10"/></svg>
                Vestibulum consectetur orci non accumsan hendrerit. Quisque mollis nulla eros.</li>
                <li className='flex  font-medium text-base text-slate-800 gap-1' >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle fill-purple-800 stroke-purple-800 "><circle cx="12" cy="12" r="10"/></svg> 
                Quisque mollis nulla eros. Vestibulum ante ipsum primis in faucibus</li>
            </ul>

            <div className='mt-4 text-3xl text-slate-800 font-bold'>Modifications</div>
            <div className='mt-3 text-base text-slate-900 font-medium '>In today's rapidly evolving technological landscape, staying ahead of the curve requires a commitment to continuous learning and adaptation. Companies and individuals alike must embrace change and foster a culture of innovation to remain competitive. This involves not only keeping up with the latest advancements in technology but also understanding the broader implications for society and the economy. By prioritizing education, investing in research and development, and fostering collaboration across disciplines, we can navigate the challenges of the modern world and harness new opportunities for growth and success.</div>
            
            <div className='mt-4 text-3xl text-slate-800 font-bold'>Unauthorized/Illegal Uses</div>
            <div className='mt-3 text-base text-slate-900 font-medium '>Unauthorized or illegal uses encompass a broad range of activities that violate laws, regulations, or terms of service agreements. These actions include, but are not limited to, hacking into systems, distributing malware, engaging in identity theft, and using copyrighted material without permission. Additionally, unauthorized access to confidential information, financial fraud, and the illicit sharing of sensitive data fall under this category. Such activities not only undermine the integrity and security of digital and physical environments but also pose significant risks to individuals, businesses, and society at large, often resulting in legal consequences and substantial financial losses.</div>

            <ul className='flex flex-col mt-2 gap-1 '>
                <li className='flex font-medium text-base text-slate-800  gap-1'>  
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle fill-purple-800 stroke-purple-800"><circle cx="12" cy="12" r="10"/></svg>
                Nam quis lacus elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</li>
                <li className='flex font-medium text-base text-slate-800 gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle fill-purple-800 stroke-purple-800"><circle cx="12" cy="12" r="10"/></svg>
                Ut fermentum, augue id dapibus vehicula, tortor nisi molestie quam, a auctor nibh lacus eu orci.</li>
                <li className='flex font-medium text-base text-slate-800 gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle fill-purple-800 stroke-purple-800"><circle cx="12" cy="12" r="10"/></svg>
                Vestibulum consectetur orci non accumsan hendrerit. Quisque mollis nulla eros.</li>
                <li className='flex  font-medium text-base text-slate-800 gap-1' >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle fill-purple-800 stroke-purple-800 "><circle cx="12" cy="12" r="10"/></svg> 
                Quisque mollis nulla eros. Vestibulum ante ipsum primis in faucibus</li>
            </ul>

            <div className='mt-4 text-3xl text-slate-800 font-bold'>Warranty</div>
            <div className='mt-3 text-base text-slate-900 font-medium '>This product is covered by a limited warranty for a period of one year from the date of purchase. The warranty guarantees that the product will be free from defects in materials and workmanship under normal use. In the event of a defect, the manufacturer will, at its discretion, repair or replace the defective product or any of its parts. This warranty does not cover damages resulting from misuse, accidents, unauthorized alterations, or other causes not related to manufacturing defects. To make a claim under this warranty, please provide proof of purchase and contact our customer service team for further instructions.</div>
           
            <div className='mt-4 text-3xl text-slate-800 font-bold'>Lifetime License</div>
            <div className='mt-3 text-base text-slate-900 font-medium '>A lifetime license is a one-time purchase that grants the buyer perpetual access to a product or service without any recurring fees or expiration dates. This type of license is particularly advantageous for users seeking long-term solutions, as it eliminates the need for periodic renewals and ensures continuous, uninterrupted usage. Lifetime licenses are often offered for software applications, digital tools, or content subscriptions, providing significant cost savings over time. Additionally, they often come with the added benefit of regular updates and support, ensuring that the product remains up-to-date and functional throughout the duration of its use.</div>

    </div>
  )
}

export default TermSection