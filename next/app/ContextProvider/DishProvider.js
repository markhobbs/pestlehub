// DishProvider.tsx
"use client"
import React,{createContext,useState } from 'react';
export const DishContext = createContext("");

export const DishProvider = ({children}) => {
    const [dishes, setDishes] = useState([]);
    const [dashboard, setDashboard] = useState();
    const [inputs, setInputs] = useState();
    const [isStale, setStale] = useState(false);
    
    return <DishContext.Provider value={{ 
            dashboard,
            dishes,
            inputs,
            isStale,
            setDashboard,
            setDishes,
            setInputs,
            setStale
        }}>
        {children}
    </DishContext.Provider>
};