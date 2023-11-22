// src/components/SuggestedProductsBanner.js
import React from "react";
import "../styles/SuggestedProductsBanner.css";

const SuggestedProductsBanner = () => {
  // Sample suggested products data (replace with actual data)
  const suggestedProducts = [
    {
      id: 1,
      name: "Suggested Product 1",
      imageUrl:
        "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/61fa30a8-9918-48c7-b34a-8faecd13a297/pdp.jpg",
    },
    {
      id: 2,
      name: "Suggested Product 2",
      imageUrl:
        "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/8472a1b5-ea22-4dc8-9fda-2632c1c068a9/pdp.jpg",
    },
    {
      id: 3,
      name: "Suggested Product 3",
      imageUrl:
        "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/1c21e1dd-7c86-4c67-83dc-2f7baa031475/pdp.jpg",
    },
  ];

  return (
    <div className="suggested-products-banner">
      <h3>Explore More Products</h3>
      <div className="suggested-products-list">
        {suggestedProducts.map((product) => (
          <div key={product.id} className="suggested-product">
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProductsBanner;
