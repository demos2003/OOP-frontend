import React from "react";
import "./ClientHomepage.css";

export const ClientHomepage = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let date = new Date();
  let day = weekday[date.getDay()];
  let dayNum = date.getDate();
  let month = date.toLocaleString("en-us", { month: "long" });
  let year = date.getFullYear();

  return (
    <div className="client-home-container">
      <div className="top-section">
        <div className="welcome-section">
          <div>
            <h1 className="welcome-header">Hi John Doe!</h1>
            <p className="welcome-text">
              Welcome to the event scheduling system. Here, you can see all your
              upcoming events, events that are pending approval from the admin
              and book events which you want to hold. All from the comfort of
              your home.
            </p>
          </div>
          <img
            src={process.env.PUBLIC_URL + "images/welcome.png"}
            alt="welcome"
            className="welcome-image"
          />
        </div>
        <div className="date">
          <h1 className="today">Today is:</h1>
          <h1>
            {day} <span className="day">{dayNum}</span>
          </h1>
          <h1>{month}</h1>
          <h1 className="year">{year}</h1>
        </div>
      </div>

      <hr />

      <h1 className="event-header">Upcoming Events</h1>
      <div className="event-container">
        <div className="event-date">
          <div className="event-day">20</div>
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
          <div className="event-day">07</div>
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
