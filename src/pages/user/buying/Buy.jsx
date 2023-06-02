import React from "react";
import "./buy.css";
import pay from "./img/pay.jpg";
import Nav from "../../../componanet/nav/Nav.jsx";
import Footer from "../../../componanet/footer/Footer.jsx";
import { useEffect } from "react";
import $ from "jquery";

const Buy = () => {
  const style = {
    backgroundColor: "white",
    boxShadow: "0px 2px 15px #ccc",
  };
  let pages = ["Home", "Products", "About", "Contact"];

  useEffect(() => {
    $("#buy_message").hide();
  }, []);

  const showMasseage = () => {
    $("#buy_message").show(500);
    setTimeout(() => {
      $("#buy_message").hide(500);
    }, 3000);
    $("#contact_title").css("border", "");
    $("#mass").css("border", "");
  };

  return (
    <>
      <Nav style={style} pages={pages} />
      <div id="Pay">
        <div className="PayContainer">
          <h2>Payment page</h2>
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" required />
          </div>
          <div>
            <label htmlFor="cardHolder">Card Holder:</label>
            <input type="text" id="cardHolder" required />
          </div>
          <div>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" required />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="country">Country/Region:</label>
            <input type="text" id="country" required />
          </div>
          <button type="submit" onClick={showMasseage}>
            Submit Payment
          </button>
        </div>
        <img src={pay} alt="..." />

        <div id="buy_message">
          <h2>Thank You</h2>
          <h6> You will receive it within 24 hours </h6>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Buy;
