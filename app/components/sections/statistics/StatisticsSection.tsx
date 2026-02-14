import { Analytics } from "../../icons";
import IconBox from "../../ui/IconBox";
import { statisticsInfoWidgetData } from "./staticData";
import StatisticsInfoWidgets from "./StatisticsInfoWidgets";

export default function StatisticsSection() {
  return (
    <div className="col-span-1 grid grid-cols-1 py-8 gap-6 md:items-center  md:grid-cols-2 mt-20 md:mt-auto">
      <div className="place-self-center">
        <IconBox
          text="We are Proud of our statistics & figures."
          title=" Statistics & figures"
          icon={<Analytics />}
        />
      </div>
      <div className="col-span-1 grid grid-cols-2 md:grid-cols-2 md:grid-rows-2 gap-6 items-center justify-center ">
        <StatisticsInfoWidgets info={statisticsInfoWidgetData} />
      </div>
    </div>
  );
}
