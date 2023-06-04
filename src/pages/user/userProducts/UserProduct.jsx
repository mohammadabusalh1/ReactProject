import { useEffect, useState } from "react";
import "./userProduct.css";
import Nav from "../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
import Service from "../../../service/Service";
import Card from "../../../componanet/cardFut/Card";

const style = {
  backgroundColor: "white",
};
let pages = ["Home", "Products", "About", "Contact"];

const UserProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    Service.getAllProducts()
      .then((response) => {
        setProducts(() => response.data);
        setFilteredProducts(() => response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const search = (e) => {
    setSearchTerm(() => e);
    if (searchTerm != "") {
      filteredProducts = products.filter((e) => {
        return e.product_title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredProducts(() => filteredProducts);
    } else {
      setFilteredProducts(() => products);
    }
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
            onChange={(e) => search(e.target.value)}
          />
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={search(searchTerm)}
          ></i>
        </div>
        {products.length > 0 ? (
          <div className="container">
            {filteredProducts.map((e) => {
              const style = {
                backgroundColor: "rgb(221, 221, 221,0.35)",
                border: "1px solid #ccc",
                padding: "32px 40px",
              };
              return (
                <Card
                  key={e.product_id}
                  id={e.product_id}
                  img={e.product_img}
                  title={e.product_title}
                  price={e.product_price}
                  style={style}
                />
              );
            })}
          </div>
        ) : (
          <div className="empty">
            <h2>No Products Found</h2>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default UserProduct;
