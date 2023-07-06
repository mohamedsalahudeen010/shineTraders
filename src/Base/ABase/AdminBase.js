import React from 'react'

import AdminCommonNav from "../C-Nav/AdminCommonNav"
import AdminNavBar from './NavBar/AdminNavBar'
function AdminBase(props) {
  return (
    <div className='admin-Base'>
      <AdminCommonNav/>
       <AdminNavBar/>
        {props.children}
    </div>
  )
}

export default AdminBase