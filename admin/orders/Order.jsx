import React from "react";
import Nav from "../../../componanet/nav/Nav";
import "./order.css";
import Footer from "../../../componanet/footer/Footer";
const Order = () => {
  const style = {
    borderBottom: "1px solid #ccc",
    boxShadow: "0px 2px 15px #ccc",
  };
  let pages = ["Home", "Products", "Orders", "About", "Contact"];
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
          <OrderCard
            img="https://images.pexels.com/photos/377907/pexels-photo-377907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            name="Coffe"
            quantity="2"
            price="$20"
            status="Available"
            date="12/12/2022"
          />
          <OrderCard
            img="https://images.pexels.com/photos/377907/pexels-photo-377907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            name="Coffe"
            quantity="2"
            price="$20"
            status="Late"
            date="12/12/2022"
          />

          <OrderCard
            img="https://images.pexels.com/photos/377907/pexels-photo-377907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            name="Coffe"
            quantity="2"
            price="$20"
            status="Processed"
            date="12/12/2022"
          />

          <OrderCard
            img="https://images.pexels.com/photos/377907/pexels-photo-377907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            name="Coffe"
            quantity="2"
            price="$20"
            status="Cancelled"
            date="12/12/2022"
          />

          <OrderCard
            img="https://images.pexels.com/photos/377907/pexels-photo-377907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            name="Coffe"
            quantity="2"
            price="$20"
            status="Cancelled"
            date="12/12/2022"
          />

          <OrderCard
            img="https://images.pexels.com/photos/377907/pexels-photo-377907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            name="Coffe"
            quantity="2"
            price="$20"
            status="Cancelled"
            date="12/12/2022"
          />

          <OrderCard
            img="https://images.pexels.com/photos/377907/pexels-photo-377907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            name="Coffe"
            quantity="2"
            price="$20"
            status="Cancelled"
            date="12/12/2022"
          />
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
          <button style={{ backgroundColor: "#54B435" }} ><i className="fas fa-check"></i></button>
          <button style={{ backgroundColor: "#CD1818" }} ><i className="fa-solid fa-x"></i></button>
        </div>
      ) : props.status === "Late" ? (
        <div id="handelButton">
          <button style={{ backgroundColor: "#54B435" }} ><i className="fas fa-check"></i></button>
          <button style={{ backgroundColor: "#CD1818" }} ><i className="fa-solid fa-x"></i></button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Order;
