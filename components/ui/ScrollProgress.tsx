"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #A8872E 0%, #C5A145 50%, #D4B96A 100%)",
        boxShadow: "0 0 10px rgba(197, 161, 69, 0.65), 0 0 20px rgba(197, 161, 69, 0.3)",
      }}
    />
  );
};

export default ScrollProgress;
