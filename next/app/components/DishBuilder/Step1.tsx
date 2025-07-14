// step1.tsx
"use client"

import React, { useCallback } from "react";
import Heading from "@/components/Heading";
import states from '@/data/states.json'
import units from '@/data/units.json'
import Search from "./Search"
import StepNav from "./StepNav";

interface Dish {
    title: string;
    ingredients: Ingredient[];
    methods: Method[];
    time_prep?: number;
    time_cook?: number;
    publishedby: string;
}
interface Ingredient {
    name: string;
    quantity: number;
    unit_ID?: number;
    state_ID?: number;
}
interface Method {
    heading: string;
    body: string;
}
interface StepOneProps {
    dish: Dish;
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | Ingredient[] | Method[]) => void;
    next?: () => void;
    back?: () => void;
}

const Dish: React.FC<StepOneProps> = () => {
    return "true";
};
  
const StepOne: React.FC<StepOneProps> = React.memo(({ dish, handleChange, next }) => {
    const addIngredient = useCallback((
        ingredientName: string, 
        quantity: number, 
        unit_ID: number, 
        state_ID: number) => {

        if (!ingredientName.trim()) return;
        
        const existingIngredient = dish.ingredients.find((ingredient) => ingredient.name.toLowerCase() === ingredientName.toLowerCase());
        let updatedIngredients: Ingredient[];
        if (existingIngredient) {
            updatedIngredients = dish.ingredients.map((ingredient) =>
                ingredient.name.toLowerCase() === ingredientName.toLowerCase() ? { 
                    ...ingredient, 
                    quantity: ingredient.quantity + 1, 
                    unit_ID: unit_ID || ingredient.unit_ID,
                    state_ID: state_ID || ingredient.state_ID
                } : ingredient);
        } else {
            const newIngredient: Ingredient = { 
                name: ingredientName, 
                quantity: quantity, 
                unit_ID: unit_ID,
                state_ID: state_ID};
            updatedIngredients = [...dish.ingredients, newIngredient];
        }
        handleChange(updatedIngredients);
    }, [dish.ingredients, handleChange]);

    const deleteIngredient = useCallback((ingredientName: string) => {
        const updatedIngredients = dish.ingredients.filter((ingredient) => ingredient.name.toLowerCase() !== ingredientName.toLowerCase());
        handleChange(updatedIngredients);
    }, [dish.ingredients, handleChange]);

    return <>
        <StepNav next={next} title="Step 1 of 3 : Ingredients" />
        <Search onAddIngredient={addIngredient} />
        {dish.ingredients.length > 0 && <Heading Tag="h3" title="Current Ingredients" />}
        {dish.ingredients && <ul>
            {dish.ingredients.map((ingredient, index) => <li key={index} className="inline-flex">
                <button 
                    className="cursor-pointer bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 mb-1 mr-1 rounded-full" 
                    onClick={() => deleteIngredient(ingredient.name)}>- <sup>{ingredient.quantity}</sup>{units
                    .filter((unit) => 
                        Number(unit.index) === ingredient.unit_ID 
                        && Number(unit.index) !== -1)
                    .map((unit, i) => <sup key={i}>{unit.code}</sup>)
                    } {ingredient.name} {states.filter((state) => 
                    Number(state.index) === ingredient.state_ID
                    && Number(state.index) !== -1).map((state) => <sup key={state.index}>{state.name}</sup>)}
                </button>
            </li>)}
        </ul>}
    </>});

StepOne.displayName = 'StepOne';
export default StepOne;