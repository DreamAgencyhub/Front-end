"use client";

import { Icons8Apple, Icons8Google } from "@/app/components/icons";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { useForm } from "react-hook-form";

function isPasswordValidate(password: string): string | boolean {
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

export default function SignupForm() {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    getValues,
  } = useForm({
    mode: "all",
  });

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <div className="flex flex-col  items-center md:items-stretch md:w-98 md:place-self-center-safe py-10 gap-6 col-span-1">
      <div className="py-3 text-center">
        <h3 className="text-3xl pb-2 ">Create an account</h3>
        <span className="text-sm  text-text-muted font-semibold">
          Welcome to Dream Agency
        </span>
      </div>

      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
        action=""
      >
        <Input
          name="fullName"
          label="Full Name"
          type="text"
          register={register("fullName", {
            required: "*This field is required.",
            minLength: {
              value: 3,
              message: "*Full name should be at least 3 characters.",
            },
            maxLength: {
              value: 20,
              message: "Full name should not be more that 20 characters.",
            },
          })}
          errors={errors}
          className="bg-secondary-default"
        />
        <Input
          name="email"
          label="Email"
          type="email"
          register={register("email", {
            required: "*This field is required.",
            maxLength: {
              value: 200,
              message: "Email should not be more that 200 characters.",
            },
            pattern: {
              value:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: "Please Provide a valid email.",
            },
          })}
          errors={errors}
          className="bg-secondary-default"
        />
        <Input
          name="password"
          type="password"
          label="Password"
          register={register("password", {
            required: "*This field is required.",
            validate: (value) => isPasswordValidate(value),
          })}
          errors={errors}
          className="bg-secondary-default"
        />

        <Button variant="primary" size="large" className="font-semibold mt-6">
          Sign up
        </Button>
        <div className="py-2 flex gap-2">
          <Button
            className="font-semibold w-full flex items-center justify-center gap-2"
            directTo="/"
            variant="secondary"
            size="large"
          >
            <Icons8Google className="stroke-none text-xl" />
            Google
          </Button>
          <Button
            className="font-semibold w-full flex items-center justify-center gap-2"
            directTo="/"
            variant="secondary"
            size="large"
          >
            <Icons8Apple className="stroke-none fill-gray-800 text-xl" />
            Apple
          </Button>
        </div>
      </form>
    </div>
  );
}
