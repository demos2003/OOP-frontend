import React from 'react'
import "./popup.css"
import {AiOutlineClose} from "react-icons/ai"

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup2'>
        <div className='popup2-inner'>
             <button className='close-btn' onClick={() => props.setTrigger(false) }><AiOutlineClose/></button>
             {props.children}
        </div>
        </div>
  ) : "";
}

export default Popup;