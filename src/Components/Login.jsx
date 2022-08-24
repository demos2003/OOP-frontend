import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "bootstrap/dist/css/bootstrap.css";
import { useContext, useRef } from "react";
import { Context } from "../Components/context/Context";
import axios from "axios";
import config from "../config";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  // console.log(dispatch)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${config.baseURL}/api/auth/userLogin`, {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/dashboard");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div>
      <form className="login_form" onSubmit={handleSubmit}>
        <h1 className="login_title">Login</h1>
        <div style={{ float: "left", width: "36%" }} className="line">
          <hr />
        </div>
        <div style={{ float: "right", width: "36%" }}>
          <hr />
        </div>
        <p className="inline_text">Sign up with Email</p>
        <div className="form-row">
          <div className="form-group form-edit loginfield">
            <label>Email</label>
            <div className="space"></div>
            <input
              type="email"
              className="form-control input-edit"
              id="inputAddress"
              placeholder="Email Address"
              ref={userRef}
            ></input>
          </div>
          <div className="form-group loginfield">
            <label >Password</label>
            <div className="space"></div>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              ref={passwordRef}
            ></input>
          </div>
        </div>
        <button
          type="submit"
          disabled={isFetching}
          className="btn btn-primary login-btn"
        >
          Log in
        </button>
        <p className="signup_link">
          Not registered yet?
          <Link to="/signup" style={{ color: "#ff3259" }}>
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
