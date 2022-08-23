import React from "react";

const Declined = ({ deniedData }) => {
  const Denied = ({ denied }) => {
    return (
      <div className="request_info">
        <p>{denied.fullname}</p>
        <p>{denied.email}</p>
        <p>{denied.phoneno}</p>
        <p>{denied.eventcenter}</p>
        <p>{denied.duration}</p>
        <p>{denied.dateofevent}</p>
        <p>{denied.duration} hour(s)</p>
      </div>
    );
  };
  return (
    <div className="requestContent_holder">
      {deniedData.map((p) => (
        <Denied denied={p} />
      ))}
    </div>
  );
};

export default Declined;
