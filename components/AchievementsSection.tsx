"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Trophy,
  Award,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  ExternalLink,
  ChevronRight,
  Maximize2,
  X,
  Target,
  CheckCircle2,
} from "lucide-react";

interface AchievementPhoto {
  src: string;
  title: string;
  caption: string;
  tag: string;
}

const NEC_PHOTOS: AchievementPhoto[] = [
  {
    src: "/achievements/nec_team_esummit.jpg",
    title: "Team NexEra at E-Summit IIT Bombay",
    caption: "Full E-Cell IET Lucknow delegation standing proudly behind the iconic 'I Love E-Summit' installation at IIT Bombay.",
    tag: "National Finalists",
  },
  {
    src: "/achievements/nec_team_aman_gupta.jpg",
    title: "Keynote & Mentorship with Aman Gupta",
    caption: "Direct interactive session with boAt co-founder Aman Gupta, gaining real-world insights on consumer-centricity and brand resilience.",
    tag: "Founder Interaction",
  },
  {
    src: "/achievements/nec_team_wall_of_vc.jpg",
    title: "Investor Arena: Wall of VC",
    caption: "Engaging at the investor and venture capital networking showcase at IIT Bombay.",
    tag: "Venture Networking",
  },
  {
    src: "/achievements/nec_iit_bombay_board.jpg",
    title: "IIT Bombay Campus Portal",
    caption: "Arrival at the Indian Institute of Technology, Bombay for the 3-day National Finals.",
    tag: "Host Institute",
  },
  {
    src: "/achievements/nec_team_challenge.jpg",
    title: "Case Study & Rapid Business Quiz",
    caption: "Team members analyzing real-world market problems under tight investor-grade deadlines.",
    tag: "Finals Challenge",
  },
];

