import React from "react";
import "./nav.css";

const Nav = (props) => {
  let pages = props.pages;
  pages = pages.map((page) => {
    return (
      <h6 style={{ color: props.style.color }}>{page}</h6>
    )
  });
  return (
    <div id="nav" style={props.style}>
      <h4>Garden.</h4>
      <div id="links">
        <div id="wordLinks">
          {pages}
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
