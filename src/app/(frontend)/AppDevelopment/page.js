import React from 'react'
import AppBannner from './AppBannner'
import Navbar from '../Navbar'
import WhyUsApp from './WhyUsApp'
import AppService from './AppService'
import AppTechnology from './AppTechnology'
import AppProjects from './AppProjects'
import AppIndustry from './AppIndustry'
import AppIntegration from './AppIntegration'

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
    </div>
  )
}

export default page