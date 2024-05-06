import React, { createContext, useState, useContext } from 'react';

const ShoppingCartContext = createContext();

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState([]);

    const addToCart = ({shoppingCart, item}) => {
        setShoppingCart([...shoppingCart, item]);
    };

    return (
        <ShoppingCartContext.Provider value={{shoppingCart, addToCart}} >
            {children}
        </ShoppingCartContext.Provider>
    );
};