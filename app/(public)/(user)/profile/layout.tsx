import { ReactNode } from "react";
import Dashboard from "./Dashboard";

export default function rootLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" h-screen py-8 lg:grid lg:grid-cols-[350px_1fr]">
      <Dashboard />

      {children}
    </div>
  );
}
