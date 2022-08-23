import React from "react";
import "./banner.css";
import { useState } from "react";
import Popup from "./Popup";
import Login from "./Login";

export const Main = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="bg_image">
      <div className="space"></div>
      <div className="title">
        <h2>Online</h2>
        <h2> Booking system for</h2>
        <h1>Event and Appointment Scheduler</h1>
        <button onClick={() => setButtonPopup(true)}>SCHEDULE EVENT</button>
        <Popup  trigger={buttonPopup} setTrigger={setButtonPopup}>
            <Login/>
          </Popup>
      </div>
    </div>
  );
};
