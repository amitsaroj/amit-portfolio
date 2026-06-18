"use client";

import React from "react";
import { useMouseParallax } from "../../lib/animations";
import { useMotionSettings } from "./MotionProvider";

export default function AuroraBackground() {
  const { reducedMotion } = useMotionSettings();
  const offset = useMouseParallax(reducedMotion ? 0 : 0.35);

  return (
    <div className="aurora-bg" aria-hidden="true">
      <div
        className="aurora-bg-layer aurora-bg-layer-1"
        style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      />
      <div
        className="aurora-bg-layer aurora-bg-layer-2"
        style={{ transform: `translate3d(${-offset.x * 0.6}px, ${-offset.y * 0.6}px, 0)` }}
      />
      <div className="aurora-bg-noise" />
    </div>
  );
}