export default function AchievementsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activePhoto, setActivePhoto] = useState<AchievementPhoto>(NEC_PHOTOS[0]);
  const [modalImage, setModalImage] = useState<AchievementPhoto | null>(null);

  return (
    <section className="w-full py-16 md:py-24 relative" id="achievements">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-ecell-gold/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ecell-gold/10 border border-ecell-gold/25 text-ecell-gold text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(197,161,69,0.15)]">
            <Trophy className="w-3.5 h-3.5" />
            <span>National Recognition &amp; Milestones</span>
          </div>

          <h2 className="heading mb-4 text-foreground">
            Hall of <span className="text-ecell-gold">Achievements</span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Celebrating competitive excellence, institutional honors, and national milestones achieved by Entrepreneurship Cell, IET Lucknow.
          </p>
        </motion.div>

        {/* ── Flagship Achievement Spotlight: NEC IIT Bombay 2025-26 ── */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-card/90 dark:bg-[#0D1220]/95 border border-ecell-gold/30 p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] md:backdrop-blur-xl overflow-hidden"
        >
          {/* Ambient Corner Accents */}
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-ecell-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Banner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 pb-8 border-b border-border/60">
            {/* Left Info Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-ecell-gold to-ecell-gold-light text-black text-xs font-extrabold tracking-wide uppercase shadow-[0_0_15px_rgba(197,161,69,0.4)]">
                  <Award className="w-3.5 h-3.5" />
                  AIR 59 All India Rank
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground">
                  <MapPin className="w-3 h-3 text-ecell-gold" />
                  IIT Bombay, Mumbai
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground">
                  <Calendar className="w-3 h-3 text-ecell-gold" />
                  10th – 12th Dec 2025
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-foreground tracking-tight">
                National Entrepreneurship Challenge (NEC) 2025–26
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Representing <strong className="text-foreground">E-Cell IET Lucknow</strong> as <strong className="text-ecell-gold">Team NexEra</strong>, our delegation qualified for the prestigious National Finals at <strong className="text-foreground">E-Summit, IIT Bombay</strong>, securing an impressive <strong className="text-foreground">All India Rank 59</strong> among collegiate entrepreneurship cells nationwide.
              </p>
            </div>

            {/* Right Big Stat Box */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-ecell-gold/15 via-background to-background border border-ecell-gold/40 shadow-inner flex flex-col justify-center">
                <div className="text-xs uppercase tracking-widest text-ecell-gold font-bold mb-1">
                  National Standing
                </div>
                <div className="text-4xl sm:text-5xl font-black font-heading text-foreground flex items-baseline gap-2">
                  <span>AIR 59</span>
                  <span className="text-xs text-muted-foreground font-normal">/ National E-Cells</span>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  E-Summit 2025 • Indian Institute of Technology, Bombay
                </div>
              </div>
            </div>
          </div>

          {/* Key Feats & Badges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="p-4 rounded-2xl bg-muted/20 border border-border/70 hover:border-ecell-gold/40 transition-colors">
              <div className="flex items-center gap-2 text-ecell-gold font-semibold text-xs uppercase tracking-wider mb-2">
                <Target className="w-4 h-4" />
                <span>Problem Solving Sprint</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Tackled the intense Case Study Challenge, Startup Expo evaluations, and rapid IPL Auction and Bid &amp; Build resource-allocation simulations.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-muted/20 border border-border/70 hover:border-ecell-gold/40 transition-colors">
              <div className="flex items-center gap-2 text-ecell-gold font-semibold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>National Finalists Stage</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Qualified through competitive multi-stage national evaluations to represent IET Lucknow on the prestigious IIT Bombay stage.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-muted/20 border border-border/70 hover:border-ecell-gold/40 transition-colors">
              <div className="flex items-center gap-2 text-ecell-gold font-semibold text-xs uppercase tracking-wider mb-2">
                <Users className="w-4 h-4" />
                <span>Global Founder Dialogues</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Keynote sessions &amp; discussions with Aman Gupta (co-founder, boAt), Benedetto Vigna (CEO, Ferrari), Demetris Skourides (Cyprus Chief Scientist) &amp; Acharya Prashant.
              </p>
            </div>
          </div>

          {/* ── Visual Team Media Showcase ── */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-foreground">
                  Glimpses from IIT Bombay
                </h4>
                <p className="text-xs text-muted-foreground">
                  Moments of Team NexEra across the 3-day National Finals. Click any photo to expand.
                </p>
              </div>
            </div>

            {/* Main Featured Photo Preview */}
            <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[460px] rounded-2xl overflow-hidden border border-border/80 group">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Expand Button */}
              <button
                onClick={() => setModalImage(activePhoto)}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 hover:bg-ecell-gold hover:text-black text-white backdrop-blur-md border border-white/20 transition-all shadow-lg"
                aria-label="View photo full screen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Photo Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-ecell-gold text-black text-[11px] font-bold uppercase tracking-wider mb-2">
                  {activePhoto.tag}
                </div>
                <h5 className="text-lg sm:text-xl font-bold text-white mb-1 drop-shadow-md">
                  {activePhoto.title}
                </h5>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed drop-shadow-sm">
                  {activePhoto.caption}
                </p>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 pt-2">
              {NEC_PHOTOS.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhoto(photo)}
                  className={`relative h-16 sm:h-24 rounded-xl overflow-hidden border transition-all text-left group ${
                    activePhoto.src === photo.src
                      ? "border-ecell-gold ring-2 ring-ecell-gold/40 scale-[1.02]"
                      : "border-border/60 hover:border-ecell-gold/50 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Fullscreen Dialog */}
      <AnimatePresence>
        {modalImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-card rounded-2xl border border-ecell-gold/40 p-4 sm:p-6 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors z-10"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[320px] sm:h-[480px] rounded-xl overflow-hidden mb-4">
                <Image
                  src={modalImage.src}
                  alt={modalImage.title}
                  fill
                  className="object-contain bg-black/40"
                  sizes="1200px"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-ecell-gold uppercase tracking-wider">
                    {modalImage.tag}
                  </span>
                  <h4 className="text-lg font-bold text-foreground">
                    {modalImage.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl">
                    {modalImage.caption}
                  </p>
                </div>
                <button
                  onClick={() => setModalImage(null)}
                  className="px-4 py-2 rounded-lg bg-ecell-gold text-black font-semibold text-xs self-start sm:self-auto shrink-0 hover:brightness-110"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
