import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSignOut } from "react-auth-kit";
import Service from "../../service/Service";
import "./account2.css";
import $ from "jquery";

const Account2 = () => {
  const signOut = useSignOut();
  const [user, setUser] = useState({});

  const logout = () => {
    signOut();
    localStorage.removeItem("roleId");
    localStorage.removeItem("username");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    $("#account2").removeClass("active");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = localStorage.getItem("username");
        const token = localStorage.getItem("refreshToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          `http://localhost:8090/api/v1/mainusers/name/${username}`,
          config
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
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
