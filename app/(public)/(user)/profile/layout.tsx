import { ReactNode } from "react";
import Dashboard from "./Dashboard";

export default function rootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-subgrid gap-4 h-screen">
      <Dashboard />

      {children}
    </div>
  );
}
