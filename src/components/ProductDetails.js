// src/pages/ProductDetails.js
import React from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {productId}</p>
      {/* Display detailed product information */}
    </div>
  );
};

export default ProductDetails;
