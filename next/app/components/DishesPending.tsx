// List/ListCreations.js
import React from "react";
import Heading from "@/components/Heading"

interface DishesPendingProps {
  dishes: {
    dish: Dish[];
  }
}

interface Dish {
  title?: string;
  ingredients: Ingredient[];
  methods: Method[];  
  time_prep?: number;
  time_cook?: number;
  publishedby: string;
}

interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

interface Method {
  heading: string;
  body: string;
}

const DishesPending: React.FC<DishesPendingProps> = ({ dishes }) => {
  return Array.isArray(dishes) && dishes.length > 0 && <>
  <Heading Tag="h3" title="Your Dishes" />
  <ul className="list-disc mb-4 mt-4 pl-6" role="list">
    {dishes.map((dishes, index) => <li key={index}>
      {dishes.dish.title}
    </li>)}
  </ul>
</>}

DishesPending.displayName = 'DishesPending';
export default DishesPending;
