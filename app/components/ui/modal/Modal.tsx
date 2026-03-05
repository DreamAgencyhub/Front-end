"use client";

import { ReactNode } from "react";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import OpenModal from "./OpenModal";
import ModalWindow from "./ModalWindow";

export default function Modal({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

Modal.Open = OpenModal;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Window = ModalWindow;
