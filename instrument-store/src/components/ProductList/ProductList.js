import React from 'react';
import "./ProductList.css";
import { Routes, Route, Link } from "react-router-dom";
import Product from '../Product/Product';

const ProductList = ({ products, addToCart, addToFavorites, removeFromFavorites, addQuantity, minusQuantity, handleOnChange }) => {

    return (
        <div className='product-list'>
            <ul>
                <Product products={products} addToCart={addToCart} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} addQuantity={addQuantity} minusQuantity={minusQuantity} handleOnChange={handleOnChange} />
            </ul>
        </div>
    );
};

export default ProductList;