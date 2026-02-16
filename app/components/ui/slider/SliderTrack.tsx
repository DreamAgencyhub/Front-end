"use client";

import { ReactNode, useEffect } from "react";
import { useSlider } from "./SliderContext";
import SliderBtn from "./SliderBtn";

export const SliderTrack = ({ children }: { children: ReactNode }) => {
  const {
    next,
    prev,
    currentIndex,
    setTotalItems,
    setVisibleItems,
    visibleItems,
  } = useSlider();

  useEffect(() => {
    const count = Array.isArray(children) ? children.length : 1;

    setTotalItems(count);
  }, [children, setTotalItems]);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [setVisibleItems]);

  const translatePercentage = (currentIndex * 100) / visibleItems;

  return (
    <div className=" select-none rounded-4xl relative w-full bg-default-color px-4 py-10 md:mx-4  items-center justify-center  md:col-span-5">
      <SliderBtn type="prev" handleClick={prev} />
      <SliderBtn type="next" handleClick={next} />
      <div className=" relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out  "
          style={{
            transform: `translateX(-${translatePercentage}%)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
