"use client";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Textarea from "@/app/components/ui/Textarea";
import { useForm } from "react-hook-form";

export default function TicketSubmitForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const onSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-secondary-default w-full  rounded-3xl px-4 py-6 flex flex-col gap-5 mx-auto md:max-w-md lg:mt-14 lg:mx-10 "
    >
      <h3 className="font-semibold ">Sending a New Ticket</h3>
      <Input
        name="subject"
        type="text"
        placeholder="Subject: ( e.g. I have a problem with the payment )."
        register={register("subject", {
          minLength: {
            value: 4,
            message: "You have to write a meaningful subject.",
          },
          maxLength: {
            value: 30,
            message: "Subject should be less than 30 characters!",
          },
          required: "You should provide a subject.",
        })}
        errors={errors}
      />
      <Textarea
        errors={errors}
        name="ticket-content"
        register={register("ticket-content", {
          minLength: {
            value: 10,
            message: "Please provide a good detailed message.",
          },
          maxLength: {
            value: 400,
            message: "Please provide a message less than 400 characters.",
          },

          required: "This filed is required!",
        })}
        placeholder="Please provide detailed and complete message so that our support team would be able to assist you effectively."
      />
      <Button variant="primary" size="medium">
        Submit
      </Button>
    </form>
  );
}
