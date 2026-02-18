"use client";
import { OnlineLearning } from "../../icons";
import Slider from "../../ui/slider/Slider";
import CourseCard from "./CourseCard";

const items = [
  { text: "test1" },
  { text: "test2" },
  { text: "test3" },
  { text: "test4" },
  { text: "test5" },
  { text: "test6" },
  { text: "test7" },
];

export default function CourseSection() {
  return (
    <div className="mt-20">
      <Slider>
        <Slider.IconBox
          icon={
            <OnlineLearning className="w-42 h-42 fill-text-muted stroke-text-muted top-0  left-0  opacity-5 absolute " />
          }
          title={"Online Courses"}
          desc={
            "You're just a few click away to access the best online courses"
          }
          href="/courses"
          linkText="More..."
        />
        <Slider.Track>
          {items.map((item) => (
            <Slider.Item key={item.text}>
              <CourseCard />
            </Slider.Item>
          ))}
        </Slider.Track>
      </Slider>
    </div>
  );
}
