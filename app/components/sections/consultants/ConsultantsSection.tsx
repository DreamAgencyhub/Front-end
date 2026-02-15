"use client";

import { Operator } from "../../icons";
import Slider from "../../ui/slider/Slider";

const items = [{ text: "test1" }, { text: "test2" }, { text: "test3" }];

export default function ConsultantsSection() {
  console.log(Slider);
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
        <Slider.Track>
          {items.map((item, index) => (
            <Slider.Item key={index} text={item.text} />
          ))}
        </Slider.Track>
      </Slider>
    </div>
  );
}
