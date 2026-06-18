import { EASE_OUT_EXPO, EASE_OUT_QUART } from "./easing";

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT_QUART } },
};

export const slideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT_EXPO } },
};

export const slideDown = {
  hidden: { opacity: 0, y: -28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT_EXPO } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE_OUT_EXPO } },
};

export const slideRight = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE_OUT_EXPO } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
};

export const blurReveal = {
  hidden: { opacity: 0, y: 16, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE_OUT_EXPO },
  },
};

export const textReveal = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT_EXPO } },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0.06) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export const staggerChildren = staggerContainer;

export const floatingAnimation = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

export const pageTransition = {
  initial: { opacity: 0, scale: 0.985 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE_OUT_EXPO } },
  exit: { opacity: 0, scale: 0.99, transition: { duration: 0.3 } },
};

export const sectionHeaderVariants = slideUp;

export const cardRevealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO, delay: i * 0.07 },
  }),
};
