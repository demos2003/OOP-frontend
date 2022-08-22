import React from 'react'
import './AdminEventCenters.css'
import Table from './Table'
import Add from './Add'
import axios from 'axios'
import { useState, useEffect } from 'react'
import config from '../config'


const AdminEventCenters = () => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const res = await axios.get(`${config.baseURL}/api/eventcenters`)
  //     setPosts(res.data);
  //     // console.log(setPosts);
  //   };
  //   fetchPost();
  // }, []);
  // console.log(posts);

  const [centers, setCenters] = useState([]);
     useEffect(() => {
         const fetchCenters = async () => {
           const res = await axios.get(`${config.baseURL}/api/eventcenters`)
           setCenters(res.data);
         };
         fetchCenters();
     }, []);
   
  return (
    <div className='request_holder1'>
      <h3 className='EventHeader'>Event Centers</h3>
    <Add />
    
   <Table centers={centers}/>
   
   </div>
  )
}

export default AdminEventCenters