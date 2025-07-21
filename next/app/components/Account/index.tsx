// Account/index.tsx
"use client"
import React,{useEffect, useState, useContext} from "react";
import {useRouter} from "next/navigation";
import {headers} from "@/utils/headers";
import {ProfileContext} from '@/ContextProvider/ProfileProvider';
import {DishContext} from '@/ContextProvider/DishProvider';
import PasswordInputField from "@/components/Account/PasswordInputField";
import PasswordInputFieldConfirm from "@/components/Account/PasswordInputFieldConfirm";
import NameInputField from "@/components/Account/NameInputField";
import EmailInputField from "@/components/Account/EmailInputField";
import TokenInputField from "@/components/Account/TokenInputField";
import JourneyButton from "@/components/Account/JourneyButton";
import {ForgottenPassword} from "@/components/Snippets";
import dictionary from '@/data/dictionary.json';
import config from '@/data/config.json';
import {validateEmail,validatePassword} from "@/utils/validation";

interface AccountProps {
  journey?: string;
  activate?: boolean;
}

interface Profile {
  setProfile: (profile: {username: string; token: string; status: string}) => void;
}

interface Dish {
  setStale: any;
}

interface Errors {
    name: string;
    email: string;
    token: string;
    password: string;
    confirmPassword: string;
}

function Account({journey, activate}: AccountProps) {
  const router = useRouter();
  const {setProfile} = useContext(ProfileContext) as unknown as Profile;
  const {setStale} = useContext(DishContext) as unknown as Dish;
  const [disabled, setDisabled] = useState<boolean>(true);
  const formStateDefault = {name: "", email: "", token: "", password: "", confirmPassword: ""}
  const errorsDefault = {name: "*Required", email: "*Required", token: "*Required", password: "*Required", confirmPassword: "*Required"}
  const [formState, setFormState] = useState(formStateDefault);
  const [errors, setErrors] = useState<Errors>(errorsDefault);
  const api = `${process.env.NEXT_PUBLIC_API_URI || config.api}`;

  useEffect(() => {
    switch (journey) {
      case "Signup":
        if(errors.name || errors.email || errors.password) { 
          setDisabled(true)
        } else {
          setDisabled(false)
        }
        break;
      case "Login":
        if(errors.email || errors.password) { 
          setDisabled(true)
        } else {
          setDisabled(false)
        }
        break;
      case "Recover":
        if(errors.email) { 
          setDisabled(true)
        } else {
          setDisabled(false)
        }
        break;
      default:
        break;
    }
  }, [disabled, errors, journey, setDisabled]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value.trim() }));
    handleValidation(event);
  };

  const handleValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let errorMsg = "";
    switch (name) {
      case "password":
        errorMsg = validatePassword(value);
        setErrors((prevState) => ({ ...prevState, password: errorMsg }));
        break;
      case "confirmPassword":
        errorMsg = value !== formState.password ? "Confirm password is not matched" : "";
        setErrors((prevState) => ({ ...prevState, confirmPassword: errorMsg }));
        break;
      case "name":
        errorMsg = value.length === 0 ? "Name is empty" : "";
        setErrors((prevState) => ({ ...prevState, name: errorMsg }));
        break;
      case "email":
        errorMsg = validateEmail(value);
        setErrors((prevState) => ({ ...prevState, email: errorMsg }));
        break;
      case "token":
        errorMsg = value.length === 0 ? "Token is empty" : "";
        setErrors((prevState) => ({ ...prevState, token: errorMsg }));
        break;
      default:
        break;
    }
  };

  const handleEvent = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    switch (name) {
      case "Signup":
        await handleSignup();
        break;
      case "Login":
        await handleLogin();
        break;
      case "Recover":
        await handleRecover();
        break;
      default:
        break;
    }
  };
  
  const handleSignup = async () => {
    const url = api + `/users`;
    const hashedPassword = formState.password.trim();
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        name: formState.name.trim(),
        email: formState.email.trim().toLowerCase(),
        password: hashedPassword
      }),
    });
    await rawResponse.json();
    router.push("/login/checkmail");
  };

  const handleLogin = async () => {
    const hashedPassword = formState.password.trim();
    const url = api + `/users/auth`;
    
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        email: formState.email.trim().toLowerCase(),
        password: hashedPassword
      }),
    });
    // If succesfull populate auth states
    if (rawResponse.status === 200) {
      const response = await rawResponse.json();
      setProfile({ username: response.uPID, token: response.data, status: "active" });
      setStale(true);
      router.push("/pages/dashboard");
    } 
  };

  const handleRecover = async () => {
    const url = api + `/users/recover`;
    const rawResponse = await fetch(url, {
      method: "PUT",
      headers: {
          // 'Authorization' : 'Bearer ' + token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formState.email.trim().toLowerCase(),
      }),
    });
    await rawResponse.json();
    router.push("/login/checkmail");
  };

  return (
    <div className="w-full max-w-xs">
        {activate && <p className="mb-4">{dictionary.config.activationEmailResp}</p>}
        {journey === "Signup" && <NameInputField
            handleNameChange={handleInputChange}
            handleValidation={handleValidation}
            nameValue={formState.name}
            nameError={errors.name} />}
        {(journey === "Login" || journey === "Signup" || journey === "Recover" || journey === "Confirm") && 
          <EmailInputField
            handleEmailChange={handleInputChange}
            handleValidation={handleValidation}
            emailValue={formState.email}
            emailError={errors.email} />
        }
        {journey === "confirm" && <TokenInputField
            handleTokenChange={handleInputChange}
            handleValidation={handleValidation}
            tokenValue={formState.token}
            tokenError={errors.token} />
        }
        {(journey === "Login" || journey === "Signup" || journey === "Confirm") && (
          <PasswordInputField
            handlePasswordChange={handleInputChange}
            handleValidation={handleValidation}
            passwordValue={formState.password}
            passwordError={errors.password} />)}
        {(journey === "Signup" || journey === "Confirm") && (
          <PasswordInputFieldConfirm
            handlePasswordChange={handleInputChange}
            handleValidation={handleValidation}
            confirmPasswordValue={formState.confirmPassword}
            confirmPasswordError={errors.confirmPassword} /> )}
        <JourneyButton 
          journey={journey} 
          disabled={disabled} 
          handleEvent={(e: any) => handleEvent(e)} />
          {journey !== "Recover" && <ForgottenPassword />}
    </div>
  );
}

Account.displayName = 'Account';
export default Account;