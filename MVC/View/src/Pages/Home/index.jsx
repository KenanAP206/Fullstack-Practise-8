import React from 'react'
import Hero from '../../Components/Main/Hero'

import { Helmet } from 'react-helmet'; 

function index() {
  return (
    <div>
       <Helmet>
        <title>Home</title> 
        <meta name="description" content="Welcome to our homepage." /> 
      </Helmet>
    <Hero/>

    </div>
  )
}

export default index
