import React from 'react'
import AdminNav from '../Components/AdminNav'
import './admin.css'
import Requests from '../Components/Requests'
import { useState } from 'react'
import AdminEventCenters from '../Components/AdminEventCenters'

const Admin = () => {
  const [active1, setActive1] = useState("Request")
  return (
    <div className='color'>
      <AdminNav/>
      <div className='admin_panelHolder'>
        <div className='sidebar'>
            <p>
              <a onClick={() => setActive1("Request")}>
              Requests
              </a></p>
              <p>
                <a onClick={() => setActive1("Events")}>
                Events Centers
                </a>
                </p>
        </div>
        <div className='admin_request'>
          {active1 === "Request" && <Requests/>}
           {active1 === "Events" && <AdminEventCenters/>} 
        </div>
      </div>
      
    </div>
  )
}

export default Admin
