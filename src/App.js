import "./App.css";
import Home from "./pages/user/home/Home";
import Dashbord from "./pages/admin/dashbord/Dashbord";
import Order from "./pages/admin/orders/Order";
import Products from "./pages/admin/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowProduct from "./pages/user/showProduct/ShowProduct";
import Cart from "./pages/user/cart/Cart";
import Account from "./componanet/account/Account";
import About from "./componanet/aboutUs/About";
import Nav from "./componanet/nav/Nav.jsx";
import Footer from "./componanet/footer/Footer";
import AddProduct from './pages/admin/addProducts/AddProduct.jsx';
import Buy from "./pages/user/buying/Buy.jsx";
function App() {
  const style = {
    backgroundColor: "white",
  };
  let pages = ["Home", "Products", "About", "Contact"];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Buy />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route
            path="/about"
            element={
              <>
                <Nav style={style} pages={pages} />
                <About />
                <Footer />
              </>
            }
          />
          <Route path="/Products/1" element={<ShowProduct />} />
          <Route path="/admin" element={<Dashbord />} />
          <Route path="/admin/Home" element={<Dashbord />} />
          <Route path="/admin/Products" element={<Products />} />
          <Route path="/admin/Orders" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
