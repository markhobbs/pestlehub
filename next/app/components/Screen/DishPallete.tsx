// DishPallete.tsx
import React from "react";
import Heading from "@/components/Heading";
import Ingredients from "@/components/Screen/Ingredients";

interface DishPalleteProps {
  items: {
    item: {
      title: string; 
      category: string; 
      flavours: string; 
      origins: string; 
      color: string;
      time_prep?: number | undefined; 
      time_cook?: number | undefined; 
    };
  };
};

const Lists: React.FC<DishPalleteProps> = ({ items }) => {
  const {item} = items || {};
  const {time_prep, time_cook} = item || {};
  
  return <section>
    {item && 
      <Ingredients items={items} />}

    {(time_prep || time_cook) && 
      <Heading Tag="h3" title="Timings" />}

    {(time_prep || time_cook) && 
      <ul className="mb-4 mt-4" role="list">
        {(time_prep && time_prep > 0) && 
          <li>Preperation Time <strong>{time_prep}</strong> <sup>min(s)</sup></li>
        } 
        {(time_cook && time_cook > 0) && 
          <li>Cooking Time <strong>{time_cook}</strong> <sup>min(s)</sup></li>}
      </ul>
    }
  </section>
};

const DishPallete: React.FC<DishPalleteProps> = ({items}) => {
  return <Lists items={items} />
};

DishPallete.displayName = 'DishPallete';
export default DishPallete;
