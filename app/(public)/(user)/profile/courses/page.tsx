import CourseCard, { Course } from "@/app/components/ui/CourseCard";

const items: Course[] = [
  {
    id: "fe.1",
    cover: undefined,
    title: "Financial Markets",
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

    status: "finished",
    duration: {
      hour: 10,
      min: 20,
    },
  },
];

export default function page() {
  return (
    <div className="py-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {items.map((item) => (
        <div
          className=" w-full h-90 flex items-center justify-center"
          key={item.id}
        >
          <CourseCard btnText="More Details" course={item} key={item.id} />
        </div>
      ))}
    </div>
  );
}
