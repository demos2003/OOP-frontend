import React from 'react'
import { Link } from "react-router-dom";
import "./header.css"
import Popup from './Popup';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';



export const Header = () => {
  const [buttonPopup, setButtonPopup ] = useState(false);
  return (
   
    <div className="navbar">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/manlikeemma/image/upload/v1652779315/Farm/HHF_Logo_um8xyr.png"
          className="logo-size"
          alt=""
        />
      </div>
      <div className="navbar-btn navbar-btn1">
        <Link to="/" className="nav_btn">
          <a>Home</a>
        </Link>
       
          <a onClick={() => setButtonPopup(true)} className=' nav_btn'>Login</a>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <form>
            <h2>Edit Employee Info</h2>
        <div class="form-row">
         <div class="form-group form-edit">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control input-edit" id="inputAddress" placeholder="Email Address"></input>
          </div>
          <div class="form-group">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
          </div>
      </div>
       
       
       
        <button type="submit" class="btn btn-primary save-btn">Save</button>
      </form>
    </Popup>
        
        <Link to="/product" className="nav_btn signup_btn">
          <a>Sign up</a>
        </Link>
        
     
             </div>
    </div>
  
  )
}
