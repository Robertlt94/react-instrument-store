import React, { useState } from 'react';
import './QuantityButton.css';

const QuantityButton = ({ quantity, addQuantity, minusQuantity, handleOnChange, setQuantity }) => {

    return (
        <div className='quantity-container'>
            {quantity === 0 ? <button className='minus-btn' value="-"disabled /> : <button className='minus-btn' onClick={() => minusQuantity()}>-</button> }
            <input inputMode="numeric" className="quantity-input" Value={quantity} min={0} onChange={(event)=>setQuantity(...quantity, )} />
            {/* <p>{quantity.value}</p> */}
            <button className='plus-btn' onClick={() => addQuantity()}>+</button>
        </div>
    )
}

export default QuantityButton;