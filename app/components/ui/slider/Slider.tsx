"use client";

import { ReactNode } from "react";
import SliderProvider from "./SliderContext";

import { SliderTrack } from "./SliderTrack";
import SliderIconBox from "./SliderIconBox";
import SliderItem from "./SliderItem";

function Slider({ children }: { children: ReactNode }) {
  return (
    <SliderProvider>
      <div className=" bg-secondary-default rounded-3xl grid grid-cols-1 md:grid-cols-6 py-4 px-8 lg:px-20 overflow-hidden ">
        {children}
      </div>
    </SliderProvider>
  );
}

Slider.Track = SliderTrack;
Slider.IconBox = SliderIconBox;
Slider.Item = SliderItem;

export default Slider;
