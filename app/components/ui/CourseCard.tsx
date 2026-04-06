import Image from "next/image";
import CourseCover from "@/public/assets/images/CourseCover.jpg";
import {
  IconAwesomeUserClock,
  IconAwesomeUserTie,
  IconIonicIosTimer,
  IconOpenMicrophone,
} from "../icons";
import Button from "./Button";
import { calculateOffPrice, formatDate } from "@/app/utilities/helpers";

export type Content = {
  id: string;
  cover?: string;
  title: string;
  price?: number;
  off?: number;
  status?: "finished" | "recording";
  duration?: {
    hour: number;
    min: number;
  };
  reservation?: {
    date: Date;
    hour: number;
    min: number;
    type: "online" | "inPerson";
  };
};

interface CrouseCardProps {
  content: Content;
  btnText: string;
}

export default function CourseCard({ content, btnText }: CrouseCardProps) {
  return (
    <div className=" relative bg-transparent w-60 h-full shrink-0 rounded-3xl overflow-hidden  ">
      <div className="bg-default-color rounded-3xl aspect-square z-30 w-40 absolute top-1 left-1/2 -translate-x-1/2  flex items-center justify-center  ">
        <div className="rounded-3xl w-36 h-36  overflow-hidden shadow-lg ">
          <Image
            src={!content.cover ? CourseCover : content.cover}
            alt="Course cover"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className=" relative bg-transparent h-1/3 w-full z-30 ">
        <div className="rounded-t-full h-40 w-10 lg:w-10 bg-secondary-default absolute left-0 -bottom-30"></div>
        <div className="rounded-t-full h-40 w-10 lg:w-10 bg-secondary-default absolute right-0 -bottom-30"></div>
      </div>
      <div className="h-62.5 bg-secondary-default flex flex-col items-center justify-center ">
        <div className="pb-2 pt-4 px-3 h-1/2 w-full flex flex-col gap-2 justify-around  relative z-40 text-center ">
          <h3 className="font-bold text-lg">{content.title}</h3>

          {content.duration ? (
            <div className="flex flex-row items-center  gap-2 justify-between ">
              <div className="flex flex-row items-center gap-1">
                <span>
                  <IconIonicIosTimer className=" fill-text-muted  stroke-none text-sm " />
                </span>
                <p className="text-xs font-semibold text-text-muted">
                  {content?.duration?.hour} hours and {content?.duration?.min}{" "}
                  min
                </p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <span>
                  <IconOpenMicrophone
                    className={` ${
                      content.status === "finished"
                        ? "stroke-green-500 fill-green-500 "
                        : "stroke-accent-500 fill-accent-500 "
                    }    stroke-[.1px] text-sm`}
                  />
                </span>
                {content.status === "finished" ? (
                  <p className="text-xs font-semibold  text-green-500">Ready</p>
                ) : (
                  <p className="text-xs font-semibold  text-accent-500">
                    Recording
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center  gap-2 justify-between ">
              <div className="flex flex-row items-center gap-1">
                <span>
                  <IconAwesomeUserClock className=" fill-text-muted  stroke-none text-base " />
                </span>
                <p className="text-xs font-semibold">
                  {formatDate(content.reservation?.date)}
                </p>
                {"-"}
                <p className="text-xs font-semibold">
                  {content?.reservation?.hour} : {content?.reservation?.min}
                </p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <span>
                  <IconAwesomeUserTie
                    className={`stroke-none text-sm fill-text-muted`}
                  />
                </span>
                {content.reservation?.type === "online" ? (
                  <p className="text-xs font-semibold">online</p>
                ) : (
                  <p className="text-xs font-semibold">In person</p>
                )}
              </div>
            </div>
          )}

          {content.price && (
            <div className="flex flex-row items-center  gap-2 justify-between ">
              <p className="text-lg font-semibold text-text-default">
                $
                {!content.off
                  ? `${content.price}.00`
                  : calculateOffPrice(content?.price, content.off)}
                {".00 "}
                {content.off && (
                  <span className=" text-[10px] py-1 px-2  bg-accent-500 text-white rounded-full">
                    {content.off}%
                  </span>
                )}
              </p>
              <p className="text-base text-text-muted line-through">
                {" "}
                ${content.price}
                {".00 "}
              </p>
            </div>
          )}
        </div>
        <div className=" flex px-3 w-full">
          <Button
            variant="primary"
            size="medium"
            directTo={`/`}
            className="font-semibold text-sm w-full"
          >
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  );
}
