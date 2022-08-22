import React from "react";
import "./requests.css";
import { BiArrowBack } from "react-icons/bi";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

const Details = ({ setActive1, active2, setActive2 }) => {
  const [booking, setBooking] = useState([]);
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [phoneno, setPhoneno] = useState();
  const [eventcenter, setEventcenter] = useState();
  const [eventname, setEventname] = useState();
  const [desc, setDesc] = useState();
  const [status1, setStatus1] = useState("");
  const [status, setStatus] = useState(status1);
  const [duration, setDuration] = useState();
  const [dateofevent, setDateofevent] = useState();
  const [timeofevent, setTimeofevent] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    const getBookings = async () => {
      const res = await axios.get(`${config.baseURL}/api/book/${active2}`);
      setBooking(res.data);
      setFullname(res.data.fullname);
      setEmail(res.data.email);
      setPhoneno(res.data.phoneno);
      setEventcenter(res.data.eventcenter);
      setEventname(res.data.eventname);
      setDesc(res.data.desc);
      setDuration(res.data.duration);
      setDateofevent(res.data.dateofevent);
      setTimeofevent(res.data.timeofevent);
    };
    getBookings();
  }, []);

  const handleApprove = async () => {
    try {
      axios.put(`${config.baseURL}/api/book/${active2}`, {
        status: "approved",
      });
      window.location.reload();
    } catch (err) {}
  };

  const handleDeny = async () => {
    try {
      axios.put(`${config.baseURL}/api/book/${active2}`, {
        status: "deined",
      });
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div className="request_holder1 request_holder2">
      <button onClick={() => setActive1("Request")} className="back_btn">
        <BiArrowBack className="arrow" />
      </button>
      <div className="detail_holder">
        <div className="top_div">
          <h4>CONTACT INFORMATION</h4>
          <div className="contact_info">
            <div className="event">
              <p>Full Name</p>
              <p>{fullname}</p>
              <div className="space_3"></div>
              <p>Last Name</p>
              <p>Olusanya</p>
            </div>
            <div className="event">
              <p>Phone Number</p>
              <p>{phoneno}</p>
              <div className="space_3"></div>
              <p>Email</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
        <div className="middle_div">
          <h4 className="event_details_title">EVENT DETAILS</h4>
          <div className="event_details">
            <div className="event">
              <p>Event Name</p>
              <p>{eventname}</p>
              <div className="space_3"></div>
              <p>Event Location</p>
              <p>{eventcenter}</p>
            </div>
            <div className="event">
              <p>Event Date</p>
              <p>{dateofevent}</p>
              <div className="space_3"></div>
              <p>Duration</p>
              <p>{duration}</p>
            </div>
          </div>
        </div>
        <div className="bottom_div">
          <p>Event Description</p>
          <p>{desc}</p>
          <div className="space_3"></div>
          <div className="action_button">
            <p>
              <button
                className="accept_btn"
                onClick={() => {
                  handleApprove();
                }}
              >
                Accept
              </button>
            </p>
            <p>
              <button
                className="decline_btn"
                onClick={() => {
                  handleDeny();
                }}
              >
                Decline
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
