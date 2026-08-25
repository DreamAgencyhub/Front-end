"use client";

import { forgotPassword } from "@/app/actions/auth-action";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export default function ForgotPasswordForm() {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    getValues,
  } = useForm({
    mode: "all",
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (email: string) => forgotPassword(email),
    onSettled: (res) => {
      console.log(res);
    },
  });

  const onSubmit = () => {
    const { email } = getValues();

    mutate(email);
  };

  return (
    <div className="flex flex-col justify-center  items-center md:items-stretch md:w-98  py-10 gap-6 col-span-1">
      <div className="py-3 text-center">
        <h3 className="text-3xl pb-2 "> Reset Your Password </h3>
        <span className="text-sm  text-text-muted font-semibold">
          Please enter your email
        </span>
      </div>

      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
        action=""
      >
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

        <Button variant="primary" size="large" className="font-semibold mt-6">
          Submit
        </Button>
      </form>
    </div>
  );
}
