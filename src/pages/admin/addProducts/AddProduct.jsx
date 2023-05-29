import React, { useState } from 'react';
import './addProduct.css';

const About = () => {
  const [products, setProducts] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create a new product object
    const newProduct = {
      product_id: e.target.elements.product_id.value,
      product_title: e.target.elements.product_title.value,
      product_price: e.target.elements.product_price.value,
      product_description: e.target.elements.product_description.value,
      product_img: e.target.elements.product_img.value,
      product_quantity: e.target.elements.product_quantity.value,
      product_area: e.target.elements.product_area.value,
      product_type: e.target.elements.product_type.value,
    };

    // Add the new product to the products array
    setProducts([...products, newProduct]);

    // Reset form fields
    e.target.reset();
  };

  return (
    <div className="about-container">
      <h2>About</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="product_id">Product ID:</label>
          <input type="text" id="product_id" name="product_id" required />
        </div>
        <div className="form-group">
          <label htmlFor="product_title">Product Title:</label>
          <input type="text" id="product_title" name="product_title" required />
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Product Price:</label>
          <input type="text" id="product_price" name="product_price" required />
        </div>
        <div className="form-group">
          <label htmlFor="product_description">Product Description:</label>
          <textarea id="product_description" name="product_description" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="product_img">Product Image URL:</label>
          <input type="text" id="product_img" name="product_img" required />
        </div>
        <div className="form-group">
          <label htmlFor="product_quantity">Product Quantity:</label>
          <input type="text" id="product_quantity" name="product_quantity" required />
        </div>
        <div className="form-group">
          <label htmlFor="product_area">Product Area:</label>
          <input type="text" id="product_area" name="product_area" required />
        </div>
        <div className="form-group">
          <label htmlFor="product_type">Product Type:</label>
          <input type="text" id="product_type" name="product_type" required />
        </div>
        <button type="submit">Add Product</button>
      </form>

      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            <h3>{product.product_title}</h3>
            <p>{product.product_description}</p>
            <img src={product.product_img} alt={product.product_title} />
            <p>Price: {product.product_price}</p>
            <p>Quantity: {product.product_quantity}</p>
            <p>Area: {product.product_area}</p>
            <p>Type: {product.product_type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

