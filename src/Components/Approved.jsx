import React from "react";

const Approved = ({ approveData }) => {
  const Approved1 = ({ approve }) => {
    return (
      <div className="request_info">
        <p>{approve.fullname}</p>
        <p>{approve.email}</p>
        <p>{approve.phoneno}</p>
        <p>{approve.eventcenter}</p>
        <p>{approve.duration}</p>
        <p>{approve.dateofevent}</p>
        <p>{approve.duration} hour(s)</p>
      </div>
    );
  };
  return (
    <div>
      {approveData.map((p) => (
        <Approved1 approve={p} />
      ))}
    </div>
  );
};

export default Approved;
