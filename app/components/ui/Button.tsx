import Link from "next/link";
import { ReactNode } from "react";

interface Button {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger" | "success";
  isDisabled?: boolean;
  directTo?: string;
  className?: string;
  onClick?: () => void;
}

const sizes = {
  smallSize: `text-xs px-3 py-2 rounded-lg `,

  mediumSize: ` text-based px-4 py-3 `,
};

const variants = {
  variantPrimary: ` bg-primary-500 hover:bg-primary-600 transition-all hover:shadow-none shadow-[0px_0px_8px_5px] shadow-primary-100 dark:shadow-primary-900 `,

  variantSecondary: `bg-transparent border-2 border-primary-500 text-primary-500 dark:text-gray-50  hover:bg-primary-500/15   hover:dark:text-text-default transition-all `,
};

export default function Button({
  children,
  variant,
  isDisabled,
  size,
  directTo,
  className,
  onClick,
}: Button) {
  const sizeStyle =
    size === "small"
      ? `${sizes?.smallSize} `
      : size === "medium"
      ? sizes?.mediumSize
      : "";
  const variantStyle =
    variant === "primary"
      ? variants?.variantPrimary
      : variant === "secondary"
      ? variants?.variantSecondary
      : "";

  if (directTo)
    return (
      <Link
        className={` ${className} ${sizeStyle} ${variantStyle} text-gray-50 text-center rounded-xl`}
        href={directTo}
      >
        {children}
      </Link>
    );

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${className} ${sizeStyle} ${variantStyle} cursor-pointer text-nowrap text-gray-50 text-center ring-0 rounded-xl `}
    >
      {children}
    </button>
  );
}
