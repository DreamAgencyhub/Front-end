import Button from "@/app/components/ui/Button";
import { formatDate } from "@/app/utilities/helpers";

export type Ticket = {
  id: string;
  date: Date;
  subject: string;
  status: "InProcess" | "Answered";
};

interface RowInfoProps {
  ticket: Ticket;
}

export default function RowInfo({ ticket }: RowInfoProps) {
  return (
    <div className=" relative flex flex-row items-center bg-secondary-default rounded-3xl px-4 py-5 w-full md:w-[80%] ">
      <div className="grid grid-cols-3 w-full items-center text-sm font-semibold">
        <span>{formatDate(ticket.date)}</span>
        <span>{`${ticket.subject.substring(0, 10)}...`}</span>
        <span
          className={`${
            ticket.status === "Answered" ? "text-green-600" : "text-sky-600"
          }`}
        >
          {ticket.status}
        </span>
      </div>

      <Button
        className=" md:absolute -right-5 font-semibold lg:px-6! lg:py-3"
        variant="primary"
        size="small"
      >
        See Details
      </Button>
    </div>
  );
}
