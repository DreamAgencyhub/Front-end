import Image from "next/image";
import consultantPic from "@/public/assets/images/testing-profile.jpg";

export default function Avatar({
  responsive,
  noRotate,
}: {
  responsive?: boolean;
  noRotate?: boolean;
}) {
  return (
    <div
      className={`relative w-full bg-default-color h-16 z-10 ${
        responsive &&
        "md:w-82 md:bg-secondary-default  md:rotate-90 md:-left-26"
      }`}
    >
      <div
        className={`absolute right-1/2 translate-x-1/2 z-20 bg-default-color flex items-center justify-center w-36 h-36  rounded-full ${
          responsive && "md:w-38 md:h-38 md:top-0"
        }`}
      >
        <div
          className={`relative w-32 h-32 rounded-full overflow-hidden ${
            responsive && "md:-rotate-90"
          }`}
        >
          <Image src={consultantPic} alt="consultants_profile" />
        </div>
      </div>
      <div
        className={`absolute right-0 -bottom-20 bg-secondary-default rounded-3xl h-26 z-20 ${
          responsive && " md:-bottom-7 md:-right-4"
        } ${!noRotate ? "w-26" : " w-26 md:w-11  lg:w-24"}`}
      ></div>
      <div
        className={`absolute left-0 -bottom-20 bg-secondary-default rounded-3xl w-26 h-26 z-20 ${
          responsive && " md:-top-3 md:-left-4"
        } ${!noRotate ? "w-26 " : "w-26 md:w-11  lg:w-24"}`}
      ></div>
      <div
        className={`hidden absolute w-full h-16 bg-default-color z-10 top-16 ${
          responsive && "md:block"
        } `}
      ></div>
    </div>
  );
}
