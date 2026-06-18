"use client";

import React from "react";
import { motion } from "framer-motion";
import { blurReveal } from "../../lib/animations";
import { useMotionSettings } from "./MotionProvider";

interface BlurRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  split?: "words" | "chars";
  delay?: number;
}

export default function BlurReveal({
  text,
  className = "",
  as: Tag = "span",
  split = "words",
  delay = 0,
}: BlurRevealProps) {
  const { reducedMotion } = useMotionSettings();
  const parts = split === "words" ? text.split(" ") : text.split("");

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={`blur-reveal ${className}`.trim()} aria-label={text}>
      {parts.map((part, i) => (
        <span key={`${part}-${i}`} className="blur-reveal-mask" aria-hidden="true">
          <motion.span
            variants={blurReveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: delay + i * (split === "words" ? 0.06 : 0.02) }}
          >
            {part}
            {split === "words" && i < parts.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
