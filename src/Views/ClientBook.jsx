import React from "react";
import { ClientNav } from "../Components/ClientNav";
import ClientBookForm from "../Components/ClientBookForm";
import { Footer } from "../Components/Footer";
import axios from "axios";
import config from "../config";
import { useEffect, useState } from "react";

const ClientBook = ({user}) => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetchLocations = async () => {
      const res = await axios.get(`${config.baseURL}/api/location`);
      setLocations(res.data);
    };
    fetchLocations();
  }, []);

  return (
    <div className="body">
      <ClientNav />
      <ClientBookForm user={user} />
      <Footer />
    </div>
  );
};

export default ClientBook;
