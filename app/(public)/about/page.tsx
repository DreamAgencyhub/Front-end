import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "",
};

export default function page() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 bg-secondary-default p-9 ">
        About Us
      </h1>
      <p className="text-accent-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum
        repellendus temporibus eos tenetur! Unde quaerat eum corrupti neque
        assumenda praesentium totam magni, quibusdam, sed nulla veniam, facere
        repellat repellendus!
      </p>
    </div>
  );
}
