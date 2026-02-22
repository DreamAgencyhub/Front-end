"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import { navigationRoutesItems } from "../../data/navigationItems";
import { BurgerMenuSvgrepoCom, CloseXSvgrepoCom } from "../icons";

export default function HamburgerMenu({ className }: { className: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div onClick={handleToggle} className={`${className} `}>
      <div className=" relative  z-60 cursor-pointer">
        {!isOpen ? (
          <BurgerMenuSvgrepoCom className="transition-colors stroke-primary-500 fill-primary-500 stroke-2  text-4xl  " />
        ) : (
          <CloseXSvgrepoCom className=" transition-colors fill-primary-600 stroke-primary-600 text-4xl " />
        )}
      </div>

      <div
        className={` overscroll-none z-50 bottom-0 top-0 fixed transition-all duration-100 ease-linear bg-secondary-default  ${
          !isOpen ? " -left-full" : "inset-x-0"
        } `}
      >
        <Navigation
          navigationItems={navigationRoutesItems}
          key={"hamburgerMenu"}
          className="lg:hidden flex flex-col items-center h-screen justify-center overscroll-none text-xl font-semibold"
        />
      </div>
    </div>
  );
}
