import React from "react";
import { useState, useEffect } from "react";
import Popup1 from "./Popup1";
import "./Controls.css";
import { MdOutlineModeEdit, MdOutlineDeleteOutline } from "react-icons/md";
import config from "../config";
import axios from "axios";

const Controls = ({ path }) => {
  const [controls, edit] = useState(false);
  const [del, deleteBtn] = useState(false);
  const [centername, setCentername] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const getlocation = async () => {
      const res = await axios.get(`${config.baseURL}/api/location/${path}`);
      setLocation(res.data);
      setCentername(res.data.centername);
      setDescription(res.data.description);
      setCapacity(res.data.capacity);
    };
    getlocation();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${config.baseURL}/api/location/${path}`);
      window.location.reload();
    } catch (err) {}
  };
  const handleUpdate = async () => {
    try {
      axios.put(`${config.baseURL}/api/location/${path}`, {
        centername,
        capacity,
        description,
      });
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div>
      <div className="controls">
        <button
          className="edit-btn"
          onClick={() => {
            edit(true);
            setUpdateMode(true);
          }}
          style={{ marginRight: "20px", marginLeft: "10%" }}
        >
          <b>
            <MdOutlineModeEdit />
          </b>
        </button>
        <Popup1 trigger={controls} setTrigger={edit}>
          <h3>Edit Event Center</h3>
          <form>
            <div className="form-group">
              <label>Location Name</label>
              {updateMode ? (
                <input
                  type="text"
                  className="form-control"
                  value={centername}
                  onChange={(e) => setCentername(e.target.value)}
                />
              ) : (
                <input
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              )}
            </div>
            <div className="form-group">
              <label>Location Capacity</label>
              {updateMode ? (
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                >
                  <option>000 - 050</option>
                  <option>050 - 150</option>
                  <option>150 - 300</option>
                  <option>300 - 500</option>
                  <option>300 - 500</option>
                  <option> 500+</option>
                </select>
              ) : (
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>000 - 050</option>
                  <option>050 - 150</option>
                  <option>150 - 300</option>
                  <option>300 - 500</option>
                  <option>300 - 500</option>
                  <option> 500+</option>
                </select>
              )}
            </div>
            <div className="form-group">
              <label>Location Description</label>
              {updateMode ? (
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  defaultValue={description}
                />
              ) : (
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              )}
            </div>
            <button
           style={{backgroundColor:"blue" }}
           className="edit_btn"
            >
            Save
           </button>

          </form>
        </Popup1>
        <button
          className="delete-btn"
          onClick={() => {
            deleteBtn(true);
          }}
        >
          <b>
            <MdOutlineDeleteOutline />
          </b>
        </button>
        {del && (
          <div className="popup2">
            <div className="popup2-inner">
              <h3 className="delete_option">Are you sure you want to delete</h3>
              <div className="button">
                <button className="yes" onClick={handleDelete}>
                  Yes
                </button>

                <button
                  className="no"
                  onClick={() => {
                    deleteBtn(false);
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Controls;
