"use client";

import React, { createContext, useContext } from "react";
import { usePrefersReducedMotion } from "../../lib/animations";

const MotionContext = createContext({ reducedMotion: false });

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();
  return <MotionContext.Provider value={{ reducedMotion }}>{children}</MotionContext.Provider>;
}

export function useMotionSettings() {
  return useContext(MotionContext);
}
