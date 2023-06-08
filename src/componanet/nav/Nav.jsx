import React from "react";
import "./nav.css";
import $ from "jquery";
import { Link, useNavigate } from "react-router-dom";
import Account from "../account/Account.jsx";
import Acount2 from "../account/Acount2";

const Nav = (props) => {
  const navigate = useNavigate();
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
    const roleID = localStorage.getItem("roleId");
    if (roleID == null) {
      $("#account").toggleClass("active");
      $("#account2").removeClass("active");
    } else {
      $("#account2").toggleClass("active");
      $("#account").removeClass("active");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const searchTerm = event.target.value;
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
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
            {pages.length == 4 && (
              <i
                style={{ color: props.style.color }}
                class="fa-solid fa-magnifying-glass"
                id="main_search_button"
                onClick={showSearchClick}
              ></i>
            )}
            {pages.length == 4 && (
              <Link to="/cart">
                <i
                  style={{ color: props.style.color }}
                  class="fa-solid fa-cart-shopping"
                ></i>
              </Link>
            )}
            <i
              style={{ color: props.style.color }}
              class="fa-solid fa-user"
              onClick={showAccount}
              id="acc"
            ></i>
          </div>
        </div>
      </div>
      <input
        type="text"
        name="main_search"
        id="main_search"
        placeholder="#Search"
        onKeyDown={handleKeyDown}
      />
      <Account />
      <Acount2 />
    </div>
  );
};

export default Nav;
