import React from "react";
import "./header.styles.css";
import { Link, Router } from "react-router-dom";
import Button from "../buttons/buttons.component";

const Header = () => {
  return (
    <div className="header-container ">
      <span className="header-logo">
        <Link to="/" className="header-items-link">
          logo
        </Link>
      </span>
      <span className="header-items">
        <Link to="/about" className="header-items-link">
          About
        </Link>
        <Link to="/services" className="header-items-link">
          Services
        </Link>
        <Link to="/events" className="header-items-link">
          Events
        </Link>
      </span>
      <span className="header-authentication">
        <Link to="/signin">
          <Button children="Sign In" />
        </Link>
        <Link to="/signup">
          <Button children="Sign Up" />
        </Link>
      </span>
    </div>
  );
};
export default Header;
