import React from 'react'
import Hero from '../../Components/Main/Hero/Hero'
import Feature from '../../Components/Main/Feature'
import { Helmet } from 'react-helmet'; 
import About from '../../Components/Main/About'
import Services from '../../Components/Main/Services'
import Pricing from '../../Components/Main/Pricing'
function index() {
  return (
    <div>
       <Helmet>
        <title>Home</title> 
        <meta name="description" content="Welcome to our homepage." /> 
      </Helmet>
    <Hero/>
    <Feature/>
    <About/>
    <Services/>
    <Pricing/>
    </div>
  )
}

export default index
