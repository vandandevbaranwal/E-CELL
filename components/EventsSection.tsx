"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Sparkles,
  Trophy,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { ALL_EVENTS } from "@/data/events";

// Curated Marquee Row 1 (Track 1)
const MARQUEE_ROW_1 = [
  {
    title: "TEDxIETLucknow 2025",
    date: "25th Nov, 2025",
    category: "Flagship Conclave",
    crux: "Licensed TEDx event centered on 'From Spark to Impact' with 8 distinguished speakers.",
    image: "/events/tedx_1.png",
    highlight: "8 Speakers • 100 Attendee Cap",
  },
  {
    title: "Hack-X Vid Youth",
    date: "19th Mar, 2026",
    category: "12-Hr Hackathon",
    crux: "Intensive 12-hour buildathon where student innovators built rapid working prototypes.",
    image: "/events/hackx_1.png",
    highlight: "₹15,000 Prize Pool",
  },
  {
    title: "Marketing Mania",
    date: "19th Feb, 2026",
    category: "Pitch Battle",
    crux: "Multi-round pitching battle culminating in an improvised Shark Tank-style finale.",
    image: "/events/marketing_mania_1.png",
    highlight: "31 Teams • Shark Tank Finale",
  },
  {
    title: "Sparkathon",
    date: "10th Oct, 2025",
    category: "Freshers' Challenge",
    crux: "Introductory 3-round business quiz and pitch challenge curated for first-year builders.",
    image: "/events/sparkathon_1.png",
    highlight: "31 First-Year Teams",
  },
  {
    title: "IPR Workshop",
    date: "6th Dec, 2025",
    category: "Legal & Tech",
    crux: "Practical guide to patent searching, prior art identification, and AI intellectual property.",
    image: "/events/ipr_workshop_1.png",
    highlight: "Live Patent Demos",
  },
  {
    title: "Business Plan Competition",
    date: "28th Apr, 2026",
    category: "Case Presentation",
    crux: "Defending real-world startup business models before an expert jury evaluation panel.",
    image: "/events/bplan_1.jpeg",
    highlight: "10 Teams • Jury Evaluation",
  },
  {
    title: "Plantation Drive",
    date: "5th Jun, 2026",
    category: "Campus Initiative",
    crux: "Campus greening initiative on World Environment Day uniting students and faculty.",
    image: "/events/plantation_1.png",
    highlight: "Greening Drive • Eco Pledge",
  },
];

// Curated Marquee Row 2 (Track 2)
const MARQUEE_ROW_2 = [
  {
    title: "TEDx Keynotes & Lamp Lighting",
    date: "25th Nov, 2025",
    category: "Conclave Moments",
    crux: "Distinguished talks by RJ Prateek, Dr. Anil Rastogi, and Meghna Mittal.",
    image: "/events/tedx_3.jpeg",
    highlight: "Inaugural Ceremony",
  },
  {
    title: "Hack-X Live Demos",
    date: "19th Mar, 2026",
    category: "Prototype Pitch",
    crux: "Teams showcasing live software and hardware solutions to judging mentors.",
    image: "/events/hackx_3.png",
    highlight: "Live Prototype Demos",
  },
  {
    title: "Maya Bazaar Team Auction",
    date: "20th Feb, 2026",
    category: "Auction Simulation",
    crux: "Joint E-Cell × Encore auction with fixed budgets to assemble an ideal startup roster.",
    image: "/events/maya_bazaar_1.png",
    highlight: "25 Bidding Teams",
  },
  {
    title: "Tehkikat Sequential Hunt",
    date: "20th Feb, 2026",
    category: "Campus Trail",
    crux: "Sequential clue-chasing activity with on-the-spot team formation across campus.",
    image: "/events/tehkikat_1.png",
    highlight: "12 Spontaneous Teams",
  },
  {
    title: "Sustainability & Circular Economy",
    date: "24th Feb, 2026",
    category: "Expert Session",
    crux: "Prof. V. P. Sharma delivering actionable insights on polymer recycling and green ventures.",
    image: "/events/sustainability_1.png",
    highlight: "Prof. V. P. Sharma Talk",
  },
  {
    title: "Marketing Mania Presentations",
    date: "19th Feb, 2026",
    category: "Shark Tank",
    crux: "Desi India and Digital/Gen-Z pitches evaluated on persuasion, clarity, and wit.",
    image: "/events/marketing_mania_3.png",
    highlight: "Top 5 Finalists",
  },
  {
    title: "Sparkathon Final Round",
    date: "10th Oct, 2025",
    category: "Brand Buzz",
    crux: "Fastest Finger First and Brand Buzz buzzer rounds creating electrifying energy.",
    image: "/events/sparkathon_2.png",
    highlight: "Team Paradox Won",
  },
];

