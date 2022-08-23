import React from "react";
import AdminNav from "../Components/AdminNav";
import "./admin.css";
import Requests from "../Components/Requests";
import { useState } from "react";
import AdminEventCenters from "../Components/AdminEventCenters";
import { BiMessage } from "react-icons/bi";
import { BsCalendar4Event } from "react-icons/bs";
import Details from "../Components/Details";


const Admin = () => {
  const [active1, setActive1] = useState("Request");
  const [active2, setActive2]= useState()

  return (
    <div className="color">
      <AdminNav />
      <div className="admin_panelHolder">
        <div className="sidebar">
          <div>
            <img className="babcock_logo" src={process.env.PUBLIC_URL + "images/Picture1.png"}
             alt="babcock logo" />
          </div>
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
        </div>     
       <div className="admin_request">
          {active1 === "Request" && <Requests active1={active1} setActive1={setActive1} active2={active2} setActive2={setActive2} />}
          {active1 === "Events" && <AdminEventCenters/>}
          {active1 === "Test" && <Details active1={active1} setActive1={setActive1} active2={active2} setActive2={setActive2}/>}
        </div>
      </div>
    </div>
  );
};

export default Admin;
