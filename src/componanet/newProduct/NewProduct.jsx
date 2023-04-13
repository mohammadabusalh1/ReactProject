import React from "react";
import "./newproduct.css";
import img from './imgs/vegetables-paper.png'

const NewProduct = () => {
  return (
    <div id="new_product_cont">
      <div id="product_info">
        <h2>New <span>Products</span></h2>
        <p>
          We are passionate about providing our customers with the freshest and
          most nutritious vegetables available. That is why we work directly
          with local farmers to ensure that our products are always of the
          highest quality. We are passionate about providing our customers with
          the freshest and most nutritious vegetables available. That is why we
          work directly with local farmers to ensure that our products are
          always of the highest quality.
        </p>
        <h6>View New Products </h6>
      </div>
      <img src={img} alt="..." />
    </div>
  );
};

export default NewProduct;
