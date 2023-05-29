import React from "react";
import "./showProduct.css";
import Nav from "../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
const ShowProduct = (props) => {
  const style = {
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };
  let pages = ["Home", "Products", "About", "Contact"];
  return (
    <div id="showProduct">
      <Nav style={style} pages={pages} />
      <div id="show_product_container">
        <div id="img_reviews">
          <div id="link">
            <h6>Productd/ Product1{props.title}</h6>
          </div>
          <img src="https://picsum.photos/900" alt="..." />
          <div id="reviews">
            <h6>REVIEWS</h6>
            <hr />
            <div id="reviews_container">
              <Review />
              <Review />
            </div>
          </div>
        </div>
        <div id="show_product_det">
          <span>Product Code:</span>
          <h2>Title Name{props.title}</h2>
          <div id="price_star">
            <h6>$ price</h6>
            <div id="stars">
              <i class="fas fa-star    "></i>
              <i class="fas fa-star    "></i>
              <i class="fas fa-star    "></i>
              <i class="fas fa-star    "></i>
              <i class="fas fa-star    "></i>
            </div>
            <h6>17 reviews</h6>
          </div>
          <hr />
          <p>
            Paragraph writing has been a part of the writing process in every
            student’s life. Not only for any examination but also in our
            personal lives, we will need to write about different topics.
            Paragraph writing is a simple process, and yet it needs special
            attention as you have to be short, precise and to the point.
            {props.paragraph}
          </p>
          <h6 id="area">Area</h6>
          <hr />
          <div id="addToCart">
            <h6>Quantity: </h6>
            <input type="number" placeholder="as 1 or 2" />
            <button>
              Add to Cart <i class="fas fa-cart-plus"></i>
            </button>
          </div>
          <hr />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShowProduct;

function Review(props) {
  return (
    <div id="review">
      <div id="name_review">
        <h6>Mohammad{props.name}</h6>
        <div id="stars">
          <i class="fas fa-star    "></i>
          <i class="fas fa-star    "></i>
          <i class="fas fa-star    "></i>
          <i class="fas fa-star    "></i>
          <i class="fas fa-star    "></i>
        </div>
      </div>
      <p>
        Paragraph writing has been a part of the writing process in every
        student’s life. Not only for any examination but also in our personal
        lives, we will need to write about different topics. Paragraph writing
        is a simple process, and yet it needs special attention as you have to
        be short, precise and to the point.{props.review}
      </p>
    </div>
  );
}
