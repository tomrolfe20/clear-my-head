import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div>Clear my head</div>

      <div className='nav-links'>
        <Link style={{ "text-decoration": "none" }} to='FindPub'>
          <button className='button-53-nav'>Find a pub</button>
        </Link>
        <Link style={{ "text-decoration": "none" }} to='AddPub'>
          <button className='button-53-nav'>Add a pub</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
