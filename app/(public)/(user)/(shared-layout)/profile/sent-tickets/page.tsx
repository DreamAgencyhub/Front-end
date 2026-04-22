import Header from "../../../Header";
import RowInfo, { Ticket } from "./RowInfo";

const nowDate = new Date();
nowDate.setDate(nowDate.getDate() - 10);

const items: Ticket[] = [
  {
    id: "kkkkk2",
    date: new Date(nowDate.toISOString().split("T")[0]),
    subject:
      "This is first test to make sure the UI is working and is okay :) ",
    status: "InProcess",
  },
  {
    id: "kkkkk3",
    date: new Date(nowDate.toISOString().split("T")[0]),
    subject:
      "This is second test to make sure the UI is working and is okay :) ",
    status: "Answered",
  },
];

export default function page() {
  return (
    <div className="flex flex-col gap-4 items-center lg:mt-14 ">
      <Header />

      <div className="flex flex-col gap-4 w-full items-center">
        {items.map((t) => (
          <RowInfo key={t.id} ticket={t} />
        ))}
      </div>
    </div>
  );
}
