"use client";

import { Operator } from "../../icons";
import Slider from "../../ui/slider/Slider";

const items = [
  { text: "test1" },
  { text: "test2" },
  { text: "test3" },
  { text: "test4" },
  { text: "test5" },
  { text: "test6" },
  { text: "test7" },
];

export default function ConsultantsSection() {
  return (
    <div>
      <Slider>
        <Slider.IconBox
          icon={
            <Operator className="w-42 h-42 fill-text-muted stroke-text-muted top-0  left-0  opacity-5 absolute " />
          }
          title="The best Mentors"
          desc="Book your consultation in a few simple clicks!"
          href="/consultants"
          linkText="More..."
        />
        <Slider.Track key={"sliderTrack"}>
          {items.map((item, index) => (
            <Slider.Item key={index} text={item.text} />
          ))}
        </Slider.Track>
      </Slider>
    </div>
  );
}
