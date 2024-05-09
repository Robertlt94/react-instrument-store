import React from 'react';
import "./ProductList.css";
import { Routes, Route, Link } from "react-router-dom";
import Product from '../Product/Product';

const ProductList = ({ cart, products, addToCart, quantity, addQuantity, minusQuantity }) => {

    return (
        <div className='product-list'>
            {/* {console.log(quantity)} */}
            <ul>
                <Product cart={cart} products={products} addToCart={addToCart} quantity={quantity} addQuantity={addQuantity} minusQuantity={minusQuantity} />
            </ul>
        </div>
    );
};

export default ProductList;