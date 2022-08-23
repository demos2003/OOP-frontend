import React from "react";
import "./ClientHomepage.css";

const UpcomingEventsTab = ({approvedData}) => {
  const UpcomingEventCard = ({approved}) => {
    return(
      <div className="event-container">
      <div className="event-image-container">
          <img
            src={process.env.PUBLIC_URL + "images/events.svg"}
            alt="welcome"
            className="event-image"
          />
        </div>
        <div className="event-date">{approved.dateofevent} | {approved.duration} hours | {approved.timeofevent} </div>
        <div className="event-name">{approved.eventname}</div>
        <div className="event-location">
          <div className="location-block">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/location.svg"} alt="" />
            </span>{" "}
            {approved.eventcenter}
          </div>
        </div>
      </div >

    )
    
  }
  return (

    <div className="upcomingevents_holder">

    <div className="UpcomingEventsTab">
    {approvedData.map((p) => (
          <UpcomingEventCard approved={p} />
        ))}
       
           
    </div>
    </div>
  );
};
export default UpcomingEventsTab;
