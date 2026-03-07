"use client";

import Filter from "@/app/components/ui/Filter";
import Pagination from "@/app/components/ui/Pagination";
import Search from "@/app/components/ui/Search";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (
    pathname.split("/").includes("profile") ||
    pathname.split("/").includes("course")
  )
    return children;

  return (
    <div className="grid grid-cols-1 place-items-center py-10 lg:grid-cols-[300px_1fr] ">
      <div className=" lg:place-self-start flex flex-col gap-6 lg:mt-30 ">
        <Search />
        <div className="hidden lg:block">
          <Filter />
        </div>
      </div>

      {children}

      <div className="mt-10 lg:col-span-1 lg:col-start-2 lg:place-self-center">
        <Pagination />
      </div>
    </div>
  );
}
