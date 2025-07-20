// step1.tsx
"use client"

import React, { useCallback, ChangeEvent} from "react";
import Heading from "@/components/Heading";
import Search from "@/components/DishBuilder/Search"
import StepNav from "@/components/DishBuilder/StepNav";
import dictionary from '@/data/dictionary.json';
import states from '@/data/states.json'
import units from '@/data/units.json'

interface Dish {
    title: string;
    ingredients: Ingredients[];
    methods: Method[];
    time_prep?: number;
    time_cook?: number;
    publishedby: string;
}
interface Ingredients {
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
    handleChange: (e: ChangeEvent<HTMLInputElement> | Ingredients[] | Method[]) => void;
    next?: () => void;
    back?: () => void;
}

const Dish: React.FC<StepOneProps> = () => {
    return "true";
};
  
const StepOne: React.FC<StepOneProps> = React.memo(({ dish, handleChange, next }) => {
    const { ingredients } = dish || {};
    
    const addIngredient = useCallback((
        ingredientName: string, 
        quantity: number, 
        unit_ID: number, 
        state_ID: number) => {

        if (!ingredientName.trim()) return;

        const ingredientExists = ingredients.find((ingredient) => ingredient.name.toLowerCase() === ingredientName.toLowerCase());
        let ingredientsBuilder: Ingredients[];
        
        if (ingredientExists) {
            // If ingredient exists update quantity and state only 
            ingredientsBuilder = ingredients.map((ingredient) =>
                ingredient.name.toLowerCase() === ingredientName.toLowerCase() ? { 
                    ...ingredient, 
                    quantity: ingredient.quantity + 1, 
                    unit_ID: unit_ID || ingredient.unit_ID,
                    state_ID: state_ID || ingredient.state_ID
                } : ingredient);
        } else {
            // Else append the ingredient to dish ingredients 
            const ingredientNew: Ingredients = { 
                name: ingredientName, 
                quantity: quantity, 
                unit_ID: unit_ID,
                state_ID: state_ID};
            ingredientsBuilder = [...ingredients, ingredientNew];
        }
        handleChange(ingredientsBuilder);
        
    }, [ingredients, handleChange]);

    const deleteIngredient = useCallback((ingredientName: string) => {
        // If ingredient exists delete from dish ingredients.
        const ingredientDelete = ingredients.filter((ingredient) => ingredient.name.toLowerCase() !== ingredientName.toLowerCase());
        if (ingredientDelete.length > 0 ) {
            handleChange(ingredientDelete);
        }
    }, [dish, handleChange]);

    const SelectedIngredients = ({ ingredients }: any) => {
      return Array.isArray(ingredients) && ingredients.length >= 1 && <>
            <Heading 
                Tag="h3"
                title={dictionary.dbuild.ingredientsTitle} />
            <ul>
                {ingredients.map((ingredient, index) => {
                    const {name, state_ID, unit_ID, quantity} = ingredient;
                    return <li 
                        key={index} 
                        className="inline-flex">
                        <button 
                            className="cursor-pointer bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 mb-1 mr-1 rounded-full" 
                            onClick={() => deleteIngredient(name)}><sup>{quantity}</sup>{units
                            .filter((unit) => 
                                Number(unit.index) === unit_ID && Number(unit.index) !== -1)
                            .map((unit, i) => 
                                <sup key={i}>{unit.code}</sup>)
                            } {name} {states.filter((state) => 
                                Number(state.index) === state_ID && Number(state.index) !== -1).map((state) => 
                                <sup key={state.index}>{state.name}</sup> )} x 
                    </button>
                </li>
                })}
            </ul>
        </>
      };
    
    return <>
        <StepNav next={next} title={dictionary.dbuild.nav.step1} />
        <Search onAddIngredient={addIngredient} />
        <SelectedIngredients ingredients={ingredients} />
    </>});

StepOne.displayName = 'StepOne';
export default StepOne;