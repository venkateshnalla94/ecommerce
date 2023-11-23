// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import HoverImage from "./HoverImage";

const Home = () => {
  const bannerImage =
    "https://cdn.dribbble.com/users/3237629/screenshots/12922293/artboard_1_4x.jpg";

  const hoverImages = [
    {
      src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ke5gvzbzv6mvt5ktt2n3/sb-check-canvas-big-kids-skate-shoes-PxRKOX.png",
      alt: "Image 1",
      productId: "1",
    },
    {
      src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3bdcf8a1-b301-4444-8dfd-92601bbf42ac/blazer-mid-77-shoes-q5gmbj.png",
      alt: "Image 2",
      productId: "2",
    },
    {
      src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/disuwww5uxkqulu2aivh/air-max-plus-iii-shoes-WV2bDM.png",
      alt: "Image 3",
      productId: "3",
    },
  ];

  return (
    <div>
      <Header />
      <div className="main">
        <Banner imageUrl={bannerImage} altText="Banner 1" />
        <div className="hover-images-container">
          {hoverImages.map((image) => (
            <HoverImage key={image.productId} {...image} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
