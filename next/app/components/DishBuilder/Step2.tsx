// step2.tsx
"use client"

import React, { useState, useCallback} from "react";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Label from "@/components/Label";
import StepNav from "@/components/DishBuilder/StepNav";
import TextArea from "@/components/TextArea";
import dictionary from '@/data/dictionary.json';
import {capitalizeFirst} from "@/utils/shared";

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
interface StepTwoProps {
  dish: Dish;
  handleChange: (methods: Method[]) => void;
  next: () => void;
  back: () => void;
}
  
const StepTwo: React.FC<StepTwoProps> = React.memo(({ dish, handleChange, next, back }) => {
  const [heading, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  
  const addMethod = useCallback((heading: string) => {
      if (!heading.trim()) return;
      const updatedMethods: Method[] = [...dish.methods, { heading, body }];
      handleChange(updatedMethods);
      setTitle('');
      setBody('');
    },
    [dish.methods, handleChange, body]
  );
  
  const deleteMethod = useCallback((heading: string) => {
    const updatedMethods = dish.methods.filter(
      (method) => method.heading.toLowerCase() !== heading.toLowerCase()
    );
    handleChange(updatedMethods);
  }, [dish.methods, handleChange]);

  return (
    <>
      <StepNav back={back} next={next} title={dictionary.dbuild.nav.step2} />
      <div className="md:items-center mb-2">
          <div className="mb-1">
            <Label 
              text="Title" 
              element="title" />
            <Input 
              element="title" 
              onChange={(e) => setTitle(capitalizeFirst(e.target.value))} 
              text="Step 1 : Prepare the Paste" />
          </div>
        </div>
        <div>
          <div className="mb-1">
            <Label 
              text="Method" 
              element="body" />
            <TextArea 
              text="Press the pestle against the spices to grind them to a desired consistency." 
              element="body"
              onChange={(e) => setBody(capitalizeFirst(e.target.value))} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-2">
          <button
            className="cursor-pointer rounded-md bg-emerald-700 mt-4 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 disabled:bg-stone-500"
            type="button" 
            onClick={() => addMethod(heading)}
            disabled={!heading.trim() || !body.trim()}>
            <span>+ Add Method</span>
          </button>
      </div>
      {(dish.methods && dish.methods.length > 0) && <Heading Tag="h3" title="Current Methods" />}
      {(dish.methods && dish.methods.length > 0) && <ul className="list-disc mb-4 mt-4 pl-6" role="list">
        {dish.methods.map((method, index) => <li key={index}>
          <button onClick={() => deleteMethod(method.heading)}>
            <strong>{method.heading}</strong> : {method.body} 
          </button>
        </li>)}
      </ul>}
    </>
  );
});

StepTwo.displayName = 'StepTwo';
export default StepTwo;