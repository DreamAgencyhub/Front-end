import { IconFeatherPlusCircle } from "@/app/components/icons";
import Button from "@/app/components/ui/Button";
import { formatDate } from "@/app/utilities/helpers";

interface Header {
  shouldShowBtn?: boolean;
  date?: Date;
  status?: string;
  subject?: string;
}

export default function Header({
  shouldShowBtn,
  date,
  subject,
  status,
}: Header) {
  return (
    <div className=" font-semibold bg-secondary-default rounded-3xl px-4 py-6 md:px-4 md:py-6 relative flex flex-row justify-between items-center w-full md:w-[80%]">
      <div className="grid grid-cols-3 items-center w-full text-sm md:text-base">
        <span>Date : {formatDate(date)}</span>
        <span className=" block md:hidden">
          Subject: {`${subject?.substring(0, 8)}...`}
        </span>
        <span className="hidden md:block">
          Subject: {`${subject?.substring(0, 20)}...`}
        </span>
        <span>
          Status:{" "}
          <span
            className={`${
              status === "InProcess" ? "text-sky-600" : "text-green-600"
            }`}
          >
            {status}
          </span>
        </span>
      </div>

      {shouldShowBtn && (
        <Button
          className="py-3! rounded-2xl! flex  items-center gap-2 md:absolute -right-10 "
          variant="primary"
          size="small"
        >
          <IconFeatherPlusCircle className="text-xl stroke-1 " />
          <span className="hidden md:flex">Send New Ticket</span>
        </Button>
      )}
    </div>
  );
}
