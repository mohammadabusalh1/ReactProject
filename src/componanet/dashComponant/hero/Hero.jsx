import React from "react";
import "./hero.css";

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
        <button>{props.buttonText}</button>
      </div>
    </div>
  );
};

export default Hero;
