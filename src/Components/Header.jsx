import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Popup from "./Popup";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

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
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <form className="login_form">
              <h1 className="login_title">Login</h1>
              <div style={{ float: "left", width: "36%" }} className="line">
                <hr />
              </div>
              <div style={{ float: "right", width: "36%" }}>
                <hr />
              </div>
              <p className="inline_text">Sign up with Email</p>
              <div class="form-row">
                <div class="form-group form-edit loginfield">
                  <label for="inputEmail4">Email</label>
                  <div className="space"></div>
                  <input
                    type="email"
                    class="form-control input-edit"
                    id="inputAddress"
                    placeholder="Email Address"
                  ></input>
                </div>
                <div class="form-group loginfield">
                  <label for="inputPassword4">Password</label>
                  <div className="space"></div>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  ></input>
                </div>
              </div>
              <button type="submit" class="btn btn-primary login-btn">
                Log in
              </button>
              <p className="signup_link">
                Not registered yet?
                <Link to="/signup" style={{ color: "#ff3259" }}>
                  Create an account
                </Link>
              </p>
            </form>
          </Popup>

          <Link to="/signup" className="nav_btn signup_btn">
            <a href="">Sign up</a>
          </Link>
        </div>
      </div>
    </>
  );
};
