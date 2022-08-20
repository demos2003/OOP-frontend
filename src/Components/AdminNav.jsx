import React from "react";
import "./adminNav.css";
import { FiSettings } from "react-icons/fi";
import { AiOutlineQuestionCircle, AiOutlineSearch } from "react-icons/ai";

const AdminNav = () => {
  return (
    <div>
      <div className="topNav">
        <div className="admin_title">ADMIN PANEL</div>
        <div className="search">
          <h5 className="search-icon">
            <AiOutlineSearch />
          </h5>
          <input
            className="search-input"
            type="text"
            placeholder="Search request"
          />
        </div>
        <div className="logout">
          <div className="total_space"></div>
          <h5>
            <FiSettings />
          </h5>
          <h5>
            <AiOutlineQuestionCircle />
          </h5>
          <h5>ADMIN</h5>
        </div>
      </div>

      {/* <div className="box">
  <div className='car'>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div> */}
    </div>
  );
};

export default AdminNav;
