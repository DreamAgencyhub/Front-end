import { Analytics } from "../../icons";

export default function StatisticsIconBox() {
  return (
    <div className="place-self-center flex flex-col">
      <div className="flex flex-row gap-5 items-center ">
        <div className="bg-primary-500 text-gray-50 rounded-3xl p-3 w-18 lg:w-24 lg:rounded-4xl lg:text-5xl aspect-square flex justify-center items-center shadow-[0px_0px_20px_5px] shadow-primary-200 dark:shadow-primary-800 text-4xl">
          <Analytics />
        </div>
        <div className="">
          <h3 className="text-text-default font-black text-xl lg:text-2xl [font-family:var(--font-space-grotesk)]">
            Statistics & figures
          </h3>
        </div>
      </div>
      <span className="text-text-muted text-sm lg:text-base ml-6 py-3">
        We are Proud of our statistics & figures.
      </span>
    </div>
  );
}
