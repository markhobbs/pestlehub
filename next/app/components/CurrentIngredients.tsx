// CurrentIngredients.tsx
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
    return <ul className="list-disc mb-4 mt-4 pl-6" role="list">
        {dish.ingredients.map((ingredient, index) => <li key={index}>
            <span>
                <sup>{ingredient.quantity >= 2 && ingredient.quantity} {units.filter((unit) => Number(unit.index) === ingredient.unit_ID && Number(unit.index) !== -1)
                    .map((unit, key) => <span key={key}>{unit.code}</span>)}</sup>
            </span>      
            <span>{ingredient.name}</span>
            <span>
                <sup>{states.filter((state) => Number(state.index) === ingredient.state_ID && Number(state.index) !== -1)
                    .map((state) => (<span key={state.index}>{state.name}</span>))}</sup>
            </span>
        </li>)}
    </ul>
};

const CurrentIngredients = ({ dish } : { dish: Dish }) => {
    return <div>{dish.ingredients && dish.ingredients.length 
        ? <ListIngredients dish={dish} /> 
        : <NoIngredients />}
    </div>
};

CurrentIngredients.displayName = 'CurrentIngredients';
export default CurrentIngredients;