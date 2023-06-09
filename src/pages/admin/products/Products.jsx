import React, { useEffect, useState } from "react";
import "./products.css";
import Nav from "../../../componanet/nav/Nav";
import Product from "../../../componanet/product/Product";
import Footer from "../../../componanet/footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
const style = {
  borderBottom: "1px solid #ccc",
  boxShadow: "0px 2px 15px #ccc",
};
let pages = ["Home", "Products", "Orders", "About", "Contact"];
const Products = () => {
  return (
    <div id="Manage_products">
      <Nav pages={pages} style={style} />
      <ProductsMangmentHero />
      <Footer />
    </div>
  );
};

export default Products;

function ProductsMangmentHero() {
  const [num, setNum] = useState(9);
  const [products, setProducts] = useState([]);
  const fetch = () => {
    const token = localStorage.getItem("refreshToken");
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
    <div id="ProductsMangmentHero">
      <div id="ProductsMain">
        <h3>Your Products</h3>
        <input type="text" id="admin_products_search" placeholder="#Search" />
        <div id="MangmentHeroProducts">
          {products.slice(0, num).map((e) => {
            return (
              <Product
                src={e.product_img}
                title={e.product_name}
                pieceNum={e.product_quantity}
                id={e.product_id}
              />
            );
          })}
        </div>

        <button onClick={() => setNum((e) => e + 9)}>Show More</button>
        <Link to="/admin/addProduct">
          <i className="fas fa-plus" id="addNewProduct"></i>
        </Link>
      </div>
    </div>
  );
}
