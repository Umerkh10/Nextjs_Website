import React from 'react'
import TermBanner from './TermBanner'
import Navbar from '../Navbar'
import ContactFooter from '../Contact/ContactFooter'
import TermSection from './TermSection'

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