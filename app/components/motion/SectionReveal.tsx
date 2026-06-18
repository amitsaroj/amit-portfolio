"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../lib/animations";
import { useMotionSettings } from "./MotionProvider";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionReveal({ children, className = "" }: SectionRevealProps) {
  const { reducedMotion } = useMotionSettings();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-72px" }}
      variants={slideUp}
    >
      {children}
    </motion.div>
  );
}
