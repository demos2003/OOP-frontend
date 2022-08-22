import React from "react";
import "./adminNav.css";

const Pending = ({ active1, setActive1, bookData, active2, setActive2 }) => {
  const Pending2 = ({ book }) => {
    return (
      <div>
        <div className="request_info" onClick={() => setActive1("Test")}>
          <p>
            {book.fullname}
            {setActive2(book._id)}
          </p>
          <p>{book.email}</p>
          <p>0{book.phoneno}</p>
          <p>{book.eventcenter}</p>
          <p>{book.eventname}</p>
          <p>{book.duration}</p>
          <p>{book.dateofevent}</p>
          <p>{book.duration} hour(s)</p>
        </div>
      </div>
    );
  };

  return (
    <div className="requestContent_holder">
      {bookData.map((p) => (
        <Pending2 book={p} />
      ))}
    </div>
  );
};

export default Pending;
