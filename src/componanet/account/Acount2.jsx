import React from "react";
import "./account2.css";
import { useSignOut } from "react-auth-kit";
import Service from "../../service/Service";
import { Link } from "react-router-dom";

const Account2 = () => {
  const signOut = useSignOut();

  const logout = () => {
    Service.logout();
    signOut();
    localStorage.removeItem("roleId");
    localStorage.removeItem("username");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
  };

  return (
    <div id="account2">
      <i className="fas fa-user"></i>
      <Link to="/account">
        <button>My Profile</button>
      </Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Account2;
