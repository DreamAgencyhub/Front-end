"use client";

import { ReactNode } from "react";

export default function SliderItem({ children }: { children: ReactNode }) {
  return (
    <div className={` shrink-0 w-full h-86 md:w-1/2 lg:w-1/3  px-6`}>
      {children}
    </div>
  );
}
