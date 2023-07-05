import React from 'react'
import LandingNavBar from './NavBar/LandingNavBar'
import CommonNav from '../../../../../../../Shine Traders/FrontEnd/shinetraders/src/C-Nav/CommonNav'


function LandingBase(props) {
  return (
    <div className='Base'>
        <CommonNav/>
        <LandingNavBar/>
        {props.children}
    </div>
  )
}

export default LandingBase