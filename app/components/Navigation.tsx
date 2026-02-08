"use client";

import Link from "next/link";

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
  return (
    <ul
      className={` ${className} flex flex-col w-full h-full items-center justify-center gap-10 text-xl font-semibold md:flex-row  md:text-lg`}
    >
      {navigationItems.map((item) => (
        <li
          className="text-text-default hover:text-primary-500 transition-all hover:before "
          key={item.label}
        >
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}
