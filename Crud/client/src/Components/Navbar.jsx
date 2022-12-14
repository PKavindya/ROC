import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">

          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/register">
            <h6>Join us</h6>
          </Link>
          <Link className="link" to="/">
            <h6>Donates</h6>
          </Link>
          <Link className="link" to="/project">
            <h6>Projects</h6>
          </Link>
          <span>Kavindya</span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};
