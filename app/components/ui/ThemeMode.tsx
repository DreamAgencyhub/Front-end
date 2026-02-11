"use client";

import { useState } from "react";
import { Moon, Sun } from "../icons";

export default function ThemeMode({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleModeToggle = () => setIsDark(!isDark);

  return (
    <button
      className={` ${className} cursor-pointer" `}
      onClick={handleModeToggle}
    >
      {" "}
      {isDark ? (
        <Sun className="text-3xl stroke-primary-500 fill-primary-500 cursor-pointer" />
      ) : (
        <Moon className="text-3xl stroke-primary-500 fill-primary-500 cursor-pointer" />
      )}{" "}
    </button>
  );
}
