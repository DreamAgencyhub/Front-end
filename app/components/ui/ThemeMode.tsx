"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "../icons";
import Cookies from "js-cookie";

export default function ThemeMode({
  className,
  initialTheme,
}: {
  className?: string;
  initialTheme: "dark" | "light";
}) {
  const [themeMode, setThemeMode] = useState<"dark" | "light">(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", initialTheme);
    Cookies.set("theme", initialTheme, { expires: 365 });
  }, [initialTheme]);

  const handleModeToggle = () => {
    const newThemeMode = themeMode === "dark" ? "light" : "dark";
    Cookies.set("theme", newThemeMode, { expires: 365 });
    setThemeMode(newThemeMode);
    document.documentElement.setAttribute("data-theme", newThemeMode);
  };

  return (
    <button
      className={` ${className} cursor-pointer" `}
      onClick={handleModeToggle}
    >
      {" "}
      {themeMode === "dark" ? (
        <Sun className="text-3xl stroke-primary-500 fill-primary-500 cursor-pointer" />
      ) : (
        <Moon className="text-3xl stroke-primary-500 fill-primary-500 cursor-pointer" />
      )}{" "}
    </button>
  );
}
