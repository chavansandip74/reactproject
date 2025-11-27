import React from 'react'
import Hero from '../Hero'
import Service from '../Service'
import Project from '../Project'
import Work from '../Work'
import Contact from '../Contact'
import Navbar from '../Home Component/Navbar'
import Footer from '../Home Component/Footer'
import About from '../About'
import Achievements from '../Achievements'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Service></Service>
      <Project></Project>
      <Achievements></Achievements>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}
