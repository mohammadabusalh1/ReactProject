import React from "react";
import "./account2.css";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router";
import Service from "../../service/Service";

const Acount2 = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const logout = () => {
    Service.logout();
    signOut();
    navigate("/login");
    localStorage.setItem("roleId", null);
    localStorage.setItem("username", null);
    localStorage.setItem("refreshToken", null);
    localStorage.setItem("accessToken", null);
  };

  return (
    <div id="account2">
      <i class="fas fa-user"></i>
      <button>My Profile</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Acount2;
