"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Lightbulb, Wrench, Coins, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

interface VenturePipelineCardProps {
  onOpenPitchModal?: () => void;
}

export default function VenturePipelineCard({ onOpenPitchModal }: VenturePipelineCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [activeStep, setActiveStep] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Scroll perspective transforms (Aceternity-style ContainerScroll)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], shouldReduceMotion ? [0, 0] : [14, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], shouldReduceMotion ? [1, 1] : [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  // Gentle mouse hover tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 8, y: -y * 8 });
  };

  const stages = [
    {
      id: 0,
      title: "1. Ideation",
      phase: "Phase 1: Brainstorming & Campus Hackathons",
      icon: Lightbulb,
      desc: "Helping students brainstorm and convert initial ideas into working prototypes through campus hackathons, workshops, and peer roundtables.",
      metric: "100+",
      metricLabel: "Students in Hackathons",
      highlight: "Ideation Workshops",
    },
    {
      id: 1,
      title: "2. Incubation",
      phase: "Phase 2: Campus Workspaces & Mentorship",
      icon: Wrench,
      desc: "Providing access to campus lab facilities, technical guidance, and 1-on-1 feedback from senior students and alumni mentors.",
      metric: "12+",
      metricLabel: "Startups Mentored",
      highlight: "Campus Incubation Hub",
    },
    {
      id: 2,
      title: "3. Pitching",
      phase: "Phase 3: Pitch Competitions & Grants",
      icon: Coins,
      desc: "Preparing student teams for pitch presentations, university innovation grants, and regional startup challenges.",
      metric: "Pitch Days",
      metricLabel: "Campus Competitions",
      highlight: "Pitch Preparation",
    },
    {
      id: 3,
      title: "4. Showcase",
      phase: "Phase 4: Annual Project Demo Showcase",
      icon: TrendingUp,
      desc: "Showcasing selected student projects at our annual campus showcase in front of invited alumni, professors, and judges.",
      metric: "Annual",
      metricLabel: "Project Showcase",
      highlight: "Annual Demo Day",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full max-w-5xl mx-auto mt-12 mb-6 px-2 sm:px-4 [perspective:1200px]"
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX: isHovered && !shouldReduceMotion ? mousePosition.y : rotateX,
          rotateY: isHovered && !shouldReduceMotion ? mousePosition.x : 0,
          scale,
          opacity,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePosition({ x: 0, y: 0 });
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 bg-card/90 backdrop-blur-2xl border border-ecell-gold/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),0_0_30px_-5px_rgba(197,161,69,0.15)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_25px_70px_-10px_rgba(0,0,0,0.6),0_0_40px_rgba(197,161,69,0.25)]"
      >
        {/* Subtle Ambient Refraction Sheen */}
        <div
          className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-gradient-to-br from-ecell-gold/25 via-ecell-gold-light/10 to-transparent blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-gradient-to-tr from-ecell-gold/15 to-transparent blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* Card Header Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ecell-gold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Incubation Programme</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground tracking-tight">
              From Student Idea to Working Startup
            </h3>
          </div>

          {/* Real-time Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-muted/80 border border-ecell-gold/25 text-xs font-medium text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Live Cohort: <strong className="text-ecell-gold">Active</strong></span>
          </div>
        </div>

        {/* 4-Stage Interactive Pipeline Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isActive = activeStep === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStep(stage.id)}
                className={`flex flex-col items-center sm:items-start p-3 sm:p-3.5 rounded-xl border text-left transition-all ${
                  isActive
                    ? "bg-ecell-gold/15 border-ecell-gold text-foreground shadow-[0_0_18px_rgba(197,161,69,0.2)]"
                    : "bg-muted/40 border-border text-muted-foreground hover:text-foreground hover:bg-muted/80 hover:border-ecell-gold/30"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center ${
                      isActive
                        ? "bg-ecell-gold text-black"
                        : "bg-background text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold truncate">{stage.title}</span>
                </div>
                <span className="hidden sm:inline-block text-[10px] text-muted-foreground">
                  {stage.highlight}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Display Panel */}
        <div className="relative rounded-xl p-5 sm:p-6 bg-muted/50 border border-border/80">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1">
              <h4 className="text-base sm:text-lg font-bold font-heading text-foreground flex items-center gap-2 mb-2">
                <span className="text-ecell-gold">
                  {stages[activeStep].phase.split(":")[0]}:
                </span>
                <span>{stages[activeStep].phase.split(":")[1]}</span>
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {stages[activeStep].desc}
              </p>
            </div>

            {/* Stage Metric Card */}
            <div className="shrink-0 flex items-center gap-4 px-5 py-3.5 rounded-xl bg-card border border-ecell-gold/25 shadow-sm">
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-ecell-gold tracking-tight">
                  {stages[activeStep].metric}
                </div>
                <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                  {stages[activeStep].metricLabel}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Strip */}
        <div className="mt-6 pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-muted-foreground">
            <span className="px-2.5 py-1 rounded-full bg-muted/60 border border-border">
              🏛️ IIC Recognized
            </span>
            <span className="px-2.5 py-1 rounded-full bg-muted/60 border border-border">
              💡 Pre-Seed Incubation
            </span>
            <span className="px-2.5 py-1 rounded-full bg-muted/60 border border-border">
              🚀 Demo Days & Pitch Desks
            </span>
          </div>

          {onOpenPitchModal && (
            <button
              onClick={onOpenPitchModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-ecell-gold/15 hover:bg-ecell-gold/25 text-ecell-gold border border-ecell-gold/30 text-xs font-bold transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(197,161,69,0.15)]"
            >
              <span>Submit Your Pitch Deck</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
