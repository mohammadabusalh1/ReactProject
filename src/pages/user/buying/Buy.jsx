import React from "react";
import './buy.css';
import { useState } from "react";

const Buy = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing logic here
    console.log("Payment submitted:", {
      cardNumber,
      cardHolder,
      expiryDate,
      cvv,
      email,
      name,
      country,
    });
    // Reset form fields
    setCardNumber("");
    setCardHolder("");
    setExpiryDate("");
    setCvv("");
    setEmail("");
    setName("");
    setCountry("");
  };

  return (
    <div className="container">
      <div className="visa-image"></div>
      <h2>Product Details Page</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cardHolder">Card Holder:</label>
          <input
            type="text"
            id="cardHolder"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country/Region:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default Buy;
