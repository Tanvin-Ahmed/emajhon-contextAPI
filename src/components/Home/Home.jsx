import React, { useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData";
import Cart from "../cart/Cart";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  const first10 = fakeData.slice(0, 10);
  const [products] = useState(first10);
  return (
    <div className="d-flex body">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.key} product={product} showButton={true}></Product>
        ))}
      </div>
      <div className="ml-2">
          <Cart><Link to="/review"><button className="btn btn-warning">Review Order</button></Link></Cart>
      </div>
    </div>
  );
};

export default Home;
