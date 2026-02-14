"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface SliderContext {
  next?: number;
  prev?: number;
  showItems?: number;
  setNext?: Dispatch<SetStateAction<number>>;
  setPrev?: Dispatch<SetStateAction<number>>;
  setShowItems?: Dispatch<SetStateAction<number>>;
}

const SliderContext = createContext<SliderContext>({
  next: 0,
  prev: 0,
  showItems: 1,
});

export default function SliderProvider({ children }: { children: ReactNode }) {
  const [next, setNext] = useState(0);
  const [prev, setPrev] = useState(0);
  const [showItems, setShowItems] = useState(1);

  return (
    <SliderContext.Provider
      value={{ next, setNext, setPrev, setShowItems, prev, showItems }}
    >
      {children}
    </SliderContext.Provider>
  );
}

export function useSlider() {
  const context = useContext(SliderContext);

  if (!context)
    throw new Error("You are using Slider context out side of its provider!");

  return context;
}
