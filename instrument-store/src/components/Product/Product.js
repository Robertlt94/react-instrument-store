import React, { useState } from 'react';
import "./Product.css";
import { Routes, Route, Link } from "react-router-dom";
import QuantityButton from '../QuantityButton/QuantityButton';

const Product = ({products, addToCart, addToFavorites, removeFromFavorites}) => {

    return (
        products.length === 0 ?
            <li>
                <h1>Nothing Available.</h1>
            </li>
            :
            products.map((product, index) => {
                return (
                    <li className='product' key={index} >
                        <img src={product.image} />
                        <h1>{product.name} - Only {product.inventory} Available</h1>
                        <h2>{product.cost}</h2>
                        {/* {quantity.map(q => q.id === product.id && {return(<QuantityButton cart={cart} quantity={q} product={product} addQuantity={addQuantity} minusQuantity={minusQuantity} handleQuantityChange={handleQuantityChange} />))} */}
                        {product.favorite ?
                            <button className='remove-from-fav-btn' onClick={()=>removeFromFavorites(product)} >Unfavorite</button>
                            :
                            <button className='add-to-fav-btn' onClick={()=>addToFavorites(product)} >Favorite</button>
                        }
                        <button className='add-to-cart-btn' onClick={()=>addToCart(product)} >Add To Cart</button>
                    </li>
                )
            })
    );
};

export default Product;