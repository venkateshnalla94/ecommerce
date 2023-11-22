// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
//import { Carousel } from "react-bootstrap";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import HoverImage from "./HoverImage";
const Home = () => {
  const bannerImage =
    "https://cdn5.vectorstock.com/i/1000x1000/52/04/online-shopping-e-commerce-banner-concept-vector-25035204.jpg";
  const carouselImages = [
    "https://pokevault.com/image/cache/catalog/201707/1542161860_eeveefriendscoll26-500x500.jpg",
    "https://m.media-amazon.com/images/I/712FRPi-TNL._AC_SX679_.jpg",
  ];
  return (
    <div>
      <Header />
      <Banner imageUrl={bannerImage} altText="Banner 1" />

      <div className="hover-images-container">
        <HoverImage
          src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ke5gvzbzv6mvt5ktt2n3/sb-check-canvas-big-kids-skate-shoes-PxRKOX.png"
          alt="Your Image"
          productId="1"
        />
        <HoverImage
          src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3bdcf8a1-b301-4444-8dfd-92601bbf42ac/blazer-mid-77-shoes-q5gmbj.png"
          alt="Your Image"
          productId="2"
        />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
