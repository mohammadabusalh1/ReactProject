import React from "react";
import Nav from "../../../componanet/nav/Nav";
import "./order.css";
import Footer from "../../../componanet/footer/Footer";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Order = () => {
  const style = {
    borderBottom: "1px solid #ccc",
    boxShadow: "0px 2px 15px #ccc",
  };
  let pages = ["Home", "Products", "Orders", "About", "Contact"];

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("refreshToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const username = localStorage.getItem("username");
    const url = "http://localhost:8090/api/v1/mainusers/supplier/" + username;
    axios
      .get(url, config)
      .then((response) => {
        console.log(response);

        const url =
          "http://localhost:8090/api/v1/orders/" + response.data.supplier_id;
        axios
          .get(url, config)
          .then((response) => {
            setOrders(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="order">
      <Nav style={style} pages={pages} />
      <div id="hero">
        <div id="fillter">
          <h6>Available</h6>
          <h6>Cancelled</h6>
          <h6>Processed</h6>
          <h6>Late</h6>
        </div>
        <div id="orders_cont">
          {orders.map((order) => {
            return (
              <OrderCard
                img={order?.product?.product_img}
                name={order?.product?.product_title}
                quantity={order?.quantity}
                price={order?.product.product_price}
                status={order?.status}
                date={order?.order_date}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

function OrderCard(props) {
  return (
    <div id="order_card">
      <div id="image_info">
        <img src={props.img} alt="..." />
        <div id="order_info">
          <h6>Name: {props.name}</h6>
          <h6>Quantity: {props.quantity}</h6>
          <h6>Price: {props.price}</h6>
          <h6>Date: {props.date}</h6>
          <h6
            style={{
              color:
                props.status === "Available"
                  ? "green"
                  : props.status === "Processed"
                  ? "orange"
                  : props.status === "Cancelled"
                  ? "black"
                  : "red",
            }}
          >
            {props.status}
          </h6>
        </div>
      </div>

      {props.status === "Available" ? (
        <div id="handelButton">
          <button style={{ backgroundColor: "#54B435" }}>
            <i className="fas fa-check"></i>
          </button>
          <button style={{ backgroundColor: "#CD1818" }}>
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
      ) : props.status === "Late" ? (
        <div id="handelButton">
          <button style={{ backgroundColor: "#54B435" }}>
            <i className="fas fa-check"></i>
          </button>
          <button style={{ backgroundColor: "#CD1818" }}>
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Order;
