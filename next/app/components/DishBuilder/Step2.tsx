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
  back: () => void;
  bodyError?: string | undefined;
  dish: Dish;
  handleChange: (methods: Method[]) => void;
  handleValidation: () => void;
  headingError?: string | undefined;
  next: () => void;
}
  
const StepTwo: React.FC<StepTwoProps> = React.memo(({back, bodyError, dish, handleChange, handleValidation, headingError, next}) => {
  const [heading, setHeading] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const {methods} = dish || {};
  const {elements, labels, placeholders} = dictionary.dbuild;
  
  const addMethod = useCallback((heading: string) => {
      if (!heading.trim()) return;
      const updatedMethods: Method[] = [...methods, { heading, body }];
      handleChange(updatedMethods);
    },
    [methods, handleChange, body]
  );

  const handleHeading = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeading(capitalizeFirst(e.target.value));
  };

  const handleBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(capitalizeFirst(e.target.value));
  };
  
  const deleteMethod = useCallback((heading: string) => {
    const updatedMethods = methods.filter((method) => method.heading.toLowerCase() !== heading.toLowerCase());
    handleChange(updatedMethods);
  }, [methods, handleChange]);

  return (
    <>
      <StepNav back={back} next={next} title={dictionary.dbuild.nav.step2} />
      <div className="md:items-center mb-2">
        <div className="mb-1">
          <Label
            text={labels.heading}
            element={elements.heading} />
          <Input 
            element={elements.heading} 
            onBlur={handleValidation} 
            onKeyUp={handleValidation} 
            onChange={(e) => handleHeading(e)} 
            text={placeholders.heading} />
          <p className="text-red-600 dark:text-red-400 text-xs italic">
            {headingError}
          </p>
        </div>
      </div>
      <div>
        <div className="mb-1">
          <Label 
            text={labels.body}
            element={elements.body} />
          <TextArea 
            element={elements.body}
            onBlur={handleValidation}
            onKeyUp={handleValidation} 
            onChange={(e) => handleBody(e)}
            text={placeholders.body} />
           <p className="text-red-600 dark:text-red-400 text-xs italic">
            {bodyError}
          </p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <button
          className="cursor-pointer rounded-md bg-emerald-700 mt-4 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 disabled:bg-stone-500"
          type="button" 
          onClick={() => addMethod(heading)}
          disabled={!heading.trim() || !body.trim()}>
          <span>+ Add Method</span>
        </button>
      </div>

      {(methods && methods.length > 0) && <Heading Tag="h3" title={dictionary.dbuild.methodsTitle} />}
      {(methods && methods.length > 0) && <ul className="list-disc mb-4 mt-4 pl-6" role="list">
        {methods.map((method, index) => <li key={index}>
          <span onClick={() => deleteMethod(method.heading)}>
            <strong>{method.heading}</strong> : {method.body} 
          </span>
        </li>)}
      </ul>}
    </>
  );
});

StepTwo.displayName = 'StepTwo';
export default StepTwo;