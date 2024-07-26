import React from 'react'
import SeoBanner from './SeoBanner'
import Navbar from '../Navbar'
import UseSeo from './UseSeo'
import ServiceProvide from './ServiceProvide'
import Seo_WorkProcess from './Seo_WorkProcess'
import PopularCaseStudies from './PopularCaseStudies'
import SeoForm from './SeoForm'
import SeoTestimonial from './SeoTestimonial'
import SeoSolution from './SeoSolution'
import ContactFooter from '../Contact/ContactFooter'


export const metadata = {
  title: 'SEO Service',
  description: "Webnike Portfolio Website",
};

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
    <SeoTestimonial/>
    <SeoSolution/>
    <ContactFooter/>
    </div>
  )
}

export default page