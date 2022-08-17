import React from "react";
import { ClientNav } from "../Components/ClientNav";
import ClientBookForm from "../Components/ClientBookForm";
import { Footer } from "../Components/Footer";

const ClientBook = () => {
  return (
    <div className="body">
      <ClientNav />
      <ClientBookForm />
      <Footer />
    </div>
  );
};

export default ClientBook;
