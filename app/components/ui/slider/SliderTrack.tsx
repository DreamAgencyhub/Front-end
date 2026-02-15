"use client";

import { ReactNode } from "react";
import SvgIconIonicIosArrowLeft from "../../icons/IconIonicIosArrowLeft";
import SvgIconIonicIosArrowRight from "../../icons/IconIonicIosArrowRight";

export const SliderTrack = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" rounded-4xl flex flex-row relative w-full bg-default-color h-[20vh] ">
      <div className="hidden cursor-pointer shadow-md shadow-gray-400  dark:shadow-[-5px_0px_10px_3px]  dark:shadow-gray-900 z-40 lg:flex rounded-full bg-secondary-default p-2 absolute -left-4 -translate-y-1/2 top-1/2 ">
        <SvgIconIonicIosArrowLeft className="fill-primary-500 stroke-0 text-xl" />
      </div>
      <div className="hidden cursor-pointer shadow-md shadow-gray-400  dark:shadow-[5px_0px_10px_3px] dark:shadow-gray-900 z-40 lg:flex rounded-full bg-secondary-default p-2 absolute -right-4 -translate-y-1/2 top-1/2 ">
        <SvgIconIonicIosArrowRight className="fill-primary-500 stroke-0 text-xl rotate-180 " />
      </div>
      <div className="">{children}</div>
    </div>
  );
};
