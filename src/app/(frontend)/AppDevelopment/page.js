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
import AppFaq from './AppFaq'
import ContactFooter from '../Contact/ContactFooter'
import AppForm from './AppForm'

export const metadata = {
  title: 'App Development',
  description: "Webnike Portfolio Website",
};

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
        <AppForm/>
        <AppFaq/>
        <ContactFooter/>
    </div>
  )
}

export default page