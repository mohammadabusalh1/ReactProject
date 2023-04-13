import React from "react";
import './nav.css';

const Nav = () => {
  return (
    <div id="nav">
      <h4>Garden.</h4>
      <div id="links">
        <div id="wordLinks">
          <h6>Home</h6>
          <h6>Products</h6>
          <h6>About Us</h6>
          <h6>Contact Us</h6>
        </div>

        <div id="iconLinks">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
