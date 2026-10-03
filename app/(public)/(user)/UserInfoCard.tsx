"use client";

import { Edit } from "@/app/components/icons";
import Avatar from "@/app/components/ui/Avatar";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { useGetUser } from "@/app/hooks/useGetUser";
import { isEmailValid, isPasswordValid } from "@/app/utilities/helpers";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function UserInfoCard() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  const { data, isPending } = useGetUser();

  const handleClick = () => setIsEditing((prev) => !prev);

  if (isPending) return <h1> Loading...</h1>;

  if (!data) return null;

  return (
    <div className=" relative rounded-3xl bg-secondary-default h-92 w-87 flex flex-col gap-2 items-center scale-90">
      <Avatar url={data.user.avatar} fullName={data.user.fullName} />
      {isEditing && (
        <label className="relative z-50 bg-secondary-default p-2 rounded-full top-10 cursor-pointer hover:bg-secondary-muted">
          <Edit className="fill-primary-500 stroke-none text-xs " />
          <Input
            name="usersAvatar"
            register={register("usersAvatar")}
            type="file"
            className="hidden"
          />
        </label>
      )}
      <div className="mt-16 py-2 text-center">
        <Input
          className="text-xl font-bold text-center bg-secondary-default! py-1! "
          disabled={!isEditing}
          errors={errors}
          type="text"
          defaultValue={data.user.fullName}
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
          defaultValue={data.user.email}
          name="email"
          register={register("email", {
            validate: (value) => isEmailValid(value),
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
              validate: (value) => isPasswordValid(value),
              required: "This filed is required!",
            })}
          />
        )}
      </div>
      <div className="px-4 pb-6 w-full mt-auto flex gap-4 ">
        {isEditing && (
          <Button
            onClick={handleClick}
            size="small"
            variant="danger"
            className="w-full font-semibold !text-sm"
          >
            Cancel
          </Button>
        )}

        <Button
          onClick={handleClick}
          size="small"
          variant="primary"
          className="w-full font-semibold !text-sm"
        >
          {!isEditing ? " Edit your profile" : "Submit Changes"}
        </Button>
      </div>
    </div>
  );
}
