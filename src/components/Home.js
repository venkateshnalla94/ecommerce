// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
//import { Carousel } from "react-bootstrap";
import Header from "./Header";
import Banner from "./Banner";

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
    </div>
  );
};

export default Home;
