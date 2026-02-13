import { statisticsInfoWidgetData } from "./staticData";
import StatisticsIconBox from "./StatisticsIconBox";
import StatisticsInfoWidgets from "./StatisticsInfoWidgets";

export default function StatisticsSection() {
  return (
    <div className=" col-span-1 grid grid-cols-1 py-8 gap-6 md:items-center  md:grid-cols-2 mt-20 md:mt-auto">
      <StatisticsIconBox />
      <div className="col-span-1 grid grid-cols-2 md:grid-cols-2 md:grid-rows-2 gap-6 items-center justify-center ">
        <StatisticsInfoWidgets info={statisticsInfoWidgetData} />
      </div>
    </div>
  );
}
