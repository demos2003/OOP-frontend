import React from 'react'
import "./center.css"
// import Slider1 from './Slider1'
import AutoPlay from './Slider1'


const EventCenters = () => {
 
  return (
    <div>
      <h1 className='center_desc-title' style={{textAlign:"center"}}>Event Centers</h1>
      
      <div className='photo_holder'>
        {/* <div className='center_desc-holder move'>
        <img src='/images/test.jpg' className='photo_size'/>
        <h1>Babcock Stadium</h1>
        </div>
        <div className='center_desc-holder'>
        <img src='/images/test.jpg' className='photo_size'/>
        <h1>Babcock Stadium</h1>
        </div>
        <div className='center_desc-holder'>
        <img src='/images/test.jpg' className='photo_size'/>
        <h1>Babcock Stadium</h1>
        </div> */}
        {/* <div className='center_desc-holder'>
        <img src='/images/test.jpg' className='photo_size'/>
        <h1>Babcock Stadium</h1>
        </div>
        <div className='center_desc-holder'>
        <img src='/images/test.jpg' className='photo_size'/>
        <h1>Babcock Stadium</h1>
        </div>
        <div className='center_desc-holder'>
        <img src='/images/test.jpg' className='photo_size'/>
        <h1>Babcock Stadium</h1>
        </div> */}
        
      
     
      </div>
      <AutoPlay/>
    </div>
    
  )
}

export default EventCenters
