import { IconIonicIosArrowLeft } from "../icons";

export default function Pagination() {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="rounded-2xl cursor-pointer  px-5 py-3 shadow-lg shadow-primary-500/50 font-semibold bg-primary-500 text-white">
        1
      </div>
      <div className="rounded-2xl cursor-pointer bg-secondary-default px-5 py-3 text-primary-500 font-semibold">
        2
      </div>
      <div className="rounded-2xl cursor-pointer bg-secondary-default px-5 py-3 text-primary-500 font-semibold">
        3
      </div>
      <div className="rounded-2xl cursor-pointer bg-secondary-default px-5 py-3 text-primary-500 font-semibold">
        4
      </div>
      <IconIonicIosArrowLeft className="fill-primary-500 stroke-none text-2xl rotate-180" />
    </div>
  );
}
