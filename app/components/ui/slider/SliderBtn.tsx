import SvgIconIonicIosArrowLeft from "../../icons/IconIonicIosArrowLeft";

interface SliderBtnProps {
  handleClick?: () => void;
  type: "next" | "prev";
}

export default function SliderBtn({ handleClick, type }: SliderBtnProps) {
  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer shadow-md shadow-gray-400  dark:shadow-[0px_0px_10px_3px]  dark:shadow-gray-900 z-40  rounded-full bg-secondary-default p-2 absolute -translate-y-1/2 top-1/2 ring-0  ${
        type === "next" ? "-right-4" : "-left-4"
      }`}
    >
      <SvgIconIonicIosArrowLeft
        className={`fill-primary-500 stroke-0 text-xl ${
          type === "next" ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>
  );
}
