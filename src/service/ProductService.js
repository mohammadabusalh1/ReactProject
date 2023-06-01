import axios from "axios";

const PRODUCT_API_URL = "http://localhost:8090/api/v1/products";

class ProductService{
    
    saveProduct(product){
        return axios.post(PRODUCT_API_URL, product);
    }
}

export default new ProductService();