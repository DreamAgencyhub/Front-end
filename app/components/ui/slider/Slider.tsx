"use client";

import { ReactNode } from "react";
import SliderProvider, { useSlider } from "./SliderContext";

import { SliderTrack } from "./SliderTrack";
import SliderIconBox from "./SliderIconBox";

function Slider({ children }: { children: ReactNode }) {
  const { next, prev } = useSlider();

  return (
    <SliderProvider>
      <div className=" bg-secondary-default rounded-4xl flex flex-col lg:flex-row items-center justify-end py-4 px-8 lg:px-20  ">
        {children}
      </div>
    </SliderProvider>
  );
}

Slider.Track = SliderTrack;
Slider.IconBox = SliderIconBox;

export default Slider;
