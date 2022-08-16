import React from "react";
import { ClientNav } from "../Components/ClientNav";
import { ClientHomepage } from "../Components/ClientHomepage";
import { Footer } from "../Components/Footer";

const ClientHome = () => {
  return (
    <div className="body">
      <ClientNav />
      <ClientHomepage />
      <Footer />
    </div>
  );
};

export default ClientHome;
