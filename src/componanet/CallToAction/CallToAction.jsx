import React from "react";
import "./CallToAction.css";
import img from "./imgs/gramer.jpg";
const CallToAction = () => {
  return (
    <div id="cont">
      <div id="info">
        <h6>Welcome to our Sign Up section! </h6>
        <h3>Creating an Account</h3>
        <p>
          By creating an account, you'll gain access to all of our amazing
          services, including home delivery, same-day delivery, customizable
          delivery, local pickup, seasonal delivery, meal kits, special occasion
          delivery, corporate delivery, emergency delivery, and more. Plus,
          you'll be the first to know about exclusive promotions, seasonal
          produce, and new recipes. Signing up is quick and easy - just enter
          your email address and create a password, and you'll be ready to start
          exploring everything our site has to offer. Thanks for choosing us as
          your go-to destination for fresh, healthy vegetables!
        </p>
        <button>Sign Up Now</button>
      </div>
      <img src={img} alt="..." />
    </div>
  );
};

export default CallToAction;
