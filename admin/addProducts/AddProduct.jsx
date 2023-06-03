import React, { useState } from "react";
import "./addProduct.css";
import Nav from "../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
import addProduct from "./img/addProduct.jpg";
import ProductService from "../../../service/ProductService";
import axios from "axios";
const About = () => {
  const PRODUCT_API_URL = "http://localhost:8090/api/v1/products";

  const style = {
    borderBottom: "1px solid #ccc",
    boxShadow: "0px 2px 15px #ccc",
  };
  let pages = ["Home", "Products", "Orders", "About", "Contact"];

  //add Product To Database
  const [product, setProduct] = useState({
    product_title: "",
    product_area: "",
    product_description: "",
    product_price: 0.0,
    product_quantity: 0.0,
    type: "",
    product_img: null,
    supplier_supplier_id: 0,
  });

  const changeProductState = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setProduct({ ...product, [name]: value });
  };

  const changeImageState = (e) => {
    const reder = new FileReader();
    if (e.target.files[0]) {
      reder.readAsDataURL(e.target.files[0]);
      reder.onload = (s) => {
        setProduct({ ...product, product_img: s.target.result });
      };
    }
  };

  const saveProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_img", product.product_img);
    formData.append("product_title", product.product_title);
    formData.append("product_area", product.product_area);
    formData.append("product_description", product.product_description);
    formData.append("product_price", product.product_price);
    formData.append("product_quantity", product.product_quantity);
    formData.append("type", product.type);
    formData.append("supplier_supplier_id", product.supplier_supplier_id);

    axios
      .post(PRODUCT_API_URL, formData, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              value={product.product_title}
              onChange={(e) => changeProductState(e)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product_price">Product Price:</label>
            <input
              type="number"
              id="product_price"
              name="product_price"
              value={product.product_price}
              onChange={(e) => changeProductState(e)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product_description">Product Description:</label>
            <textarea
              id="product_description"
              name="product_description"
              required
              value={product.product_description}
              onChange={(e) => changeProductState(e)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="product_img">Product Image URL:</label>
            <input
              type="file"
              id="product_img"
              name="product_img"
              onChange={(e) => changeImageState(e)}
              accept="image/*"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product_quantity">Product Quantity:</label>
            <input
              type="number"
              id="product_quantity"
              name="product_quantity"
              value={product.product_quantity}
              onChange={(e) => changeProductState(e)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product_area">Product Area:</label>
            <input
              type="text"
              id="product_area"
              name="product_area"
              value={product.product_area}
              onChange={(e) => changeProductState(e)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product_type">Product Type:</label>
            <input
              type="text"
              id="type"
              name="type"
              value={product.type}
              onChange={(e) => changeProductState(e)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Category">Product Category:</label>
            <select name="product_category" id="product_category"></select>
          </div>
          <button onClick={saveProduct}>Add Product</button>
        </div>
        <img src={addProduct} alt="..." />
      </div>
      <Footer />
    </>
  );
};

export default About;
