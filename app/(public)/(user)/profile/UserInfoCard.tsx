"use client";

import Avatar from "@/app/components/ui/Avatar";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { isPasswordValidate } from "@/app/utilities/helpers";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function UserInfoCard() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  const handleClick = () => setIsEditing((prev) => !prev);

  return (
    <div className=" relative rounded-3xl bg-secondary-default h-92 w-87 flex flex-col gap-2 items-center scale-90">
      <Avatar />
      <div className="mt-18 py-2 text-center">
        <Input
          className="text-xl font-bold text-center bg-secondary-default! py-1! "
          disabled={!isEditing}
          errors={errors}
          type="text"
          defaultValue={"Mohammad Alizadeh"}
          name="fullName"
          register={register("fullName", {
            minLength: {
              value: 2,
              message: "Full Name should be more than 2 characters",
            },
            required: "This filed is required!",
          })}
        />
        <Input
          className="text-sm text-text-muted font-bold text-center bg-secondary-default! py-2!"
          disabled={!isEditing}
          errors={errors}
          type="text"
          defaultValue={"mohammadrezaalizadeh@gmail.com"}
          name="email"
          register={register("email", {
            pattern: {
              value:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: "Please Provide a valid email.",
            },
            required: "This filed is required!",
          })}
        />
        {isEditing && (
          <Input
            className="text-sm text-text-muted font-bold text-center bg-secondary-default! py-1.5! "
            disabled={!isEditing}
            errors={errors}
            type="password"
            defaultValue={"This is password1!"}
            name="password"
            register={register("password", {
              validate: (value) => isPasswordValidate(value),
              required: "This filed is required!",
            })}
          />
        )}
      </div>
      <div className="px-4 pb-6 w-full mt-auto flex gap-4 ">
        {isEditing && (
          <Button
            onClick={handleClick}
            size="medium"
            variant="danger"
            className="w-full font-semibold "
          >
            Cancel
          </Button>
        )}

        <Button
          onClick={handleClick}
          size="medium"
          variant="primary"
          className="w-full font-semibold "
        >
          {!isEditing ? " Edit your profile" : "Submit Changes"}
        </Button>
      </div>
    </div>
  );
}
