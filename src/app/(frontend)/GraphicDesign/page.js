import React from 'react'
import GraphicBanner from './GraphicBanner'
import Navbar from '../Navbar'
import GraphicCard from './GraphicCard'
import GraphicDivider from './GraphicDivider'
import GraphicWorkProcess from './GraphicWorkProcess'
import GraphicForm from './GraphicForm'
import GraphicFaq from './GraphicFaq'
import ContactFooter from '../Contact/ContactFooter'

export const metadata = {
  title: 'Graphic Design',
  description: "Webnike Portfolio Website",
};

const page = () => {
  return (
    <div>
        <Navbar/>
        <GraphicBanner/>
        <GraphicCard/>
        <GraphicDivider/>
        <GraphicWorkProcess/>
        <GraphicForm/>
        <GraphicFaq/>
        <ContactFooter/>
    </div>
  )
}

export default page