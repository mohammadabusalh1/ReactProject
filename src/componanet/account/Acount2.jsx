import React from "react";
import "./account2.css";
import { useSignOut } from "react-auth-kit";
import Service from "../../service/Service";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Account2 = () => {
  const signOut = useSignOut();
  const [user, setUser] = useState({});

  const logout = () => {
    Service.logout();
    signOut();
    localStorage.removeItem("roleId");
    localStorage.removeItem("username");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    $("#account2").removeClass("active");
  };

  useEffect(() => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("refreshToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(`http://localhost:8090/api/v1/mainusers/name/` + username, config)
      .then((response) => {
        setUser(() => response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="account2">
      <i className="fas fa-user"></i>
      <Link to={`/account/${user.user_id}`}>
        <button>My Profile</button>
      </Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Account2;
