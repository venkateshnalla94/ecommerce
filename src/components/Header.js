// src/components/Header.js
import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useCart } from "../context/CartContext";
const Header = () => {
  const { cart } = useCart();

  return (
    <header>
      <div className="left-section">
        <Link to="/">
          <img
            src="https://s3-symbol-logo.tradingview.com/amazon--600.png"
            alt="Company Logo"
            className="logo"
          />
        </Link>
        <nav className="right-section">
          <ul>
            <li>
              <Link to="/">My Store</Link>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="right-section">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>

          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
