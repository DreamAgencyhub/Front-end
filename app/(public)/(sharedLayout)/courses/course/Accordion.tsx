"use client";

import {
  IconIonicIosArrowLeft,
  IconIonicIosTimer,
  IconOpenQuestionMark,
} from "@/app/components/icons";
import { useEffect, useRef, useState } from "react";

type Content = { title: string; duration: string | number };

interface AccordionGroupProps {
  data: {
    title?: string;
    content?: Content[];
    question?: string;
    answer?: string;
  }[];
}

export default function AccordionGroup({ data }: AccordionGroupProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id?: string) => {
    if (!id) return;
    setOpenId((prev) => (prev === id ? null : id));
  };

  return data?.map((item) => (
    <AccordionItem
      key={item.title ? item.title : item.question}
      id={item.title ? item.title : item.question}
      onToggle={handleToggle}
      openId={openId}
      content={item.content}
      title={item.title}
      question={item.question}
      answer={item.answer}
    />
  ));
}

interface AccordionItemProps {
  openId?: string | null;
  onToggle: (id?: string) => void;
  id?: string;
  title?: string;
  content?: Content[];
  question?: string;
  answer?: string;
}

function AccordionItem({
  openId,
  onToggle,
  id,
  content,
  title,
  question,
  answer,
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
        <div className="flex flex-row items-center gap-2 text-sm">
          {question && (
            <span className="rounded-xl p-2 border ">
              <IconOpenQuestionMark className="fill-text-muted stroke-none border-text-default/10" />
            </span>
          )}
          <span>{title ? title : question}</span>
        </div>
        {title && content ? (
          <div className="rounded-xl bg-primary-500/20 text-primary-500 text-xs p-2  flex items-center gap-2 ">
            <span> {content?.length} lectures</span>
            <IconIonicIosArrowLeft
              className={`text-[10px] fill-primary-500 stroke-1 transition-transform  ${
                openId !== id ? "-rotate-90" : "rotate-90"
              }`}
            />
          </div>
        ) : (
          <IconIonicIosArrowLeft
            className={`text-[10px] fill-text-default mr-2 stroke-1 transition-transform  ${
              openId !== id ? "-rotate-90" : "rotate-90"
            }`}
          />
        )}
      </div>

      {title && content ? (
        <div className="flex flex-col gap-4 mt-4">
          {content?.map((item, index) => (
            <div
              onClick={(e) => e.stopPropagation()}
              key={item.title}
              className="bg-default-color rounded-xl flex flex-row items-center justify-between py-3 px-4 border border-text-default/2 hover:shadow-lg transition-shadow "
            >
              <div className="flex flex-row items-center gap-2 ">
                <span className="rounded-full px-2.5 py-1 bg-gray-300 dark:bg-secondary-default text-xs ">
                  {index + 1}
                </span>
                <span className="text-xs md:text-sm font-semibold ">
                  {item.title}
                </span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <IconIonicIosTimer className="stroke-none fill-text-muted" />
                <span className="text-xs md:text-sm text-nowrap ">
                  {item.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm mt-4 px-1 ">{answer}</p>
      )}
    </div>
  );
}
