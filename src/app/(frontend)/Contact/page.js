import React from 'react'
import BannerContact from './BannerContact'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ContactForm from './ContactForm'
import ContactDetails from './ContactDetails'
import ContactFooter from './ContactFooter'

export const metadata = {
  title: 'Contact Us',
  description: "Webnike Portfolio Website",
};

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