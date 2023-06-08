import { useEffect, useState } from "react";
import "./userProduct.css";
import Nav from "../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
import Service from "../../../service/Service";
import Card from "../../../componanet/cardFut/Card";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import axios from "axios";
import { useNavigate } from "react-router";
import ShowProduct from "../showProduct/ShowProduct";

const style = {
  backgroundColor: "white",
};
let pages = ["Home", "Products", "About", "Contact"];

const UserProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [num, setNum] = useState(9);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    Service.getAllProducts()
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setSearchTerm(searchParams.get("search") || "");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.product_title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleFilterChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterByArea = (area) => {
    if (area !== "") {
      const filtered = filteredProducts.filter(
        (product) =>
          area === "" ||
          product.product_area.toLowerCase() === area.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleFilterByType = (type) => {
    if (type !== "") {
      const filtered = filteredProducts.filter(
        (product) =>
          type === "" || product.type.toLowerCase() === type.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleFilterByPrice = () => {
    const filtered = filteredProducts.filter(
      (product) =>
        (priceRange.min === "" ||
          product.product_price >= parseInt(priceRange.min)) &&
        (priceRange.max === "" ||
          product.product_price <= parseInt(priceRange.max))
    );
    setFilteredProducts(filtered);
  };

  const handleMinPriceChange = (event) => {
    setPriceRange((prevRange) => ({ ...prevRange, min: event.target.value }));
  };

  const handleMaxPriceChange = (event) => {
    setPriceRange((prevRange) => ({ ...prevRange, max: event.target.value }));
  };

  const addToCart = (qun, productId) => {
    const roleId = localStorage.getItem("roleId");
    if (roleId != "null") {
      const cartId = localStorage.getItem("cart_id");
      const token = localStorage.getItem("refreshToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const cartItem = {
        cart__id: cartId,
        product_id: productId,
        quantity: qun,
      };

      // Make an API request to add the product to the cart
      axios
        .post(`http://localhost:8090/api/v1/productsCart`, cartItem, config)
        .then((response) => {
          $("#AddedToCart").fadeIn();
          setTimeout(() => {
            $("#AddedToCart").fadeOut();
          }, 3000);
        })
        .catch((error) => {
          $("#inCart").fadeIn();
          setTimeout(() => {
            $("#inCart").fadeOut();
          }, 3000);
        });
    } else {
      navigate("/login");
    }
  };

  const openProduct = (ob) => {
    return <ShowProduct ob={ob} />;
  };

  return (
    <>
      <Nav style={style} pages={pages} />
      <div className="app">
        <div className="filter-section">
          <h3>Filter By:</h3>
          <div className="filter-option">
            <label htmlFor="area-filter">Area:</label>
            <select
              id="area-filter"
              onChange={(e) => handleFilterByArea(e.target.value)}
            >
              <option value="">All</option>
              <option value="Hebron">Hebron</option>
              <option value="Bethlehem">Bethlehem</option>
              <option value="Jerusalem">Jerusalem</option>
              <option value="Gaza">Gaza</option>
              {/* Add more area options here */}
            </select>
          </div>

          <div className="filter-option">
            <label htmlFor="type-filter">Type:</label>
            <select
              id="type-filter"
              onChange={(e) => handleFilterByType(e.target.value)}
            >
              <option value="">All</option>
              <option value="fruits">fruits</option>
              <option value="vegetables">vegetables</option>
              {/* Add more type options here */}
            </select>
          </div>

          <div className="filter-option">
            <label htmlFor="min-price">Min Price:</label>
            <input
              type="number"
              id="min-price"
              value={priceRange.min}
              onChange={handleMinPriceChange}
            />
          </div>

          <div className="filter-option">
            <label htmlFor="max-price">Max Price:</label>
            <input
              type="number"
              id="max-price"
              value={priceRange.max}
              onChange={handleMaxPriceChange}
            />
          </div>

          <button onClick={handleFilterByPrice}>Apply Price Filter</button>
        </div>

        <div id="UserProductSec">
          <h1>Products List</h1>
          <br />
          <div className="search">
            <input
              placeholder="Search for a product"
              value={searchTerm}
              onChange={handleFilterChange}
            />
            <i className="search-icon fa-solid fa-magnifying-glass" />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="container">
              {filteredProducts.slice(0, num).map((e) => {
                const url = "/Products/" + e.product_id;
                return (
                  <div class="pro">
                    <Link to={url}>
                      <img src={e.product_img} alt="" />
                    </Link>
                    <div class="det">
                      <Link to={url}>
                        <span>{e.product_quantity}</span>
                        <h6>{e.product_title}</h6>
                        <div id="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                      </Link>
                      <div id="abs">
                        <p class="price">${e.product_price}</p>
                        <input
                          type="number"
                          name="qun"
                          id="qun"
                          defaultValue={1}
                        />
                        <i
                          onClick={(er) =>
                            addToCart($("#qun").val(), e.product_id)
                          }
                          class="fa fa-shopping-cart shop-cart"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty">
              <h2>No Products Found</h2>
            </div>
          )}

          <button onClick={() => setNum((e) => e + 9)}>Show More</button>
        </div>
      </div>
      <Footer />
      <div className="added" id="inCart">
        <h4>Prodcut In Your cart !!</h4>
      </div>

      <div className="added" id="AddedToCart">
        <h4>Product added to cart successfully</h4>
      </div>
    </>
  );
};

export default UserProduct;
