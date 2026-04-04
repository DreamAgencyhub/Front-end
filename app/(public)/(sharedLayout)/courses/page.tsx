import CourseCard, { Course } from "@/app/components/ui/CourseCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description: "",
};

const items: Course[] = [
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
    status: "recording",
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

export default function page() {
  return (
    <div className="py-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          className="w-76 h-90 flex items-center justify-center"
          key={item.id}
        >
          <CourseCard btnText="Enroll Now" course={item} key={item.id} />
        </div>
      ))}
    </div>
  );
}
