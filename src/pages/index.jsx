import React from "react"
import Layout from '../components/Layout'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Banner from '../components/Banner'
import About from '../components/About'
import Contact from '../components/Contact'


const IndexPage = () => {

  return (
    <Layout>
      <Home />
      <Projects />
      <Resume />
      <Banner />
      <About />
      <Contact />
    </Layout>
  )
}


/* 
Why, Services (Solutions, Support, Platform), Pricing, About, Team, Contact.
*/

export default IndexPage

