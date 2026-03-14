interface VideoBox {
  title?: string;
  border?: boolean;
  coverText?: string;
  titleAlign?: "text-center" | "text-left" | "text-right";
  titleStyle?: string;
  subTitle?: string;
}

export default function VideoBox({
  title,
  border,
  coverText,
  titleAlign,
  titleStyle,
  subTitle,
}: VideoBox) {
  return (
    <div className="flex flex-col w-full items-center gap-6">
      <div className="w-full flex flex-col items-center">
        <h3
          className={`${titleStyle} ${titleAlign} text-2xl font-bold w-full lg:max-w-4xl ${
            border ? " py-4 border-y border-dashed" : ""
          }`}
        >
          {title}
        </h3>
        <span className="text-xs text-text-muted font-semibold">
          {subTitle}
        </span>
      </div>
      <div className=" relative rounded-3xl aspect-video w-full lg:max-w-4xl self-center bg-gray-600">
        <p className=" absolute bottom-4 left-3 text-xs text-gray-200 ">
          {coverText && coverText}
        </p>
      </div>
    </div>
  );
}
