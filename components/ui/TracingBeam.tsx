"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, Math.max(svgHeight, 100)]),
    {
      stiffness: 400,
      damping: 80,
    }
  );

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, Math.max(svgHeight - 150, 80)]),
    {
      stiffness: 400,
      damping: 80,
    }
  );

  const dotScale = useSpring(
    useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0.8, 1.2, 1.2, 0.8]),
    { stiffness: 300, damping: 30 }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-7xl mx-auto h-full", className)}
    >
      {/* Tracing SVG Beam (visible on md+ screens) */}
      <div className="absolute -left-4 md:-left-8 lg:-left-12 top-6 hidden md:block pointer-events-none">
        {/* Pulsing Glowing Dot */}
        <motion.div
          style={{ scale: dotScale }}
          className="ml-[18px] h-5 w-5 rounded-full border border-ecell-gold/40 shadow-[0_0_12px_rgba(197,161,69,0.5)] flex items-center justify-center bg-black-100"
        >
          <div className="h-2 w-2 rounded-full bg-ecell-gold shadow-[0_0_6px_#C5A145]" />
        </motion.div>

        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          {/* Base track */}
          <line
            x1="10"
            y1="0"
            x2="10"
            y2={svgHeight}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Animated Gold Beam */}
          <motion.line
            x1="10"
            y1="0"
            x2="10"
            y2={svgHeight}
            stroke="url(#ecell-gold-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <defs>
            <motion.linearGradient
              id="ecell-gold-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#A8872E" stopOpacity="0" />
              <stop stopColor="#C5A145" stopOpacity="1" />
              <stop stopColor="#D4B96A" stopOpacity="1" />
              <stop stopColor="#C5A145" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      <div ref={contentRef} className="w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default TracingBeam;
