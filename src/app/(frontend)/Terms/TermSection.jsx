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
    <div className='ml-8 mr-8 mt-10 mb-10 text-foreground/85' data-aos='fade-right'>
    <div className='text-3xl  font-bold'>Terms And Conditions</div>
    <div className='mt-3 text-base  font-medium '>These terms define the guidelines for utilizing our service. By accepting these terms, you are granted permission to use the service; however, if you do not agree with these terms, you should refrain from using the service. We reserve the right to update these terms in the future, but rest assured, you will always be notified of any changes.</div>
    <div className='mt-3 text-base  font-medium '>
    This document outlines the terms and conditions that regulate your access to and use of our service. By utilizing our service, you acknowledge that you have read, comprehended, and consented to adhere to these terms. Should you disagree with any portion of these terms, you are prohibited from using the service. We retain the right to modify these terms at any time without prior notice.</div>


  
         

    </div>
  )
}

export default TermSection