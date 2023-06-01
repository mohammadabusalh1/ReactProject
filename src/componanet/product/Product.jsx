import React from "react";
import "./product.css";
const Product = (props) => {
  return (
    <div>
      <div id="product">
        <img src={props.src} alt="..." />
        <div>
          <h6>{props.title}</h6>
          <p>{props.pieceNum} pieces</p>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
