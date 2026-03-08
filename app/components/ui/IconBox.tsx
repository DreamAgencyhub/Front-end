import { ReactNode } from "react";

type IconBoxProps = {
  title?: string;
  text?: string;
  icon?: ReactNode;
  className?: string;
  boxStyle?: string;
};

export default function IconBox({
  text,
  title,
  icon,
  className,
  boxStyle,
}: IconBoxProps) {
  return (
    <div className={` ${className} flex flex-col text-sm lg:text-base`}>
      <div className="flex flex-row gap-5 items-center ">
        <div
          className={` ${boxStyle} bg-primary-500 text-gray-50 rounded-4xl p-3 w-18 lg:w-24  lg:text-5xl aspect-square flex justify-center items-center shadow-[0px_0px_20px_5px] shadow-primary-200 dark:shadow-primary-900 text-4xl`}
        >
          {icon}
        </div>
        {title && (
          <div className="">
            <h3 className="text-text-default font-black text-xl lg:text-2xl [font-family:var(--font-space-grotesk)]">
              {title}
            </h3>
          </div>
        )}
      </div>
      <span className={`text-text-muted   py-3 ${title ? "ml-6" : ""}`}>
        {text}
      </span>
    </div>
  );
}
