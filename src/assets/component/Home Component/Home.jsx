import React from 'react'
import Hero from '../Hero'
import Service from '../Service'
import Project from '../Project'
import Work from '../Work'
import Contact from '../Contact'
import Navbar from '../Home Component/Navbar'
import Footer from '../Home Component/Footer'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Service></Service>
      <Project></Project>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}
