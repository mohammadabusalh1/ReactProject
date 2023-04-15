import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <div id="card">
      <img src={props.img} />
      <h6 id="title">{props.title}</h6>
      <div id="act">
        <h6>{props.price}$</h6>
        <i class="fa fa-cart-plus" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Card;
