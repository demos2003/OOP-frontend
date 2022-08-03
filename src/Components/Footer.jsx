import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="card-links child">
          <img src="icons/facebook.png" alt="" className='footer_link-size'/>
          <img src="icons/linkedin.png" alt="" className='footer_link-size' />
          <img src="icons/twitter.png" alt=""  className='footer_link-size'/>
          <img src="icons/instagram.png" alt="" className='footer_link-size' />
        </div>
        <div className="finl_txt">
          <p>Copyright © 2022 Babcock University Computer Club</p>
        </div>
    </div>
  )
}
