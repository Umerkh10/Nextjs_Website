import React from 'react'
import AppBannner from './AppBannner'
import Navbar from '../Navbar'
import WhyUsApp from './WhyUsApp'
import AppService from './AppService'
import AppTechnology from './AppTechnology'
import AppProjects from './AppProjects'
import AppIndustry from './AppIndustry'

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
    </div>
  )
}

export default page