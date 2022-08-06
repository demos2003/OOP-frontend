import React from 'react'
import "./adminlogin.css"

const AdminLogin = () => {
  return (
    <div className='adminlogin_background'>
        <div className='form_holder'>
        <div className='form_space'></div>
        <div className='signup_form'>
      <form className='adminlogin_form'>
            <h2 style={{textAlign:"center"}} className="adminlogin_title">Admin Login</h2>
        <div class="form-row">
         <div class="form-group form-edit">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control input-edit" id="inputAddress" placeholder="Email Address"></input>
          </div>
          <div class="form-group">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
          </div>
      </div>
       
       
       
        <button type="submit" class="btn btn-primary admin-btn">Login</button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default AdminLogin
