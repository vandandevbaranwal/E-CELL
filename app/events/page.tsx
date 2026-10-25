"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Sparkles,
  ArrowLeft,
  Search,
  Filter,
  Trophy,
  ExternalLink,
  ChevronRight,
  X,
  Maximize2,
  Users,
  Award,
  Layers,
} from "lucide-react";

import { ALL_EVENTS, EventItem } from "@/data/events";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CursorGlow from "@/components/ui/CursorGlow";
import EventsBackgroundAnimation from "@/components/ui/EventsBackgroundAnimation";

const CATEGORIES = [
  { id: "all", label: "All Events" },
  { id: "competition", label: "Competitions & Hackathons" },
  { id: "workshop", label: "Workshops" },
  { id: "speaker", label: "Speaker Sessions" },
  { id: "flagship", label: "Flagship & Conclaves" },
  { id: "initiative", label: "Campus Initiatives" },
] as const;

export default function EventsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const filteredEvents = useMemo(() => {
    return ALL_EVENTS.filter((event) => {
      // Category filter
      let matchesCategory = true;
      if (selectedCategory === "competition") {
        matchesCategory = event.category === "Competition" || event.category === "Hackathon";
      } else if (selectedCategory === "workshop") {
        matchesCategory = event.category === "Workshop";
      } else if (selectedCategory === "speaker") {
        matchesCategory = event.category === "Speaker Session";
      } else if (selectedCategory === "flagship") {
        matchesCategory = event.category === "Flagship";
      } else if (selectedCategory === "initiative") {
        matchesCategory = event.category === "Initiative";
      }

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        event.title.toLowerCase().includes(q) ||
        event.crux.toLowerCase().includes(q) ||
        event.venue.toLowerCase().includes(q) ||
        event.whatHappened.toLowerCase().includes(q) ||
        event.highlight.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="relative bg-background text-foreground min-h-screen flex flex-col justify-between overflow-x-hidden w-full">
      <ScrollProgress />
      <CursorGlow />
      <EventsBackgroundAnimation />
      <ScrollToTop />

      {/* Sticky Edge-to-Edge Navigation */}
      <TopNavbar />

      <div className="relative z-10 w-full pt-10 pb-20 sm:pt-14 sm:pb-24">
        <div className="section-container">
          {/* Breadcrumb Back Link */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-ecell-gold transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          {/* Page Hero Header */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-foreground tracking-tight mb-4">
              Events &amp; <span className="text-ecell-gold">Conclaves</span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A comprehensive chronicle of all the flagship competitions, buildathons, technical workshops, and conclaves conducted by Entrepreneurship Cell, IET Lucknow.
            </p>

            {/* Quick Summary Pill Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 p-3 rounded-2xl bg-card/80 border border-border/70 backdrop-blur-md shadow-sm max-w-xl mx-auto">
              <div className="flex flex-col items-center justify-center p-2">
                <span className="text-xl sm:text-2xl font-bold font-heading text-ecell-gold">13</span>
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Events Conducted</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-t sm:border-t-0 sm:border-l border-border/50">
                <span className="text-xl sm:text-2xl font-bold font-heading text-ecell-gold">150–200</span>
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Avg. Participants</span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 border-t sm:border-t-0 sm:border-l border-border/50">
                <span className="text-xl sm:text-2xl font-bold font-heading text-ecell-gold">₹15,000</span>
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Hack-X Prize Pool</span>
              </div>
            </div>
          </motion.div>

          {/* Search & Filter Controls */}
          <div className="mb-10 space-y-4 max-w-4xl mx-auto">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search events by name, venue, speaker, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-card/80 border border-border/70 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-ecell-gold focus:ring-1 focus:ring-ecell-gold backdrop-blur-md transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-ecell-gold text-black shadow-[0_0_15px_rgba(197,161,69,0.3)] font-bold scale-[1.02]"
                        : "bg-card/70 border border-border text-muted-foreground hover:text-foreground hover:border-ecell-gold/40"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Events Count Feedback */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-6 px-1">
            <span>
              Showing <strong className="text-foreground">{filteredEvents.length}</strong> of {ALL_EVENTS.length} events
            </span>
            {selectedCategory !== "all" && (
              <button
                onClick={() => setSelectedCategory("all")}
                className="text-ecell-gold hover:underline font-medium"
              >
                Reset Filter
              </button>
            )}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
                className="group relative rounded-2xl border border-border/80 bg-card/85 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden hover:border-ecell-gold/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_20px_rgba(197,161,69,0.1)] transition-all duration-300"
              >
                {/* Subtle top ambient glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-ecell-gold/5 rounded-full blur-3xl pointer-events-none group-hover:bg-ecell-gold/10 transition-colors" />

                <div>
                  {/* Top Header Row: Category Badge & Date */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-md bg-muted/70 text-foreground/80 border border-border/60">
                      {event.category}
                    </span>

                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-ecell-gold bg-ecell-gold/10 px-2.5 py-1 rounded-full border border-ecell-gold/20">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                  </div>

                  {/* Event Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground mb-2 group-hover:text-ecell-gold transition-colors">
                    {event.title}
                  </h3>

                  {/* Venue */}
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                    <MapPin className="w-3.5 h-3.5 text-ecell-gold shrink-0" />
                    <span>{event.venue}</span>
                  </div>

                  {/* Crux (Highlighted One-Liner) */}
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/60 mb-4">
                    <p className="text-xs sm:text-sm font-semibold text-foreground/95 leading-relaxed">
                      <span className="text-ecell-gold font-bold uppercase tracking-wider text-[10px] block mb-1">
                        Core Crux
                      </span>
                      {event.crux}
                    </p>
                  </div>

                  {/* What Happened (Concise event flow from report) */}
                  <div className="mb-5">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      What Happened
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {event.whatHappened}
                    </p>
                  </div>

                  {/* Highlight Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-ecell-gold/10 text-ecell-gold border border-ecell-gold/20 text-xs font-medium mb-5">
                    <Trophy className="w-3.5 h-3.5 shrink-0" />
                    <span>{event.highlight}</span>
                  </div>
                </div>

                {/* Event Photo Glimpses (if available) */}
                {event.images.length > 0 && (
                  <div className="pt-4 border-t border-border/50 mt-2">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-ecell-gold" />
                        Event Glimpses ({event.images.length})
                      </span>
                      <span className="text-[10px] text-muted-foreground">Click to enlarge</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {event.images.slice(0, 3).map((imgSrc, imgIdx) => (
                        <div
                          key={imgIdx}
                          onClick={() => setSelectedImage({ src: imgSrc, title: `${event.title} - Glimpse ${imgIdx + 1}` })}
                          className="relative h-20 sm:h-24 rounded-lg overflow-hidden border border-border/60 cursor-pointer group/img"
                        >
                          <Image
                            src={imgSrc}
                            alt={`${event.title} Glimpse ${imgIdx + 1}`}
                            fill
                            sizes="(max-width: 768px) 30vw, 15vw"
                            className="object-cover transition-transform duration-300 group-hover/img:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 className="w-4 h-4 text-white drop-shadow" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Empty state if search finds nothing */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-16 px-4">
              <Layers className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-60" />
              <h3 className="text-lg font-bold text-foreground mb-1">No matching events found</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Try adjusting your search query or reset the category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-5 py-2 rounded-xl bg-ecell-gold text-black font-semibold text-xs hover:brightness-110 transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal for Photo Glimpses */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl max-h-[85vh] w-full bg-card rounded-2xl overflow-hidden border border-ecell-gold/30 shadow-2xl z-10 flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-border bg-card/90">
                <span className="text-sm font-semibold text-foreground font-heading truncate">
                  {selectedImage.title}
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black/60 flex items-center justify-center p-2">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Full-width Footer */}
      <Footer />
    </main>
  );
}
