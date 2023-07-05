import React from 'react'
import LandingNavBar from './NavBar/LandingNavBar'

import LandCommonNav from "../C-Nav/LandCommonNav"


function LandingBase(props) {
  return (
    <div className='Base'>
      <LandCommonNav/>
        <LandingNavBar/>
        <div>{props.children}</div>
    </div>
  )
}

export default LandingBase