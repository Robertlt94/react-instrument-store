import React from 'react';
import "./Header.css";
import Branding from '../Branding/Branding';
import CartButton from '../CartButton/CartButton';
import Cart from '../Cart/Cart';

const Header = ({cart, removeFromCart}) => {

    return (
        <div className='header-nav'>
            <Branding />
            <CartButton />
            <Cart cart={cart} removeFromCart={removeFromCart}/>
        </div>
    )
}

export default Header;