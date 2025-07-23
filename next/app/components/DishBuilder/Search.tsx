// Search.tsx 
import React,{useState} from 'react';
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Label from "@/components/Label";
import ingredients from '@/data/ingredients.json'
import dictionary from '@/data/dictionary.json';
import states from '@/data/states.json'
import units from '@/data/units.json'
import {capitalizeFirst} from "@/utils/shared";
import {SelectListSVG} from "../../../public/SVGs";

interface SearchProps {
  onAddIngredient: (
    ingredientName: string,
    quantity: number,
    unit_ID: number,
    state_ID: number
  ) => void;
  ingredients: object;
}

const Search: React.FC<SearchProps> = ({ onAddIngredient }) => {
  const [query, setQuery] = useState<string>();
  const [unit, setUnit] = useState<number>(0);
  const [state, setState] = useState<number>(0);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>, ingredient: string) => {
    e.preventDefault();
    const quantity = 1;
    onAddIngredient(ingredient, quantity, unit, state);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(parseInt(e.target.value, 10));
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(parseInt(e.target.value, 10));
  };

  const SearchResults = () => {
    return (ingredients.length > 0) && <>
      {(query && query.length > 0 && ingredients.length) && <ul>
        <li className="inline-flex" key={-1}>
          <button
            className="cursor-pointer bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 mb-1 mr-1 rounded-full" 
            onClick={(e) => handleAdd(e, query)}>
            ADD {capitalizeFirst(query)}
          </button>
        </li>
        {ingredients
          .filter(ingredient => capitalizeFirst(ingredient.name).match(query))
          .map((filtered, index) => index < 5 && ( // <= only 5 items
            <li className="inline-flex" key={filtered.ingredient_ID}>
              <button
                className="cursor-pointer bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 mb-1 mr-1 rounded-full" 
                onClick={(e) => handleAdd(e, filtered.name)}>
                ADD {filtered.name}
              </button>
          </li>)
        )}
      </ul>}
    </>
  };

  const Units = () => <div className="mb-2 md:ml-2">
    <Label 
      text={dictionary.dbuild.labels.units} 
      element={dictionary.dbuild.elements.units} />  
    <div className="relative">
      <Select
        element={dictionary.dbuild.elements.units}
        onChange={handleUnitChange}
        items={units} 
        value={unit} />
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
        value={state} />
        <SelectListSVG />
    </div>
  </div>
  
  const Results = () => <div data-testid="response">
    {query && <Heading Tag="h3" title={`Results for '${query}'`} />}
    {ingredients.length > 0 && <SearchResults />}
  </div>

  return <div role="search">
      <div 
      className="md:flex md:items-center"
      data-testid="query"> 
        <div className="mb-2">
          <Label 
            text={dictionary.dbuild.labels.search} 
            element={dictionary.dbuild.elements.search} />
          <Input 
            element={dictionary.dbuild.elements.search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
              setQuery(capitalizeFirst((e.target.value)))} 
            text={dictionary.dbuild.placeholders.search}  />
        </div>
        <Units />
        <States />
      </div>
    <Results />
</div>};

Search.displayName = 'Search';
export default Search;