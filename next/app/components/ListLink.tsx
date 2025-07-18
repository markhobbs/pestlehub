// List/ListLink.js

import React from "react";
import Heading from "@/components/Heading";
import {convertAmountFriendly} from "@/utils/shared";
import dictionary from '@/data/dictionary.json';


interface ListLinkProps {
  items: {
    item: {
      title: string; 
      category: string; 
      flavours: string; 
      origins: string; 
      color: string;
      ingredients?: Ingredients[];
      time_prep?: number | undefined; 
      time_cook?: number | undefined; 
    };
  } 
}
interface Ingredients {
  index: string;
  item: string;
}

const ListLink = ({items} : ListLinkProps) => {
  function ListLinkItem({item}: any) {
    return <li> 
    <span>
      <sup>
        {item.amount > 0 && convertAmountFriendly(item.amount)}
        {item.unit !== "None" && <a 
          className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
          href="/pages/measure">
          {item.unit}
        </a>}
      </sup> <strong>{item.ingredient}</strong> <sub>{item.state !== "None" && item.state}</sub>
    </span>
  </li>}

  return items && items.item && <>
        <Heading Tag="h3" title={dictionary.config.headingdDishIngredients} />
        {items.item.ingredients && <ul className="list-disc mb-4 mt-4 pl-6" role="list">
          {items.item.ingredients.map((item, index) => <ListLinkItem key={index} item={item} /> )}
        </ul>}
  </>};

ListLink.displayName = 'ListLink';
export default ListLink;