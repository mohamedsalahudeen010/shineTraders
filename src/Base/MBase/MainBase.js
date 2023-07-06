import React from 'react'

import MainNavBar from './NavBar/MainNavBar'
import MainCommonNav from '../C-Nav/MainCommonNav'


function MainBase(props) {
  return (
    <div>
      <MainCommonNav/>
        <MainNavBar/>
        {props.children}
    </div>
  )
}

export default MainBase