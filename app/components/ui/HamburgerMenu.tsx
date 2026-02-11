"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import { navigationRoutesItems } from "../../data/navigationItems";
import { BurgerMenuSvgrepoCom, CloseXSvgrepoCom } from "../icons";

export default function HamburgerMenu({ className }: { className: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div onClick={handleToggle} className={`${className}  `}>
      <div className=" relative z-50 cursor-pointer">
        {!isOpen ? (
          <BurgerMenuSvgrepoCom className=" transition-colors hover:stroke-primary-600 text-4xl stroke-text-default " />
        ) : (
          <CloseXSvgrepoCom className=" transition-colors hover:fill-primary-600 hover:stroke-primary-600 text-4xl fill-text-default " />
        )}
      </div>

      <div
        className={`z-30 bottom-0 top-0 absolute transition-all duration-100 ease-linear bg-secondary-default ${
          !isOpen ? " -left-full" : "inset-x-0"
        } `}
      >
        <Navigation
          navigationItems={navigationRoutesItems}
          key={"hamburgerMenu"}
          className="lg:hidden flex flex-col w-full h-full items-center justify-center text-xl font-semibold"
        />
      </div>
    </div>
  );
}
