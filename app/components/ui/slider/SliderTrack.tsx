"use client";

import { ReactNode, useEffect } from "react";
import SvgIconIonicIosArrowLeft from "../../icons/IconIonicIosArrowLeft";
import SvgIconIonicIosArrowRight from "../../icons/IconIonicIosArrowRight";
import { useSlider } from "./SliderContext";

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
    <div className=" select-none rounded-4xl  relative w-full bg-default-color px-4 py-10 items-center justify-center ">
      <div
        onClick={prev}
        className=" cursor-pointer shadow-md shadow-gray-400  dark:shadow-[-5px_0px_10px_3px]  dark:shadow-gray-900 z-40  rounded-full bg-secondary-default p-2 absolute -left-4 -translate-y-1/2 top-1/2 "
      >
        <SvgIconIonicIosArrowLeft className="fill-primary-500 stroke-0 text-xl" />
      </div>
      <div
        onClick={next}
        className=" cursor-pointer shadow-md shadow-gray-400  dark:shadow-[5px_0px_10px_3px] dark:shadow-gray-900 z-40  rounded-full bg-secondary-default p-2 absolute -right-4 -translate-y-1/2 top-1/2 "
      >
        <SvgIconIonicIosArrowRight className="fill-primary-500 stroke-0 text-xl rotate-180 " />
      </div>
      <div className=" relative overflow-hidden h-75 md:h-72  w-full">
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
