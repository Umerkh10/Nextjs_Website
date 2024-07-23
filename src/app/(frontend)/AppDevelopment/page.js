import React from 'react'
import AppBannner from './AppBannner'
import Navbar from '../Navbar'
import WhyUsApp from './WhyUsApp'
import AppService from './AppService'
import AppTechnology from './AppTechnology'
import AppProjects from './AppProjects'
import AppIndustry from './AppIndustry'
import AppIntegration from './AppIntegration'
import AppWorkflow from './AppWorkflow'
import AppPartners from './AppPartners'
import AppFaq from './AppFaq'
import ContactFooter from '../Contact/ContactFooter'
import AppForm from './AppForm'

const page = () => {
  return (
    <div>
        <Navbar/>
        <AppBannner/>
        <WhyUsApp/>
        <AppService/>
        <AppTechnology/>
        <AppProjects/>
        <AppIndustry/>
        <AppIntegration/>
        <AppWorkflow/>
        <AppPartners/>
        <AppForm/>
        <AppFaq/>
        <ContactFooter/>
    </div>
  )
}

export default page