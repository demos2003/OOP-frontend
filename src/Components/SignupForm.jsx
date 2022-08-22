import React from 'react'
import { useState } from 'react'
import config from "../config"
import axios from 'axios'

const SignupForm = () => {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${config.baseURL}/api/auth/userRegister`, {
        fullname,
        email,
        phoneNo,
        password,
      });
      res.data && window.location.reload();
    } catch (err) {
      setError(true)
    }
  };

  return (
    <div className='form_holder'>
      <div className='form_space'>

      </div>
      <div className='signup_form'>
        <form onSubmit={handleSubmit}>
          <div className='form_body'>
            <h4>Create an account</h4>
            <p className='header'>Already have an account? <a href="/">Sign in</a></p>
            <div className="form-group">
              <input type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Full Name"
                onChange={(e) => setFullname(e.target.value)}
              />

            </div>
            <div className="form-group">
              <input type="email"
                className="form-control"
                id="exampleInputEmail1"
                name='email'
                aria-describedby="emailHelp"
                placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
              <input type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Mobile Number" 
                onChange={(e) => setPhoneNo(e.target.value)}
                />
            </div>
            <div className="form-group">
              <input type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <p className='policy'>By signing up, you agree to our <a href="/">Terms</a>, <a href="/">Privacy Policy</a> <br /> and <a href="/">Cookies Policy.</a> </p>
            <button type="submit" className="btn btn-submit btn-primary">Create account</button>
          </div>
        </form>
        {error && <span style={{ color: "red", marginTop:"10px" }}>Something Wrong!</span>}
      </div>
    </div>
  )
}

export default SignupForm