// List/ListCreations.js
import React from "react";

interface ListPendingProps {
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

const ListPending: React.FC<ListPendingProps> = ({ dishes }) => {
  return Array.isArray(dishes) && dishes.length > 0 && <ul className="mb-4 mt-4" role="list">
    {dishes.map((dish, index) => <li key={index}>
      {dish.title}
    </li>)}
  </ul>
}

ListPending.displayName = 'ListPending';
export default ListPending;
