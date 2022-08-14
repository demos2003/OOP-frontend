import React from "react";
import { ClientNav } from "../Components/ClientNav";
import { ClientHomepage } from "../Components/ClientHomepage";

const ClientHome = () => {
  return (
    <div className="body">
      <ClientNav />
      <ClientHomepage />
    </div>
  );
};

export default ClientHome;
