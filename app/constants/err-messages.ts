interface errCodeInterface {
  DUPLICATE_EMAIL: "DUPLICATE_EMAIL";
  INVALID_TOKEN: "INVALID_TOKEN";
}

export const errorCode: errCodeInterface = {
  DUPLICATE_EMAIL: "DUPLICATE_EMAIL",
  INVALID_TOKEN: "INVALID_TOKEN",
};

export const errorMessages = {
  DUPLICATE_EMAIL: "This email already exists, login please.",
  INVALID_TOKEN: "Your token has expired, please login again.",
};
