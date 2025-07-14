// DishPallete.tsx
import React from "react";
import Heading from "@/components/Heading";
import ListLink from "@/components/Lists/ListLink";

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
}

const DishPallete: React.FC<DishPalleteProps> = ({items}) => {
  const {time_prep, time_cook = 0} = items.item;
  return <>
      {items.item && <ListLink items={items} />}
      {(time_prep || time_cook) && <Heading Tag="h3" title="Timings" />}
      {(time_prep || time_cook) && <ul className="mb-4 mt-4" role="list">
        {(time_prep && time_prep > 0 ) && <li>Preperation Time <strong>{items.item.time_prep}</strong> <sup>min(s)</sup></li>} 
        {(items.item.time_cook && time_cook > 0) && <li>Cooking Time <strong>{time_cook}</strong> <sup>min(s)</sup></li>}</ul>}
    </>
}

DishPallete.displayName = 'DishPallete';
export default DishPallete;
