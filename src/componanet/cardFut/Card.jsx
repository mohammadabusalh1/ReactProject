import React from "react";
import "./card.css";
import { useNavigate } from "react-router";

const Card = (props) => {
  const navigate = useNavigate();
  const addToCart = () => {
    const id = props.product_id;
    if (localStorage.getItem("roleId") == 1) {
      
    } else {
      navigate("/login");
    }
  };
  return (
    <div id="card" style={props.style}>
      <img src={props.img} />
      <h6 id="Card_title">{props.title}</h6>
      <div id="act">
        <h6>{props.price}$</h6>
        <i class="fa fa-cart-plus" aria-hidden="true" onClick={addToCart}></i>
      </div>
    </div>
  );
};

export default Card;
