// Ingredients.tsx
import React from "react";
import states from '@/data/states.json'
import units from '@/data/units.json'
import {NoIngredients} from "@/components/Snippets";

interface Ingredient {
    quantity: number;
    name: string;
    unit_ID?: number;
    state_ID?: number;
}

interface Dish {
    ingredients: Ingredient[];
}

const ListIngredients = ({ dish } : { dish: Dish }) => {
    const ingredients = dish.ingredients || {};
    return Array.isArray(ingredients) &&  ingredients.length && <ul className="list-disc mb-4 mt-4 pl-6" role="list">
        {ingredients.map((ingredient, index) => {
            const { name, state_ID, quantity, unit_ID } = ingredient;
            return <li key={index}>
            <span>
                <sup>
                    {quantity >= 2 && quantity} {units.filter((unit) => 
                        Number(unit.index) === unit_ID && Number(unit.index) !== -1)
                        .map((unit, key) => <span key={key}>{unit.code}</span>)}
                </sup>
            </span>      
            <span>
                {name}
            </span>
            <span>
                <sup>
                    {states.filter((state) => 
                        Number(state.index) === state_ID && Number(state.index) !== -1)
                        .map((state) => (<span key={state.index}>{state.name}</span>))}
                </sup>
            </span>
        </li>})}
    </ul>
};

const Ingredients = ({ dish } : { dish: Dish }) => {
    const ingredients = dish.ingredients;
    return <div>{ingredients && ingredients.length 
        ? <ListIngredients dish={dish} /> 
        : <NoIngredients />}
    </div>
};

Ingredients.displayName = 'Ingredients';
export default Ingredients;