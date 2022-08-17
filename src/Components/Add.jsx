import React from 'react'
import './AdminEventCenters.css'
import { useState } from 'react'
import Popup1 from './Popup1'
const Add = () => {
  const [ addNew, setAddNew] = useState(false)
  return (
    <div>
        <button onClick={() => setAddNew(true)} style={{float:"right"}} className="add">Add</button>
        <Popup1 trigger={addNew} setTrigger={setAddNew}>
                    <h3>Add Event Center</h3>
                    <form>
                        <div className="form-group">
                            <label for="LocationName">Location Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Location Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Location Capacity</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>000 - 050</option>
                                <option>050 - 150</option>
                                <option>150 - 300</option>
                                <option>300 - 500</option>
                                <option>300 - 500</option>
                                <option> 500+</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Location Description</label>
                           <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                </Popup1>
    </div>
  )
}

export default Add