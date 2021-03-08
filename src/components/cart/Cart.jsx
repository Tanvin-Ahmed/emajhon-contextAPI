import React, { useContext } from 'react';
import { cartContext } from '../../App';

const Cart = ({children}) => {
    const {removeSameProductShowing} = useContext(cartContext);


    let total = removeSameProductShowing.reduce((total, removeSameProductShowing) => total + removeSameProductShowing.price * removeSameProductShowing.quantity,0);
    total= Number(total.toFixed(2));
    const tax = Number((total * 0.1).toFixed(2));
    const grandTotal = Number((total + tax).toFixed(2));

    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Item: {removeSameProductShowing.length}</h4>
            <h6>Price: {total}</h6>
            <h6>Tax: {tax}</h6>
            <h5>Total Price: {grandTotal}</h5>
            { children }
        </div>
    );
};

export default Cart;