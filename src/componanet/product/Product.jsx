import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
const Product = (props) => {
  return (
    <div>
      <div id="product">
        <img src={props.src} alt="..." />
        <div>
          <h6>{props.title}</h6>
          <p>{props.pieceNum} pieces</p>
          <Link to={`/admin/editProduct/${props.id}`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
