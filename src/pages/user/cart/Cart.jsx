import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cart.css";
import Nav from "../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  const style = {
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };
  let pages = ["Home", "Products", "About", "Contact"];

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    calculateTotals();
  }, [cartItems]);

  const fetchCartItems = () => {
    const token = localStorage.getItem("refreshToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const username = localStorage.getItem("username");
    const url = "http://localhost:8090/api/v1/mainusers/name/" + username;
    axios
      .get(url, config)
      .then((response) => {
        localStorage.setItem("cart_id", response.data.cart.id);
        axios
          .get(
            "http://localhost:8090/api/v1/productsCart/" +
              response.data.cart.id,
            config
          )
          .then((response) => {
            setCartItems(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const calculateTotals = () => {
    let subTotal = 0;
    cartItems.forEach((item) => {
      subTotal += item.product.product_price * item.quantity;
    });

    const shippingCost = Math.random() * 10; // Generate a random number for shipping cost
    const total = subTotal + shippingCost;

    setSubtotal(subTotal);
    setShipping(shippingCost.toFixed(2));
    setTotal(total.toFixed(2));
  };

  return (
    <>
      <Nav style={style} pages={pages} />
      <div id="cart_contaner">
        <p>/Shopping/Cart</p>
        <div id="shopping_cart">
          <h4>Shopping Cart</h4>
          <hr />
          <div id="cart_cards_cont">
            {cartItems.map((item) => (
              <CartCard
                key={item.cart.id}
                name={item.product.product_title}
                price={item.product.product_price}
                quantity={item.quantity}
                subTotal={item.subtotal}
                img={item.product.product_img}
                id={item.cart.id}
                product_id={item.product.product_id}
                fetchCartItems={fetchCartItems}
              />
            ))}
          </div>
        </div>
        <div id="cart_total">
          <h4>Cart Total</h4>
          <hr />
          <div>
            <p>Products Price</p>
            <p>{subtotal}</p>
          </div>
          <hr />
          <div>
            <p>Shipping</p>
            <p>{shipping}</p>
          </div>
          <hr />
          <div>
            <p>Total</p>
            <p>{total}</p>
          </div>
          <Link to="/Buy">
            <button>Buy</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

function CartCard(props) {
  const subtotal = (props.price * props.quantity).toFixed(2);

  const handleRemoveItem = () => {
    // Make an API request to remove the item from the database
    const token = localStorage.getItem("refreshToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete(
        `http://localhost:8090/api/v1/productsCart/${props.id}/products/${props.product_id}`,
        config
      )
      .then((response) => {
        console.log("Item removed successfully");
        props.fetchCartItems();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div id="cart_card">
        <i className="fas fa-times" onClick={handleRemoveItem}></i>
        <img src={props.img} alt="..." />
        <h6>Product Name: {props.name}</h6>
        <p>${props.price}</p>
        <h6>Quantity: {props.quantity}</h6>
        <p>{subtotal}</p>
      </div>
      <hr />
    </>
  );
}
