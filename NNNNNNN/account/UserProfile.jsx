import React, { useState } from "react";
import "./userprof.css";
import Nav from "../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
import axios from "axios";
import { useEffect } from "react";

const UserProfile = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [addriss1, setAdd1] = useState("");
  const [addriss2, setAdd2] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImage] = useState("");
  const [city, setCity] = useState("");
  const user = JSON.parse(localStorage.getItem('email'));
  console.log('profile',user);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const style = {
    backgroundColor: "white",
  };

  const fetchCartItems = () => {
    const token = localStorage.getItem("refreshToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const username = localStorage.getItem("username");
    const url = "http://localhost:8090/api/v1/mainusers/name/" + username;
    axios
      .get(url, config) 
      .then((response) => {
        setName(
          response.data.user_first_name + " " + response.data.user_last_name
        );
        setEmail(response.data.user_email);
        setAdd1(response.data.user_address1);
        setAdd2(response.data.user_address2);
        setPhone(response.data.user_phone);
        setCity(response.data.user_city);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <>
      <Nav style={style} pages={props.pages} />{" "}
      <div className="user-profile">
        <h2>User Profile</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="bio">City:</label>
          <textarea
            id="bio"
            value={user.city}
            onChange={(e) => setCity(e.target.value)}
          ></textarea>

          <label htmlFor="bio">Phone:</label>
          <textarea
            id="bio"
            value={user.phone}
            onChange={(e) => setPhone(e.target.value)}
          ></textarea>

          <label htmlFor="bio">Address1:</label>
          <textarea
            id="bio"
            value={user.addriss1}
            onChange={(e) => setAdd1(e.target.value)}
          ></textarea>

          <label htmlFor="bio">Address2:</label>
          <textarea
            id="bio"
            value={user.addriss2}
            onChange={(e) => setAdd1(e.target.value)}
          ></textarea>

          <button type="submit">Save</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
