import React from "react";
import "./ClientHomepage.css";

export const ClientHomepage = () => {
  return (
    <div className="client-home-container">
      <h1 className="welcome-text">Welcome John!</h1>

      <hr />

      <h1 className="event-header">Upcoming Events</h1>
      <div className="event-container">
        <div className="event-date">
          <div className="event-day">07</div>
          <div className="event-month">AUG</div>
        </div>
        <div className="event-details">
          <div className="event-name">Freshers Fest</div>
          <div className="event-location">Location: Babcock Stadium</div>
          <div className="event-time">Time: 3pm - 8pm</div>
        </div>
      </div>

      <hr />

      <h1 className="event-header pending">Pending Events</h1>
      <div className="event-container">
        <div className="event-date pending">
          <div className="event-day">20</div>
          <div className="event-month">DEC</div>
        </div>
        <div className="event-details">
          <div className="event-name">Games Night</div>
          <div className="event-location">Location: Amphitheatre</div>
          <div className="event-time">Time: 6pm - 9pm</div>
          <div className="event-status">Status: Denied</div>
        </div>
      </div>

      <div className="event-container">
        <div className="event-date pending">
          <div className="event-day">14</div>
          <div className="event-month">FEB</div>
        </div>
        <div className="event-details">
          <div className="event-name">Celebration Party</div>
          <div className="event-location">Location: Bethel Activity Hall</div>
          <div className="event-time">Time: 2pm - 6pm</div>
          <div className="event-status">Status: Under Review</div>
        </div>
      </div>
    </div>
  );
};
