import React from 'react'
import Controls from './Controls'

const Table2 = ({ center }) => {
    return (
     
        <tbody>
      <tr>
        {/* <th scope="row" className='SN'>1</th> */}
        <td>{center.eventcentername}</td>
        <td>{center.desc}</td>
        <td>{center.capacity}</td>
        <td><Controls /></td>
      </tr>
      </tbody>
     
    );
  }

export default Table2
