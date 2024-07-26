import React from 'react'
import ServiceBanner from './ServiceBanner'
import Navbar from '../Navbar'
import ServiceCards from './ServiceCards'
import ServiceClients from './ServiceClients'
import ServiceAwards from './ServiceAwards'
import ContactFooter from '../Contact/ContactFooter'

export const metadata = {
  title: 'Services',
  description: "Webnike Portfolio Website",
};

const page = () => {
  return (
    <div>
        <Navbar/>
        <ServiceBanner/>
        <ServiceCards/>
        <ServiceClients/>
        <ServiceAwards/>
        <ContactFooter/>
    </div>
  )
}

export default page