export const EventsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden" id="events">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-ecell-gold/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ecell-gold/10 border border-ecell-gold/25 text-ecell-gold text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(197,161,69,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus Milestones &amp; Glimpses</span>
          </div>

          <h2 className="heading mb-4 text-foreground">
            Moments &amp; Glimpses of <span className="text-ecell-gold">Our Events</span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From 12-hour high-stakes hackathons to licensed TEDx conclaves, freshers&apos; quizzes, and campus auctions. Relive the glimpses of events conducted by E-Cell IET Lucknow.
          </p>
        </motion.div>
      </div>

      {/* ── Marquee Bands Container (Full-Bleed Across Entire Screen Width) ── */}
      <div className="relative w-full overflow-hidden py-4 group">
        {/* Left & Right Subtle Fade Vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-background via-background/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-background via-background/60 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Sliding Smoothly from Left to Right */}
        <div className="flex w-max space-x-5 animate-marquee-reverse group-hover:[animation-play-state:paused] mb-5">
          {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map((item, idx) => (
            <Link
              key={`row1-${idx}`}
              href="/events"
              className="relative w-[280px] sm:w-[320px] rounded-2xl border border-border/80 bg-card/90 backdrop-blur-xl p-3.5 overflow-hidden flex flex-col justify-between shrink-0 hover:border-ecell-gold/60 hover:shadow-[0_10px_30px_rgba(197,161,69,0.2)] transition-all duration-300 group/card"
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden mb-3 border border-border/50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-bold text-ecell-gold border border-ecell-gold/30">
                  {item.category}
                </div>
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-medium text-foreground border border-white/10 flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5 text-ecell-gold" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Title & Crux */}
              <div className="px-1">
                <h3 className="font-heading font-bold text-sm sm:text-base text-foreground mb-1 group-hover/card:text-ecell-gold transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-2">
                  {item.crux}
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-border/40 text-[11px]">
                  <span className="font-semibold text-ecell-gold truncate">{item.highlight}</span>
                  <span className="text-muted-foreground group-hover/card:text-foreground flex items-center gap-0.5 shrink-0">
                    Details <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2: Sliding Smoothly from Left to Right (Alternative Speed) */}
        <div className="flex w-max space-x-5 animate-marquee-reverse-fast group-hover:[animation-play-state:paused]">
          {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map((item, idx) => (
            <Link
              key={`row2-${idx}`}
              href="/events"
              className="relative w-[280px] sm:w-[320px] rounded-2xl border border-border/80 bg-card/90 backdrop-blur-xl p-3.5 overflow-hidden flex flex-col justify-between shrink-0 hover:border-ecell-gold/60 hover:shadow-[0_10px_30px_rgba(197,161,69,0.2)] transition-all duration-300 group/card"
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden mb-3 border border-border/50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-bold text-ecell-gold border border-ecell-gold/30">
                  {item.category}
                </div>
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-medium text-foreground border border-white/10 flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5 text-ecell-gold" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Title & Crux */}
              <div className="px-1">
                <h3 className="font-heading font-bold text-sm sm:text-base text-foreground mb-1 group-hover/card:text-ecell-gold transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-2">
                  {item.crux}
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-border/40 text-[11px]">
                  <span className="font-semibold text-ecell-gold truncate">{item.highlight}</span>
                  <span className="text-muted-foreground group-hover/card:text-foreground flex items-center gap-0.5 shrink-0">
                    Details <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Bottom Call-to-Action Bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="rounded-2xl border border-ecell-gold/30 bg-gradient-to-r from-card/90 via-card to-ecell-gold/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.3)]">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-ecell-gold text-xs font-bold uppercase tracking-wider mb-1">
              <Trophy className="w-4 h-4" />
              <span>Full Archive Available</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
              Explore All Events &amp; Details
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl">
              Filter by competitions, hackathons, speaker conclaves, and workshops with dates, locations, and outcomes.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-ecell-gold-dark via-ecell-gold to-ecell-gold-light px-7 py-3.5 text-sm font-bold text-black shadow-[0_4px_20px_rgba(197,161,69,0.3)] transition-all hover:brightness-110 active:scale-95 group"
            >
              <span>View All Events</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
