import React from "react";
import "./ClientHomepage.css";

const DeniedEventsTab = ({deniedData}) => {
  const DeniedEventsCard = ({denied}) => {
    return(
      <div className="UpcomingEventsTab">
      <div className="event-container">
      <div className="event-image-container">
          <img
            src={process.env.PUBLIC_URL + "images/events.svg"}
            alt="welcome"
            className="event-image"
          />
        </div>
        <div className="event-date">{denied.dateofevent} | {denied.duration} hours | {denied.timeofevent} pm</div>
        <div className="event-name">{denied.eventname}</div>
        <div className="event-location">
          <div className="location-block">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/location.svg"} alt="" />
            </span>{" "}
           {denied.eventcenter}
          </div>
        </div>
      </div>
      
    </div>
   
    )
  }
  return (

    <div className="upcomingevents_holder">
      {deniedData.map((p) => (
           <DeniedEventsCard denied={p}/>
      ))}
               
    </div>
  );
};
export default DeniedEventsTab;