import React from "react";
import Controls from "./Controls";

const Table2 = ({ center }) => {
  return (
    <tbody>
      <tr>
        <td>{center.centername}</td>
        <td>{center.capacity}</td>
        <td>{center.description}</td>
        <td>
          <Controls path={center._id} />
        </td>
      </tr>
    </tbody>
  );
};

export default Table2;
