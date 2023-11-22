// src/components/HoverImage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HoverImage.css"; // Create this CSS file for styling

const HoverImage = ({ src, alt, productId }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/product/${productId}`}
      className={`hover-image-container ${isHovered ? "hovered" : ""}`}
    >
      <img
        src={src}
        alt={alt}
        className="image"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </Link>
  );
};

export default HoverImage;
