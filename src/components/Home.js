// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import HoverImage from "./HoverImage";
import HeadingText from "./HeadingText";
import "../styles/Home.css"; // Import the CSS file

const Home = () => {
  const bannerImage =
    "https://hebeboutique.com/cdn/shop/files/C_M_1944x.jpg?v=1700003632";

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
    <div className="main">
      <Header />
      <div>
        <Link to="/list" className="banner-link">
          <Banner
            imageUrl={bannerImage}
            altText="Banner 1"
            bannerText="Your Text Here"
          />
        </Link>
        <HeadingText text="Write the future" />
        <div className="hover-images-container">
          {hoverImages.map((image) => (
            <HoverImage key={image.productId} {...image} />
          ))}
        </div>
        <div class="hero__media hero__media--163005536892e767ae">
          <video
            id="Mp4Video-163005536892e767ae"
            src="https://cdn.shopify.com/s/files/1/1132/3440/files/cutdown_1_1080_1.mp4?v=1630055283"
            loop=""
            muted=""
            playsinline=""
            autoplay=""
          ></video>
        </div>
        {/* <Banner imageUrl={}></Banner> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
