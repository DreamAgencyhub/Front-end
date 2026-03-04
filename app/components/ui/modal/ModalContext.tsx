"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ModalContext {
  isOpen: boolean;
  onOpen: Dispatch<SetStateAction<void>>;
  onClose: Dispatch<SetStateAction<void>>;
}

const ModalContext = createContext<ModalContext | null>(null);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error("You are trying to use useModal outside of its provider!");

  return context;
}
