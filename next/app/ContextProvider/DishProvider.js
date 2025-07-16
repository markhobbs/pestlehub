"use client"

import React, { createContext, useState } from 'react';

export const DishContext = createContext("");

export const DishProvider = ({children }) => {
    const [isStale, setStale] = useState(false);
    const [Dishes, setDishes] = useState([]);
    const [inputs, setInputs] = useState();
    return <DishContext.Provider value={{ 
            inputs,
            isStale,
            Dishes,
            setInputs,
            setStale, 
            setDishes,
        }}>
        {children}
    </DishContext.Provider>
};