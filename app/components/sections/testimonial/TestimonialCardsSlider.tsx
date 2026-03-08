"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Button from "../../ui/Button";

export type Testimonial = {
  id: number;
  avatar?: string;
  name: string;
  role: string;
  content: string;
};

interface Props {
  data: Testimonial[];
}

type Direction = "next" | "prev";

export default function TestimonialSlider({ data }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("next");

  const total = data.length;
  const nextIndex = (index + 1) % total;
  const prevIndex = (index - 1 + total) % total;

  const handleNext = () => {
    setDirection("next");
    setIndex(nextIndex);
  };

  const handlePrev = () => {
    setDirection("prev");
    setIndex(prevIndex);
  };

  return (
    <div className="relative w-85 h-103 mx-auto">
      <div
        className="absolute inset-0 z-10 rounded-3xl shadow-md overflow-hidden"
        style={{
          transform: "translate(-16px, -14px) rotate(-6deg) scale(0.94)",
        }}
      >
        <TestimonialCard
          data={data[nextIndex === 0 ? data.length - 1 : nextIndex - 1]}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: 0, rotate: 0, scale: 1 }}
          animate={{ x: 0, rotate: 0, scale: 1 }}
          exit={{
            x: direction === "prev" ? -100 : 100,
            rotate: direction === "prev" ? -12 : 12,
            scale: 0.92,
            y: 40,
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="absolute inset-0 z-20 rounded-3xl  shadow-xl overflow-hidden"
        >
          <TestimonialCard data={data[index]} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-4">
        <Button
          variant="secondary"
          size="small"
          onClick={() => handlePrev()}
          className="font-semibold"
        >
          Prev
        </Button>
        <Button
          variant="primary"
          size="small"
          onClick={() => handleNext()}
          className=" shadow-none font-semibold "
        >
          Next
        </Button>
      </div>
    </div>
  );
}
