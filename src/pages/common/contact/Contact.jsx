import React from "react";
import contact from "./imgs/contact-img.svg";
import Nav from "../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
import "./contact.css";
import $ from "jquery";
import { useEffect } from "react";

export const Contact = (props) => {
  const style = {
    backgroundColor: "white",
  };

  useEffect(() => {
    $("#email_masseage").hide();
  }, []);

  const showMasseage = () => {
    if ($("#contact_title").val() == "" || $("#mass").val() == "") {
      if ($("#contact_title").val() == "")
        $("#contact_title").css("border", "1px solid red");
      if ($("#mass").val() == "") $("#mass").css("border", "1px solid red");
    } else {
      $("#email_masseage").show(500);
      setTimeout(() => {
        $("#email_masseage").hide(500);
      }, 3000);
      $("#contact_title").css("border", "");
      $("#mass").css("border", "");
    }
  };

  return (
    <div>
      <Nav style={style} pages={props.pages} />
      <section id="contact">
        <div id="cont">
          <div id="contactInfo">
            <div>
              <input
                type="text"
                name="contact_title"
                id="contact_title"
                placeholder="contact_title"
              />
              <textarea
                name="mass"
                id="mass"
                cols="40"
                rows="6"
                placeholder="How Can I Help You"
              ></textarea>
            </div>
            <button onClick={showMasseage} class="btn">
              Send
            </button>
          </div>
          <img src={contact} alt="..." />
        </div>

        <div id="email_masseage">
          <h2>Thank You For Contacting Us</h2>
          <h6> You will be answered within 1-2 hours </h6>
        </div>
      </section>
      <Footer />
    </div>
  );
};
