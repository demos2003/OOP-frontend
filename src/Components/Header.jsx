import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Popup from "./Popup";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Login";

export const Header = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
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
          <a onClick={() => setButtonPopup(true)} className=" nav_btn">
            Login
          </a>
          <Popup className="fmf" trigger={buttonPopup} setTrigger={setButtonPopup}>
            <Login/>
          </Popup>

          <Link to="/signup" className="nav_btn signup_btn">
            <a href="">Sign up</a>
          </Link>
        </div>
      </div>
    </>
  );
};
