"use client";

import { Icons8Apple, Icons8Google } from "@/app/components/icons";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { isEmailValid, isPasswordValid } from "@/app/utilities/helpers";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signUp } from "../../actions/auth-action";
import toast from "react-hot-toast";
import { getErrorMessage } from "@/app/utilities/getErrorMessage";
import { errorCode } from "@/app/constants/err-messages";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();

  const { isPending, mutate } = useMutation({
    mutationFn: signUp,

    onSettled: (res) => {
      if (res?.err.code === "DUPLICATE_FILED") {
        toast.error(getErrorMessage(errorCode.DUPLICATE_EMAIL));
      } else {
        toast.error("Something went wrong! Please try again.");
      }

      if (res?.success) {
        toast.success("You are signed up successfully.");
        router.back();
        reset();
      }
    },
  });

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
    const { fullName, email, password } = getValues();

    mutate({ fullName, email, password });
  };

  return (
    <div className="flex flex-col justify-center  items-center md:items-stretch md:w-98  py-10 gap-6 col-span-1">
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
            validate: (value) => isEmailValid(value),
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
            validate: (value) => isPasswordValid(value),
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
            <Icons8Apple className="stroke-none fill-gray-800 dark:fill-gray-200 text-xl" />
            Apple
          </Button>
        </div>
      </form>
      <span className="text-text-muted text-center">
        Have any account?{" "}
        <Link
          className="underline font-semibold text-text-default hover:text-text-muted "
          href={"/auth/login"}
        >
          Sign in
        </Link>
      </span>
    </div>
  );
}
