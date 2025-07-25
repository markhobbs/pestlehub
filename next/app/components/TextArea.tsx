// Select.js

interface TextAreaProps {
  element: string;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>| undefined;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>| undefined;
  text: string;
}

const Select: React.FC<TextAreaProps> = ({element, onKeyUp, onBlur, onChange, text}) => <textarea
  id={element}
  rows={5}
  className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 leading-tight"
  name={element}
  maxLength={500} 
  minLength={1}
  placeholder={text}
  onBlur={onBlur} 
  onChange={onChange}
  onKeyUp={onKeyUp} />;

Select.displayName = 'Select';
export default Select;