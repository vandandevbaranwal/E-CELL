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

  // ── Bottom Dark Zone Scroll Animations (Engaging, Tasteful, Non-Glaring) ──
  const bottomZoneOpacity = useTransform(
    scrollYProgress,
    [0.30, 0.52, 0.88],
    [0, 0.65, 0.85]
  );

  const bottomCloud1Y = useTransform(
    scrollYProgress,
    [0.3, 1],
    shouldReduceMotion ? [0, 0] : [90, -70]
  );
  const bottomCloud2Y = useTransform(
    scrollYProgress,
    [0.3, 1],
    shouldReduceMotion ? [0, 0] : [-40, 80]
  );

  const darkParticlesY = useTransform(
    scrollYProgress,
    [0.25, 1],
    shouldReduceMotion ? [0, 0] : [60, -80]
  );

  const bottomGridOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.68, 1],
    [0, 0.035, 0.055]
  );
  const bottomGridY = useTransform(
    scrollYProgress,
    [0.35, 1],
    shouldReduceMotion ? [0, 0] : [25, -25]
  );

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none [transform:translateZ(0)]"
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
        className="absolute w-[360px] h-[360px] sm:w-[650px] sm:h-[650px] lg:w-[850px] lg:h-[850px] rounded-full bg-gradient-to-tr from-ecell-gold/25 via-ecell-gold-light/15 to-transparent blur-[60px] md:blur-[120px] dark:from-ecell-gold/20 dark:via-ecell-gold-dark/15"
      />

      {/* Secondary Cool Ambient Glow at Top (Desktop only) */}
      <motion.div
        style={{
          opacity: secondaryGlowOpacity,
        }}
        className="hidden md:block absolute left-[10%] top-[15%] w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-500/10 dark:bg-indigo-950/25 blur-[140px]"
      />

      {/* ── Layer 2: Subtle Constellation Grid (Gently Fades on Scroll) ── */}
      <motion.div
        style={{ y: gridY, opacity: gridOpacity }}
        className="absolute inset-x-0 -top-40 h-[120%] bg-[radial-gradient(#C5A145_1px,transparent_1px)] [background-size:40px_40px]"
      />

      {/* Dynamic Constellation Vector Overlay (Desktop only) */}
      <motion.svg
        style={{ opacity: spotlightOpacity }}
        className="hidden md:block absolute inset-0 w-full h-full"
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
        className="absolute top-20 sm:top-24 md:top-28 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 lg:right-16 xl:right-24 w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] md:w-[440px] md:h-[440px] lg:w-[500px] lg:h-[500px]"
      >
        {/* Soft, gentle gold backlight */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-ecell-gold/20 via-ecell-gold-light/10 to-transparent blur-[30px] md:blur-[50px] transform scale-80" />

        {/* Concentric Gold Orbit Rings (Desktop only to prevent continuous mobile repaint) */}
        <div className="hidden md:block absolute inset-[-4%] rounded-full border border-ecell-gold/20 dark:border-ecell-gold/15 border-dashed animate-[spin_100s_linear_infinite]" />
        <div className="hidden md:block absolute inset-[-14%] rounded-full border border-ecell-gold/15 dark:border-ecell-gold/10 animate-[spin_70s_linear_infinite_reverse]" />

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

      {/* ── Layer 5: Engaging Bottom Dark-Side Scroll Animation (Tasteful & Non-Glaring) ── */}

      {/* Subtle deep indigo ambient aura (Bottom Left - Desktop only) */}
      <motion.div
        style={{
          opacity: bottomZoneOpacity,
          y: bottomCloud1Y,
        }}
        className="hidden md:block absolute -bottom-10 -left-20 w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] rounded-full bg-indigo-950/25 blur-[130px] pointer-events-none"
      />

      {/* Subtle muted warm bronze/champagne aura (Bottom Right - Desktop only) */}
      <motion.div
        style={{
          opacity: bottomZoneOpacity,
          y: bottomCloud2Y,
        }}
        className="hidden md:block absolute bottom-16 -right-20 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-amber-950/20 blur-[120px] pointer-events-none"
      />

      {/* Subtle Bottom Perspective Floor Grid (Desktop only) */}
      <motion.div
        style={{
          opacity: bottomGridOpacity,
          y: bottomGridY,
        }}
        className="hidden md:block absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(to_right,#C5A145_1px,transparent_1px),linear-gradient(to_bottom,#C5A145_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,transparent,black_40%,black)] pointer-events-none"
      />

      {/* Scroll-Responsive Floating Micro-Stars in Dark Zone (Desktop only) */}
      <motion.div
        style={{
          opacity: bottomZoneOpacity,
          y: darkParticlesY,
        }}
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle constellation lines */}
          <g stroke="#C5A145" strokeWidth="0.8" strokeDasharray="3 3" opacity={0.25}>
            <line x1="15%" y1="50%" x2="26%" y2="65%" />
            <line x1="26%" y1="65%" x2="38%" y2="58%" />
            <line x1="72%" y1="52%" x2="85%" y2="68%" />
            <line x1="85%" y1="68%" x2="78%" y2="82%" />
            <line x1="20%" y1="78%" x2="32%" y2="90%" />
            <line x1="65%" y1="84%" x2="88%" y2="88%" />
          </g>

          {/* Micro Star Nodes */}
          {[
            { cx: "15%", cy: "50%", r: 2 },
            { cx: "26%", cy: "65%", r: 2.5 },
            { cx: "38%", cy: "58%", r: 1.8 },
            { cx: "72%", cy: "52%", r: 2 },
            { cx: "85%", cy: "68%", r: 2.2 },
            { cx: "78%", cy: "82%", r: 2 },
            { cx: "20%", cy: "78%", r: 2.5 },
            { cx: "32%", cy: "90%", r: 1.8 },
            { cx: "65%", cy: "84%", r: 2.2 },
            { cx: "88%", cy: "88%", r: 2 },
            { cx: "50%", cy: "70%", r: 2 },
            { cx: "44%", cy: "85%", r: 1.8 },
          ].map((pt, i) => (
            <circle
              key={i}
              cx={pt.cx}
              cy={pt.cy}
              r={pt.r}
              fill="#C5A145"
              opacity={0.45}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
