// Input.js
"use client"

interface InputProps {
  element: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>| undefined;
  onChange: React.FocusEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>| undefined;
  pattern?: string | undefined;
  ref?: React.Ref<HTMLInputElement> | undefined;
  required?: boolean | undefined
  text: string;
  type?: string | undefined
  value?: string;
}

const Input: React.FC<InputProps> = ({element, onBlur, onChange, onKeyUp, pattern, ref, required, text, type, value}) => <input 
  aria-label={text}
  autoComplete="off"
  className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 mb-2 leading-tight"
  name={element} 
  id={element}
  onBlur={onBlur} 
  onChange={onChange} 
  onKeyUp={onKeyUp}
  pattern={pattern}
  placeholder={text}
  ref={ref}
  required={required}
  type={(type === "password") ? "password": "text"}
  value={value} />;

Input.displayName = 'Input';
export default Input;