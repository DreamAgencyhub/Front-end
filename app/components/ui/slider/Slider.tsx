"use client";

import { ReactNode } from "react";
import SliderProvider from "./SliderContext";

import { SliderTrack } from "./SliderTrack";
import SliderIconBox from "./SliderIconBox";
import SliderItem from "./SliderItem";

function Slider({ children }: { children: ReactNode }) {
  return (
    <div className=" bg-secondary-default rounded-4xl flex flex-col md:flex-row items-center justify-end py-4 px-8 lg:px-20 ">
      <SliderProvider>{children}</SliderProvider>
    </div>
  );
}

Slider.Track = SliderTrack;
Slider.IconBox = SliderIconBox;
Slider.Item = SliderItem;

export default Slider;
