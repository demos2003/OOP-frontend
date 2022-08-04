import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay:true,      
      speed: 2000,
      autoplaySpeed:2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase:"linear"
    };
    return (
      <div className="sliders">
       
        <Slider {...settings}>
          <div>
          <div className='center_desc-holder'>
        <img src='/images/test.jpg' alt="" className='photo_size'/>
        <h3 className="mt-3">Babcock Stadium</h3>
        </div>
          </div>
          <div>
          <div className='center_desc-holder'>
        <img src='/images/test.jpg' alt="" className='photo_size'/>
        <h3 className="mt-3">Babcock Stadium</h3>
        </div>
          </div>
          <div>
          <div className='center_desc-holder'>
        <img src='/images/test.jpg' alt="" className='photo_size'/>
        <h3 className="mt-3">Babcock Stadium</h3>
        </div>
          </div>
          <div>
          <div className='center_desc-holder'>
        <img src='/images/test.jpg' alt="" className='photo_size'/>
        <h3 className="mt-3">Babcock Stadium</h3>
        </div>
          </div>
          <div>
          <div className='center_desc-holder'>
        <img src='/images/test.jpg' alt="" className='photo_size'/>
        <h3 className="mt-3">Babcock Stadium</h3>
        </div>
          </div>
          <div>
          <div className='center_desc-holder'>
        <img src='/images/test.jpg' alt="" className='photo_size'/>
        <h3 className="mt-3">Babcock Stadium</h3>
        </div>
          </div>
        </Slider>
      </div>
    );
  }
}