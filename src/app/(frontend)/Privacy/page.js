import React from 'react'
import PrivacyBanner from './PrivacyBanner'
import Navbar from '../Navbar'
import ContactFooter from '../Contact/ContactFooter'
import PrivacySection from './PrivacySection'

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