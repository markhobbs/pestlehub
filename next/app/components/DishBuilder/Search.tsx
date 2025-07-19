// Search.tsx 

import React, {useState} from 'react';
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Label from "@/components/Label";
import ingredients from '@/data/ingredients.json'
import dictionary from '@/data/dictionary.json';
import states from '@/data/states.json'
import units from '@/data/units.json'
import {SelectListSVG} from "../../../public/SVGs";

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
          .filter(ingredient => ingredient.name.toLowerCase().match(query))
          .map((filtered, index) => index < 5 && ( // <= only 5 items
            <li className="inline-flex" key={filtered.ingredient_ID}>
              <button
                className="cursor-pointer bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 mb-1 mr-1 rounded-full" 
                onClick={(e) => handleAdd(e, filtered.name)}>
                {filtered.name}
              </button>
          </li>)
        )}
      </ul>}
    </>
  };

  const Search = () => <div className="mb-2">
    <Label 
      text={dictionary.dbuild.labels.search} 
      element={dictionary.dbuild.elements.search} />
    <Input 
      element={dictionary.dbuild.elements.search}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery((e.target.value).toLowerCase())} 
      text={dictionary.dbuild.placeholders.search}  />
  </div>

  const Units = () => <div className="mb-2 md:ml-2">
    <Label 
      text={dictionary.dbuild.labels.units} 
      element={dictionary.dbuild.elements.units} />  
    <div className="relative">
      <Select 
        element={dictionary.dbuild.elements.units}
        onChange={handleUnitChange}
        items={units} 
        value={selectedUnit} />
    </div>
  </div>

  const States = () => <div className="mb-2 md:ml-2">
    <Label 
      text={dictionary.dbuild.labels.states} 
      element={dictionary.dbuild.elements.states}  /> 
    <div className="relative">
      <Select 
        element={dictionary.dbuild.elements.states}
        onChange={handleStateChange}
        items={states} 
        value={selectedState} />
        <SelectListSVG />
    </div>
  </div>
  
  const Results = () => <div>
    {query && <Heading Tag="h3" title="Search" />}
    {ingredients.length > 0 && <SearchResults />}
  </div>

  return <div>
    <div>
      <div className="md:flex md:items-center"> 
        <Search />
        <Units />
        <States />
      </div>
    </div>
    <Results />
</div>};

Search.displayName = 'Search';
export default Search;