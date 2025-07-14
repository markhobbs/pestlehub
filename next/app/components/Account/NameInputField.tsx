// NameInputField.js
"use client"

import Input from "@/components/Input";
import Label from "@/components/Label";

interface InputProps {
  handleValidation: React.ChangeEventHandler<HTMLInputElement>;
  handleNameChange: React.FocusEventHandler<HTMLInputElement>;
  nameValue: string;
  nameError: string;
}

function NameInputField({handleValidation, handleNameChange, nameValue, nameError}: InputProps) {
  return <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <Label 
        text="Name" 
        element="name" />
    </div>
    <div className="md:w-2/3">
      <Input 
        element="name" 
        onChange={handleNameChange} 
        onBlur={handleValidation} 
        text="Name" 
        value={nameValue} />
      <p className="text-red-600 dark:text-red-400 text-xs italic">
        {nameError}
      </p>
    </div>
  </div>};

NameInputField.displayName = 'NameInputField';
export default NameInputField;