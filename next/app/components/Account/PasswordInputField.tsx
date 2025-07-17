// PasswordInputField.js
"use client"

import Input from "@/components/Input";
import Label from "@/components/Label";

interface InputProps {
  handleValidation: React.FocusEventHandler<HTMLInputElement>;
  handlePasswordChange: React.FocusEventHandler<HTMLInputElement>;
  passwordValue: string;
  passwordError: string;
}

function PasswordInputField({handleValidation, handlePasswordChange, passwordValue, passwordError}: InputProps) {
  return <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <Label 
        text="Password" 
        element="password" />
    </div>
    <div className="md:w-2/3">
      <Input 
        element="password" 
        onChange={handlePasswordChange} 
        onBlur={handleValidation} 
        text="Password" 
        type="password"
        value={passwordValue} />
      <p className="text-red-600 dark:text-red-400 text-xs italic">{passwordError}</p>
    </div>
  </div>};

PasswordInputField.displayName = 'PasswordInputField';
export default PasswordInputField;
