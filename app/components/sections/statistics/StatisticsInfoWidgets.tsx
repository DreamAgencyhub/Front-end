import { ReactNode } from "react";

type Statistics = {
  label: string;
  number: string;
  icon: ReactNode;
};

interface StatisticsInfoWidgetsProps {
  info?: Statistics[];
}

export default function StatisticsInfoWidgets({
  info,
}: StatisticsInfoWidgetsProps) {
  return info?.map(({ label, number, icon }) => (
    <div
      key={label}
      className="flex flex-col items-center justify-around p-4 rounded-2xl gap-1 lg:gap-4 bg-secondary-default w-full h-full "
    >
      <div className="flex flex-row items-center gap-2 font-bold text-lg md:text-xl text-text-default  ">
        <span>{number}</span>
        {icon}
      </div>
      <h5 className="text-text-muted text-xs md:text-sm text-nowrap font-semibold">
        {label}
      </h5>
    </div>
  ));
}
