import { cloneElement, HTMLAttributes, ReactElement } from "react";
import { useModal } from "./ModalContext";

export default function OpenModal({
  children,
  opens: openModalName,
}: {
  children: ReactElement<HTMLAttributes<HTMLElement>>;
  opens: string;
}) {
  const { open } = useModal();

  return <>{cloneElement(children, { onClick: () => open(openModalName) })}</>;
}
