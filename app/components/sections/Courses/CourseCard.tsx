import Image from "next/image";
import CourseCover from "@/public/assets/images/CourseCover.jpg";
import { IconIonicIosTimer, IconOpenMicrophone } from "../../icons";
import Button from "../../ui/Button";

export default function CourseCard() {
  return (
    <div className=" relative bg-transparent w-full h-full rounded-4xl overflow-hidden  ">
      <div className="bg-default-color rounded-3xl aspect-square z-30 w-42 absolute top-1 left-1/2 -translate-x-1/2  flex items-center justify-center  ">
        <div className="rounded-3xl w-36 h-36  overflow-hidden shadow-lg ">
          <Image
            src={CourseCover}
            alt="Course cover"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className=" relative bg-transparent h-1/3 w-full z-30 ">
        <div className="rounded-t-full h-40 w-9 lg:w-10 bg-secondary-default absolute left-0 -bottom-30"></div>
        <div className="rounded-t-full h-40 w-9 lg:w-10 bg-secondary-default absolute right-0 -bottom-30"></div>
      </div>
      <div className="h-62.5 bg-secondary-default flex flex-col items-center justify-center ">
        <div className="py-2 px-3 h-1/2 w-full flex flex-col gap-2 justify-start relative z-40 text-center">
          <h3 className="font-bold text-lg">Finance Markets</h3>
          <div className="flex flex-row items-center  gap-2 justify-between ">
            <div className="flex flex-row items-center gap-1">
              <span>
                <IconIonicIosTimer className="stroke-default-color fill-default-color  stroke-[.1px] text-sm " />
              </span>
              <p className="text-xs font-semibold text-text-muted">
                {10} hours and {20} min
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <span>
                <IconOpenMicrophone className="stroke-default-color fill-default-color  stroke-[.1px] text-sm " />
              </span>
              <p className="text-xs font-semibold  text-green-500">Ready</p>
            </div>
          </div>
          <div className="flex flex-row items-center  gap-2 justify-between ">
            <p className="text-lg font-semibold text-text-default">
              {" "}
              $95.99{" "}
              <span className=" text-[10px] py-1 px-2  bg-accent-500 text-white rounded-full">
                9%
              </span>{" "}
            </p>
            <p className="text-base text-text-muted line-through"> $129.99 </p>
          </div>
          <Button
            variant="primary"
            size="medium"
            directTo="/"
            className="font-semibold text-sm"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
}
