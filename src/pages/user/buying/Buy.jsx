import React from "react";
import "./buy.css";
import pay from "./img/pay.jpg";
import Nav from "../../../componanet/nav/Nav.jsx";
import Footer from "../../../componanet/footer/Footer.jsx";

const Buy = () => {
  const style = {
    backgroundColor: "white",
    boxShadow: "0px 2px 15px #ccc",
  };
  let pages = ["Home", "Products", "About", "Contact"];
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
          <button type="submit">Submit Payment</button>
        </div>
        <img src={pay} alt="..." />
      </div>
      <Footer />
    </>
  );
};

export default Buy;
