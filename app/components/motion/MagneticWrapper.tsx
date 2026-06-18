"use client";

import React from "react";
import { useMagnetic } from "../../lib/animations";
import { useMotionSettings } from "./MotionProvider";

interface MagneticWrapperProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "span";
}

export default function MagneticWrapper({
  children,
  className = "",
  strength = 0.22,
  as: Tag = "div",
}: MagneticWrapperProps) {
  const { reducedMotion } = useMotionSettings();
  const { ref, onMove, onLeave } = useMagnetic(strength);

  if (reducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`magnetic-wrap ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor="pointer"
    >
      {children}
    </Tag>
  );
}
