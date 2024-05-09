import React, { useState } from 'react';
import './QuantityButton.css';

const QuantityButton = ( product, quantity, addQuantity, minusQuantity ) => {

    return (
        <div className='quantity-container'>
            {console.log(quantity)}
            <button className='minus-btn' onClick={minusQuantity}>-</button>
            <input type="type" inputMode="numeric" className="quantity-input" defaultValue={quantity}/>
            <button className='plus-btn' onClick={addQuantity}>+</button>
        </div>
    )
}

export default QuantityButton;