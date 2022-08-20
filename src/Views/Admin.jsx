import React from "react";
import AdminNav from "../Components/AdminNav";
import "./admin.css";
import Requests from "../Components/Requests";
import { useState } from "react";
import AdminEventCenters from "../Components/AdminEventCenters";
import { BiMessage } from "react-icons/bi";
import { BsCalendar4Event } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai"     
import { RiDraftLine } from "react-icons/ri"
import Details from "../Components/Details";


const Admin = () => {
  const [active1, setActive1] = useState("Request");

  return (
    <div className="color">
      <AdminNav />
      <div className="admin_panelHolder">
        <div className="sidebar">
          <p className="request-btn">
            <a onClick={() => setActive1("Request")}>
              <b><BiMessage /></b>
              <b className="space">Requests</b>
            </a>
          </p>
          <p className="event_centers-btn">
            <a onClick={() => setActive1("Events")}>
              <b><BsCalendar4Event /></b>
              <b className="space">Events Centers</b>
            </a>
          </p>
          <p className="event_centers-btn">
            <a onClick={() => setActive1("Events")}>
              <b><AiOutlineStar /></b>
              <b className="space">Starred Event</b>
            </a>
          </p>
          <p className="event_centers-btn">
            <a onClick={() => setActive1("Events")}>
              <b><RiDraftLine /></b>
              <b className="space">Draft</b>
            </a>
          </p>
        </div>     
       <div className="admin_request">
          {active1 === "Request" && <Requests active1={active1} setActive1={setActive1} />}
          {active1 === "Events" && <AdminEventCenters/>}
          {active1 === "Test" && <Details active1={active1} setActive1={setActive1}/>}
        </div>
      </div>
    </div>
  );
};

export default Admin;
