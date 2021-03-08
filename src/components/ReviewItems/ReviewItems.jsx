import React, { useContext } from "react";
import { cartContext } from "../../App";

const ReviewItems = ({ product }) => {
  const {handleRemoveProduct} = useContext(cartContext);
  console.log(handleRemoveProduct);
  const { name, category, price, shipping, stock, quantity, img } = product;
  console.log(quantity)
  return (
    <>
      <div className="product-body mx-2 mb-4">
        <div>
          <img className="mx-2" src={img} alt="" />
        </div>
        <div>
          <h4>{name}</h4>
          <h5>{category}</h5>
          <h5>Price: {price}</h5>
          <h6>Shipping: {shipping}</h6>
          <p>Stock: {stock}</p>
          <h6>Quantity: {quantity}</h6>
          <button className="btn btn-warning" onClick={() => handleRemoveProduct(product)}>Remove to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ReviewItems;
