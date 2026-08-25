"use client";

import { ReactNode } from "react";
import Dashboard from "../../Dashboard";
import ModalProvider from "@/app/components/ui/modal/ModalContext";

export default function rootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="py-8 lg:grid lg:grid-cols-[350px_1fr]">
      <ModalProvider>
        <Dashboard />
      </ModalProvider>

      <div className="min-h-[50vh]">{children}</div>
    </div>
  );
}
