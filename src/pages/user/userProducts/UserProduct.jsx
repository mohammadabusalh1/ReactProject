import { useEffect, useState } from "react";
import "./userProduct.css";
import ProductCard from "./ProductsCard";
import SearchIcon from "./search.svg";
import Nav from "../../../componanet/nav/Nav";
import Footer from "../../../componanet/footer/Footer";
// 2ae39f71
const API_URL = "http://www.omdbapi.com?apikey=2ae39f71";
const movie1 = {
  Title: "Fighting, Flying and Driving: The Stunts of Spiderman 3",
  Year: "2007",
  imdbID: "tt1132238",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg",
};

const style = {
  backgroundColor: "white",
};
let pages = ["Home", "Products", "About", "Contact"];

const UserProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchpr = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      const filteredProducts = data.Search.filter((movie) =>
        movie.Title.toLowerCase().includes(title.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts([]);
    }
  };

  useEffect(() => {
    searchpr("Spiderman");
  }, []);

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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i
            class="fa-solid fa-magnifying-glass"
            onClick={() => searchpr(searchTerm)}
          ></i>
        </div>
        {products.length > 0 ? (
          <div className="container">
            {products.map((movie) => (
              <ProductCard key={movie.imdbID} movie={movie} />
            ))}
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
