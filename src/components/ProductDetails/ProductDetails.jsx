import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Review = () => {
    const {productId} = useParams();
    const catchProduct = fakeData.find(product => product.key === productId);
    console.log(catchProduct)
    return (
        <div>
            <Product key={catchProduct.key} product = {catchProduct}showButton={false}></Product>
        </div>
    );
};

export default Review;