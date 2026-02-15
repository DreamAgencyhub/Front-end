"use client";

export default function SliderItem({ text }: { text: string }) {
  // const offset = index * 250;

  return (
    <div
      className={`bg-secondary-muted rounded-4xl shrink-0 w-full md:w-1/2 lg:w-1/3 h-72`}
    >
      {text}
    </div>
  );
}
