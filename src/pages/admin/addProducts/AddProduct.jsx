import React, { useState } from "react";
import "./addProduct.css";
import Nav from "../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
import addProduct from "./img/addProduct.jpg";
const About = () => {
  const style = {
    borderBottom: "1px solid #ccc",
    boxShadow: "0px 2px 15px #ccc",
  };
  let pages = ["Home", "Products", "Orders", "About", "Contact"];
  return (
    <>
      <Nav pages={pages} style={style} />
      <div id="addProductCont">
        <div className="about-container">
          <div className="form-group">
            <label htmlFor="product_title">Product Title:</label>
            <input
              type="text"
              id="product_title"
              name="product_title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product_price">Product Price:</label>
            <input
              type="text"
              id="product_price"
              name="product_price"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product_description">Product Description:</label>
            <textarea
              id="product_description"
              name="product_description"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="product_img">Product Image URL:</label>
            <input type="text" id="product_img" name="product_img" required />
          </div>
          <div className="form-group">
            <label htmlFor="product_quantity">Product Quantity:</label>
            <input
              type="text"
              id="product_quantity"
              name="product_quantity"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product_area">Product Area:</label>
            <input type="text" id="product_area" name="product_area" required />
          </div>
          <div className="form-group">
            <label htmlFor="product_type">Product Type:</label>
            <input type="text" id="product_type" name="product_type" required />
          </div>
          <div className="form-group">
            <label htmlFor="Category">Product Category:</label>
            <select name="product_category" id="product_category"></select>
          </div>
          <button type="submit">Add Product</button>
        </div>
        <img src={addProduct} alt="..." />
      </div>
      <Footer />
    </>
  );
};

export default About;
