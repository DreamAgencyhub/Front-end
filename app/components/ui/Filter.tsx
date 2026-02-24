"use client";

import { useState } from "react";
import { IconAwesomeSortAmountUp, IconIonicIosArrowLeft } from "../icons";

const options = [
  { label: "Most Popular", value: "mostPopular" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
];

export default function Filter() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <form
      className={`relative  shadow-xl bg-secondary-default py-3 px-3 flex flex-col overflow-hidden  items-center w-68 rounded-3xl`}
    >
      <div
        onClick={handleOpen}
        className={`flex w-full items-center justify-around px-2 py-3 `}
      >
        <IconAwesomeSortAmountUp className="text-xl fill-gray-400 dark:fill-gray-300  stroke-0 " />
        <div className="flex flex-row justify-between items-center text-sm font-semibold text-text-default w-full px-2  cursor-pointer">
          <span>Sort by</span>
          <IconIonicIosArrowLeft
            className={`fill-text-default! stroke-text-default transition-all duration-300 ease-in-out ${
              !isOpen ? "-rotate-90" : "rotate-90"
            }`}
          />
        </div>
      </div>

      <ul
        className="overflow-hidden  bg-secondary-default  rounded-b-3xl text-text-default font-semibold text-sm w-full px-3 flex flex-col items-start focus:outline-none transition-all duration-300 ease-in-out border-t-2 border-gray-400 select-none first:mt-10"
        style={{
          height: `${!isOpen ? "0px" : "120px"}`,
          borderColor: `${!isOpen ? "transparent" : ""}`,
        }}
      >
        {options.map((option) => (
          <li
            key={option.label}
            className="p-1.5  flex flex-row items-center gap-2 cursor-pointer "
          >
            <input
              id={option.label}
              type="checkbox"
              value={option.value}
              className="appearance-none rounded-full bg-gray-300 ring-0 checked:border-3 w-3.5 h-3.5 checked:bg-secondary-default checked:border-blue-500   "
            />
            <label className=" cursor-pointer" htmlFor={option.label}>
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </form>
  );
}
