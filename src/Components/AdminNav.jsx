import React from "react";
import "./adminNav.css";
import { FiSettings } from "react-icons/fi";
import { AiOutlineQuestionCircle, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ContextA } from "./context/Context";
import { useContext } from "react";

const AdminNav = ({ adminD }) => {
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
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="#">Requests</a>
          <a href="#">Event Centers</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
