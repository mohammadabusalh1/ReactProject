import React from "react";
import "./account.css";

const Account = () => {
  return (
    <div id="account">
      <i class="fas fa-user    "></i>
      <h6>Login</h6>
      <input type="text" placeholder="Username or Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  );
};

export default Account;
