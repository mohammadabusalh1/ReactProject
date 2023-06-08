import React from "react";
import "./card.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import $ from "jquery";

const Card = (props) => {
  const navigate = useNavigate();

  const [qun, setQun] = useState(1);

  const addToCart = () => {
    const roleId = localStorage.getItem("roleId");
    console.log(roleId);
    if (roleId != "null") {
      const productId = props.product_id;
      const cartId = localStorage.getItem("cart_id");
      const token = localStorage.getItem("refreshToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const cartItem = {
        cart__id: cartId,
        product_id: productId,
        quantity: qun,
      };

      // Make an API request to add the product to the cart
      axios
        .post(`http://localhost:8090/api/v1/productsCart`, cartItem, config)
        .then((response) => {
          $("#AddedToCart").fadeIn();
          setTimeout(() => {
            $("#AddedToCart").fadeOut();
          }, 3000);
        })
        .catch((error) => {
          $("#inCart").fadeIn();
          setTimeout(() => {
            $("#inCart").fadeOut();
          }, 3000);
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <div id="card" style={props.style}>
      <img src={props.img} alt="Product" />
      <h6>{props.title}</h6>

      <div id="act">
        <h6>{props.price}$</h6>
        <input
          type="number"
          name="qun"
          id="qun"
          value={qun}
          onChange={(e) => setQun(e.target.value)}
        />
        <i
          className="fa fa-cart-plus"
          aria-hidden="true"
          onClick={addToCart}
        ></i>
      </div>
    </div>
  );
};

export default Card;
