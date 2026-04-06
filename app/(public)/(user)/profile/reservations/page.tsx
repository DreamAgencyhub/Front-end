import CourseCard, { Content } from "@/app/components/ui/CourseCard";

const nowDate = new Date();
nowDate.setDate(nowDate.getDate() + 10);

const items: Content[] = [
  {
    id: "fe.1",
    cover: undefined,
    title: "Maria Smith",
    reservation: {
      date: new Date(nowDate.toISOString().split("T")[0]),
      hour: 12,
      min: 25,
      type: "online",
    },
  },
  {
    id: "fe.2",
    cover: undefined,
    title: "John Jackson",
    reservation: {
      date: new Date(nowDate.toISOString().split("T")[0]),
      hour: 20,
      min: 15,
      type: "inPerson",
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
          <CourseCard btnText="More Details" content={item} key={item.id} />
        </div>
      ))}
    </div>
  );
}
