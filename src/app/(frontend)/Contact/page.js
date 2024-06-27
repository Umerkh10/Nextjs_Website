import React from 'react'
import BannerContact from './BannerContact'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'
import ContactFooter from './ContactFooter'

const Page = () => {
  return (
    <div>
    <Navbar/>
    <BannerContact/>
    <ContactForm/>
    <ContactDetails/>
    <ContactFooter/>
    </div>

  )
}

export default Page