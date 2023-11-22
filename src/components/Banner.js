// src/components/Banner.js
import React from "react";
import "../styles/Banner.css";

const Banner = ({ imageUrl, altText }) => {
  return (
    <div className="banner-container">
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default Banner;
