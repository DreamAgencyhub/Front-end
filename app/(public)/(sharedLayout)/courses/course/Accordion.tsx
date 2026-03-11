"use client";

import {
  IconIonicIosArrowLeft,
  IconIonicIosTimer,
} from "@/app/components/icons";
import { useEffect, useRef, useState } from "react";

type Content = { title: string; duration: string | number };

interface AccordionGroupProps {
  data: {
    title: string;
    content?: Content[];
  }[];
}

export default function AccordionGroup({ data }: AccordionGroupProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return data?.map((item) => (
    <AccordionItem
      key={item.title}
      id={item.title}
      onToggle={handleToggle}
      openId={openId}
      content={item.content}
      title={item.title}
    />
  ));
}

interface AccordionItemProps {
  openId: string | null;
  onToggle: (id: string) => void;
  id: string;
  title: string;
  content?: Content[];
}

function AccordionItem({
  openId,
  onToggle,
  id,
  content,
  title,
}: AccordionItemProps) {
  const [height, setHeight] = useState<string>("60px");
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current)
      setHeight(() =>
        openId !== id ? "60px" : `${ref.current?.scrollHeight}px`,
      );
  }, [openId, height, setHeight, id]);

  return (
    <div
      ref={ref}
      onClick={() => onToggle(id)}
      className=" bg-secondary-default rounded-2xl border border-text-muted/30  pt-1 pb-4 px-2 flex flex-col font-semibold  select-none cursor-pointer"
      style={{
        overflow: "hidden",
        height,
        transition: "height 0.3s ease-in-out",
      }}
    >
      <div className="flex flex-row items-center justify-between py-2">
        <div className="flex flex-row gap-2 text-sm">
          <span>{title}</span>
        </div>
        <div className="rounded-xl bg-primary-500/20 text-primary-500 text-xs p-2  flex items-center gap-2 ">
          <span> {content?.length} lectures</span>
          <IconIonicIosArrowLeft
            className={`text-[10px] fill-primary-500 stroke-1 transition-transform  ${
              openId !== id ? "-rotate-90" : "rotate-90"
            }`}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {content?.map((item, index) => (
          <div
            onClick={(e) => e.stopPropagation()}
            key={item.title}
            className="bg-default-color rounded-xl flex flex-row items-center justify-between py-3 px-4 border border-text-default/2 hover:shadow-lg transition-shadow "
          >
            <div className="flex flex-row items-center gap-2 ">
              <span className="rounded-full px-2.5 py-1 bg-gray-300 text-xs ">
                {index + 1}
              </span>
              <span className="text-xs md:text-sm font-semibold">
                {item.title}
              </span>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <IconIonicIosTimer className="stroke-none fill-text-muted" />
              <span className="text-xs md:text-sm">{item.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
