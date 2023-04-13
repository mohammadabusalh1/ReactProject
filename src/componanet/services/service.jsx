import React from "react";
import "./service.css";
import offer from "./imgs/offer.png";
import client from "./imgs/client.png";
import cet from "./imgs/cetogary.jpg";
import products from "./imgs/products.jpg";

const Service = () => {
  return (
    <div id="service_cont">
      <h2>
        <span>Our</span> Service
      </h2>
      <div id="service">
        <ServiceBox
          title="Products"
          img={products}
          paragraph="Browse our selection today and discover the difference that locally grown, fresh vegetables can make in your meals"
        />
        <ServiceBox
          title="Categories"
          img={cet}
          paragraph=" find what you're looking for. Whether you're searching for agricultural products, vegetables, fruits, or other items, we have a category to suit your needs"
        />
        <ServiceBox
          title="Customers Service"
          paragraph="Our friendly and knowledgeable customer service team is available to assist you with any questions or concerns you may have"
          img={client}
        />
        <ServiceBox
          title="Offers"
          paragraph="From discounts on select products to free shipping offers, we have a variety of ways to help you save money on your purchases"
          img={offer}
        />
      </div>
    </div>
  );
};

function ServiceBox(props) {
  return (
    <div id="box">
      <img src={props.img} alt="..." />
      <h6>{props.title}</h6>
      <p>{props.paragraph}</p>
      <span>Read more</span>
    </div>
  );
}

export default Service;
