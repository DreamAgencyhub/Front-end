import Search from "@/app/components/ui/Search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description: "",
};

export default function page() {
  return (
    <div className="pt-30">
      <Search />
    </div>
  );
}
