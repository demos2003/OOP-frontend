import React from 'react'
import './AdminEventCenters.css'
import Table from './Table'
import Add from './Add'


const AdminEventCenters = () => {
   
  return (
    <div className='request_holder1'>
      <h3 className='EventHeader'>Event Centers</h3>
    <Add />
    
   <Table/>
   
   </div>
  )
}

export default AdminEventCenters