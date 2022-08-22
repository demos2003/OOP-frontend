import React from 'react'
import './table.css'
import Controls from './Controls'


const Table = ({posts}) => {
const Table2 = ({ post }) => {
    return (
      <tr>
        <th scope="row" className='SN'>1</th>
        <td>{post.eventcentername}</td>
        <td>{post.location}</td>
        <td>{post.capacity}</td>
        <td><Controls /></td>
      </tr>
    );
  }
  return (
    <div>
      <table className="table table-bordered ">
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
          {posts.map((p) => (
            <Table2 post={p} />
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default Table