import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = (props) => {
  const backgroundStyle = {
    backgroundImage: 'url("' + props.img + '")',
  };

  return (
    <div id="Dashhero" style={backgroundStyle}>
      <div id="title">
        <div id="dashTitle">
          <h6>{props.subtitle}</h6>
          <h3>{props.title}</h3>
        </div>
        <p>{props.paragraph}</p>
        <Link to={"/admin/Products"}><button>{props.buttonText}</button></Link>
      </div>
    </div>
  );
};

export default Hero;
