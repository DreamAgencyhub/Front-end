import IconBox from "@/app/components/ui/IconBox";
import VideoBox from "../../../../components/ui/VideoBox";
import {
  IconAwesomeChalkboardTeacher,
  IconAwesomeHeadset,
  IconFeatherCalendar,
  IconFeatherUsers,
  IconIonicIosTimer,
  IconWeatherCloudDown,
} from "@/app/components/icons";

const courseInfo = [
  {
    text: "Access: Spot plyer",
    icon: (
      <IconWeatherCloudDown className="stroke-none fill-text-muted text-lg " />
    ),
  },
  {
    text: "publish date: 2/2026",
    icon: <IconFeatherCalendar className="stroke-text-muted text-lg " />,
  },
  {
    text: "Last update: 3/2026",
    icon: (
      <IconAwesomeHeadset className="stroke-none fill-text-muted text-lg " />
    ),
  },
  {
    text: "telegram and website",
    icon: (
      <IconAwesomeHeadset className="stroke-none fill-text-muted text-lg " />
    ),
  },
];

export default function CourseCardInfo() {
  return (
    <div className="rounded-3xl bg-secondary-default px-6 pb-6 grid grid-cols-1 md:grid-cols-2 md:grid-rows-[1fr_140px] lg:grid-rows-[200px_100px_120px]">
      <VideoBox />

      <div className="py-4 md:px-4 md:col-start-1 md:row-start-1">
        <h3 className="text-xl font-bold">Online Marketing</h3>
        <p className="text-text-muted text-xs font-semibold mt-2">
          Learn how to market on social media and online platforms
        </p>
        <p className="text-sm font-semibold py-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          dolorem id illo error voluptatibus nesciunt itaque hic? Atque earum
          maxime quae. Vitae, recusandae reprehenderit fugit sint dolore
          adipisci ab perspiciatis.
        </p>
      </div>

      <div className="w-full md:col-span-2 flex flex-col md:flex-row md:justify-between lg:col-span-1 lg:flex-col  lg:items-start">
        <div className="grid grid-cols-3 py-4 items-center md:gap-4">
          <IconBox
            boxStyle="lg:w-15! lg:rounded-3xl!"
            className="items-center font-semibold text-xs!"
            text="12:40"
            icon={
              <IconIonicIosTimer className=" text-2xl stroke-none fill-gray-50" />
            }
          />
          <IconBox
            boxStyle="lg:w-15! lg:rounded-3xl!"
            className="items-center font-semibold text-xs!"
            text="124 videos"
            icon={
              <IconAwesomeChalkboardTeacher className=" text-2xl stroke-none fill-gray-50" />
            }
          />
          <IconBox
            boxStyle="lg:w-15! lg:rounded-3xl!"
            className="items-center font-semibold text-xs!"
            text="2.390 students"
            icon={
              <IconFeatherUsers className=" text-2xl stroke-gray-50 stroke-[3px]" />
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 ">
          {courseInfo.map((item) => (
            <div
              key={item.text}
              className="flex flex-col first:justify-end nth-[2]:justify-end"
            >
              <div className="rounded-xl flex flex-row gap-2 items-center bg-default-color p-2">
                {item.icon}
                <span className="text-xs text-nowrap font-semibold text-text-muted ">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
