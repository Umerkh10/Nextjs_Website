import React from 'react'
import ThankYou from './ThankYou'
import Navbar from '../Navbar'
import ContactFooter from '../Contact/ContactFooter'


export const metadata = {
  title: 'Thank You ',
  description: "Webnike Portfolio Website",
};

const page = () => {
  return (
    <div>
      <Navbar />
      <ThankYou />
      <ContactFooter/>
    </div>
  )
}

export default page