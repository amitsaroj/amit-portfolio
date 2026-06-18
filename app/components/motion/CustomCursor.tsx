"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsPointerFine } from "../../lib/animations";

export default function CustomCursor() {
  const fine = useIsPointerFine();
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 36, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 420, damping: 36, mass: 0.4 });

  useEffect(() => {
    if (!fine) return;
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, [data-cursor='pointer']");
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, [fine, x, y]);

  if (!fine) return null;

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        style={{ left: 0, top: 0, x: springX, y: springY }}
        aria-hidden="true"
      />
      <motion.div
        className={`custom-cursor-ring${hovering ? " custom-cursor-ring-hover" : ""}`}
        style={{ left: 0, top: 0, x: springX, y: springY }}
        aria-hidden="true"
      />
    </>
  );
}
