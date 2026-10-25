"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { eventsData } from "@/data";

export const EventsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { featured, pastEvents } = eventsData;

  return (
    <section className="w-full py-16 md:py-24 relative" id="events">
      <div className="section-container">
        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ecell-gold/10 border border-ecell-gold/20 text-ecell-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            E-Cell Initiatives
          </div>
          <h2 className="heading mb-4 text-foreground">
            Upcoming & Past <span className="text-ecell-gold">Events</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            From premier annual summits to intensive weekend buildathons and investor pitch days.
          </p>
        </motion.div>

        {/* Featured Upcoming Event Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl border border-ecell-gold/40 bg-gradient-to-br from-card via-card to-ecell-gold/5 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-[0_12px_40px_rgba(197,161,69,0.15)] mb-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-ecell-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-ecell-gold text-black">
                  {featured.badge}
                </span>
                <span className="inline-flex items-center text-xs font-medium text-ecell-gold">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  {featured.date}
                </span>
                <span className="inline-flex items-center text-xs font-medium text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 mr-1.5" />
                  {featured.location}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                {featured.title}
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {featured.description}
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href={featured.ctaLink}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-ecell-gold-dark via-ecell-gold to-ecell-gold-light px-6 py-3.5 text-sm font-bold text-black shadow-md transition-all hover:brightness-110 active:scale-95"
              >
                {featured.ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Past Events Grid */}
        <div className="mt-8">
          <h4 className="font-heading text-lg font-bold text-foreground mb-6">
            Past Flagship Events
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : idx * 0.1,
                  ease: "easeOut",
                }}
                whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                className="rounded-xl border border-border bg-card p-6 backdrop-blur-xl transition-all duration-300 hover:border-ecell-gold/40 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                      {event.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{event.date}</span>
                  </div>
                  <h5 className="font-heading font-bold text-base text-foreground mb-2">
                    {event.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {event.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
