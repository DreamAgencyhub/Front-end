"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import { navigationRoutesItems } from "../data/navigationItems";

export default function HamburgerMenu({ className }: { className: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div onClick={handleToggle} className={`${className}  `}>
      <div className=" relative z-50 cursor-pointer">X</div>
      {isOpen && (
        <div className=" z-30 absolute inset-0 bg-secondary-default">
          <Navigation
            navigationItems={navigationRoutesItems}
            key={"hamburgerMenu"}
            className="lg:hidden flex flex-col w-full h-full items-center justify-center text-xl font-semibold"
          />
        </div>
      )}
    </div>
  );
}
