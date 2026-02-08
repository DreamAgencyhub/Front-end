"use client";

import { useState } from "react";

export default function ThemeMode() {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleModeToggle = () => setIsDark(!isDark);

  return (
    <button
      className="md:order-2 md:place-self-center"
      onClick={handleModeToggle}
    >
      {" "}
      {isDark ? "Dark" : "light"}{" "}
    </button>
  );
}
