import React from 'react'
import PrivacyBanner from './PrivacyBanner'
import Navbar from '../Navbar'
import ContactFooter from '../Contact/ContactFooter'
import PrivacySection from './PrivacySection'

export const metadata = {
    title: 'Privacy Policy',
    description: "Webnike Portfolio Website",
  };

const page = () => {
    return (
        <div>
            <Navbar />
            <PrivacyBanner />
            <PrivacySection/>
            <ContactFooter/>
        </div>
    )
}

export default page