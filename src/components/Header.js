// src/components/Header.js
import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Header = () => {
  return (
    <header>
      <div className="left-section">
        <img
          src="https://s3-symbol-logo.tradingview.com/amazon--600.png"
          alt="Company Logo"
          className="logo"
        />
        <p>Your Name</p>
      </div>
      <nav className="right-section">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
