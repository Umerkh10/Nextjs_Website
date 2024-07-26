import React from 'react'
import ReturnRefund from './ReturnRefund'
import Navbar from '../Navbar'
import ContactFooter from '../Contact/ContactFooter'

export const metadata = {
  title: 'Return Refund ',
  description: "Webnike Portfolio Website",
};

const page = () => {
  return (
    <div>
     <Navbar/>
    <ReturnRefund/>
    <ContactFooter/>
    </div>
  )
}

export default page