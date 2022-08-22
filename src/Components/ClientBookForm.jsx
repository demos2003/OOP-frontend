import React, { useState } from "react";
import "./ClientBookForm.css";
import axios from "axios";
import config from "../config";

const ClientBookForm = ({ user }) => {
  const [fullname, setFullname] = useState(user.fullname);
  const [email, setEmail] = useState(user.email);
  const [phoneno, setPhoneno] = useState(user.phoneNo);
  const [eventcenter, setEventcenter] = useState("");
  const [eventname, setEventname] = useState("");
  const [desc, setDesc] = useState("");
  const [duration, setDuration] = useState("");
  const [dateofevent, setDateofevent] = useState("");
  const [timeofevent, setTimeofevent] = useState("");
  const [error, setError] = useState(false);
  console.log(phoneno);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${config.baseURL}/api/book`, {
        fullname,
        eventcenter,
        eventname,
        email,
        phoneno,
        desc,
        duration,
        dateofevent,
        timeofevent,
      });
      res.data && window.location.reload();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div>
      <div className="content-container">
        <div className="bookform">
          <h1 className="book-header mb2">Booking Form</h1>
          <h5>
            Please fill the form to request for the use of a particular venue to
            hold an event.
          </h5>
          <h5>
            After submitting, check on the homepage to find out the status of
            your event request (pending, approved or denied)
          </h5>
        </div>

        <form className="form-container">
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
                className="form-input"
                required
                onChange={(e) => setEventname(e.target.value)}
              />
            </div>

            <div className="row-block">
              <label className="event-label" htmlFor="eventLocation">
                Event Location
              </label>
              <select
                name="eventLocation"
                className="form-input"
                required
                onChange={(e) => setEventcenter(e.target.value)}
              >
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
                onChange={(e) => setDateofevent(e.target.value)}
              />
            </div>

            <div className="row-block date">
              <div>
                <label className="event-label" htmlFor="eventStartTime">
                  Time
                </label>
                <input
                  id="event-start-time"
                  type="time"
                  name="eventStartTime"
                  className="event-time-input"
                  onChange={(e) => setTimeofevent(e.target.value)}
                />
              </div>
              <div>
                <label className="event-label" htmlFor="eventEndTime">
                  Duration(hrs)
                </label>
                <select
                  name="eventLocation"
                  className="form-input event-time-input"
                  required
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                  <option value="10">10+</option>
                  <option value="24">24</option>
                </select>
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
                placeholder="This event is for the purpose of..."
                required
                className="event-textarea"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            value="Submit Request"
            className="event-submit"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default ClientBookForm;
