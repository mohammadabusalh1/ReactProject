import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { RequireAuth } from "react-auth-kit";

import Home from "./pages/user/home/Home";
import Dashbord from "./pages/admin/dashbord/Dashbord";
import Order from "./pages/admin/orders/Order";
import Products from "./pages/admin/products/Products";
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
import UserProduct from "./pages/user/userProducts/UserProduct";
import UserProfile from "./pages/common/account/UserProfile";
import Service from "./service/Service";

function App() {
  const style = {
    backgroundColor: "white",
  };

  const pages = ["Home", "Products", "About", "Contact"];
  const adminPages = ["Home", "Products", "Orders", "About", "Contact"];

  const [roleId, setRoleId] = useState(0);

  useEffect(() => {
    setRoleId(localStorage.getItem("roleId"));
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            roleId == 1 ? <Home /> : roleId == 2 ? <Dashbord /> : <Login />
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route
          path="/Buy"
          element={
            roleId == 2 ? (
              <Dashbord />
            ) : (
              <RequireAuth loginPath="/login">
                <Buy />
              </RequireAuth>
            )
          }
        />
        <Route
          path="/account/:id"
          element={
            roleId == 2 ? (
              <Dashbord />
            ) : (
              <RequireAuth loginPath="/login">
                <UserProfile pages={pages} />
              </RequireAuth>
            )
          }
        />
        <Route
          path="/Cart"
          element={
            <RequireAuth loginPath="/login">
              <Cart />
            </RequireAuth>
          }
        />
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
        <Route
          path="/Products/:id"
          element={
            roleId == 2 ? (
              <Dashbord />
            ) : (
              <RequireAuth loginPath="/login">
                <ShowProduct />
              </RequireAuth>
            )
          }
        />
        <Route
          path="/admin"
          element={
            roleId == 1 ? (
              <Home />
            ) : (
              <RequireAuth loginPath="/login">
                <Dashbord />
              </RequireAuth>
            )
          }
        />
        <Route
          path="/admin/Home"
          element={
            roleId == 1 ? (
              <Home />
            ) : (
              <RequireAuth loginPath="/login">
                <Dashbord />
              </RequireAuth>
            )
          }
        />
        <Route
          path="/admin/Products"
          element={
            roleId == 1 ? (
              <Home />
            ) : (
              <RequireAuth loginPath="/login">
                <Products />
              </RequireAuth>
            )
          }
        />
        <Route
          path="/admin/Orders"
          element={
            roleId == 1 ? (
              <Home />
            ) : (
              <RequireAuth loginPath="/login">
                <Order />
              </RequireAuth>
            )
          }
        />
        <Route
          path="/admin/addProduct"
          element={
            roleId == 1 ? (
              <Home />
            ) : (
              <RequireAuth loginPath="/login">
                <AddProduct />
              </RequireAuth>
            )
          }
        />
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
    </div>
  );
}

export default App;
