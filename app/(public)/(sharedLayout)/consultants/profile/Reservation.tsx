import { IconMetroCalendar } from "@/app/components/icons";
import Button from "@/app/components/ui/Button";

export default function Reservation() {
  return (
    <div className="flex flex-col w-full gap-4  lg:max-w-4xl ">
      <div className="bg-secondary-default py-2 rounded-3xl flex items-center gap-4 md:justify-between md:px-4">
        <div className="flex items-center gap-4  p-4">
          <IconMetroCalendar className="fill-primary-500 stroke-none text-xl" />
          <span className="text-sm font-semibold">Select day and hour</span>
        </div>
        <div className=" flex gap-4">
          <Button
            className="font-semibold text-xs rounded-xl "
            variant="primary"
            size="small"
          >
            Online
          </Button>
          <Button
            className="font-semibold text-xs rounded-xl "
            variant="secondary"
            size="small"
          >
            In person
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:max-w-4xl md:grid-cols-3 lg:grid-cols-4 mt-4">
        <div className="rounded-2xl bg-primary-500 cursor-pointer hover:bg-primary-700 transition-colors ease-in-out duration-300 py-4 text-gray-100 text-sm font-semibold text-center">
          <span>Saturday: 3/4/2026</span>
        </div>
        <div className="rounded-2xl bg-primary-500 cursor-pointer hover:bg-primary-700 transition-colors ease-in-out duration-300 py-4 text-gray-100 text-sm font-semibold text-center">
          <span>Sunday: 3/5/2026</span>
        </div>
        <div className="rounded-2xl bg-primary-500 cursor-pointer hover:bg-primary-700 transition-colors ease-in-out duration-300 py-4 text-gray-100 text-sm font-semibold text-center">
          <span>Monday: 3/6/2026</span>
        </div>
        <div className="rounded-2xl bg-primary-500 cursor-pointer hover:bg-primary-700 transition-colors ease-in-out duration-300 py-4 text-gray-100 text-sm font-semibold text-center">
          <span>Tuesday: 3/7/2026</span>
        </div>
        <div className="rounded-2xl bg-primary-500 cursor-pointer hover:bg-primary-700 transition-colors ease-in-out duration-300 py-4 text-gray-100 text-sm font-semibold text-center">
          <span>Wednesday: 3/8/2026</span>
        </div>
        <div className="rounded-2xl bg-primary-500 cursor-pointer hover:bg-primary-700 transition-colors ease-in-out duration-300 py-4 text-gray-100 text-sm font-semibold text-center">
          <span>Thursday: 3/9/2026</span>
        </div>
      </div>
    </div>
  );
}
