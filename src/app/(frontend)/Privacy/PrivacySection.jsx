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
        <div className='ml-8 mr-8 mt-10 mb-10 text-foreground/85'data-aos='fade-right' >
            <div className='text-3xl font-bold'>Our Privacy Policy:</div>
            <div className='mt-3 text-base  font-medium '>The terms and conditions of the Masterminds Enterprises generated for the convenience of the users so that you can easily get access and use our website. It is necessary to agree with our privacy policy in order to get an access the website. Are you worried about the data privacy? We always take care your privacy by following the Data Protection Act 1998 so your data is not moved outside. We make it sure that the companies deal with us stored your personal information securely. The data security is used to compile the data according to the demand of the client and the basic information includes your name, contact details, and the nature of your work. You can process complaint through your provided information. After getting agreed with our terms, you are allowed to contact us via phone or email. We won’t use your personal information for any promotion cause. If you want to edit your private data you just need to pay a negligible fee by requesting a copy of the privacy, thus you can correct the information. Moreover, you can get updates via our newsletters without the involvement of the third party as the subscription list is only reachable to us. In our newsletters, the model code is used that provides us information about the open rates and click rates, which makes us able to recognize those persons who visited the message or associated links. Our whole work is licensed that include images, text, and so on. After acknowledging the information source, you can use a copy of our work for your academic and journalism work but it is not tolerated to make copies of our work. We let you know through this page if there is any change occur in our privacy policy in future.</div>
           

        </div>
    )
}

export default PrivacySection