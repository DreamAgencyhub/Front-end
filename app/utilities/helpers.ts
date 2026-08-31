import { MouseEvent } from "react";

export function isPasswordValid(password: string): string | boolean {
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

export function isEmailValid(email: string): string | boolean {
  const validation = {
    isValid:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        email,
      ),
    errMessage: "Please enter a valid email!",
  };

  if (!validation.isValid) return validation.errMessage;

  return true;
}

export const handleScroll = (
  e: MouseEvent<HTMLAnchorElement>,
  href: string,
  scroll?: boolean,
  changeStyle?: boolean,
) => {
  if (!scroll) return;
  e.preventDefault();

  if (changeStyle) {
    Array.prototype.slice
      .call(e.currentTarget.parentElement?.parentElement?.children)
      .map((item) => {
        if (item.querySelector("a").getAttribute("href") === href) {
          item
            .querySelector("a")
            .classList.add(
              "text-primary-500",
              "before:content-['•']",
              "before:mr-1",
            );
        } else {
          item
            .querySelector("a")
            .classList.remove(
              "text-primary-500",
              "before:content-['•']",
              "before:mr-1",
            );
        }
      });
  }

  const elementId = href.split("/").at(-1);

  if (!elementId) return;

  const element = document.getElementById(elementId);

  const rec = element?.getBoundingClientRect();

  if (!rec) return;

  const y = rec?.top + window.scrollY;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

export function calculateOffPrice(price: number, discount: number) {
  const discountAmount = Math.round(price * (discount / 100));

  return Math.round(price - discountAmount);
}

export function formatDate(date?: Date) {
  if (!date) return;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(1, "0");

  return ` ${month}/${day}/${year} `;
}

export function setLocalStorageItem(key: string, value: string) {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
  }
  localStorage.setItem(key, value);
}
