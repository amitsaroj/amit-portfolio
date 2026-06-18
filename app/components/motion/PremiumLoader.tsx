"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMotionSettings } from "./MotionProvider";

const LOADER_KEY = "portfolio-loader-seen";

export default function PremiumLoader() {
  const { reducedMotion } = useMotionSettings();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(LOADER_KEY) || reducedMotion) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(LOADER_KEY, "1");
      setVisible(false);
    }, 1200);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="premium-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <motion.div
            className="premium-loader-logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            AS
          </motion.div>
          <motion.div
            className="premium-loader-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
