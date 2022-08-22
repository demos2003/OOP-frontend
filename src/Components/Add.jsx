import React from "react";
import "./AdminEventCenters.css";
import { useState } from "react";
import Popup1 from "./Popup1";
import { IoMdAdd } from "react-icons/io";
import config from "../config";
import axios from "axios";

const Add = () => {
  const [addNew, setAddNew] = useState(false);
  const [eventcentername, seteventcentername] = useState("");
  const [capacity, setCapacity] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${config.baseURL}/api/eventcenters`, {
        eventcentername,
        capacity,
        desc,
      });
      res.data && window.location.reload();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div>
      <button
        onClick={() => setAddNew(true)}
        style={{ float: "right" }}
        className="add"
      >
        <b>
          <IoMdAdd />
        </b>
      </button>
      <Popup1 trigger={addNew} setTrigger={setAddNew}>
        <h3>Add Event Center</h3>
        <form>
          <div className="form-group">
            <label for="LocationName">Location Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Location Name"
              onChange={(e) => seteventcentername(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Location Capacity</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              onChange={(e) => setCapacity(e.target.value)}
            >
              <option value="1">000 - 050</option>
              <option value="2">050 - 150</option>
              <option value="3">150 - 300</option>
              <option value="4">300 - 500</option>
              <option value="5">300 - 500</option>
              <option value="6"> 500+</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Location Description</label>
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
  );
};

export default Add;
