// Search.tsx 

import React, {useState} from 'react';
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Label from "@/components/Label";
import ingredients from '@/data/ingredients.json'
import states from '@/data/states.json'
import units from '@/data/units.json'

interface SearchProps {
  onAddIngredient: (
    ingredientName: string,
    quantity: number,
    unit_ID: number,
    state_ID: number
  ) => void;
}

const Search: React.FC<SearchProps> = ({ onAddIngredient }) => {
  const [query, setQuery] = useState<string>();
  const [selectedUnit, setSelectedUnit] = useState<number>(0);
  const [selectedState, setSelectedState] = useState<number>(0);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>, ingredient: string) => {
    e.preventDefault();
    const quantity = 1;
    onAddIngredient(ingredient, quantity, selectedUnit, selectedState);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUnit(parseInt(e.target.value, 10));
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(parseInt(e.target.value, 10));
  };

  const SearchResults = () => {
    return (ingredients.length > 0) && <>
      {(query && query.length > 0 && ingredients.length) && <ul>
        {ingredients
          .filter(ingredient => (ingredient.name)
          .toLowerCase()
          .match(query))
          .map(filtered => <li className="inline-flex" key={filtered.ingredient_ID}>
          <button
            className="cursor-pointer bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 mb-1 mr-1 rounded-full" 
            onClick={(e) => handleAdd(e, filtered.name)}>
            {filtered.name}
          </button>
        </li>)}
      </ul>}
    </>
  };

  return <div>
      <div>
        <div className="md:flex md:items-center"> 
          <div className="mb-2">
            <Label text="Search" element="search" />
            <Input 
              element="search" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery((e.target.value).toLowerCase())} text="Red Cabbage" />
          </div>
          <div className="mb-2 md:ml-2">
            <Label text="Units" element="units" />   
            <div className="relative">
              <Select 
                element="units" 
                onChange={handleUnitChange}
                items={units} 
                value={selectedUnit} />
            </div>
          </div>
          <div className="mb-2 md:ml-2">
            <Label text="State" element="state" /> 
            <div className="relative">
              <Select 
                element="state" 
                onChange={handleStateChange}
                items={states} 
                value={selectedState} />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 absolute top-2.5 right-2.5 text-slate-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        {ingredients.length > 0 && <Heading Tag="h3" title="Search" />}
        {ingredients.length > 0 && <SearchResults />}
      </div>
   </div>};

Search.displayName = 'Search';
export default Search;