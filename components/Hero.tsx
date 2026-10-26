"use client";

import { useRef } from "react";
import { FaCalendarDays, FaLightbulb } from "react-icons/fa6";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import StatsStrip from "./StatsStrip";
import VenturePipelineCard from "./VenturePipelineCard";

interface HeroProps {
  onOpenPitchModal?: () => void;
}

const Hero = ({ onOpenPitchModal }: HeroProps) => {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Scroll parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  return (
    <div
      ref={heroRef}
      className="relative pt-12 pb-12 md:pt-16 md:pb-16 flex flex-col items-center justify-center overflow-hidden min-h-[85vh]"
    >
      {/* ── Signature Ambient Orbit & Radial Glow Effect ── */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        {/* Central Luminous Gold Flare */}
        <div className="w-[360px] h-[360px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-tr from-ecell-gold/20 via-ecell-gold-light/10 to-transparent blur-[60px] md:blur-[110px] dark:from-ecell-gold/25 dark:via-ecell-gold/10" />

        {/* Orbit Ring 1 (Concentric slow clockwise rotate - Desktop only) */}
        <div className="hidden md:block absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border border-ecell-gold/15 dark:border-ecell-gold/10 border-dashed animate-[spin_60s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-ecell-gold shadow-[0_0_12px_#C5A145]" />
        </div>

        {/* Orbit Ring 2 (Concentric counter-clockwise rotate - Desktop only) */}
        <div className="hidden md:block absolute w-[420px] h-[420px] md:w-[680px] md:h-[680px] rounded-full border border-ecell-gold/20 dark:border-ecell-gold/15 animate-[spin_45s_linear_infinite_reverse]">
          <div className="absolute bottom-4 right-1/4 w-2 h-2 rounded-full bg-ecell-gold-light shadow-[0_0_8px_#D4B96A]" />
        </div>

        {/* Subtle Geometric Background Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A145_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] dark:opacity-[0.12]" />
      </div>

      {/* ── Main Hero Content with Scroll Parallax ── */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="section-container relative z-10 flex flex-col items-center text-center"
      >
        {/* Institutional Eyebrow Badge */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ecell-gold/30 bg-ecell-gold/10 text-ecell-gold text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-ecell-gold animate-ping" />
          Entrepreneurship Cell • IET Lucknow
        </motion.div>

        {/* Primary Headline with correct grammar */}
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl text-foreground mb-6"
        >
          Transforming the World with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecell-gold via-ecell-gold-light to-ecell-gold-dark">
            Entrepreneurship
          </span>
        </motion.h1>

        {/* Action CTAs */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 w-full max-w-lg mt-4 mb-4 px-2"
        >
          {/* Primary CTA */}
          <a
            href="#events"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl bg-gradient-to-r from-ecell-gold-dark via-ecell-gold to-ecell-gold-light px-7 py-3 text-sm font-bold text-black shadow-[0_4px_20px_rgba(197,161,69,0.35)] transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaCalendarDays className="mr-2 text-black h-4 w-4" />
            Upcoming Events
          </a>

          {/* Outline CTA */}
          {onOpenPitchModal ? (
            <button
              onClick={onOpenPitchModal}
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl border border-ecell-gold/40 bg-card/60 backdrop-blur-xl px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-ecell-gold hover:bg-ecell-gold/10 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <FaLightbulb className="mr-2 text-amber-400 h-4 w-4" />
              Pitch Your Idea
            </button>
          ) : (
            <a
              href="#contact"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl border border-ecell-gold/40 bg-card/60 backdrop-blur-xl px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-ecell-gold hover:bg-ecell-gold/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaLightbulb className="mr-2 text-amber-400 h-4 w-4" />
              Pitch Your Idea
            </a>
          )}
        </motion.div>
      </motion.div>

      {/* ── 3D Perspective Venture Incubation Matrix (Stitch + Aceternity UI Container Scroll) ── */}
      <VenturePipelineCard onOpenPitchModal={onOpenPitchModal} />

      {/* ── Key Metrics Ribbon with Animated Numbers ── */}
      <StatsStrip />
    </div>
  );
};

export default Hero;
