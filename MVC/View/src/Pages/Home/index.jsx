import React from 'react'

import { Helmet } from 'react-helmet'; 

function index() {
  return (
    <div>
       <Helmet>
        <title>Home</title> 
        <meta name="description" content="Welcome to our homepage." /> 
      </Helmet>

    </div>
  )
}

export default index
