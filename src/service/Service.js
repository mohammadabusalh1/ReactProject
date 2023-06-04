import axios from "axios";

const PRODUCT_API_URL = "http://localhost:8090/api/v1/products";
const LOGIN_API_URL = "http://localhost:8090/api/v1/auth/login";
const Logout_API = "http://localhost:8090/api/v1/auth/logout";
const Products_API = "http://localhost:8090/api/v1/products";

const token = localStorage.getItem("accessToken");
const refresh = localStorage.getItem("refreshToken") + "";
console.log(refresh);

class ProductService {
  saveProduct(product) {
    return axios.post(PRODUCT_API_URL, product);
  }

  login(user) {
    return axios.post(LOGIN_API_URL, user);
  }

  logout() {
    return axios.post(Logout_API, refresh);
  }

  getAllProducts() {
    return axios.get(Products_API);
  }
}

export default new ProductService();
