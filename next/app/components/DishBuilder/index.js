// index.tsx
"use client"

import React,{useState, useCallback, useContext} from "react";
import {useRouter} from "next/navigation";
import {DishContext} from '@/ContextProvider/DishProvider';
import {ProfileContext} from '@/ContextProvider/ProfileProvider';
import StepOne from "@/components/DishBuilder/Step1";
import StepTwo from "@/components/DishBuilder/Step2";
import StepThree from "@/components/DishBuilder/Step3";
import {validateTextAreaLimit, validateNotEmpty, validateTimings} from "@/utils/validation"
import {capitalizeFirst} from "@/utils/shared";

/* MultiStepForm - DishBuilder */
const DishBuilder = () => {
  const router = useRouter();
  const {setDishes, setStale} = useContext(DishContext);
  const {profile} = useContext(ProfileContext);
  const username =  profile && profile.username || {};
  const [step, setStep] = useState(1);
  const next = useCallback(() => setStep((prev) => prev + 1), []);
  const back = useCallback(() => setStep((prev) => prev - 1), []);
  const [dish, setDish] = useState({ 
    id:'', 
    title:'', 
    ingredients:[], 
    methods:[], 
    time_prep: 0, 
    time_cook: 0, 
    publishedby: username
  });
  const errorsDefault = {
    time_cook: null, 
    time_prep: null, 
    title: "*Required",
    bodyError:"*Required",
    headingError: "*Required"
  }
  const [errors, setErrors] = useState(errorsDefault);

  /**
   * Handles Validation to the form inputs and updates the dish state accordingly.
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
  const handleValidation = useCallback((e) => {
    const { name, value } = e.target || {};
    let errorMsg = "";
    switch (name) {
      case "body":
        errorMsg = validateTextAreaLimit(value);
        setErrors((prevState) => ({ ...prevState, body: errorMsg }));
        break;
      case "heading":
        errorMsg = validateNotEmpty(value);
        setErrors((prevState) => ({ ...prevState, heading: errorMsg }));
        break;
      case "time_cook":
        errorMsg = validateTimings(value);
        setErrors((prevState) => ({ ...prevState, time_cook: errorMsg }));
        break;
      case "time_prep":
        errorMsg = validateTimings(value);
        setErrors((prevState) => ({ ...prevState, time_prep: errorMsg }));
        break;
      case "title":
        errorMsg = validateNotEmpty(value);
        setErrors((prevState) => ({ ...prevState, title: errorMsg }));
        break;
      default:
        break;
    }
  }, []);

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
    // Revalidate
    handleValidation(e);
  }, [handleValidation]);

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
      setDishes(prev => [...prev, { dish: clone }]);
      setStale(true);
      // Navigate only if submit button clicked not form
      if(e.type==="click") {
        router.push("/pages/dashboard");
      } 
    },
    [dish, router, setStale, setDishes]
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
            back={back}
            dish={dish}
            handleChange={handleChange}
            handleValidation={handleValidation}
            next={next}
            bodyError={errors.body} 
            headingError={errors.heading} />)}
        {step === 3 && (
          <StepThree
            back={back}
            dish={dish}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleValidation={handleValidation}
            timeCookError={errors.time_cook} 
            timePrepError={errors.time_prep}
            titleError={errors.title} />)}
      </form>
  );
};

DishBuilder.displayName = 'DishBuilder';
export default DishBuilder;