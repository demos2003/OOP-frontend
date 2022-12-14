import React, { useState } from "react";
import UpcomingEventsTab from "./UpcomingEventsTab";
import PendingEventsTab from "./PendingEventsTab";
import DeniedEventsTab from "./DeniedEventTab";
import "./ClientHomepage.css";
import axios from "axios";
import { useEffect } from "react";
import config from "../config";

export const ClientHomepage = ({ user }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [pendingData, setPendingData] = useState([]);
  const [approvedData, setApprovedData] = useState([]);
  const [deniedData, setDeniedData] = useState([]);
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date();
  let day = weekday[date.getDay()];
  let dayNum = date.getDate();
  let month = date.toLocaleString("en-us", { month: "long" });
  let year = date.getFullYear();

  useEffect(() => {
    const fetchPendingData = async () => {
      const res = await axios.get(
        `${config.baseURL}/api/book/${user.fullname}/pending`
      );
      setPendingData(res.data);
    };
    fetchPendingData();
  }, []);

  useEffect(() => {
    const fetchApprovedData = async () => {
      const res = await axios.get(
        `${config.baseURL}/api/book/${user.fullname}/approve`
      );
      setApprovedData(res.data);
    };
    fetchApprovedData();
  }, []);

  useEffect(() => {
    const fetchDeniedData = async () => {
      const res = await axios.get(
        `${config.baseURL}/api/book/${user.fullname}/deny`
      );
      setDeniedData(res.data);
    };
    fetchDeniedData();
  }, []);
  return (
    <div className="client-home-container">
      <div className="top-section">
        <div className="welcome-section">
          <div>
            <h1 className="welcome-header">Hi! {user.fullname}</h1>
            <p className="welcome-text">
              Welcome to the event scheduling system. Here, you can see all your
              upcoming events, events that are pending approval from the admin
              and book events which you want to hold. All from the comfort of
              your home.
            </p>
          </div>
          <img
            src={process.env.PUBLIC_URL + "images/welcome.svg"}
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
      <div className="Tabs">
        <ul className="nav">
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >
            Upcoming Events
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
            Pending Events
          </li>
          <li
            className={activeTab === "tab3" ? "active" : ""}
            onClick={handleTab3}
          >
            Denied Events
          </li>
        </ul>
        <div className="outlet">
          {activeTab === "tab1" && <UpcomingEventsTab approvedData={approvedData} />}
          {activeTab === "tab2" && <PendingEventsTab pendingData={pendingData} />}
          {activeTab === "tab3" && <DeniedEventsTab  deniedData={deniedData}/>}
        </div>
      </div>
    </div>
  );
};
