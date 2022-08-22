import React from "react";
import "./adminlogin.css";
import { useContext, useRef } from 'react';
import { Context } from "../Components/context/Context"
import axios from "axios"
import config from "../config"

const AdminLogin = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  // console.log(dispatch)

  const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
          const res = await axios.post(`${config.baseURL}/api/auth/adminLogin`, {
              email: userRef.current.value,
              password: passwordRef.current.value,
          });
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          res.data && window.location.replace("/admin");
      } catch (err) {
          dispatch({ type: "LOGIN_FAILURE" });
      }
  };
  return (
    <div className="adminlogin_background">
      <div className="form_holder">
        <div className="form_space"></div>
        <div className="signup_form">
          <form className="adminlogin_form" onSubmit={handleSubmit}>
            <h2 style={{ textAlign: "center" }} className="adminlogin_title">
              Admin Login
            </h2>
            <div className="form-row">
              <div className="form-group form-edit">
                <label >Email</label>
                <input
                  type="email"
                  className="form-control input-edit"
                  id="inputAddress"
                  placeholder="Email Address"
                  ref={userRef}
                ></input>
              </div>
              <div className="form-group">
                <label >Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                  ref={passwordRef}
                ></input>
              </div>
            </div>

            <button type="submit"  disabled={isFetching} className="btn btn-primary admin-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
