import React from "react";
import "./products.css";
import Nav from "../../../componanet/nav/Nav";
import Product from "../../../componanet/product/Product";
import Footer from "../../../componanet/footer/Footer";
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
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Products;

function ProductsMangmentHero() {
  return (
    <div id="ProductsMangmentHero">
      <Filter />
      <div id="main">
        <div id="category">
          <h6>category</h6>
          <h6>category</h6>
          <h6>category</h6>
          <h6>category</h6>
          <h6>category</h6>
          <h6>category</h6>
        </div>
        <h3>Your Products</h3>
        <div id="MangmentHeroProducts">
          <Product
            src="https://picsum.photos/200"
            title="Product 1"
            pieceNum="1"
          />
          <Product
            src="https://picsum.photos/200"
            title="Product 2"
            pieceNum="2"
          />
          <Product
            src="https://picsum.photos/200"
            title="Product 3"
            pieceNum="3"
          />
          <Product
            src="https://picsum.photos/200"
            title="Product 4"
            pieceNum="4"
          />
          <Product
            src="https://picsum.photos/200"
            title="Product 5"
            pieceNum="5"
          />
          <Product
            src="https://picsum.photos/200"
            title="Product 6"
            pieceNum="6"
          />
          <Product
            src="https://picsum.photos/200"
            title="Product 7"
            pieceNum="7"
          />
          <Product
            src="https://picsum.photos/200"
            title="Product 8"
            pieceNum="8"
          />
          <Product
            src="https://picsum.photos/200"
            title="Product 9"
            pieceNum="9"
          />
          <Product src="https://picsum.photos/200" title="Product 10" />
          <Product src="https://picsum.photos/200" title="Product 11" />
          <Product src="https://picsum.photos/200" title="Product 12" />
        </div>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div>
      <label htmlFor="type-filter">Filter by Type:</label>
      <Options />
    </div>
  );
}

function Options() {
  return (
    <select id="type-filter">
      <option value="">All</option>
      <option value="{type}">type</option>
      <option value="{type}">type</option>
      <option value="{type}">type</option>
      <option value="{type}">type</option>
      <option value="{type}">type</option>
    </select>
  );
}
