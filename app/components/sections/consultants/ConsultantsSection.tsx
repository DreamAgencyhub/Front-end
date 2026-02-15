"use client";

import { Operator } from "../../icons";
import Slider from "../../ui/slider/Slider";

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
          <span>ddd</span>
        </Slider.Track>
      </Slider>
    </div>
  );
}
