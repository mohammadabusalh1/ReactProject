import React from "react";
import Card from "../cardFut/Card";
import "./featured.css";
import img1 from "./imgs/pin.png";
import img2 from "./imgs/pomegranate.png";
import img3 from "./imgs/red-grapes.png";
const Featured = () => {
  return (
    <div id="featured_cont">
      <div id="featured">
        <div id="best">
          <h4>Why we are the best?</h4>
          <p>
            At Garden Company, we pride ourselves on being the best in the
            Agriculture. Our unique approach to customer service and
            unparalleled product quality set us apart from the competition.
          </p>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
        <Card img={img1} title="Pineapple" price="2" />
        <Card img={img2} title="Pomegranate" price="1.3"/>
        <Card img={img3} title="Red Grapes" price="2.1"/>
      </div>
    </div>
  );
};

export default Featured;
