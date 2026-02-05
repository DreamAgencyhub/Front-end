import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>test</div>
      {children}
    </div>
  );
}
