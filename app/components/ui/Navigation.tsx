"use client";

import { handleScroll } from "@/app/utilities/helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavigationItem = {
  label: string;
  href: string;
  icon?: ReactNode;
};

interface NavigationProps {
  className?: string;
  bulletPoint?: boolean;
  scroll?: boolean;
  navigationItems: NavigationItem[];
}

export default function Navigation({
  className,
  bulletPoint,
  navigationItems,
  scroll,
}: NavigationProps) {
  const pathname = usePathname();

  return (
    <ul className={` ${className}  gap-10 `}>
      {navigationItems.map(({ label, href, icon: Icon }) => (
        <li
          className="text-text-default hover:text-primary-500 transition-all py-1 "
          key={label}
        >
          <Link
            onClick={(e) => handleScroll(e, href, scroll, true)}
            className={`${
              pathname === href ? "text-primary-600" : ""
            } flex flex-row items-center `}
            href={href}
          >
            {bulletPoint ? (
              <span className="font-extrabold text-2xl mr-2">&bull;</span>
            ) : (
              Icon && <span className="py-2 mr-2">{Icon}</span>
            )}{" "}
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
