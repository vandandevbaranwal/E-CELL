"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function AmbientScrollBackground() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  // 1. E-Cell Logo Parallax & Subtle Watermark Fade
  // Starts as an elegant, non-overpowering watermark and fades to 0 as you scroll past Hero
  const logoY = useTransform(
    scrollYProgress,
    [0, 0.4],
    shouldReduceMotion ? [0, 0] : [0, -120]
  );
  const logoRotate = useTransform(
    scrollYProgress,
    [0, 0.4],
    shouldReduceMotion ? [0, 0] : [0, 8]
  );
  const logoScale = useTransform(
    scrollYProgress,
    [0, 0.35],
    shouldReduceMotion ? [1, 1] : [1, 0.96]
  );
  // Toned down brightness & fades to 0 as you scroll into deeper sections
  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.32],
    [0.32, 0.12, 0]
  );

  // 2. Glow to Dark Side Transition:
  // Starts with warm golden glow at Hero, then dims smoothly into deep obsidian/dark as you scroll down
  const spotlightOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.38],
    [0.60, 0.20, 0]
  );
  const secondaryGlowOpacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.45],
    [0.50, 0.15, 0]
  );
  const gridOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55],
    [0.10, 0.04, 0.015]
  );

  // Deep dark backdrop overlay that intensifies on scroll ("go to the dark side")
  const darkOverlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.20, 0.45],
    [0, 0.5, 0.85]
  );

  // Spotlight position
  const spotlightX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    shouldReduceMotion ? ["50%", "50%", "50%"] : ["55%", "35%", "50%"]
  );
  const spotlightY = useTransform(
    scrollYProgress,
    [0, 0.4],
    shouldReduceMotion ? ["20%", "20%"] : ["12%", "35%"]
  );

  // Subtle grid parallax
  const gridY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -60]
  );

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* ── Layer 1: Ambient Gold Spotlight Beam (Hero Glow -> Dims on Scroll) ── */}
      <motion.div
        style={{
          left: spotlightX,
          top: spotlightY,
          x: "-50%",
          y: "-50%",
          opacity: spotlightOpacity,
        }}
        className="absolute w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] lg:w-[850px] lg:h-[850px] rounded-full bg-gradient-to-tr from-ecell-gold/25 via-ecell-gold-light/15 to-transparent blur-[120px] dark:from-ecell-gold/20 dark:via-ecell-gold-dark/15"
      />

      {/* Secondary Cool Ambient Glow at Top */}
      <motion.div
        style={{
          opacity: secondaryGlowOpacity,
        }}
        className="absolute left-[10%] top-[15%] w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-500/10 dark:bg-indigo-950/25 blur-[140px]"
      />

      {/* ── Layer 2: Subtle Constellation Grid (Gently Fades on Scroll) ── */}
      <motion.div
        style={{ y: gridY, opacity: gridOpacity }}
        className="absolute inset-x-0 -top-40 h-[120%] bg-[radial-gradient(#C5A145_1px,transparent_1px)] [background-size:40px_40px]"
      />

      {/* Dynamic Constellation Vector Overlay (Hero area only) */}
      <motion.svg
        style={{ opacity: spotlightOpacity }}
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A145" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4B96A" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g stroke="url(#goldGradient)" strokeWidth="1" strokeDasharray="3 3">
          <line x1="85%" y1="12%" x2="92%" y2="28%" />
          <line x1="92%" y1="28%" x2="80%" y2="42%" />
          <line x1="80%" y1="42%" x2="88%" y2="60%" />

          <line x1="12%" y1="20%" x2="22%" y2="35%" />
          <line x1="22%" y1="35%" x2="15%" y2="52%" />
        </g>

        <circle cx="85%" cy="12%" r="2.5" fill="#C5A145" filter="url(#glow)" />
        <circle cx="92%" cy="28%" r="3" fill="#D4B96A" filter="url(#glow)" />
        <circle cx="80%" cy="42%" r="2.5" fill="#C5A145" filter="url(#glow)" />

        <circle cx="12%" cy="20%" r="2.5" fill="#C5A145" filter="url(#glow)" />
        <circle cx="22%" cy="35%" r="3" fill="#D4B96A" filter="url(#glow)" />
      </motion.svg>

      {/* ── Layer 3: Iconic E-Cell Logo Watermark (Refined, Non-glaring, Fades on Scroll) ── */}
      <motion.div
        style={{
          y: logoY,
          rotate: logoRotate,
          scale: logoScale,
          opacity: logoOpacity,
        }}
        className="absolute top-20 sm:top-24 md:top-28 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 lg:right-16 xl:right-24 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[440px] md:h-[440px] lg:w-[500px] lg:h-[500px]"
      >
        {/* Soft, gentle gold backlight (not over-bright) */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-ecell-gold/20 via-ecell-gold-light/10 to-transparent blur-[50px] transform scale-80" />

        {/* Concentric Gold Orbit Rings */}
        <div className="absolute inset-[-4%] rounded-full border border-ecell-gold/20 dark:border-ecell-gold/15 border-dashed animate-[spin_100s_linear_infinite]" />
        <div className="absolute inset-[-14%] rounded-full border border-ecell-gold/15 dark:border-ecell-gold/10 animate-[spin_70s_linear_infinite_reverse]" />

        {/* Full Official E-Cell Logo Insignia - Clean & Crisp */}
        <div className="relative w-full h-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
          <Image
            src="/ecell-logo-hd.png"
            alt="E-Cell IET Lucknow Official Emblem Watermark"
            fill
            priority
            unoptimized={true}
            sizes="(max-width: 768px) 340px, 500px"
            className="object-contain pointer-events-none brightness-100 contrast-105 [image-rendering:-webkit-optimize-contrast]"
          />
        </div>
      </motion.div>

      {/* ── Layer 4: Deep Dark Transition Veil ("To the Dark Side") ── */}
      <motion.div
        style={{ opacity: darkOverlayOpacity }}
        className="absolute inset-0 bg-[#060810]/75 dark:bg-[#070913]/85"
      />
    </div>
  );
}
