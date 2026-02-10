import Link from "next/link";
import { ReactNode } from "react";

interface Button {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger" | "success";
  isDisabled?: boolean;
  directTo?: string;
  className?: string;
}

const smallSize = `text-xs px-2 py-1`;

const mediumSize = ` text-based px-4 py-3 `;

const variantPrimary = ` bg-primary-500 hover:bg-primary-600 transition-all hover:shadow-none `;

export default function Button({
  children,
  variant,
  isDisabled,
  size,
  directTo,
  className,
}: Button) {
  const sizeStyle =
    size === "small" ? `${smallSize} ` : size === "medium" ? mediumSize : "";
  const variantStyle = variant === "primary" ? variantPrimary : "";

  if (directTo)
    return (
      <Link
        className={` ${className} ${sizeStyle} ${variantStyle} text-gray-50 text-center rounded-xl shadow-[0px_0px_8px_5px] shadow-primary-100 dark:shadow-primary-900  `}
        href={directTo}
      >
        {children}
      </Link>
    );

  return (
    <button
      disabled={isDisabled}
      className={`${className} ${sizeStyle} ${variantStyle}  text-gray-50 text-center rounded-xl `}
    >
      {children}
    </button>
  );
}
