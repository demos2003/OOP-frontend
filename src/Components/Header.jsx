import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <>
      <div className="navbar">
        {/* <div className="logo">
          <img
            src="https://res.cloudinary.com/manlikeemma/image/upload/v1652779315/Farm/HHF_Logo_um8xyr.png"
            className="logo-size"
            alt=""
          />
        </div> */}

        <div className="navbar-btn navbar-btn1">
          <Link to="/" className="nav_btn">
            <a>Home</a>
          </Link>
          <Link to="/aboutus" className="nav_btn">
            <a>Log in</a>
          </Link>
          <Link to="/product" className="nav_btn signup_btn">
            <a>Sign up</a>
          </Link>
        </div>
      </div>
    </>
  );
};
