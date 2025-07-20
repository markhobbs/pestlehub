import {  EMAIL_REGEX, NUMBERS_REGEX, PASSWORD_REGEX} from "@/utils/shared";

/**
 * Assigns the Regex to the input value.
 * 
 * @param value - The change event value for validating.
 * 
 */
export const validateNotEmpty = (value: string) => {
  if (value.length === 0) return "Required";
  return "";
};

export const validateTextAreaLimit = (value: string) => {
  if (value.length <= 500) return `${500 - value.length} Characters Remaining.`;
  return "";
};

/**
 * Assigns the Regex to the input value.
 * 
 * @param value - The change event value for validating.
 * 
 */
export const validateTimings = (value: string) => {
  if (value !== "") {
    //if (time.length === 0) return "Time is empty";
    if (!NUMBERS_REGEX.digits.test(value)) return "Digits only";
    if (NUMBERS_REGEX.maxLength.test(value)) return "Maximum of 6 digits";
    return "";
  }
};

/**
 * Assigns the Regex to the input value.
 * 
 * @param password - The change event value for validating.
 * 
 */
export const validatePassword = (password : string) => {
  if (password.length === 0) return "Password is empty";
  if (!PASSWORD_REGEX.uppercase.test(password)) return "At least one Uppercase";
  if (!PASSWORD_REGEX.lowercase.test(password)) return "At least one Lowercase";
  if (!PASSWORD_REGEX.digits.test(password)) return "At least one digit";
  if (!PASSWORD_REGEX.specialChar.test(password)) return "At least one Special Character";
  if (!PASSWORD_REGEX.minLength.test(password)) return "At least minimum 8 characters";
  return "";
};

/**
 * Assigns the Regex to the input value.
 * 
 * @param email - The change event value for validating.
 * 
 */
export const validateEmail = (email: string) => {
  if (email.length === 0) return "Email is empty";
  if (!EMAIL_REGEX.test(email)) return "Must be a valid email";
  return "";
};