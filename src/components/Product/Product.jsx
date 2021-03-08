import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { cartContext } from '../../App';
import "./Product.css";
const Product = ({product, showButton}) => {
    const {handleAddProduct} = useContext(cartContext);
    const {name, price, img, stock,shipping, category, key} = product;
    return (
        <div className="product-body m-3 mb-5">
            <div className="mx-2 img">
                <img src={img} alt=""/>
            </div>
            <div>
                <Link to={"/ProductDetails/" + key}><h4>{name}</h4></Link>
                <h5>{category}</h5>
                <h5>Price: {price}</h5>
                <h6>Shipping: {shipping}</h6>
                <p>Stock: {stock}</p>
                 {
                     showButton && <button className="btn btn-warning" onClick={()=> handleAddProduct(product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                 }
            </div>
        </div>
    );
};

export default Product;