// SearchList.tsx
"use client"

import React, {useState, useRef, ChangeEvent} from "react";
import Link from "next/link";
import Label from "@/components/Label";
import Input from "@/components/Input";
import spices from "@/data/spices.json";


const SearchList = () => {
  const searchRef = useRef(null); // console.log(searchRef.current);
  const [filter, setFilter] = useState('');

  const changeFilterName = ( e: ChangeEvent<HTMLInputElement> ) => {
    if (e.target) {
      const value = e.target.value;
      setFilter(value.toLowerCase());
    }
  }

  return <div className="w-full max-w-xs">
    <div className="md:flex md:items-center mb-2">
      <div className="md:w-1/3">
        <Label 
          element="search" 
          text="Spice" />
      </div>
      <div className="md:w-2/3">
        <Input 
          element="search" 
          onChange={changeFilterName} 
          ref={searchRef}
          text="Search" />
      </div>
    </div>
    <div className="md:flex md:items-center mb-2">
      {(filter.length > 0 && spices && spices.length) && <ul>
        {spices.filter(spice => (spice.title).toLowerCase().startsWith(filter)).map(filtered => (
        <li key={filtered.pID}>
          <Link
            className="text-blue-700 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
            href={{pathname:`/pages/dish/${filtered.pID}`}}>
            {filtered.title}
          </Link>
        </li>))}
      </ul>}
    </div>
  </div>
}

SearchList.displayName = 'SearchList';
export default SearchList;


