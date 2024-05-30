import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {

    const closeCart = () => {
        let element = document.querySelector(".header-cart");
        element.style.transform = "translateX(30vw)";
    }

    return (
        <div className='header-cart'>
            <div className='cart-header'>
                <p className='close-cart-btn' role="button" onClick={()=>closeCart()}>Close X</p>
                <h1>Cart</h1>
            </div>
            {cart.map((item, index) => (
                <div className="cart-item" key={index} >
                    <img src={item.image} />
                    <h2>{item.name}</h2>
                    <h3>{item.cost}</h3>
                    <button className='remove-from-cart-btn' onClick={()=>removeFromCart(index)} >Remove</button>
                </div>
            ))}
        </div>
    )
};

export default Cart;