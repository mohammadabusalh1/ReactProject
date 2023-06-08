import "./home.css";
import Nav from "../../../componanet/nav/Nav";
import React, { useState, useEffect } from "react";
import img1 from './img/vegetables.jpg';
import img2 from './img/fruits-basket.jpg';
import img3 from './img/grocery.jpg';
import Featured from "../../../componanet/featured/featured";
import CallToAction from "../../../componanet/CallToAction/CallToAction";
import Service from "../../../componanet/services/service";
import NewProduct from "../../../componanet/newProduct/NewProduct";
import About from "../../../componanet/aboutUs/About";
import Footer from "../../../componanet/footer/Footer";
import { Link } from "react-router-dom";
import $ from 'jquery';

const Home = () => {
 const style = {
    backgroundColor: "white",
  }
  let pages = ["Home","Products", "About", "Contact"];

  $("#AddedToCart").fadeOut();
  $("#inCart").fadeOut();

  return (
    <div id="home">
      <Nav style={style} pages={pages} />
      <Hero />
      <Featured/>
      <CallToAction/>
      <Service/>
      <NewProduct/>
      <About/>
      <Footer/>
      <div className="added" id="inCart">
        <h4>Prodcut In Your cart !!</h4>
      </div>

      <div className="added" id="AddedToCart">
        <h4>Product added to cart successfully</h4>
      </div>
    </div>
  );
};

function Hero() {
  let arrParagraph = [
    "We offer a wide selection of fresh, locally-sourced produce at affordable prices. " +
      "Our vegetables are hand-picked daily to ensure the highest quality and flavor.",
    "At our store, we take pride in providing our customers with a diverse range of fresh, locally-sourced produce that won't break the bank.",
    "Our selection of vegetables is carefully curated, with each item hand-picked daily to ensure that only the best quality and flavor makes it onto our shelves.",
  ];

  let arrTitle = [
    "Fresh Vegetables Delivered to Your Doorstep",
    "Get Locally-Sourced Fruits Delivered to Your Doorstep",
    "Enjoy Hand-Picked Fresh Vegetables",
  ];

  let arrBgImage = [
    img1,
    img2,
    img3,
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [title, setTitle] = useState(0);
  const [paragraph, setParagraph] = useState(0);
  const [bgImageIndex, setBgImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex < 2 ? activeIndex + 1 : 0));
    }, 5000);

    const timer1 = setInterval(() => {
      setParagraph((paragraph) => (paragraph < 2 ? paragraph + 1 : 0));
    }, 5000);

    const timer2 = setInterval(() => {
      setTitle((title) => (title < 2 ? title + 1 : 0));
    }, 5000);

    const timer3 = setInterval(() => {
      setBgImageIndex((bgImageIndex) => (bgImageIndex < 2 ? bgImageIndex + 1 : 0));
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${arrBgImage[bgImageIndex]})` }}
    >
      <div id="heroInfo">
        <h3>{arrTitle[title]}</h3>
        <p>{arrParagraph[paragraph]}</p>
        <Link to="/products"><button>EXPLORE</button></Link>
      </div>

      <div id="point">
        <div className={activeIndex === 0 ? "active" : ""}></div>
        <div className={activeIndex === 1 ? "active" : ""}></div>
        <div className={activeIndex === 2 ? "active" : ""}></div>
      </div>
    </div>
  );
}

export default Home;
