import React from 'react'
import "./popup.css"

function Popup1(props) {
  return (props.trigger) ? (
    <div className='popup2'>
        <div className='popup2-inner'>
             <button className='close-btn' onClick={() => props.setTrigger(false) }>close</button>
             {props.children}
        </div>
        </div>
  ) : "";
}

export default Popup1;