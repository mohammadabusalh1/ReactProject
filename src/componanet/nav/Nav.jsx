import React from "react";
import "./nav.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Account from "../account/Account.jsx";

const Nav = (props) => {
  let pages = props.pages;
  pages = pages.map((page, index) => {
    return (
      <Link
        key={index}
        exact
        to={
          pages.length === 5
            ? `/admin/${page.toLowerCase()}`
            : `/${page.toLowerCase()}`
        }
      >
        <h6 style={{ color: props.style.color }}>{page}</h6>
      </Link>
    );
  });
  const showSearchClick = () => {
    if ($("#account").hasClass("active")) {
      $("#account").toggleClass("active");
    }
    $("#main_search").toggleClass("active2");
  };

  const showAccount = () => {
    if ($("#main_search").hasClass("active2")) {
      $("#main_search").toggleClass("active2");
    }
    $("#account").toggleClass("active");
  };

  return (
    <div id="nav_cont">
      <div id="nav" style={props.style}>
        <Link to={pages.length == 4 ? "/" : "/admin"}>
          <h4>Garden.</h4>
        </Link>
        <div id="links">
          <div id="wordLinks">{pages}</div>

          <div id="iconLinks">
            <i
              style={{ color: props.style.color }}
              class="fa-solid fa-magnifying-glass"
              id="main_search_button"
              onClick={showSearchClick}
            ></i>
            <Link to={"/cart"}>
              <i
                style={{ color: props.style.color }}
                class="fa-solid fa-cart-shopping"
              ></i>
            </Link>
            <i
              style={{ color: props.style.color }}
              class="fa-solid fa-user"
              onClick={showAccount}
            ></i>
          </div>
        </div>
      </div>
      <input
        type="text"
        name="main_search"
        id="main_search"
        placeholder="#Search"
      />
      <Account />
    </div>
  );
};

export default Nav;
