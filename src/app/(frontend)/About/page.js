import React from 'react'
import Navbar from '../Navbar'
import ContactFooter from '../Contact/ContactFooter'
import AboutBanner from './AboutBanner'
import AboutCard from './AboutCard'
import AboutFaq from './AboutFaq'
import ProjectTab from './ProjectTab'

export const metadata = {
  title: 'About Us',
  description: "Webnike Portfolio Website",
};

const page = () => {
  return (
    <>
      <Navbar />
      <AboutBanner />
      <AboutCard/>
      <AboutFaq/>
      <ProjectTab/>
      <ContactFooter/>
    </>
  )
}

export default page