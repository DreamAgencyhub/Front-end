import { ReactNode } from "react";
import { useModal } from "./ModalContext";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import useOutsideClick from "@/app/hooks/useOutSideClick";

export default function Modal({ children }: { children: ReactNode }) {
  const { isOpen, onClose } = useModal();
  const { ref } = useOutsideClick(onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/80 flex items-center justify-center z-100 overflow-hidden ">
      <div
        ref={ref}
        className="rounded-2xl bg-secondary-default flex flex-col p-4"
      >
        {children}
      </div>
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
