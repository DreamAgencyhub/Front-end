"use client";

import { ReactNode } from "react";
import SliderProvider, { useSlider } from "./SliderContext";
import { Operator } from "../../icons";
import Button from "../Button";

export default function Slider({ children }: { children: ReactNode }) {
  const { next, prev } = useSlider();

  return (
    <SliderProvider>
      <div className=" bg-secondary-default rounded-4xl flex flex-col lg:flex-row items-center justify-end py-4 px-8 lg:px-20  ">
        <div className="relative flex flex-col  justify-center items-center lg:justify-end lg:items-start w-full h-65 gap-1">
          <Operator className="w-42 h-42 fill-text-muted stroke-text-muted top-0  left-0  opacity-5 absolute " />
          <div className="flex flex-col gap-1 justify-center items-start ">
            <h4 className="text-2xl font-semibold">The best Mentors</h4>
            <p className="text-text-muted font-semibold text-sm w-42 ">
              Book your consultation in a few simple clicks!
            </p>
            <Button
              className="mt-3 font-semibold px-8 text-sm lg:text-base"
              directTo="/consultants"
              size="small"
              variant="primary"
            >
              More...
            </Button>
          </div>
        </div>
        {children}
      </div>
    </SliderProvider>
  );
}
