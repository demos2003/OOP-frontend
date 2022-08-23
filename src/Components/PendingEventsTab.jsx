import React from "react";
import "./ClientHomepage.css";

const PendingEventsTab = ({pendingData}) => {
  const PendingEventCard = ({pending}) => {
    return(
      <div className="event-container">
      <div className="event-image-container">
        <img
          src={process.env.PUBLIC_URL + "images/events-pending.svg"}
          alt="welcome"
          className="event-image"
        />
      </div>
      <div className="event-date">{pending.dateofevent} | {pending.timeofevent} | {pending.duration} hours</div>
      <div className="event-name">{pending.eventname}</div>
      <div className="event-location">
        <div className="location-block">
          <span>
            <img src={process.env.PUBLIC_URL + "icons/location.svg"} alt="" />
          </span>{" "}
          {pending.eventcenter}
        </div>
      </div>
    </div>
    )
  }
  return (
    <div className="PendingEventsTab">
  {pendingData.map((p) =>(
       <PendingEventCard pending={p}/> 
  )) }
       
    </div>
  );
};
export default PendingEventsTab;
