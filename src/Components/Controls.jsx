import React from 'react'
import { useState } from 'react'
import Popup1 from './Popup1';

const Controls = () => {
    const [controls, setControls] = useState(false);
    return (
        <div>
            <div className='controls'>
                <button onClick={() => setControls(true)} style={{ marginRight: "20px", marginLeft: "10%" }}>Edit</button>
                <Popup1 trigger={controls} setTrigger={setControls}>
                    <h3>Edit Event Center</h3>
                    <form>
                        <div className="form-group">
                            <label for="LocationName">Location Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
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
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Controls