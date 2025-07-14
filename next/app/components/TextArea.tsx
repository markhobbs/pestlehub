// Select.js
"use client"

interface TextAreaProps {
  element: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  text: string;
}

const Select: React.FC<TextAreaProps> = ({element, onChange, text}) => <textarea
  aria-label={text}
  id={element}
  rows={5}
  className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 leading-tight"
  name={element}
  maxLength={1000} 
  minLength={50}
  placeholder={text}
  onChange={onChange} />;

Select.displayName = 'Select';
export default Select;