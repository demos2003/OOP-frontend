import React from 'react'
import './requests.css'
import {RiCheckDoubleLine} from 'react-icons/ri'
import {MdOutlineCancel, MdPendingActions} from 'react-icons/md'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { useState } from 'react'
import Pending from './Pending'
import Approved from './Approved'
import Declined from './Declined'
import DoubleBooking from './DoubleBooking'
// import DataTable from './Table'

const Requests = () => {
   const [active, setActive] = useState("Pending1")
  return (
    <div>
      <div className='request_holder'>
       <div className='holder_nav'>
           <div>
            <p className='options'>
              <MdPendingActions className='nav_icon'/>
              <a onClick={() => setActive("Pending1")}>
              Pending
              </a>                
                </p> 
            <p className='options'>
               <AiOutlineCheckCircle className='nav_icon'/>
               <a onClick={() => setActive("Approved1")}>
               Approved
              </a> 
                </p>  
            <p className='options'>
                <MdOutlineCancel className='nav_icon'/>
                 <a onClick={() => setActive("Denied1")}>
                Denied
              </a> </p> 
            <p className='options'>
                <RiCheckDoubleLine className='nav_icon'/>
                 <a onClick={() => setActive("Double1")}>
                Double Booked
              </a> </p>
            </div>
           
       </div>
       <hr></hr>
       <div className='holder_content'>
       {active === "Pending1" && <Pending />}
      {active === "Approved1" && <Approved/>}
      {active === "Denied1" && <Declined/>}
      {active === "Double1" && <DoubleBooking/>}

                 
                {/* <DataTable/> */}
       </div>
      </div>
    </div>
  )
}

export default Requests
