"use client";

import React, { useRef } from "react";
import { FaRocket, FaCalendarDays, FaLightbulb } from "react-icons/fa6";
import { Sparkles, Trophy, Rocket, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import StatsStrip from "./StatsStrip";
import VenturePipelineCard from "./VenturePipelineCard";

interface HeroProps {
  onOpenJoinModal?: () => void;
  onOpenPitchModal?: () => void;
}

const Hero = ({ onOpenJoinModal, onOpenPitchModal }: HeroProps) => {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Scroll parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  // Floating badges scroll parallax
  const floatLeftTopY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -50]);
  const floatRightTopY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -35]);
  const floatLeftBottomY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 50]);
  const floatRightBottomY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 40]);

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
        <div className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-tr from-ecell-gold/20 via-ecell-gold-light/10 to-transparent blur-[110px] dark:from-ecell-gold/25 dark:via-ecell-gold/10" />

        {/* Orbit Ring 1 (Concentric slow clockwise rotate) */}
        <div className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border border-ecell-gold/15 dark:border-ecell-gold/10 border-dashed animate-[spin_60s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-ecell-gold shadow-[0_0_12px_#C5A145]" />
        </div>

        {/* Orbit Ring 2 (Concentric counter-clockwise rotate) */}
        <div className="absolute w-[420px] h-[420px] md:w-[680px] md:h-[680px] rounded-full border border-ecell-gold/20 dark:border-ecell-gold/15 animate-[spin_45s_linear_infinite_reverse]">
          <div className="absolute bottom-4 right-1/4 w-2 h-2 rounded-full bg-ecell-gold-light shadow-[0_0_8px_#D4B96A]" />
        </div>

        {/* Subtle Geometric Background Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A145_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] dark:opacity-[0.12]" />
      </div>

      {/* ── Floating Achievement Badges (Desktop & Tablet) ── */}
      <div className="w-full max-w-6xl mx-auto px-4 relative pointer-events-none">
        {/* Floating Badge 1 (Top Left) */}
        <motion.div
          style={{ y: floatLeftTopY }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center gap-2.5 absolute -top-8 left-4 px-3.5 py-2 rounded-xl bg-card/85 backdrop-blur-xl border border-ecell-gold/30 shadow-[0_8px_24px_rgba(197,161,69,0.12)] z-20 pointer-events-auto"
        >
          <div className="w-7 h-7 rounded-lg bg-ecell-gold/15 flex items-center justify-center text-ecell-gold">
            <Rocket className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-foreground">₹25L+ Funding Pool</div>
            <div className="text-[10px] text-muted-foreground">Pre-Seed Grants</div>
          </div>
        </motion.div>

        {/* Floating Badge 2 (Top Right) */}
        <motion.div
          style={{ y: floatRightTopY }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex items-center gap-2.5 absolute -top-4 right-4 px-3.5 py-2 rounded-xl bg-card/85 backdrop-blur-xl border border-ecell-gold/30 shadow-[0_8px_24px_rgba(197,161,69,0.12)] z-20 pointer-events-auto"
        >
          <div className="w-7 h-7 rounded-lg bg-ecell-gold/15 flex items-center justify-center text-ecell-gold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-foreground">20+ Startups Mentored</div>
            <div className="text-[10px] text-muted-foreground">Alumni & VC Network</div>
          </div>
        </motion.div>

        {/* Floating Badge 3 (Bottom Left) */}
        <motion.div
          style={{ y: floatLeftBottomY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:flex items-center gap-2.5 absolute top-64 -left-2 px-3.5 py-2 rounded-xl bg-card/85 backdrop-blur-xl border border-border shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-20 pointer-events-auto"
        >
          <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-ecell-gold">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-foreground">IIC Recognized</div>
            <div className="text-[10px] text-muted-foreground">Campus Incubation</div>
          </div>
        </motion.div>

        {/* Floating Badge 4 (Bottom Right) */}
        <motion.div
          style={{ y: floatRightBottomY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:flex items-center gap-2.5 absolute top-60 -right-2 px-3.5 py-2 rounded-xl bg-card/85 backdrop-blur-xl border border-border shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-20 pointer-events-auto"
        >
          <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-ecell-gold">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-foreground">E-Summit &apos;25</div>
            <div className="text-[10px] text-muted-foreground">Annual Flagship</div>
          </div>
        </motion.div>
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

        {/* Primary Headline (Preserved word-for-word) */}
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl text-foreground mb-6"
        >
          Transforming World with{" "}
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
          {onOpenJoinModal ? (
            <button
              onClick={onOpenJoinModal}
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl bg-gradient-to-r from-ecell-gold-dark via-ecell-gold to-ecell-gold-light px-7 py-3 text-sm font-bold text-black shadow-[0_4px_20px_rgba(197,161,69,0.35)] transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <FaRocket className="mr-2.5 text-black h-4 w-4" />
              Join E-Cell
            </button>
          ) : (
            <a
              href="#contact"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl bg-gradient-to-r from-ecell-gold-dark via-ecell-gold to-ecell-gold-light px-7 py-3 text-sm font-bold text-black shadow-[0_4px_20px_rgba(197,161,69,0.35)] transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaRocket className="mr-2.5 text-black h-4 w-4" />
              Join E-Cell
            </a>
          )}

          {/* Outline CTA */}
          <a
            href="#events"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl border border-ecell-gold/40 bg-card/60 backdrop-blur-xl px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-ecell-gold hover:bg-ecell-gold/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaCalendarDays className="mr-2 text-ecell-gold h-4 w-4" />
            Upcoming Events
          </a>

          {/* Subtle CTA */}
          {onOpenPitchModal ? (
            <button
              onClick={onOpenPitchModal}
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl border border-border bg-card/40 backdrop-blur-xl px-6 py-3 text-sm font-semibold text-muted-foreground transition-all duration-200 hover:text-foreground hover:border-border/80 hover:bg-card/70 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <FaLightbulb className="mr-2 text-amber-400 h-4 w-4" />
              Pitch Your Idea
            </button>
          ) : (
            <a
              href="#contact"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl border border-border bg-card/40 backdrop-blur-xl px-6 py-3 text-sm font-semibold text-muted-foreground transition-all duration-200 hover:text-foreground hover:border-border/80 hover:bg-card/70 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaLightbulb className="mr-2 text-amber-400 h-4 w-4" />
              Pitch Your Idea
            </a>
          )}
        </motion.div>

        {/* Floating Micro-Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-1 mb-4">
          <div className="px-3.5 py-1.5 rounded-full bg-card/70 backdrop-blur-md border border-ecell-gold/20 flex items-center gap-2 text-xs font-medium text-foreground shadow-sm">
            <span className="w-2 h-2 rounded-full bg-ecell-gold shadow-[0_0_8px_#C5A145]" />
            <span>Incubation Support</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-card/70 backdrop-blur-md border border-ecell-gold/20 flex items-center gap-2 text-xs font-medium text-foreground shadow-sm">
            <span className="w-2 h-2 rounded-full bg-ecell-gold shadow-[0_0_8px_#C5A145]" />
            <span>₹25L+ Seed Pool</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-card/70 backdrop-blur-md border border-ecell-gold/20 flex items-center gap-2 text-xs font-medium text-foreground shadow-sm">
            <span className="w-2 h-2 rounded-full bg-ecell-gold shadow-[0_0_8px_#C5A145]" />
            <span>100+ Angel Network</span>
          </div>
        </div>
      </motion.div>

      {/* ── 3D Perspective Venture Incubation Matrix (Stitch + Aceternity UI Container Scroll) ── */}
      <VenturePipelineCard onOpenPitchModal={onOpenPitchModal} />

      {/* ── Key Metrics Ribbon with Animated Numbers ── */}
      <StatsStrip />
    </div>
  );
};

export default Hero;
