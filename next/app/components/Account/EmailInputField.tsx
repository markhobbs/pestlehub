// EmailInputField.js
"use client"

import Input from "@/components/Input";
import Label from "@/components/Label";

interface EmailInputFieldProps {
  handleValidation: React.ChangeEventHandler<HTMLInputElement>;
  handleEmailChange: React.FocusEventHandler<HTMLInputElement>;
  emailValue: string;
  emailError: string;
}

function EmailInputField({handleValidation, handleEmailChange, emailValue, emailError}: EmailInputFieldProps) {
  return <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <Label 
        text="Username" 
        element="email" />
    </div>
    <div className="md:w-2/3">
      <Input 
        element="email" 
        onChange={handleEmailChange} 
        onBlur={handleValidation} 
        text="Email" 
        value={emailValue} />
      <p className="text-red-600 dark:text-red-400 text-xs italic">{emailError}</p>
    </div>
  </div>};

EmailInputField.displayName = 'EmailInputField';
export default EmailInputField;