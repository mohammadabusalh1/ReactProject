import React from "react";
import Card from "../cardFut/Card";
import "./featured.css";
import img1 from "./imgs/pin.png";
import img2 from "./imgs/pomegranate.png";
import img3 from "./imgs/red-grapes.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Service from "../../service/Service";
const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Service.getAllProducts()
      .then((response) => {
        setProducts(() => response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          <Link to="/products">
            <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        {products.slice(0, 3).map((e) => {
          console.log(e);
          return (
            <Card
              id={e.product_id}
              img={e.product_img}
              title={e.product_title}
              price={e.product_price}
              product_id={e.product_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
