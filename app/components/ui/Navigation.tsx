"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, ReactNode } from "react";

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

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!scroll) return;

    const elementId = href.split("/").at(-1);

    if (!elementId) return;

    const element = document.getElementById(elementId);

    const rec = element?.getBoundingClientRect();

    if (!rec) return;

    const y = rec?.top + window.scrollY;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    e.currentTarget.classList.add(
      "text-primary-500",
      "before:content-['•']",
      "before:mr-1",
    );
  };

  return (
    <ul className={` ${className}  gap-10 `}>
      {navigationItems.map(({ label, href, icon: Icon }) => (
        <li
          className="text-text-default hover:text-primary-500 transition-all py-1 "
          key={label}
        >
          <Link
            onClick={(e) => handleScroll(e, href)}
            className={`${
              pathname === href ? "text-primary-600" : ""
            } flex flex-row items-center `}
            href={!scroll ? href : pathname}
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
