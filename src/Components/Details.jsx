import React from 'react'
import './requests.css'
import {BiArrowBack} from 'react-icons/bi'
import { useState, useEffect } from 'react'
import axios from 'axios'
import config from '../config'

const Details = ({setActive1, active2, setActive2}) => {
  const [duration, setDuration] = useState([]);
  const [date, setDate] =useState([]);
  const [location, setLocation] = useState([]);
  const [descrtiption, setDescription] =useState([]);
  useEffect(() => {
    const fetchbookDetails = async () => {
      const res = await axios.get(`${config.baseURL}/api/pending/${active2}`);
      setDuration(res.data.duration)
      setDate(res.data.dateofbooking)
      setLocation(res.data.eventcenter)
      setDescription(res.data.desc)
    };
    fetchbookDetails();
  }, []);
  
  return (
    <div className='request_holder1 request_holder2'>
        <button onClick={() => setActive1("Request")} className="back_btn"><BiArrowBack className='arrow'/></button>
       <div className='detail_holder'>
        <div className='top_div'>
          <h4>CONTACT INFORMATION</h4>
          <div className='contact_info'>
          <div className='event'>
          <p>First Name</p>
          <p>{date}</p>
          <div className='space_3'></div>
          <p>Last Name</p>
          <p>Olusanya</p>
          </div>
          <div className='event'>
          <p>Phone Number</p>
          <p>08155668282</p>
          <div className='space_3'></div>
          <p>Email</p>
          <p>olusanyajolaoluwa@gmail.com</p>
          </div>
          </div>
        </div>
        <div className='middle_div'>
        <h4 className='event_details_title'>EVENT DETAILS</h4>
        <div className='event_details'>
          <div className='event'>
          <p>Event Name</p>
          <p>Awesome Event</p>
          <div className='space_3'></div>
          <p>Event Location</p>
          <p>Babcock Stadium</p>
          </div>
          <div className='event'>
          <p>Event Date</p>
          <p>25th July 2022</p>
          <div className='space_3'></div>
          <p>Start Time/End Time</p>
          <p>10:00AM || 12:00AM</p>
          
          </div>
        </div>
        </div>
        <div className='bottom_div'>
        {/* <div className='space_3'></div> */}
          <p>Event Description</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius nesciunt cupiditate consequatur quas, facilis consequuntur eos ducimus minima animi explicabo.</p>
          <div className='space_3'></div>
          <div className='action_button'>
          <p><button className='accept_btn'>Accept</button></p>
          <p><button className='decline_btn'>Decline</button></p>
          <p><button className='submit_btn'>Submit</button></p>
          </div>
        </div>
        
       </div>
    </div>
  )
}

export default Details
