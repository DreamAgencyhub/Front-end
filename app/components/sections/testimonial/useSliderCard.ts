"use client";

import { useState } from "react";

export function useDragSlider() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDeltaX(e.clientX - startX);
  };

  const onPointerUp = () => {
    setIsDragging(false);
  };

  return {
    deltaX,
    isDragging,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    setDeltaX,
  };
}
