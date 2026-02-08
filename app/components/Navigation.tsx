"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Consultants",
    href: "/consultants",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navigation({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <ul
      className={` ${className} self-center flex flex-col w-full h-full items-center justify-center gap-10 text-xl font-semibold lg:flex-row  lg:text-lg`}
    >
      {navigationItems.map((item) => (
        <li
          className="text-text-default hover:text-primary-500 transition-all "
          key={item.label}
        >
          <Link
            className={`${pathname === item.href ? "text-primary-600" : ""} `}
            href={item.href}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
