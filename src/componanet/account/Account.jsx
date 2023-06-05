import React from "react";
import "./account.css";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div id="account">
      <i class="fas fa-user    "></i>
      <h6>Login</h6>
      <Link to="/login"><button>Login</button></Link>
      <button>Sign Up</button>
    </div>
  );
};

export default Account;
