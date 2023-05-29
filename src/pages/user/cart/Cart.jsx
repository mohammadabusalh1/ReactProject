import React from "react";
import "./cart.css";
import Nav from "../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
const Cart = () => {
  const style = {
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };
  let pages = ["Home", "Products", "About", "Contact"];
  return (
    <>
      <Nav style={style} pages={pages} />
      <div id="cart_contaner">
        <p>/Shopping/Cart</p>
        <div id="shopping_cart">
          <h4>Shopping Cart</h4>
          <hr />
          <div id="cart_cards_cont">
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
        </div>
        <div id="cart_total">
          <h4>Cart Total</h4>
          <hr />
          <div>
            <p>Subtotal</p>
            <p>$0.00</p>
          </div>
          <hr />
          <div>
            <p>Shipping</p>
            <p>$0.00</p>
          </div>
          <hr />
          <div>
            <p>Total</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

function CartCard(props) {
  return (
    <div id="cart_card">
      <i class="fas fa-x   "></i>
      <img src="https://picsum.photos/200" alt="..." />
      <h6>Product Name{props.name}</h6>
      <p>$0.00 {props.price}</p>
      <h6>Quantity{props.quantity}</h6>
      <p>$0.00 {props.suptotal}</p>
    </div>
  );
}
