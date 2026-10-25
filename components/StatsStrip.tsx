"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/data";

interface CounterProps {
  value: string;
}

const AnimatedNumber = ({ value }: CounterProps) => {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? value : "0");

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    if (!isInView) return;

    // Parse the numeric target and suffixes
    const numericMatch = value.match(/\d+[\d,]*/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const cleanNum = parseInt(numericMatch[0].replace(/,/g, ""), 10);
    const prefix = value.startsWith("₹") ? "₹" : "";
    let suffix = "";
    if (value.includes("L+")) suffix = "L+";
    else if (value.includes("+")) suffix = "+";

    const duration = 1600; // ms
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * cleanNum);

      const formatted = current.toLocaleString();
      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value, shouldReduceMotion]);

  return <span ref={ref}>{displayValue}</span>;
};

export const StatsStrip = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full relative z-20 py-10 my-4" aria-label="E-Cell Key Metrics">
      <div className="section-container">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {stats.map((stat, idx) => (
              <div
                key={stat.id}
                className={`flex flex-col items-center text-center ${
                  idx > 0 ? "pt-4 sm:pt-0" : ""
                } ${idx % 2 === 1 ? "sm:pl-4" : ""}`}
              >
                <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ecell-gold tracking-tight mb-1.5 tabular-nums">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsStrip;
