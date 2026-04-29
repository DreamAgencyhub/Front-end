"use client";

import { useState } from "react";
import { Moon, Sun } from "../icons";
import Cookies from "js-cookie";

export default function ThemeMode({
  className,
  initialTheme,
}: {
  className?: string;
  initialTheme?: "dark" | "light";
}) {
  console.log(initialTheme);

  const [themeMode, setThemeMode] = useState<"dark" | "light">(initialTheme);

  const handleModeToggle = () => {
    const newThemeMode = themeMode === "dark" ? "light" : "dark";
    setThemeMode(newThemeMode);
    Cookies.set("themeMode", newThemeMode, { expires: 365 });
    document.documentElement.setAttribute("data-theme", newThemeMode);
  };

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", themeMode);
  //   setLocalStorageItem("themeMode", themeMode);
  // }, [themeMode]);

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
