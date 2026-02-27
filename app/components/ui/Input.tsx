"use client";

import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";

interface InputProps {
  placeholder?: string;
  type: string;
  name: string;
  onChange?: () => void;
  className?: string;
  register: UseFormRegisterReturn;
  errors?: FieldErrors<FieldValues>;
  //   label?: string;
}

export default function Input({
  placeholder,
  type,
  name,
  onChange,
  className,
  register,
  errors,
}: InputProps) {
  const errorMessage = errors ? errors[name]?.message : "";

  return (
    <div className="relative w-full  border-b-red-400 ">
      <span className="absolute text-rose-600 text-xs -top-5 left-2">
        {errorMessage?.toString()}
      </span>
      <input
        {...register}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className={` ${className} w-full bg-default-color py-3 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition duration-200 focus:shadow-xl shadow-primary-100/50`}
        type={type}
      />
    </div>
  );
}
