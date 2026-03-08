"use client";

import { ReactNode, useState } from "react";
import { ClosedEye, OpenEye } from "../icons";

export default function BoxExpander({ children }: { children: ReactNode }) {
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => setShow((prev) => !prev);

  return (
    <div
      className={`relative rounded-3xl py-4 px-5 bg-secondary-default  overflow-hidden ${
        !show ? "h-40 md:h-60" : "h-fit"
      }`}
    >
      <div className="z-10">{children}</div>
      {!show ? (
        <div className="bg-linear-0 from-secondary-default to-secondary-default/90 z-30 w-full h-16 absolute bottom-0 left-0 right-0 text-center flex items-center justify-center  ">
          <div
            onClick={toggleShow}
            className="flex items-center gap-2 bg-default-color py-2 px-3 cursor-pointer hover:bg-secondary-muted  rounded-xl"
          >
            <OpenEye className="stroke-3 fill-text-muted text-md " />
            <span className="text-xs font-semibold">Show more</span>
          </div>
        </div>
      ) : (
        <div className=" absolute z-40 w-full py-4 bottom-0 right-0 left-0 flex items-center justify-center ">
          <div
            onClick={toggleShow}
            className="flex items-center gap-2 bg-default-color py-2 px-3 cursor-pointer hover:bg-secondary-muted  rounded-xl"
          >
            <ClosedEye className="stroke-3 fill-text-muted text-md " />
            <span className="text-xs font-semibold">Show less</span>
          </div>
        </div>
      )}
    </div>
  );
}
