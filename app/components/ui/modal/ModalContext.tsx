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
  openName: string;
  open: (modalName: string) => void;
  close: Dispatch<SetStateAction<void>>;
}

const ModalContext = createContext<ModalContext | null>(null);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState<string>("");

  const open = setOpenName;

  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
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
