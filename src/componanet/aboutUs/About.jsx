import React from "react";
import "./about.css";
import img1 from "./imags/about1.jpg";
import img2 from "./imags/about2.jpg";

const About = () => {
  return (
    <div id="about_cont">
      <div id="about_info">
        <div id="AboutTitle">
          <h2>About Us</h2>
        </div>
        <div id="about_paragraph">
          <p id="p1">
            {" "}
            Where we are dedicated to providing you with the freshest and
            highest quality fruits and vegetables. Our passion for healthy,
            delicious produce is what drives us to ensure that every product we
            offer is picked at the peak of ripeness and delivered to you as
            quickly as possible.
          </p>
          <p id="p2">
            Our team is made up of passionate and knowledgeable individuals who
            are dedicated to providing exceptional customer service. Whether you
            have questions about our products or need help choosing the perfect
            ingredients for your next meal, we are here to help.
          </p>
        </div>
      </div>
      <div id="images">
        <img src={img1} alt="..." />
        <img src={img2} id="img2" alt="..." />
      </div>
    </div>
  );
};

export default About;
