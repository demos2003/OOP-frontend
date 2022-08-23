import React from "react";
import "./requests.css";
import { RiCheckDoubleLine } from "react-icons/ri";
import { MdOutlineCancel, MdPendingActions } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import Pending from "./Pending";
import Approved from "./Approved";
import Declined from "./Declined";
import DoubleBooking from "./DoubleBooking";
import axios from "axios";
import config from "../config";

const Requests = ({ active1, setActive1, active2, setActive2 }) => {
  const [active, setActive] = useState("Pending1");
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    const fetchbookData = async () => {
      const res = await axios.get(`${config.baseURL}/api/pending`);
      setBookData(res.data)
    };
    fetchbookData();
  }, []);
  const [approveData, setApprovedData] = useState([]);
  useEffect(() => {
    const fetchapproveData = async () => {
      const res = await axios.get(`${config.baseURL}/api/approved`);
      setApprovedData(res.data)
    };
    fetchapproveData();
  }, []);

  const [deniedData, setDeniedData] = useState([]);
  useEffect(() => {
    const fetchdeniedData = async () => {
      const res = await axios.get(`${config.baseURL}/api/denied`);
      setDeniedData(res.data)
    };
    fetchdeniedData();
  }, [])
  return (
    <div>
       <div className='request_holder'>
        <div className='holder_nav'>
          <div>
            <a onClick={() => setActive("Pending1")} className='options3'>
              <p className='options'>
                <MdPendingActions className='nav_icon' />
                Pending </p>
            </a>
            <a onClick={() => setActive("Approved1")} className='options3'>
              <p className='options'>
                <AiOutlineCheckCircle className='nav_icon' />
                Approved
              </p>
            </a>
            <a onClick={() => setActive("Denied1")} className='options3'>
              <p className='options'>
                <MdOutlineCancel className='nav_icon' />
                Denied
              </p>
            </a>

          </div>

        </div>
        <hr></hr>
        <div className='holder_content'>

          {active === "Pending1" && <Pending active1={active1} setActive1={setActive1} bookData={bookData} active2={active2} setActive2={setActive2} />}
          {active === "Approved1" && <Approved approveData={approveData} />}
          {active === "Denied1" && <Declined deniedData={deniedData} />}
          {active === "Double1" && <DoubleBooking />}
        </div>

      </div>
    </div>
  );
};

export default Requests;
