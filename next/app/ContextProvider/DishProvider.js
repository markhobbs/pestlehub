"use client"

import React, { createContext, useState } from 'react';

export const DishContext = createContext("");

export const DishProvider = ({children }) => {
    const [isStale, setStale] = useState(false);
    const [dishes, setDishes] = useState([]);
    const [inputs, setInputs] = useState();
    return <DishContext.Provider value={{ 
            inputs,
            isStale,
            dishes,
            setInputs,
            setStale, 
            setDishes,
        }}>
        {children}
    </DishContext.Provider>
};