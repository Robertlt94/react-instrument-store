import React from 'react';
import "./Product.css";
import { Routes, Route, Link } from "react-router-dom";
import QuantityButton from '../QuantityButton/QuantityButton';

const Product = ({cart, products, addToCart}) => {

    return (
        products.map((product, index) => {
            console.log(index, product);
            return (
                <li className='product' key={index} >
                    <img src={product.image} />
                    <h1>{product.name}</h1>
                    <h2>{product.cost}</h2>
                    <QuantityButton />
                    <button className='add-to-fav-btn'>Favorite</button>
                    <button className='add-to-cart-btn'>Add To Cart</button>
                </li>
            )
        })
    );
};

export default Product;