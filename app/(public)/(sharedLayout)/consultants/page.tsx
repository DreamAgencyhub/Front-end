import ConsultantsCard from "@/app/components/sections/consultants/ConsultantsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultants",
  description: "",
};

const items = [
  { text: "test1" },
  { text: "test2" },
  { text: "test3" },
  { text: "test4" },
  { text: "test5" },
  { text: "test6" },
];

export default function page() {
  return (
    <div className="py-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          className="w-76 h-90 flex items-center justify-center"
          key={item.text}
        >
          <ConsultantsCard key={item.text} />
        </div>
      ))}
    </div>
  );
}
