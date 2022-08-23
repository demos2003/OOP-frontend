import React from "react";
import "./table.css";

import Table2 from "./Table2";
const Table = ({ centers }) => {
  return (
    <div>
      <table className="table table-bordered ">
        <thead>
          <tr>
            {/* <th scope="col" className='SN'>#</th> */}
            <th scope="col">Location Name</th>
            <th scope="col">Location Capacity</th>
            <th scope="col">Location Desc</th>
            <th scope="col">Controls</th>
          </tr>
        </thead>

        {centers.map((p) => (
          <Table2 center={p} />
        ))}
      </table>
    </div>
  );
};

export default Table;
