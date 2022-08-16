import React from "react";
import { Link } from "react-router-dom";
import "./ClientNav.css";

export const ClientNav = () => {
  return (
    <div className="client-navbar">
      <Link to="/dashboard" className="client-nav-link">
        Home
      </Link>
      <Link to="/dashboard/book" className="client-nav-link">
        Book Event
      </Link>
      <Link to="/" className="logo-img">
        <img className="logo-img" src="icons/logo.svg" alt="logo" />
      </Link>
    </div>
  );
};
