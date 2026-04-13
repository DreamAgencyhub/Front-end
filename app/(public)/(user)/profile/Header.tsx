import { IconFeatherPlusCircle } from "@/app/components/icons";
import Button from "@/app/components/ui/Button";

export default function Header() {
  return (
    <div className=" font-semibold bg-secondary-default rounded-3xl p-4 relative flex flex-row justify-between items-center ">
      <div className="grid grid-cols-3 w-full">
        <span>Date</span>
        <span>Subject</span>
        <span>Status</span>
      </div>

      <Button
        className="py-3! rounded-2xl! flex  items-center gap-2 "
        variant="primary"
        size="small"
      >
        <IconFeatherPlusCircle className="text-xl stroke-1 " />
        <span className="hidden md:flex">Send New Ticket</span>
      </Button>
    </div>
  );
}
