import React from "react";
import "./products.css";
import Nav from "../../../componanet/nav/Nav";
import Product from "../../../componanet/product/Product";
import Footer from "../../../componanet/footer/Footer";
import { Link } from "react-router-dom";
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
  return (
    <div id="ProductsMangmentHero">
      <div id="ProductsMain">
        <h3>Your Products</h3>
        <input type="text" id="admin_products_search" placeholder="#Search" />
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
        </div>

        <button>Show More</button>
        <Link to="/admin/addProduct">
          <i className="fas fa-plus" id="addNewProduct"></i>
        </Link>
      </div>
    </div>
  );
}

// function Filter() {
//   const type1 = [
//     "Vegetables",
//     "Fruit",
//     "Leafy Greens",
//     "Root Vegetables",
//     "Citrus Fruits",
//     "Berries",
//   ];
//   const type2 = ["Bethlehem", "Hebron", "Ramallah", "Jenin", "Nablus"];
//   const type3 = ["Cat", "Cat"];
//   return (
//     <div id="products_filter">
//       <h4 htmlFor="type-filter">Filter:</h4>
//       <div>
//         <label>Type: </label>
//         <Options type={type1} />
//       </div>
//       <div>
//         <label>Governorate: </label>
//         <Options type={type2} />
//       </div>
//       <div>
//         <label>Category: </label>
//         <Options type={type3} />
//       </div>
//       <div id="price">
//         <label>Min Price:</label>
//         <input type="number" id="minPrice" placeholder="Min Price" />
//         <br />
//         <label htmlFor="maxPrice">Max Price:</label>
//         <input type="number" id="maxPrice" placeholder="Max Price" />
//         <br />
//       </div>
//       <button>Apply Filter</button>
//     </div>
//   );
// }

// function Options(props) {
//   const type = props.type.map((e) => <option value={e}>{e}</option>);
//   return (
//     <select id="type-filter">
//       <option value="all">All</option>
//       {type}
//     </select>
//   );
// }
