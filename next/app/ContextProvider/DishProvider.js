"use client"

import React, { createContext, useState } from 'react';

export const DishContext = createContext("");

export const DishProvider = ({children }) => {
    const [isDashboardDataStale, setDashboardDataStale] = useState(false);
    const [pendingDishes, setPendingDishes] = useState([]);
    const [inputs, setInputs] = useState();
    return <DishContext.Provider value={{ 
            inputs,
            isDashboardDataStale,
            pendingDishes,
            setInputs,
            setDashboardDataStale, 
            setPendingDishes,
        }}>
        {children}
    </DishContext.Provider>
};