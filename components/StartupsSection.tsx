"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight, TrendingUp } from "lucide-react";

interface StartupsSectionProps {
  onOpenPitchModal?: () => void;
}

export default function StartupsSection({ onOpenPitchModal }: StartupsSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const startups = [
    {
      name: "CognitiveGrid",
      tag: "DEEPTECH AI",
      stage: "Series Seed",
      description:
        "Autonomous edge-AI computer vision for smart electrical grid stability and predictive outage management across infrastructure networks.",
      cohort: "Founders: Batch '21",
      metric: "₹1.2 Cr Raised",
    },
    {
      name: "KrishiDrishti",
      tag: "AGRITECH",
      stage: "Grant Funded",
      description:
        "Satellite telemetry and low-cost spectral sensors enabling smallholder farmers across Uttar Pradesh to double crop yield and reduce waste.",
      cohort: "Founders: Batch '22",
      metric: "UP Govt Grant Winner",
    },
    {
      name: "FleetSync Engine",
      tag: "LOGISTICS SAAS",
      stage: "Pre-Seed",
      description:
        "Hyperlocal dispatch optimization engine for tier-2 regional supply chains with real-time route telemetry and fleet scheduling.",
      cohort: "Founders: Batch '23",
      metric: "15,000+ Daily Trips",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 relative" id="startups">
      <div className="section-container">
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ecell-gold/10 border border-ecell-gold/25 text-ecell-gold text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Portfolio &amp; Alumni
            </div>
            <h2 className="heading text-foreground">
              Built at <span className="text-ecell-gold">IET Lucknow</span>
            </h2>
          </div>

          {onOpenPitchModal ? (
            <button
              onClick={onOpenPitchModal}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ecell-gold hover:underline mt-4 md:mt-0 cursor-pointer"
            >
              <span>Apply for the 2025 Incubation Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ecell-gold hover:underline mt-4 md:mt-0"
            >
              <span>Apply for the 2025 Incubation Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Startups 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {startups.map((startup, idx) => (
            <motion.div
              key={startup.name}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.1,
                ease: "easeOut",
              }}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-border bg-card/85 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-ecell-gold/50 hover:shadow-[0_12px_36px_rgba(197,161,69,0.14)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide bg-ecell-gold/15 border border-ecell-gold/30 text-ecell-gold">
                    {startup.tag}
                  </span>
                  <span className="text-xs font-mono font-medium text-muted-foreground">
                    {startup.stage}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-ecell-gold transition-colors flex items-center justify-between">
                  <span>{startup.name}</span>
                  <TrendingUp className="w-4 h-4 text-ecell-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {startup.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex justify-between items-center text-xs">
                <span className="text-muted-foreground font-medium">{startup.cohort}</span>
                <span className="font-bold text-ecell-gold">{startup.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
