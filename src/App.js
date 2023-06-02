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
import AddProduct from "./pages/admin/addProducts/AddProduct.jsx";
import Buy from "./pages/user/buying/Buy.jsx";
import { AdminAbout } from "./pages/admin/adminAbout/AdminAbout";
import { Contact } from "./pages/common/contact/Contact";
import Login from "./pages/common/login/Login";
import UserProduct from './pages/user/userProducts/UserProduct'
function App() {
  const style = {
    backgroundColor: "white",
  };
  let pages = ["Home", "Products", "About", "Contact"];
  let adminPages = ["Home", "Products", "Orders", "About", "Contact"];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserProduct />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/products" element={<UserProduct />} />
          <Route path="/contact" element={<Contact pages={pages} />} />
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
          <Route path="/admin/addProduct" element={<AddProduct />} />
          <Route path="/admin/contact" element={<Contact pages={adminPages} />} />
          <Route
            path="/admin/about"
            element={
              <>
                <Nav style={style} pages={adminPages} />
                <AdminAbout />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
