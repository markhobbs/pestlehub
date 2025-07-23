// shared.tsx
export const capitalizeFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const convertAmountFriendly = (quantity: string) => {
  let response;
  const float = parseFloat(quantity)
  switch (float) {
    case 0.25:
      response = "1/4";
      break;
    case 0.50:
      response = "1/2";
      break;
    case 0.75:
      response = "3/4";
      break;
    default:
      response = "1";
      break;
  }
  return response;
};

export const PASSWORD_REGEX = {
  uppercase: /(?=.*?[A-Z])/,
  lowercase: /(?=.*?[a-z])/,
  digits: /(?=.*?[0-9])/,
  specialChar: /(?=.*?[#?!@$%^&*-])/,
  minLength: /.{8,}/,
};

export const NUMBERS_REGEX = {
  digits: /^\d+$/,
  maxLength: /.{6,}/, 
};
  
export const EMAIL_REGEX = /^\S+@\S+\.\S+$/;