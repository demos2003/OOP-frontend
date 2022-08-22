import React from 'react'
import './AdminEventCenters.css'
import { useState } from 'react'
import Popup1 from './Popup1'
import {IoMdAdd} from 'react-icons/io'
import config from "../config"
import axios from "axios";




const Add = () => {
  const [ addNew, setAddNew] = useState(false)
  const [eventcentername, setEventcentername] = useState("");
  const [capacity, setCapacity] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(false);
 
const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try{
        const res = await axios.post(`${config.baseURL}/api/eventcenters`, {
          eventcentername,
          capacity,
          desc,
        });
        res.data && window.location.reload();
    }catch(err){
      //  console.log(err)
       setError(true);
    }
  };
  return (
    <div>
        <button onClick={() => setAddNew(true)} style={{float:"right"}} className="add"><b><IoMdAdd/></b></button>
        <Popup1 trigger={addNew} setTrigger={setAddNew}>
                    <h3>Add Event Center</h3>
                    <form>
                        <div className="form-group">
                            <label>Location Name</label>
                            <input type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter Location Name"
                            onChange={(e) => setEventcentername(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label>Location Capacity</label>
                            <select class="form-control" id="exampleFormControlSelect1"
                            onChange={(e) => setCapacity(e.target.value)}
                            >
                                <option value="000 - 050">000 - 050</option>
                                <option value="050 - 150">050 - 150</option>
                                <option value="150 - 300">150 - 300</option>
                                <option value="300 - 500">300 - 500</option>
                                <option value="500+"> 500+</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Location Description</label>
                           <textarea 
                           class="form-control" 
                           id="exampleFormControlTextarea1" 
                           rows="3"
                           onChange={(e) => setDesc(e.target.value)}
                           />
                        </div>
                        <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary save-btn"
          >
            Save
          </button>
                    </form>
                   
                </Popup1>
    </div>
  )
}

export default Add