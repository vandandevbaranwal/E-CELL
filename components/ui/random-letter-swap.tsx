"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useReducedMotion, Transition } from "framer-motion";
import { cn } from "@/lib/utils";

interface RandomLetterSwapProps {
  label: string;
  className?: string;
  staggerDuration?: number;
  transition?: Transition;
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export const RandomLetterSwap: React.FC<RandomLetterSwapProps> = ({
  label,
  className,
  staggerDuration = 0.025,
  transition = { duration: 0.6, type: "spring" },
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState<string[]>(() => label.split(""));
  const [isHovered, setIsHovered] = useState(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  useEffect(() => {
    setDisplayText(label.split(""));
    return () => clearAllTimeouts();
  }, [label, clearAllTimeouts]);

  const triggerScramble = useCallback(() => {
    if (shouldReduceMotion) return;
    clearAllTimeouts();

    const originalLetters = label.split("");
    const totalLetters = originalLetters.length;

    originalLetters.forEach((targetChar, index) => {
      if (targetChar === " ") return;

      const baseDelay = index * staggerDuration * 1000;
      const steps = 3; // number of random cycles per letter
      const stepDuration = 40;

      for (let step = 0; step < steps; step++) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => {
            const next = [...prev];
            next[index] = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            return next;
          });
        }, baseDelay + step * stepDuration);

        timeoutsRef.current.push(timeout);
      }

      // Final resolution back to target character
      const finalTimeout = setTimeout(() => {
        setDisplayText((prev) => {
          const next = [...prev];
          next[index] = targetChar;
          return next;
        });
      }, baseDelay + steps * stepDuration);

      timeoutsRef.current.push(finalTimeout);
    });
  }, [label, staggerDuration, shouldReduceMotion, clearAllTimeouts]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    triggerScramble();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <span
      className={cn("inline-flex items-center select-none relative", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={triggerScramble}
      aria-label={label}
      role="text"
    >
      {/* Visual letter container */}
      <span aria-hidden="true" className="inline-flex">
        {displayText.map((char, index) => (
          <motion.span
            key={`${index}-${char}`}
            initial={shouldReduceMotion ? {} : { y: isHovered ? -2 : 0, opacity: 0.85 }}
            animate={{ y: 0, opacity: 1 }}
            transition={transition}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </span>
    </span>
  );
};

export default RandomLetterSwap;
