"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItem = {
  label: string;
  href: string;
  icon?: string;
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
      {navigationItems.map((item) => (
        <li
          className="text-text-default hover:text-primary-500 transition-all "
          key={item.label}
        >
          <Link
            className={`${pathname === item.href ? "text-primary-600" : ""} `}
            href={item.href}
          >
            {bulletPoint ? (
              <span className="font-extrabold text-2xl">&bull;</span>
            ) : (
              item?.icon && "icon"
            )}{" "}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
