import React from 'react';
import './CartButton.css';

const CartButton = () => {

    const openCart = () => {
        let element = document.querySelector(".header-cart");
        element.style.transform = "translateX(0)";
    }

    return (
        <div id="cart-button" role='button' onClick={()=>openCart()}>
            <h1>Cart</h1>
        </div>
    )
}

export default CartButton;