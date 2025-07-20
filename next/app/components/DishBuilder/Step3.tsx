// step3.tsx
"use client"

import React, {ChangeEventHandler} from "react";
import Ingredients from "@/components/Ingredients";
import Methods from "@/components/Methods";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Label from "@/components/Label";
import StepNav from "@/components/DishBuilder/StepNav";
import dictionary from '@/data/dictionary.json';

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
  handleValidation: ChangeEventHandler<HTMLInputElement>;
  timeCookError?: string | undefined;
  timePrepError?: string | undefined;
  titleError?: string | undefined;
}

interface SaveDishProps {
  dish: Dish;
  handleSubmit: () => void;
  timeCookError?: string | undefined;
  timePrepError?: string | undefined;
}

const SaveDishButton = (props: SaveDishProps) => {
 const {dish, handleSubmit, timeCookError, timePrepError} = props || {};
  return <button 
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
};

const StepThree: React.FC<StepThreeProps> = React.memo(({ 
  back,
  dish, 
  handleChange, 
  handleSubmit,
  handleValidation,
  titleError,
  timeCookError,
  timePrepError
  }) => <>
    <StepNav back={back} title={dictionary.dbuild.nav.step3} />
    <div className="mb-2">
        <Label 
          text="Title" 
          element="title" />
        <Input 
          element="title" 
          onChange={handleChange}
          onBlur={handleValidation} 
          required={true} 
          text="Chicken Salad" />
        <p className="text-red-600 dark:text-red-400 text-xs italic">
        {titleError}
        </p>
    </div>
    <div className="mb-2">
      <Heading 
        Tag="h3" 
        title={dictionary.dbuild.ingredientsTitle} />
      <Ingredients dish={dish} />
    </div>
    <div className="mb-2">
      <Heading 
        Tag="h3" 
        title={dictionary.dbuild.methodsTitle} />
      <Methods dish={dish} />
    </div>
    <Heading 
      Tag="h3" 
      title={dictionary.dbuild.optionalTitle} />
    <div className="md:flex">
      <div className="mb-2 md:mr-2">
        <Label
          text={dictionary.dbuild.labels.timePrep}  
          element="time_prep" />
        <div className="relative">
          <Input 
            element="time_prep" 
            onChange={handleChange} 
            onBlur={handleValidation} 
            pattern="[0-9]*" 
            text="0" />
        </div>
        <p className="text-red-600 dark:text-red-400 text-xs italic">
          {timePrepError}
        </p>
      </div>
      <div className="mb-2">
        <Label 
          text={dictionary.dbuild.labels.timeCook} 
          element="time_cook" />
        <div className="relative"> 
          <Input 
            element="time_cook" 
            onChange={handleChange} 
            onBlur={handleValidation} 
            pattern="[0-9]*" 
            text="0" />
        </div>
        <p className="text-red-600 dark:text-red-400 text-xs italic">
          {timeCookError}
        </p>
      </div>
    </div>
    <SaveDishButton
      handleSubmit={handleSubmit}
      dish={dish}
      timePrepError={timePrepError}
      timeCookError={timeCookError} />
</>);

StepThree.displayName = 'StepThree';
export default StepThree;