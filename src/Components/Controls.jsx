import React from 'react'
import { useState } from 'react'
import Popup1 from './Popup1';
import "./Controls.css"
import {MdOutlineModeEdit, MdOutlineDeleteOutline} from "react-icons/md"

const Controls = () => {
    const [controls, edit] = useState(false);
    const [del, deleteBtn] = useState(false);
return (
        <div>
            <div className='controls'>
                <button className='edit-btn' onClick={() => edit(true)} style={{ marginRight: "20px", marginLeft: "10%" }}><b><MdOutlineModeEdit/></b></button>
                <Popup1 trigger={controls} setTrigger={edit}>
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
                <button className='delete-btn' onClick={() => deleteBtn(true)}><b><MdOutlineDeleteOutline/></b></button>
                {
                del  && 
                <div className='popup2'><div className='popup2-inner'>
                    <h3 className='delete_option'>Are you sure you want to delete</h3>
                    <div className='button'>
                    <button className='yes'>Yes</button>
                    
                    <button className='no' onClick={() => deleteBtn(false)}>No</button>
                    </div>
                    </div>
                    </div>
                }
                {/* <Popup1 trigger={del} setTrigger={deleteBtn}>
                    <h3>Are you sure you want to delete</h3>

                    
                </Popup1> */}
            </div>
        </div>
    )
}

export default Controls