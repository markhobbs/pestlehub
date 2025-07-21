// List/Pending.js
import React from "react";
import Heading from "@/components/Heading"
import config from '@/data/config.json';

interface PendingProps {
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

const Pending: React.FC<PendingProps> = ({ dishes }) => {
  return Array.isArray(dishes) && dishes.length > 0 && dishes.length <= config.maxDish && <>
    <Heading Tag="h3" title="Your Dishes" />
    <ul className="list-disc mb-4 mt-4 pl-6" role="list">
      {dishes.map((dishes, index) => <li key={index}>
        {dishes.dish.title}
      </li>)}
    </ul>
    {dishes.length >= 5 && <em>5 Dishes Max</em>}
</>}

Pending.displayName = 'Pending';
export default Pending;
