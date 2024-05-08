import React, { useState } from 'react';
import './QuantityButton.css';

const QuantityButton = (inventory, startingValue) => {
    const [quantity, setQuantity] = useState(1);

    // const setQuantity

    return (
        <div className='quantity-container'>
            <button className='minus-btn' onClick={() => setQuantity(quantity-1)}>-</button>
            <input type="number" className="quantity-input" value={quantity} />
            <button className='plus-btn' onClick={() => setQuantity(quantity+1)}>+</button>
        </div>
    )
}

export default QuantityButton;