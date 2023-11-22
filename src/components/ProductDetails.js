// src/components/ProductDetailPage.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../styles/ProductDetailPage.css";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";
import SuggestedProductsBanner from "./SuggestProducts";

const ProductDetailPage = ({ match }) => {
  const { addToCart } = useCart();
  const productId = match.params.id; // Access the product ID from the URL params
  const products = {
    1: {
      name: "Nike Air Force 1 '07",
      description:
        "The radiance lives on with the b-ball original. Crossing hardwood comfort with off-court flair, it puts a fresh spin on what you know best: '80s-inspired construction, bold details and nothin'-but-net style.",
      price: "$50.00",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ke5gvzbzv6mvt5ktt2n3/sb-check-canvas-big-kids-skate-shoes-PxRKOX.png",
      specifications: [
        "Colour Shown: White/White/Black",
        "SStyle: DV0788-103",
        "Specification 3",
      ],
    },
    2: {
      name: "Nike Go FlyEase",
      description:
        "Ditch the laces and get outside. These kicks feature Nike's revolutionary FlyEase technology, making on-and-off a breeze. With a heel that pivots open for a totally hands-free entry, they're great for people with limited mobility—or anyone who wants a quicker way to get going.",
      price: "$75.00",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3bdcf8a1-b301-4444-8dfd-92601bbf42ac/blazer-mid-77-shoes-q5gmbj.png",
      specifications: [
        "Colour Shown: Black/White",
        "Style: DR5540-002",
        "Specification 3",
      ],
    },
  };
  const product = products[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    // Implement logic to add the product to the cart (e.g., use a state or dispatch an action)
    addToCart(product);
    console.log(`Added ${product.name} to the cart`);
  };

  // Fetch and display details for the specific product using the productId

  return (
    <div>
      <Header />
      <div className="product-detail-page">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-details">
          <h2>{product.name}</h2>
          <p className="price">{product.price}</p>
          <p className="description">{product.description}</p>
          <div className="specifications">
            <h3>Specifications:</h3>
            <ul>
              {product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <SuggestedProductsBanner></SuggestedProductsBanner>
          {/* <Link to="/">Back to Home</Link> */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetailPage;
