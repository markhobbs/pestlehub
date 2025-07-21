// DishProvider.tsx
"use client"
import React,{createContext,useState } from 'react';
export const DishContext = createContext("");

export const DishProvider = ({children}) => {
    const [dishes, setDishes] = useState([]);
    const [dashboard, setDashboard] = useState();
    const [inputs, setInputs] = useState();
    const [isStale, setStale] = useState(false);
    const [offset, setOffset] = useState(0);
    
    return <DishContext.Provider value={{ 
            dashboard,
            dishes,
            offset,
            inputs,
            isStale,
            setDashboard,
            setDishes,
            setInputs,
            setOffset,
            setStale   
        }}>
        {children}
    </DishContext.Provider>
};