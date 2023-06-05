import React from "react";
import Nav from "./../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
import Hero from "../../../componanet/dashComponant/hero/Hero";
import bmanImg from "./imags/farmer.jpg";
import grapes from "./imags/red-grapes.png";
import "./dashbord.css";
import manageOredres from "./imags/manageOredres.jpg";
import ProductManagement from "./imags/ProductManagement.jpg";
import AccountManagement from "./imags/AccountManagement.jpg";
import Product from "../../../componanet/product/Product";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Dashbord = () => {
  const style = {
    background: "linear-gradient(0deg, transparent, hsl(0, 0%, 20%))",
    color: "white",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
  };
  let pages = ["Home", "Products", "Orders", "About", "Contact"];
  return (
    <div id="dashbord">
      <Nav style={style} pages={pages} />
      <Hero
        img={bmanImg}
        subtitle="Look no further"
        title="Farm-to-Table Delivered"
        paragraph="Looking for an effective way to expand your reach and showcase your top-quality fruits and vegetables to a wider audience? By partnering with us, you'll gain access to a dedicated customer base who are passionate about supporting local businesses and seeking out the freshest, most flavorful produce available. "
        buttonText="Display Your Products"
      />
      <Services />
      <MyProducts />
      <Footer />
    </div>
  );
};
export default Dashbord;

function MyProducts() {
  const [products, setProducts] = useState([]);

  const fetch = () => {
    const token = localStorage.getItem("refreshToken");
    console.log(token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const username = localStorage.getItem("username");
    const url = "http://localhost:8090/api/v1/mainusers/supplier/" + username;
    axios
      .get(url, config)
      .then((response) => {
        const supplierId = response.data.supplier_id;

        const url =
          "http://localhost:8090/api/v1/products/supliers/" + supplierId;
        console.log(url);
        axios
          .get(url, config)
          .then((response) => {
            setProducts(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div id="myProducts">
      <h2>
        <span>My</span> Products
      </h2>
      <div id="products">
        {products.slice(0, 9).map((e) => {
          return (
            <Product
              src={e.product_img}
              title={e.product_name}
              pieceNum={e.product_quantity}
            />
          );
        })}
      </div>
      <Link to="admin/products">
        <button>Show more</button>
      </Link>
    </div>
  );
}

function Services() {
  return (
    <div id="AdminServices">
      <h2>
        Our <span>Services</span>
      </h2>
      <div id="AdminServicesCont">
        <Service
          img={ProductManagement}
          link="/admin/Products"
          service="Products Management"
        />
        <Service
          img={manageOredres}
          link="/admin/Orders"
          service="Orders Management"
        />
        <Service img={AccountManagement} service="Account Management" />
      </div>
    </div>
  );
}

function Service(props) {
  return (
    <div id="AdminService">
      <img src={props.img} alt="..." />
      <h6>{props.service}</h6>
      <Link to={props.link}>
        <button>Manage</button>
      </Link>
    </div>
  );
}
