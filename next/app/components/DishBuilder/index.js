// index.tsx
"use client"

import React, { useState, useCallback, useContext } from "react";
import { useRouter } from "next/navigation";
import { DishContext } from '@/ContextProvider/DishProvider';
import { ProfileContext } from '@/ContextProvider/ProfileProvider';
import { capitalizeFirst } from "@/utils/shared";
import StepOne from "./Step1";
import StepTwo from "./Step2";
import StepThree from "./Step3";

/* MultiStepForm - DishBuilder */
const DishBuilder = () => {
  const router = useRouter();
  const { setPendingDishes, setDashboardDataStale } = useContext(DishContext);
  const { profile } = useContext(ProfileContext);
  const username =  profile && profile.username;
  const [step, setStep] = useState(1);
  const [dish, setDish] = useState({ id:'', title:'', ingredients:[], methods:[], time_prep: 0, time_cook: 0, publishedby: username});
  const next = useCallback(() => setStep((prev) => prev + 1), []);
  const back = useCallback(() => setStep((prev) => prev - 1), []);
  
  /**
   * Handles changes to the form inputs and updates the dish state accordingly.
   * 
   * @param e - The change event or an array of ingredients or methods.
   * 
   * If `e` is an array:
   * - If the array contains ingredients (determined by checking if the first element has a `quantity` property), 
   *   updates the `ingredients` field of the dish state.
   * - Otherwise, updates the `methods` field of the dish state.
   * 
   * If `e` is a change event:
   * - Extracts the `name` and `value` from the event target and updates the corresponding field in the dish state.
   */
  const handleChange = useCallback((e) => {
    if (Array.isArray(e)) {
      if (e.length > 0 && 'quantity' in e[0]) {
        setDish((prevDish) => ({...prevDish, ingredients: e }));
      } else {
        setDish((prevDish) => ({...prevDish, methods: e }));
      }
    } else if ('target' in e) {
      const { name, value } = e.target;
      setDish((prevDish) => ({...prevDish, [name]: capitalizeFirst(value) }));
    }
  }, []);

  /**
   * Handles the form submission event.
   *
   * @param {React.FormEvent} e - The form event object.
   * @returns {void}
   *
   * This function prevents the default form submission behavior,
   * creates a clone of the current dish object, updates the pending dishes state
   * with the new dish, and navigates to the dashboard page.
   */
  
  const handleSubmit = useCallback((e) => {
      e.preventDefault();
      // Clone the current dish to avoid mutating the original object
      const clone = { ...dish };
      // Update the pending dishes list immutably
      // REDIRECTING ON REMOVING PILL
      setPendingDishes(prev => [...prev, { dish: clone }]);
      setDashboardDataStale(true);

      // Navigate to the dashboard page
      router.push("/pages/dashboard");
      
    },
    [dish, setPendingDishes, router]
  );

  return (
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <StepOne 
            dish={dish} 
            handleChange={handleChange} 
            next={next} />)}
        {step === 2 && (
          <StepTwo
            dish={ dish }
            handleChange={ handleChange }
            back={ back }
            next={ next } />)}
        {step === 3 && (
          <StepThree
            dish={dish}
            handleChange={handleChange}
            back={back}
            handleSubmit={handleSubmit} 
          />)}
      </form>
  );
};

DishBuilder.displayName = 'DishBuilder';
export default DishBuilder;