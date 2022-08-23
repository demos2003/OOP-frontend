import React from "react";
import "./ClientHomepage.css";

const PendingEventsTab = () => {
  return (
    <div className="PendingEventsTab">
      <div className="event-container">
        <div className="event-image-container">
          <img
            src={process.env.PUBLIC_URL + "images/events-pending.svg"}
            alt="welcome"
            className="event-image"
          />
        </div>
        <div className="event-date">07, December 2022 | 3 hours</div>
        <div className="event-name">Games Night</div>
        <div className="event-location">
          <div className="location-block">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/location.svg"} alt="" />
            </span>{" "}
            Amphitheatre
          </div>
          <div className="location-block">Status: Denied</div>
        </div>
      </div>

      <div className="event-container">
        <div className="event-image-container">
          <img
            src={process.env.PUBLIC_URL + "images/events-pending.svg"}
            alt="welcome"
            className="event-image"
          />
        </div>
        <div className="event-date">14, February 2022 | 2 hours</div>
        <div className="event-name">Celebration Party</div>
        <div className="event-location">
          <div className="location-block">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/location.svg"} alt="" />
            </span>{" "}
            Bethel Activity Hall
          </div>
          <div className="location-block">Status: Under Review</div>
        </div>
      </div>
    </div>
  );
};
export default PendingEventsTab;
