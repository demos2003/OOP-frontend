import React from 'react'
import './AdminEventCenters.css'
import Table from './Table'
import Add from './Add'
import axios from 'axios'
import { useState, useEffect } from 'react'
import config from '../config'


const AdminEventCenters = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`${config.baseURL}/api/eventcenters`)
      setPosts(res.data);
    };
    fetchPost();
  }, []);
   
  return (
    <div className='request_holder1'>
      <h3 className='EventHeader'>Event Centers</h3>
    <Add />
    
   <Table posts={posts}/>
   
   </div>
  )
}

export default AdminEventCenters