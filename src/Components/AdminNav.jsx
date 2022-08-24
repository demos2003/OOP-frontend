import React from "react";
import "./adminNav.css";
import { FiSettings } from "react-icons/fi";
import { AiOutlineQuestionCircle, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ContextA } from "./context/Context";
import { useContext, useState} from "react";
import {GiHamburgerMenu} from 'react-icons/gi'

const AdminNav = ({ adminD }) => {
  const [active1, setActive1] = useState("Request");
  const [active2, setActive2] = useState();

  const { admin, dispatch } = useContext(ContextA);
  const handleLogout = () => {
    dispatch({ type: "LOGOUTA" });
  };

  return (
    <div className="topNav">
      <div className="admin_title">ADMIN PANEL</div>
      <div className="admin_title">Welcome {adminD.fullname}</div>
      <button
        className="logout_btn btn"
        style={{ color: "white" }}
        onClick={handleLogout}
      >
        Logout
      </button>
      <div class="dropdown drop">
        <button class="dropbtn"><GiHamburgerMenu/></button>
        <div class="dropdown-content">
        <a href="#">requests</a>
          <a href="#">Event Centers</a>
          <a href="#">Logout</a>
        </div>
      
      </div>
    </div>
  );
};

export default AdminNav;
