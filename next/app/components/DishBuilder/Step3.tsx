// step3.tsx
"use client"

import React from "react";
import Heading from "@/components/Heading";
import Label from "@/components/Label";
import Input from "@/components/Input";
import StepNav from "./StepNav";
import CurrentIngredients from "../CurrentIngredients";
import CurrentMethods from "@/components/CurrentMethods";

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

interface Dish {
  title: string;
  ingredients: Ingredient[];
  methods: Method[];
  time_prep?: number;
  time_cook?: number;
  publishedby: string;
}

interface StepThreeProps {
  back?: () => void;
  dish: Dish;
  handleChange: () => void;
  handleSubmit: () => void;
  handleValidation: React.ChangeEventHandler<HTMLInputElement>
  timeCookError?: string | undefined;
  timePrepError?: string | undefined;
}

const StepThree: React.FC<StepThreeProps> = React.memo(({ 
  back,
  dish, 
  handleChange, 
  handleSubmit,
  handleValidation,
  timeCookError,
  timePrepError
  }) => <>
    <StepNav back={back} title="Step 3 of 3 : Review & Save" />
    <div className="mb-2">
        <Label text="Title" element="title" />
        <Input element="title" 
          onChange={handleChange} 
          required={true} 
          text="Chicken Salad" />
    </div>
    <div className="mb-2">
      <Heading Tag="h3" title="Ingredients" />
      <CurrentIngredients dish={dish} />
    </div>
    <div className="mb-2">
      <Heading Tag="h3" title="Methods" /> 
      <CurrentMethods dish={dish} />
    </div>
    <Heading Tag="h3" title="Optional" />
    <div className="md:flex md:items-center">
      <div className="mb-2 md:mr-2">
        <Label 
          text="Preperation Time (mins)" 
          element="time_prep" />
        <div className="relative">
          <Input 
            element="time_prep" 
            onChange={handleChange} 
            onBlur={handleValidation} 
            pattern="[0-9]*" 
            text="0" />
          <p className="text-red-600 dark:text-red-400 text-xs italic">
            {timePrepError}
          </p>
        </div>
      </div>
      <div className="mb-2">
        <Label 
          text="Cooking Time (mins)" 
          element="time_cook" />
        <div className="relative">
          <Input 
            element="time_cook" 
            onChange={handleChange} 
            onBlur={handleValidation} 
            pattern="[0-9]*" 
            text="0" />
          <p className="text-red-600 dark:text-red-400 text-xs italic">
            {timeCookError}
          </p>
        </div>
      </div>
    </div>
  <button 
    className="cursor-pointer rounded-md bg-emerald-700 mt-4 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 disabled:bg-stone-500" 
    onClick={handleSubmit}
    disabled={
      dish.title === '' 
      || dish.ingredients.length <= 0 
      || dish.methods.length === 0 
      || ((timePrepError && timePrepError.length > 0) && true) 
      || ((timeCookError && timeCookError.length > 0) && true) }>
    <span>Save</span>
  </button> 
  {(!dish.title || dish.ingredients.length <= 0 || dish.methods.length < 0) && 
    <em className="ml-2 text-sm text-red-700">
      <strong>1</strong> Ingredient, Method, and Title Required*
    </em> 
  }
</>);

StepThree.displayName = 'StepThree';
export default StepThree;