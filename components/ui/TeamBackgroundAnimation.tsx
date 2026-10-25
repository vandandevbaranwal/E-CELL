"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function TeamBackgroundAnimation() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  // Scroll parallax transforms
  const auraY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["20%", "20%"] : ["10%", "80%"]
  );
  const auraX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    shouldReduceMotion ? ["50%", "50%", "50%", "50%"] : ["50%", "30%", "70%", "50%"]
  );

  const logoY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -140]
  );
  const logoRotate = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 15]
  );
  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.22, 0.28, 0.20, 0.12]
  );

  const gridY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -80]
  );

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* ── Layer 1: Ambient Drifting Gold Spotlight ── */}
      <motion.div
        style={{
          left: auraX,
          top: auraY,
          x: "-50%",
          y: "-50%",
        }}
        className="absolute w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] lg:w-[850px] lg:h-[850px] rounded-full bg-gradient-to-tr from-ecell-gold/20 via-ecell-gold-light/10 to-transparent blur-[130px] dark:from-ecell-gold/15 dark:via-ecell-gold-dark/10 opacity-70"
      />

      {/* Secondary Deep Navy/Indigo Glow for Atmospheric Depth */}
      <div className="absolute right-[10%] top-[30%] w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-500/10 dark:bg-indigo-950/20 blur-[140px]" />

      {/* ── Layer 2: Subtle Dot Matrix Grid ── */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-x-0 -top-40 h-[120%] bg-[radial-gradient(#C5A145_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05] dark:opacity-[0.10]"
      />

      {/* ── Layer 3: Dynamic Interconnected Team Network Nodes (Constellation) ── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.16] dark:opacity-[0.24]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="teamGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A145" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4B96A" stopOpacity="0.2" />
          </linearGradient>
          <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Network Connections */}
        <g stroke="url(#teamGoldGrad)" strokeWidth="1" strokeDasharray="3 3">
          <line x1="10%" y1="18%" x2="22%" y2="30%" />
          <line x1="22%" y1="30%" x2="14%" y2="48%" />
          <line x1="14%" y1="48%" x2="26%" y2="65%" />

          <line x1="88%" y1="15%" x2="76%" y2="28%" />
          <line x1="76%" y1="28%" x2="85%" y2="45%" />
          <line x1="85%" y1="45%" x2="78%" y2="68%" />
          <line x1="78%" y1="68%" x2="90%" y2="82%" />
        </g>

        {/* Pulsing Star Nodes */}
        <circle cx="10%" cy="18%" r="3" fill="#C5A145" filter="url(#nodeGlow)" />
        <circle cx="22%" cy="30%" r="4" fill="#D4B96A" filter="url(#nodeGlow)" />
        <circle cx="14%" cy="48%" r="3" fill="#C5A145" filter="url(#nodeGlow)" />
        <circle cx="26%" cy="65%" r="3.5" fill="#D4B96A" filter="url(#nodeGlow)" />

        <circle cx="88%" cy="15%" r="3" fill="#C5A145" filter="url(#nodeGlow)" />
        <circle cx="76%" cy="28%" r="4" fill="#D4B96A" filter="url(#nodeGlow)" />
        <circle cx="85%" cy="45%" r="3" fill="#C5A145" filter="url(#nodeGlow)" />
        <circle cx="78%" cy="68%" r="3.5" fill="#D4B96A" filter="url(#nodeGlow)" />
        <circle cx="90%" cy="82%" r="4" fill="#D4B96A" filter="url(#nodeGlow)" />
      </svg>

      {/* ── Layer 4: Elegant E-Cell Insignia Watermark on Team Flank ── */}
      <motion.div
        style={{
          y: logoY,
          rotate: logoRotate,
          opacity: logoOpacity,
        }}
        className="absolute top-24 right-4 sm:right-10 md:right-16 lg:right-24 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px]"
      >
        {/* Soft golden core */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-ecell-gold/20 via-ecell-gold-light/10 to-transparent blur-[70px] transform scale-75" />

        {/* Orbit Rings */}
        <div className="absolute inset-[-6%] rounded-full border border-ecell-gold/20 dark:border-ecell-gold/15 border-dashed animate-[spin_120s_linear_infinite]" />
        <div className="absolute inset-[-18%] rounded-full border border-ecell-gold/10 dark:border-ecell-gold/10 animate-[spin_90s_linear_infinite_reverse]" />

        {/* Crisp HD Logo Watermark */}
        <div className="relative w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
          <Image
            src="/ecell-logo-hd.png"
            alt="E-Cell IET Lucknow Insignia"
            fill
            priority
            unoptimized={true}
            sizes="(max-width: 768px) 380px, 560px"
            className="object-contain pointer-events-none brightness-105 contrast-110 [image-rendering:-webkit-optimize-contrast]"
          />
        </div>
      </motion.div>
    </div>
  );
}
