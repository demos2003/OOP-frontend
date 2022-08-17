import React, { useState } from "react";
import "./ClientBookForm.css";

const ClientBookForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    eventName: "",
    eventDesc: "",
    eventLocation: "Choose a location..."
  });

  const handleInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="content-container">
        <h1 className="book-header">Booking Form</h1>
        <h5>
          Please fill the form to request for the use of a particular venue to
          hold an event.
        </h5>
        <h5>
          After submitting, check on the homepage to find out the status of your
          event request (pending, approved or denied)
        </h5>

        <form onSubmit={handleSubmit} className="form-container">
          <h2 className="book-header">Contact Information</h2>
          <div className="event-form-row">
            <div className="row-block">
              <label className="event-label" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                placeholder="John"
                value={values.firstName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="row-block">
              <label className="event-label" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="first-name"
                name="lastName"
                placeholder="Doe"
                value={values.lastName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="event-form-row">
            <div className="row-block">
              <label className="event-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@abc.com"
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <div className="row-block">
              <label className="event-label" htmlFor="phoneNum">
                Phone Number
              </label>
              <input
                type="number"
                name="phoneNum"
                id="phone-num"
                value={values.phoneNum}
                placeholder="08000000000"
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <h2 className="book-header">Event Details</h2>

          <div className="event-form-row">
            <div className="row-block">
              <label className="event-label" htmlFor="eventName">
                Event Name
              </label>
              <input
                type="text"
                id="event-name"
                name="eventName"
                placeholder="Awesome Event"
                value={values.eventName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="row-block">
              <label className="event-label" htmlFor="eventLocation">
                Event Location
              </label>
              <select name="eventLocation" className="form-input" required>
                <option value="Stadium">Babcock Stadium</option>
                <option value="Amphitheatre">Babcock Amphitheatre</option>
                <option value="Auditorium">BBS Auditorium</option>
                <option value="Bethel Activity Hall">
                  Bethel Activity Hall
                </option>
                <option value="WRA">Wilfred Riley Auditorium (WRA)</option>
                <option value="SCT">Slivanus Chioma Theatre (SCT)</option>
              </select>
            </div>
          </div>

          <div className="event-form-row">
            <div className="row-block">
              <label className="event-label" htmlFor="eventDate">
                Event Date
              </label>
              <input
                type="date"
                name="eventDate"
                id="event-date"
                className="form-input"
                required
              />
            </div>

            <div className="row-block date">
              <div>
                <label className="event-label" htmlFor="eventStartTime">
                  Start Time
                </label>
                <input
                  id="event-start-time"
                  type="time"
                  name="eventStartTime"
                  className="event-time-input"
                />
              </div>
              <div>
                <label className="event-label" htmlFor="eventEndTime">
                  End Time
                </label>
                <input
                  id="event-end-time"
                  type="time"
                  name="eventEndTime"
                  className="event-time-input"
                />
              </div>
            </div>
          </div>

          <div className="event-form-row">
            <div className="row-block">
              <label className="event-label" htmlFor="eventDesc">
                Event Description
              </label>
              <textarea
                name="eventDesc"
                id="event-desc"
                cols="30"
                rows="5"
                value={values.eventDesc}
                placeholder="This event is for the purpose of..."
                onChange={handleInputChange}
                required
                className="event-textarea"
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            value="Submit Request"
            className="event-submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ClientBookForm;
