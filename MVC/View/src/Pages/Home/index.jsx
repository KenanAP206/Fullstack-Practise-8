import React from 'react'
import Hero from '../../Components/Main/Hero/Hero'
import Feature from '../../Components/Main/Feature'
import { Helmet } from 'react-helmet'; 

function index() {
  return (
    <div>
       <Helmet>
        <title>Home</title> 
        <meta name="description" content="Welcome to our homepage." /> 
      </Helmet>
    <Hero/>
    <Feature/>
    </div>
  )
}

export default index
