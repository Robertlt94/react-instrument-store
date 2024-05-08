import React from 'react';
import "./ProductList.css";
import { Routes, Route, Link } from "react-router-dom";
import Product from '../Product/Product';

const ProductList = ({cart, products, addToCart}) => {

    return (
        <div className='product-list'>
            <ul>
                <Product cart={cart} products={products} addToCart={addToCart} />
            </ul>
        </div>
    );
};

export default ProductList;