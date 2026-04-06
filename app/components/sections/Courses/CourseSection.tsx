"use client";
import { OnlineLearning } from "../../icons";
import Slider from "../../ui/slider/Slider";
import CourseCard, { Content } from "../../ui/CourseCard";

const items: Content[] = [
  {
    id: "fe.1",
    cover: undefined,
    title: "Financial Markets",
    price: 470,
    off: 8,
    status: "finished",
    duration: {
      hour: 10,
      min: 20,
    },
  },
  {
    id: "fe.2",
    cover: undefined,
    title: "Financial Markets",
    price: 470,
    off: 8,
    status: "finished",
    duration: {
      hour: 10,
      min: 20,
    },
  },
  {
    id: "fe.3",
    cover: undefined,
    title: "Financial Markets",
    price: 470,
    off: 8,
    status: "finished",
    duration: {
      hour: 10,
      min: 20,
    },
  },
  {
    id: "fe.4",
    cover: undefined,
    title: "Financial Markets",
    price: 470,
    off: 8,
    status: "finished",
    duration: {
      hour: 10,
      min: 20,
    },
  },
  {
    id: "fe.5",
    cover: undefined,
    title: "Financial Markets",
    price: 470,
    off: 8,
    status: "finished",
    duration: {
      hour: 10,
      min: 20,
    },
  },
  {
    id: "fe.6",
    cover: undefined,
    title: "Financial Markets",
    price: 470,
    off: 8,
    status: "finished",
    duration: {
      hour: 10,
      min: 20,
    },
  },
];

export default function CourseSection() {
  return (
    <div className="mt-16">
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
            <Slider.Item key={item.id}>
              <CourseCard content={item} btnText="Enroll Now" />
            </Slider.Item>
          ))}
        </Slider.Track>
      </Slider>
    </div>
  );
}
