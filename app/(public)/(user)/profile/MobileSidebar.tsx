"use client";

import { ArrowIcon } from "@/app/components/icons";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`
        lg:hidden fixed bottom-0 top-0  ${
          !isOpen ? "left-full" : " left-[10%] md:left-[50%]"
        } bg-default-color z-100 flex flex-col items-center py-10 px-4 shadow-xl rounded-l-4xl transition-all ease-in-out duration-400 `}
    >
      <div
        onClick={handleClick}
        className="absolute -left-8 top-90 px-4 py-0.5 rounded-xl  bg-primary-500"
      >
        <ArrowIcon
          className={`text-2xl ${!isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      <Sidebar />
    </div>
  );
}
