import React from 'react'
import AdminNav from '../Components/AdminNav'
import './admin.css'
import Requests from '../Components/Requests'
import { useState } from 'react'

const Admin = () => {
  const [active1, setActive2] = useState("Request")
  return (
    <div className='color'>
      <AdminNav/>
      <div className='admin_panelHolder'>
        <div className='sidebar'>
            
        </div>
        <div className='admin_request'>
            <Requests/>
        </div>
      </div>
      
    </div>
  )
}

export default Admin
