"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CursorGlow = () => {
  const [mounted, setMounted] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    setMounted(true);
    // Only enable on desktop/pointer devices to preserve mobile performance
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsPointerDevice(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 175);
      mouseY.set(e.clientY - 175);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted || !isPointerDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none z-30 blur-[90px] opacity-40 dark:opacity-25"
      style={{
        x: mouseX,
        y: mouseY,
        background: "radial-gradient(circle, rgba(197, 161, 69, 0.45) 0%, rgba(212, 185, 106, 0.15) 45%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
};

export default CursorGlow;
