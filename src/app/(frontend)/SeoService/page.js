import React from 'react'
import SeoBanner from './SeoBanner'
import Navbar from '../Navbar'
import UseSeo from './UseSeo'
import ServiceProvide from './ServiceProvide'
import Seo_WorkProcess from './Seo_WorkProcess'
import PopularCaseStudies from './PopularCaseStudies'
import SeoForm from './SeoForm'

const page = () => {
  return (
    <div>
    <Navbar/>
    <SeoBanner/>
    <UseSeo/>
    <ServiceProvide/>
    <Seo_WorkProcess/>
    <PopularCaseStudies/>
    <SeoForm/>
    </div>
  )
}

export default page