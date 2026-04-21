import Link from "next/link";
import { ReactNode } from "react";

type navigationInfo = {
  label: string;
  href: string;
  icon?: ReactNode;
  className?: string;
};

interface NavProps {
  NavigationData: navigationInfo[];
}

export default function Nav({ NavigationData }: NavProps) {
  return NavigationData?.map((item) => (
    <div
      key={item.label}
      className={` ${item?.className} rounded-2xl py-4 px-6 bg-secondary-default flex flex-row items-center justify-center w-full font-semibold text-primary-500 dark:text-primary-50 `}
    >
      <div className="">{item.icon}</div>
      <Link className="w-full text-center" href={item.href}>
        {item.label}
      </Link>
    </div>
  ));
}
