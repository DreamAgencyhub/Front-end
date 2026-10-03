import { errorMessages } from "../constants/err-messages";

type errCode = "DUPLICATE_EMAIL" | "INVALID_TOKEN";

export const getErrorMessage = (errorCode: errCode) => {
  return errorMessages?.[errorCode];
};
