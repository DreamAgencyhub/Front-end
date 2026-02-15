"use client";

import { ReactNode } from "react";
import SvgIconIonicIosArrowLeft from "../../icons/IconIonicIosArrowLeft";
import SvgIconIonicIosArrowRight from "../../icons/IconIonicIosArrowRight";

export const SliderTrack = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" rounded-4xl  relative w-full bg-default-color px-4 py-10 items-center justify-center ">
      <div className="hidden cursor-pointer shadow-md shadow-gray-400  dark:shadow-[-5px_0px_10px_3px]  dark:shadow-gray-900 z-40 lg:flex rounded-full bg-secondary-default p-2 absolute -left-4 -translate-y-1/2 top-1/2 ">
        <SvgIconIonicIosArrowLeft className="fill-primary-500 stroke-0 text-xl" />
      </div>
      <div className="hidden cursor-pointer shadow-md shadow-gray-400  dark:shadow-[5px_0px_10px_3px] dark:shadow-gray-900 z-40 lg:flex rounded-full bg-secondary-default p-2 absolute -right-4 -translate-y-1/2 top-1/2 ">
        <SvgIconIonicIosArrowRight className="fill-primary-500 stroke-0 text-xl rotate-180 " />
      </div>
      <div className=" relative overflow-hidden h-75 md:h-72  w-full">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out bg-red-50 "
          style={{ transform: `translateX(-${0}px)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
