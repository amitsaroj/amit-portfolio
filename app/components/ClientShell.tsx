"use client";

import React from "react";
import CustomCursor from "./motion/CustomCursor";
import { MotionProvider } from "./motion/MotionProvider";
import PremiumLoader from "./motion/PremiumLoader";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      <PremiumLoader />
      <CustomCursor />
      {children}
    </MotionProvider>
  );
}
