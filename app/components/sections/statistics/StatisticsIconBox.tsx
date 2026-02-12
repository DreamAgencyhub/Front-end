import { Analytics } from "../../icons";

export default function StatisticsIconBox() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-5 items-center ">
        <div className="bg-primary-500 text-gray-50 rounded-3xl p-3 w-18 aspect-square flex justify-center items-center shadow-[0px_0px_20px_5px] shadow-primary-200 text-4xl">
          <Analytics />
        </div>
        <div className="">
          <h3 className="text-text-default font-black text-xl [font-family:var(--font-space-grotesk)]">
            Statistics & figures
          </h3>
        </div>
      </div>
      <span className="text-text-muted text-sm ml-6 py-3">
        We are Proud of our statistics & figures.
      </span>
    </div>
  );
}
