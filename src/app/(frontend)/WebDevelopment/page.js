import React from 'react'
import WebBanner from './WebBanner'
import Navbar from '../Navbar'
import WhyUsDev from './WhyUsDev'
import WorkProcessDev from './WorkProcessDev'
import WebNumbers from './WebNumbers'
import BackendTs from './BackendTs'
import FrontendTs from './FrontendTs'
import WebForm from './WebForm'
import ToolsWeUse from './ToolsWeUse'
import ContactFooter from '../Contact/ContactFooter'

const page = () => {
  return (
    <div>
      <Navbar/>
      <WebBanner />
      <WhyUsDev/>
      <WorkProcessDev/>
      <WebNumbers/>
      <BackendTs/>
      <FrontendTs/>
      <WebForm/>
      <ToolsWeUse/>
      <ContactFooter/>
    </div>
  )
}

export default page