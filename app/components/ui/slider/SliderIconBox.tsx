import { ReactNode } from "react";
import Button from "../Button";

type SliderIconBoxProps = {
  title?: string;
  desc?: string;
  linkText?: string;
  href?: string;
  icon?: ReactNode;
};

export default function SliderIconBox({
  title,
  desc,
  linkText,
  href,
  icon,
}: SliderIconBoxProps) {
  return (
    <div className="relative flex flex-col  justify-center  items-center lg:justify-end lg:items-start aspect-square h-54 gap-1">
      {icon}
      <div className="flex flex-col gap-1 justify-center items-start mt-12 ">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p className="text-text-muted font-semibold text-sm w-42 ">{desc}</p>
        <Button
          className="mt-3 font-semibold px-8 text-sm lg:text-base"
          directTo={href}
          size="small"
          variant="primary"
        >
          {linkText}
        </Button>
      </div>
    </div>
  );
}
