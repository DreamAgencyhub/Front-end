"use client";

import { resetPassword } from "@/app/actions/auth-action";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { isPasswordValidate } from "@/app/utilities/helpers";
import { useMutation } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ResetPasswordForm() {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    getValues,
  } = useForm({
    mode: "all",
  });

  const router = useRouter();

  const { token } = useParams<{ token: string }>();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ token, password }: { token: string; password: string }) =>
      resetPassword(token, password),
    onSettled: (res) => {
      if (res?.err) {
        toast.error("Something went wrong! please try again.");
      }

      toast.success("Your password has been changed successfully.");
      router.push("/auth/login");
      reset();
    },
  });

  const onSubmit = () => {
    const { password } = getValues();

    if (token && password) {
      mutate({ token, password });
    }
  };

  return (
    <div className="flex flex-col justify-center  items-center md:items-stretch md:w-98  py-10 gap-6 col-span-1">
      <div className="py-3 text-center">
        <h3 className="text-3xl pb-2 "> Reset Your Password </h3>
        <span className="text-sm  text-text-muted font-semibold">
          Please enter a new password
        </span>
      </div>

      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
        action=""
      >
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

        <Button
          isDisabled={isPending}
          variant="primary"
          size="large"
          className="font-semibold mt-6"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
