export function isPasswordValidate(password: string): string | boolean {
  const validation = {
    length: {
      isValid: /^.{8,20}$/.test(password),
      errorMessage: "The password must be between 8 and 20 characters.",
    },
    hasUpper: {
      isValid: /[A-Z]/.test(password),
      errorMessage: "The password must contain at least 1 uppercase",
    },
    hasLower: {
      isValid: /[a-z]/.test(password),
      errorMessage: "The password must contain at least 1 lowercase",
    },
    hasNumber: {
      isValid: /\d/.test(password),
      errorMessage: "The password must contain at least 1 digit",
    },
  };

  if (!validation.hasLower.isValid) return validation.hasLower.errorMessage;

  if (!validation.length.isValid) return validation.length.errorMessage;

  if (!validation.hasUpper.isValid) return validation.hasUpper.errorMessage;

  if (!validation.hasNumber.isValid) return validation.hasNumber.errorMessage;

  return true;
}
