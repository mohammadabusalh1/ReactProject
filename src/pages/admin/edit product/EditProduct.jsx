import React, { useState } from "react";
import "./editProduct.css";
import Nav from "../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
import addProduct from "./img/addProduct.jpg";
import ProductService from "../../../service/Service";
import axios from "axios";
import { useParams } from "react-router";
import { useEffect } from "react";
const EditProduct = () => {
  const token = localStorage.getItem("accessToken");

  const style = {
    borderBottom: "1px solid #ccc",
    boxShadow: "0px 2px 15px #ccc",
  };
  let pages = ["Home", "Products", "Orders", "About", "Contact"];

  const [product, setProduct] = useState({
    product_id: 0,
    product_title: "",
    product_area: "",
    product_description: "",
    product_price: 0.0,
    product_quantity: 0.0,
    type: "",
    product_img: null,
    supplier_supplier_id: 1,
  });

  const { id } = useParams();
  const PRODUCT_API_URL = "http://localhost:8090/api/v1/products/" + id;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const url = "http://localhost:8090/api/v1/products/" + id;
    axios
      .get(url, config)
      .then((response) => {
        const ob = {
          product_id: response.data.product_id,
          product_title: response.data.product_title,
          product_area: response.data.product_area,
          product_description: response.data.product_description,
          product_price: response.data.product_price,
          product_quantity: response.data.product_quantity,
          type: response.data.type,
          product_img: response.data.product_img,
          supplier_supplier_id: response.data.supplier.supplier_id,
        };
        setProduct(ob);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //add Product To Database

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

    axios
      .put(PRODUCT_API_URL, product, config)
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
          <button onClick={saveProduct}>Edit Product</button>
        </div>
        <img src={addProduct} alt="..." />
      </div>
      <Footer />
    </>
  );
};

export default EditProduct;
