"use client";

import { useForm } from "react-hook-form";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";

export default function ContactForm() {
  const {
    register,
    formState: { errors },
    getValues,
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <div className="md:absolute md:w-92 md:right-0 lg:left-1/2  lg:-translate-x-1/5 md:top-1/2 md:-translate-y-1/2 bg-secondary-default flex flex-col py-4 px-6 gap-4 rounded-4xl">
      <h3 className="text-base my-2 font-semibold py-2 border-b-2 border-gray-300">
        Send Us a Message
      </h3>
      <form
        className="w-full h-full flex flex-col gap-6 pb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name="fullName"
          placeholder="Full Name ..."
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
        />
        <Input
          name="email"
          placeholder="Your Email Address ..."
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
        />
        <Textarea
          name="sendMessage"
          placeholder="Your Message..."
          register={register("sendMessage", {
            required: "*This field is required.",
            maxLength: {
              value: 200,
              message: "The message should not be more that 200 characters.",
            },
            minLength: {
              value: 10,
              message: "The message at least should be 10 characters.",
            },
          })}
          errors={errors}
        />

        <Button className="mt-6" variant="primary" size="large">
          Submit
        </Button>
      </form>
    </div>
  );
}
