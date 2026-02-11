"use client";

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
  navigationItems: NavigationItem[];
}

export default function Navigation({
  className,
  bulletPoint,
  navigationItems,
}: NavigationProps) {
  const pathname = usePathname();

  return (
    <ul className={` ${className}  gap-10 `}>
      {navigationItems.map(({ label, href, icon: Icon }) => (
        <li
          className="text-text-default  hover:text-primary-500 transition-all py-1 "
          key={label}
        >
          <Link
            className={`${
              pathname === href ? "text-primary-600" : ""
            } flex flex-row items-center gap-2 `}
            href={href}
          >
            {bulletPoint ? (
              <span className="font-extrabold text-2xl">&bull;</span>
            ) : (
              <span className="py-2">{Icon}</span>
            )}{" "}
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
