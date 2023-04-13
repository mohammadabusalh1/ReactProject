import React from "react";
import Card from "../cardFut/Card";
import './featured.css'
import img1 from './imgs/delv.png'
import img2 from './imgs/dis.png'
import img3 from './imgs/hole.png'
const Featured = () => {
  return (
    <div id="featured_cont">
      <h2><span>Our</span> Featured</h2>
      <div id="featured">
      <h4>Featured</h4>
      <Card img={img1} title="Home Delivery" color="#41644A" />
      <Card img={img2} title="Big Discounts" color="#FA9884" />
      <Card img={img3} title="Wholesale Orders" color="#576CBC" />
      </div>
    </div>
  );
};

export default Featured;
