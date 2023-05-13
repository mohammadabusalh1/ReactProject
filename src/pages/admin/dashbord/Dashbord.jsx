import React from "react";
import Nav from "./../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
import Hero from "../../../componanet/dashComponant/hero/Hero";
import bmanImg from "./imags/farmer.jpg";
import grapes from "./imags/red-grapes.png";
import "./dashbord.css";
const Dashbord = () => {
  const style = {
    background: "linear-gradient(0deg, transparent, hsl(0, 0%, 20%))",
    color: "white",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
  };
  return (
    <div>
      <Nav style={style} />
      <Hero
        img={bmanImg}
        subtitle="Look no further"
        title="Farm-to-Table Delivered"
        paragraph="Looking for an effective way to expand your reach and showcase your top-quality fruits and vegetables to a wider audience? By partnering with us, you'll gain access to a dedicated customer base who are passionate about supporting local businesses and seeking out the freshest, most flavorful produce available. "
        buttonText="Display Your Products"
      />
      <MyProducts />
      <Footer />
    </div>
  );
};
export default Dashbord;

function MyProducts() {
  return (
    <div id="myProducts">
      <h2><span>My</span> Products</h2>
      <div id="products">
        <Product src={grapes} title="Grapes" pieceNum="20" />
        <Product src={grapes} title="Grapes" pieceNum="20"/>
        <Product src={grapes} title="Grapes" pieceNum="20"/>
        <Product src={grapes} title="Grapes" pieceNum="20"/>
        <Product src={grapes} title="Grapes" pieceNum="20"/>
        <Product src={grapes} title="Grapes" pieceNum="20"/>
        <Product src={grapes} title="Grapes" pieceNum="20"/>
        <Product src={grapes} title="Grapes" pieceNum="20"/>
        <Product src={grapes} title="Grapes" />
      </div>
    </div>
  );
}

function Product(props) {
  return (
    <div id="product">
      <img src={props.src} alt="..." />
      <div>
        <h6>{props.title}</h6>
        <p>{props.pieceNum} pieces</p>
      </div>
      <button>Edit</button>
    </div>
  );
}
