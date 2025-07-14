// PasswordInputFieldConfirm.js
"use client"

import Input from "@/components/Input";
import Label from "@/components/Label";

interface InputProps {
  handleValidation: React.ChangeEventHandler<HTMLInputElement>;
  handlePasswordChange: React.FocusEventHandler<HTMLInputElement>;
  confirmPasswordValue: string;
  confirmPasswordError: string;
}

function PasswordInputFieldConfirm({handleValidation, handlePasswordChange, confirmPasswordValue, confirmPasswordError} : InputProps) {
  return <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <Label 
        text="Confirm" 
        element="confirmPassword" />
    </div>
    <div className="md:w-2/3">
      <Input 
        element="confirmPassword" 
        onChange={handlePasswordChange} 
        onBlur={handleValidation} 
        text="Confirm" 
        type="password"
        value={confirmPasswordValue} />
      <p className="text-red-600 dark:text-red-400 text-xs italic">{confirmPasswordError}</p>
    </div>
  </div>};

PasswordInputFieldConfirm.displayName = 'PasswordInputFieldConfirm';
export default PasswordInputFieldConfirm;