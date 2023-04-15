import React from "react";
import "./footer.css";
import apps from './imgs/apps.png'
const Footer = () => {
  return (
    <footer>
      <div id="box_cont">
        <div class="box">
          <i class="fas fa-envelope"></i>
          <h6>Email</h6>
          <a href="mailto:abusalhm102@gmail.com">Garden@gmail.com</a>
          <a href="mailto:abusalhm102@gmail.com">alMatbahAlthahabi@gmail.com</a>
        </div>

        <div class="box">
          <i class="fas fa-clock"></i>
          <h6>Work Time</h6>
          <p>12:00 am - 6:00 pm</p>
        </div>

        <div class="box">
          <i class="fas fa-location"></i>
          <h6>Delivery</h6>
          <p>West Bank and Gaza</p>
        </div>

        <div class="box">
          <i class="fas fa-phone"></i>
          <h6>Connect with us</h6>
          <p>0592345956</p>
          <p>022456742</p>
        </div>

        <div class="box">
          <i class="fas fa-download"></i>
          <h6>Apps</h6>
          <img src={apps} alt=""/>
        </div>
      </div>
      <div id="creator">
        <h6>
          تم الأنشاء بواسطة <span>محمد أبو صالح</span> | @ جميع الحقوق محفوظة
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
