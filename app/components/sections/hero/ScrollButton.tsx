"use client";

import { MouseEvent } from "react";
import Button from "../../ui/Button";
import { handleScroll } from "@/app/utilities/helpers";
import SvgIconAwesomeArrowDown from "../../icons/IconAwesomeArrowDown";

export default function ScrollButton() {
  return (
    <Button
      directTo="/statistics"
      variant="primary"
      size="medium"
      onClick={(e: MouseEvent<HTMLAnchorElement>) =>
        handleScroll(e, "/statistics", true)
      }
      className="rounded-full!  p-3! absolute bottom-0 -translate-x-1/2 left-1/2"
    >
      <SvgIconAwesomeArrowDown />
    </Button>
  );
}
