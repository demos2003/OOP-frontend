import React from "react";
import { Link } from "react-router-dom";
import "./ClientNav.css";
import { useContext } from "react";
import { Context } from "../Components/context/Context";

export const ClientNav = () => {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="client-navbar">
      <Link to="/dashboard" className="client-nav-link">
        Home
      </Link>
      <Link to="/dashboard/book" className="client-nav-link">
        Book Event
      </Link>
      <button className="client-logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
