import React from 'react'

const SignupForm = () => {
  return (
    <div className='form_holder'>
        <div className='form_space'>
          
        </div>
        <div className='signup_form'>
        <form>
            <div className='form_body'>
                <h4>Create an account</h4>
                <p className='header'>Already have an account? <a href="/">Sign in</a></p>
  <div class="form-group">
    
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
  
  </div>
  <div class="form-group">
    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
  
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile Number" />
  
  </div>
  <div class="form-group">
    
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
    <p className='policy'>By signing up, you agree to our <a href="/">Terms</a>, <a href="/">Privacy Policy</a> <br /> and <a href="/">Cookies Policy.</a> </p>
  <button type="submit" class="btn btn-submit btn-primary">Create account</button>
  </div>
</form>
        </div>
    </div>
  )
}

export default SignupForm