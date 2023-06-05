import { useEffect, useState } from "react";
import "./userProduct.css";
import Nav from "../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
import Service from "../../../service/Service";
import Card from "../../../componanet/cardFut/Card";
import { useLocation } from "react-router-dom";

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
    const filtered = products.filter(
      (product) =>
        area === "" || product.product_area.toLowerCase() === area.toLowerCase()
    );
    setFilteredProducts(filtered);
  };

  const handleFilterByType = (type) => {
    const filtered = products.filter(
      (product) =>
        type === "" || product.type.toLowerCase() === type.toLowerCase()
    );
    setFilteredProducts(filtered);
  };

  const handleFilterByPrice = () => {
    const filtered = products.filter(
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

  return (
    <>
      <Nav style={style} pages={pages} />
      <div className="app">
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
              <option value="fruit">fruits</option>
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

        {filteredProducts.length > 0 ? (
          <div className="container">
            {filteredProducts.slice(0, num).map((e) => {
              const style = {
                backgroundColor: "rgb(221, 221, 221,0.35)",
                border: "1px solid #ccc",
                padding: "32px 40px",
              };
              return (
                <Card
                  key={e.product_id}
                  product_id={e.product_id}
                  img={e.product_img}
                  title={e.product_title}
                  price={e.product_price}
                  style={style}
                  product_area={e.product_area}
                  product_quantity={e.product_quantity}
                  supplier={e.supplier}
                  type={e.type}
                />
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
      <Footer />
    </>
  );
};

export default UserProduct;
