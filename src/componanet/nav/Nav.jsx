import React from "react";
import "./nav.css";

const Nav = (props) => {
  return (
    <div id="nav" style={props.style}>
      <h4>Garden.</h4>
      <div id="links">
        <div id="wordLinks">
          <h6 style={{ color: props.style.color }}>Home</h6>
          <h6 style={{ color: props.style.color }}>Products</h6>
          <h6 style={{ color: props.style.color }}>About Us</h6>
          <h6 style={{ color: props.style.color }}>Contact Us</h6>
        </div>

        <div id="iconLinks">
          <i style={{ color: props.style.color }} class="fa-solid fa-magnifying-glass"></i>
          <i style={{ color: props.style.color }} class="fa-solid fa-cart-shopping"></i>
          <i style={{ color: props.style.color }} class="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
