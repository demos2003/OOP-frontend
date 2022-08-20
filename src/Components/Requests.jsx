import React from 'react'
import './requests.css'
import {RiCheckDoubleLine} from 'react-icons/ri'
import {MdOutlineCancel, MdPendingActions} from 'react-icons/md'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { useState, useEffect } from 'react'
import Pending from './Pending'
import Approved from './Approved'
import Declined from './Declined'
import DoubleBooking from './DoubleBooking'
import axios from 'axios'
import config from '../config'

const Requests = ({active1, setActive1}) => {
   const [active, setActive] = useState("Pending1")
   const [bookData, setBookData] = useState([]);
   useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/api/bookings`);
      setBookData(res.data)
    };
    fetchbookData();
   }, []);
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
        
       {active === "Pending1" && <Pending active1={active1} setActive1={setActive1} bookData={bookData} />}
      {active === "Approved1" && <Approved/>}
      {active === "Denied1" && <Declined/>}
      {active === "Double1" && <DoubleBooking/>}
       </div>
      </div>
    </div>
  )
}

export default Requests
