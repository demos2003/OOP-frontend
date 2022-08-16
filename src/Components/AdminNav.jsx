import React from 'react'
import "./adminNav.css"
import {FiSettings} from 'react-icons/fi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'

const AdminNav = () => {
  return (
    <div>
        <div className='topNav box'>
            <div className='admin_title'>ADMIN PANEL </div>
            <div className='search'> <input className='search1' type="text"/></div>
            <div className='logout'>
                <h5><FiSettings/></h5>
                <h5><AiOutlineQuestionCircle/></h5>
                <h5>Admin</h5>
            </div>

        </div>

        {/* <div className="box">
  <div className='car'>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div> */}
    </div>
  )
}

export default AdminNav