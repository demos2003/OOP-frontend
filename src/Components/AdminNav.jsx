import React from "react";
import "./adminNav.css";
import { FiSettings } from "react-icons/fi";
import { AiOutlineQuestionCircle, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'


const AdminNav = () => {
  return (
    
      <div className="topNav">
        <div className="admin_title">ADMIN PANEL</div>
         <button className="logout_btn btn" style={{color:"white"}}>Logout</button>
            <div class="dropdown drop">
              <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
                <a href="#">Requests</a>
                <a href="#">Event Centers</a>  
                <a href="#" >Logout</a>
              </div>
            </div>
     </div> 
  );
};

export default AdminNav;
