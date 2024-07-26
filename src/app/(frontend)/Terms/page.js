import React from 'react'
import TermBanner from './TermBanner'
import Navbar from '../Navbar'
import ContactFooter from '../Contact/ContactFooter'
import TermSection from './TermSection'

export const metadata = {
  title: 'Terms & Condition',
  description: "Webnike Portfolio Website",
};

const page = () => {
  return (
    <div>
    <Navbar/>
    <TermBanner/>
    <TermSection/>
    <ContactFooter/>
    </div>
  )
}

export default page