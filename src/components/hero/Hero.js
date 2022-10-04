import React from "react";
import "./Hero.css";
import Label from "../images/logo.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-l'>
        <img src={Label} alt='' />
      </div>
      <div className='hero-r'>
        <span>Clear My Head</span>
        <span>
          Clear My Head is here to help find the best spots to grab the best
          alcohol free beer, 'Clear Head'. It's built by the community, for the
          community.
        </span>
        <div className='hero-buttons'>
          <Link style={{ "text-decoration": "none" }} to='FindPub'>
            {" "}
            <button className='button-53 button-left'>Find a pub</button>
          </Link>
          <Link style={{ "text-decoration": "none" }} to='AddPub'>
            {" "}
            <button className='button-53 button-right'>Add a pub</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
