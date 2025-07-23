// shared.tsx
export const capitalizeFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const convertAmountFriendly = (quantity: string) => {
  let response;
  const intQuantity = (parseInt(quantity) !== 0) && `${parseInt(quantity)} `;
  const decimalPart = quantity.slice(-3);
  switch (decimalPart) {
    case ".00":
      response = "1";
      break;
    case ".25":
      response = intQuantity + "1/4";
      break;
    case ".50":
      response = intQuantity + "1/2";
      break;
    case ".75":
      response = intQuantity + "3/4";
      break;
    default:
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