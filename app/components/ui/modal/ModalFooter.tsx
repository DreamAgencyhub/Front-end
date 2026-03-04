import { ReactNode } from "react";

export default function ModalFooter({ children }: { children: ReactNode }) {
  return <div className="py-6 w-full ">{children}</div>;
}
