import Filter from "@/app/components/ui/Filter";
import Pagination from "@/app/components/ui/Pagination";
import Search from "@/app/components/ui/Search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description: "",
};

export default function page() {
  return (
    <div className="pt-30 flex flex-col gap-10">
      <Search />
      <Filter />
      <Pagination />
    </div>
  );
}
