import { cloneElement, HTMLAttributes, ReactElement } from "react";
import { useModal } from "./ModalContext";
import useOutsideClick from "@/app/hooks/useOutSideClick";
import { createPortal } from "react-dom";

type ModalChildProps = {
  onCloseModal: () => void;
};

export default function ModalWindow({
  children,
  name,
}: {
  children: ReactElement<HTMLAttributes<HTMLAllCollection> & ModalChildProps>;
  name: string;
}) {
  const { openName, close } = useModal();
  const { ref } = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 bg-gray-900/80 flex items-center justify-center z-100 overflow-hidden ">
      <div
        ref={ref}
        className="rounded-2xl bg-secondary-default flex flex-col p-4"
      >
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body,
  );
}
