"use client";

import { Icons8Apple, Icons8Google } from "@/app/components/icons";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
// import { useGetCurrentUser } from "@/app/hooks/useGetCurrentUser";
import { login } from "@/app/actions/auth-action";
import { QueryClient, useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();
  const queryClient = new QueryClient();
  const { mutate } = useMutation({
    mutationFn: login,
    onSettled: async (res) => {
      if (res?.err) {
        return toast.error(res.err.message);
      }

      await queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      router.replace("/profile/courses");
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
    const { email, password } = getValues();

    mutate({ email, password });
  };

  return (
    <div className="flex flex-col justify-center  items-center md:items-stretch md:w-98  py-10 gap-6 col-span-1">
      <div className="py-3 text-center">
        <h3 className="text-3xl pb-2 ">Sign in to your account</h3>
        <span className="text-sm  text-text-muted font-semibold">
          Welcome back to Dream Agency
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
        <Input
          name="password"
          type="password"
          label="Password"
          register={register("password", {
            required: "*This field is required.",
          })}
          errors={errors}
          className="bg-secondary-default"
        />

        <Button variant="primary" size="large" className="font-semibold mt-6">
          Sign in
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
        Don&apos;t Have any account?{" "}
        <Link
          className="underline font-semibold text-text-default hover:text-text-muted "
          href={"/auth/signup"}
        >
          Sign up
        </Link>
      </span>
      <span className="text-text-muted text-center text-sm">
        Forgot your password?{" "}
        <Link
          className="underline font-semibold text-text-default hover:text-text-muted "
          href={"/auth/forgot-password"}
        >
          reset my password
        </Link>
      </span>
    </div>
  );
}
