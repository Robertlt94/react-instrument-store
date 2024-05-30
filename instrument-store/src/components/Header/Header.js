import React from 'react';
import "./Header.css";
import Branding from '../Branding/Branding';
import CartButton from '../CartButton/CartButton';
import Cart from '../Cart/Cart';

const Header = ({cart, message, removeFromCart}) => {

    return (
        <div className='header-nav'>
            <Branding />
            <h3 className='user-feedback'>{message}</h3>
            <CartButton />
            <Cart cart={cart} removeFromCart={removeFromCart}/>
        </div>
    )
}

export default Header;