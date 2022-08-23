import React from "react";
import { ClientNav } from "../Components/ClientNav";
import { ClientHomepage } from "../Components/ClientHomepage";
import { Footer } from "../Components/Footer";

const ClientHome = ({ user }) => {
  return (
    <div className="body">
      <ClientNav />
      <ClientHomepage user={user}/>
      <Footer />
    </div>
  );
};

export default ClientHome;
