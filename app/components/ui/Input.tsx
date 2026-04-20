"use client";

import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import { ClosedEye, OpenEye } from "../icons";
import { useState } from "react";

interface InputProps {
  placeholder?: string;
  type: string;
  name: string;
  className?: string;
  register: UseFormRegisterReturn;
  errors?: FieldErrors<FieldValues>;
  label?: string;
  disabled?: boolean;
  defaultValue?: string;
}

export default function Input({
  placeholder,
  type,
  name,
  className,
  register,
  errors,
  label,
  disabled,
  defaultValue,
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const toggleShowPassword = () => setIsPasswordVisible((prev) => !prev);

  const errorMessage = errors ? errors[name]?.message : "";

  return (
    <div className="relative w-full ">
      <span
        className={`absolute z-100 text-rose-600 text-[10px]  font-semibold  ${
          label ? " left-16 top-2 text-nowrap " : " -top-4 left-2 "
        }`}
      >
        {errorMessage?.toString()}
      </span>
      {label && (
        <span className="text-text-muted text-xs font-semibold ">{label}</span>
      )}
      <input
        {...register}
        placeholder={placeholder}
        name={name}
        className={` ${className} w-full bg-default-color py-3 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition duration-200 focus:shadow-xl shadow-primary-100/50 dark:shadow-primary-900/50 dark:ring-offset-primary-400 mt-1 dark:placeholder-gray-700!`}
        type={name === "password" && isPasswordVisible ? "text" : type}
        disabled={disabled}
        defaultValue={defaultValue}
      />
      {name === "password" && (
        <div
          onClick={toggleShowPassword}
          className="absolute right-4 top-2/3  -translate-y-1/2 cursor-pointer select-none "
        >
          {!isPasswordVisible ? (
            <ClosedEye className="text-xl fill-primary-500 stroke-primary-500 " />
          ) : (
            <OpenEye className="text-xl fill-primary-500 stroke-primary-500 " />
          )}
        </div>
      )}
    </div>
  );
}
