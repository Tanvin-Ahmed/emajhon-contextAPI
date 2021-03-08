import React, { useContext, useState } from "react";
import { cartContext } from "../../App";
import Cart from "../cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";
import img from "../../images/giphy.gif";

const Review = () => {
  const { setCart, removeSameProductShowing } = useContext(cartContext);
  console.log(removeSameProductShowing);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const handleOrderPlaced = () => {
    setCart([]);
    setOrderPlaced(true);
  };
  let confirmation;
  if (orderPlaced) {
    confirmation = <img src={img} alt="" />;
  }

  return (
    <>
    <div className="d-flex body">
      <div className="products-container">
        {removeSameProductShowing.map((product) => {
          return (
            <>
              <ReviewItems key={product.key} product={product} confirmation={confirmation}></ReviewItems>
            </>
          );
        })}
        {confirmation}
      </div>
      <div className="ml-2">
        <Cart>
          <button className="btn btn-warning" onClick={handleOrderPlaced}>
            Place Order
          </button>
        </Cart>
      </div>
    </div>
    </>
  );
};

export default Review;
