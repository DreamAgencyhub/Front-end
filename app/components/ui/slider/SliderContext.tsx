"use client";

import {
  Children,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface SliderContext {
  next: () => void;
  prev: () => void;
  currentIndex: number;
  visibleItems: number;
  setTotalItems: Dispatch<SetStateAction<number>>;
  setVisibleItems: Dispatch<SetStateAction<number>>;
}

const SliderContext = createContext<SliderContext | null>(null);

export default function SliderProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState<number>(1);

  const maxIndex = Math.max(totalItems - visibleItems, 0);

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    return () => setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  return (
    <SliderContext.Provider
      value={{
        next,
        prev,
        setTotalItems,
        setVisibleItems,
        currentIndex,
        visibleItems,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
}

export function useSlider() {
  const context = useContext(SliderContext);

  if (!context)
    throw new Error("useSlider must be used inside SliderProvider!");

  return context;
}
