// TokenInputField.js
"use client"

import Input from "@/components/Input";
import Label from "@/components/Label";

interface InputProps {
  handleValidation: React.ChangeEventHandler<HTMLInputElement>;
  handleTokenChange: React.FocusEventHandler<HTMLInputElement>;
  tokenValue: string;
  tokenError: string;
}

function TokenInputField({handleValidation, handleTokenChange, tokenValue, tokenError} : InputProps) {
  return <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <Label 
        text="Token" 
        element="token" />
    </div>
    <div className="md:w-2/3">
      <Input 
        element="token" 
        onChange={handleTokenChange} 
        onBlur={handleValidation} 
        text="Token"
        value={tokenValue} />
      <p className="text-red-600 dark:text-red-400 text-xs italic">{tokenError}</p>
    </div>
  </div>};

TokenInputField.displayName = 'TokenInputField';
export default TokenInputField;