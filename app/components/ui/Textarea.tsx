import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";

interface TextareaProps {
  placeholder?: string;
  className?: string;
  name: string;
  register: UseFormRegisterReturn;
  errors?: FieldErrors<FieldValues>;
}

export default function Textarea({
  placeholder,
  register,
  errors,
  name,
}: TextareaProps) {
  const errorMessage = errors ? errors[name]?.message : "";

  return (
    <div className="relative">
      <span className="absolute text-rose-600 text-xs -top-5 left-2">
        {errorMessage?.toString()}
      </span>
      <textarea
        placeholder={placeholder}
        className="bg-default-color w-full py-3 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition duration-200 focus:shadow-xl shadow-primary-100/50 h-34 "
        {...register}
      />
    </div>
  );
}
