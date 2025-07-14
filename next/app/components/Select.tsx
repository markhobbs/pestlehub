// Select.js
interface SelectProps {
  element: string;
  items? : Item[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: number;
}
interface Item {
  code?: string; 
  index: string; 
  name: string;
}

const Select: React.FC<SelectProps> = ({element, onChange, items, value}) => <>
  <select
    id={element}
    className="w-full min-w-25 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" 
    onChange={onChange} 
    name={element}
    value={value}>
    {items && items.length && items.map((item) => <option key={item.index} value={item.index}>{item.name} </option>)}</select>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 absolute top-2.5 right-2.5 text-slate-700">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
    </svg>
</>;

Select.displayName = 'Select';
export default Select;