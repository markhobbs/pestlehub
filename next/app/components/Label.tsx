// Label.js

interface LabelProps {
    element: string;
    text: string;
}

const Label: React.FC<LabelProps> = ({ element, text }) => <label 
    aria-label={text}
    htmlFor={element} 
    className="block text-sm font-bold mb-2">
    {text}
  </label>;

Label.displayName = 'Label';
export default Label;