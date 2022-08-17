import React from 'react'
import './table.css'
import Controls from './Controls'

const Table = () => {
  return (
    <div>
      <table class="table table-bordered ">
  <thead>
    <tr>
      <th scope="col" className='SN'>#</th>
      <th scope="col">Location Name</th>
      <th scope="col">Location Capacity</th>
      <th scope="col">Location Desc</th>
      <th scope="col">Controls</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className='SN'>1</th>
      <td>Am</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><Controls/></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><Controls/></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><Controls/></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><Controls/></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><Controls/></td>
    </tr>
    
  </tbody>
</table>
    </div>
  )
}

export default Table