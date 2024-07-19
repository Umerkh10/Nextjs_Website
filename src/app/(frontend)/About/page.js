import React from 'react'
import Navbar from '../Navbar'
import ContactFooter from '../Contact/ContactFooter'
import AboutBanner from './AboutBanner'
import AboutCard from './AboutCard'
import AboutFaq from './AboutFaq'
import ProjectTab from './ProjectTab'

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