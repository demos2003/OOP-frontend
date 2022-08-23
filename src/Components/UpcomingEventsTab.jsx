import React from "react";
import "./ClientHomepage.css";

const UpcomingEventsTab = () => {
  return (
    <div className="upcomingevents_holder">
      <div className="event-container">
      <div className="event-image-container">
          <img
            src={process.env.PUBLIC_URL + "images/events.svg"}
            alt="welcome"
            className="event-image"
          />
        </div>
        <div className="event-date">20, August 2022 | 4 hours</div>
        <div className="event-name">Freshers Fest 2022</div>
        <div className="event-location">
          <div className="location-block">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/location.svg"} alt="" />
            </span>{" "}
            Babcock Stadium
          </div>
        </div>
      </div >
      <div className="event-container">
      <div className="event-image-container">
          <img
            src={process.env.PUBLIC_URL + "images/events.svg"}
            alt="welcome"
            className="event-image"
          />
        </div>
        <div className="event-date">20, August 2022 | 4 hours</div>
        <div className="event-name">Freshers Fest 2022</div>
        <div className="event-location">
          <div className="location-block">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/location.svg"} alt="" />
            </span>{" "}
            Babcock Stadium
          </div>
        </div>
      </div>
      <div className="event-container">
      <div className="event-image-container">
          <img
            src={process.env.PUBLIC_URL + "images/events.svg"}
            alt="welcome"
            className="event-image"
          />
        </div>
        <div className="event-date">20, August 2022 | 4 hours</div>
        <div className="event-name">Freshers Fest 2022</div>
        <div className="event-location">
          <div className="location-block">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/location.svg"} alt="" />
            </span>{" "}
            Babcock Stadium
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default UpcomingEventsTab;
