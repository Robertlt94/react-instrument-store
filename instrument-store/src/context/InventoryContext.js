import React, { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();

export const useInventory = () => useContext(InventoryContext);

export const InventoryProvider = ({ children }) => {
    const [inventory, setInventory] = useState([]);
    const [headerImage, setHeaderImage] = useState([]);

    setInventory(
        [ 
            { "id": 1, "category": "Guitar", "name": "Fender Stratocaster" }, 
            { "id": 2, "category": "Keyboard", "name": "Yamaha P-125" }, 
            { "id": 3, "category": "Drum", "name": "DW Collector's Series" } 
        ]
    );

    // setCategory(
    //     [
    //         {}
    //     ]
    // )

    return (
        <InventoryContext.Provider value={{inventory}}>
            {children}
        </InventoryContext.Provider>
    );
};