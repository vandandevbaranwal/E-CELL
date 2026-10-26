"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { mentors } from "@/data";
import { GlowCard } from "@/components/ui/spotlight-card";

const Jordon = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 md:py-24 relative" id="mentors">
      <div className="section-container">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="heading mb-4 text-foreground">
            Our <span className="text-ecell-gold">Mentors</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Visionary leaders and advisors guiding the entrepreneurial journey at IET Lucknow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch">
          {mentors.map((mentor) => (
            <GlowCard
              key={mentor.id}
              glowColor="gold"
              customSize
              className="w-full rounded-2xl border border-border/80 bg-card/90 dark:bg-[#0D1220]/95 p-6 backdrop-blur-xl transition-all duration-300 hover:border-ecell-gold/60 hover:shadow-[0_12px_36px_rgba(197,161,69,0.18)] flex flex-col items-center text-center justify-between h-full"
            >
              <div className="flex flex-col items-center w-full flex-1">
                {/* Photo with Gold Frame */}
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-ecell-gold/40 shadow-lg shadow-ecell-gold/10 mb-5 shrink-0">
                  <Image
                    src={mentor.image}
                    alt={mentor.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Name Container - Equal height across all cards for horizontal alignment */}
                <div className="h-14 flex items-center justify-center w-full mb-1">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground text-center">
                    {mentor.name}
                  </h3>
                </div>

                {/* Role/Designation Container - Equal height for single & multi-line designations */}
                <div className="h-14 flex items-center justify-center w-full mb-4">
                  <span className="inline-flex items-center justify-center text-center text-xs font-semibold px-3.5 py-1.5 rounded-full bg-ecell-gold/15 text-ecell-gold border border-ecell-gold/30 leading-snug">
                    {mentor.role}
                  </span>
                </div>
              </div>

              {/* Social Connect Circular Pill Button */}
              <div className="pt-4 border-t border-border mt-auto w-full flex justify-center">
                {"linkedin" in mentor && mentor.linkedin ? (
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${mentor.name} on LinkedIn`}
                    className="inline-flex items-center justify-center gap-2 py-2 px-5 rounded-full border border-ecell-gold/30 bg-ecell-gold/5 hover:border-ecell-gold hover:bg-ecell-gold hover:text-black text-foreground transition-all duration-200 text-xs font-semibold shadow-sm hover:scale-105 active:scale-95 group/pill"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-ecell-gold group-hover/pill:text-black transition-colors" />
                    <span>Connect on LinkedIn</span>
                  </a>
                ) : "profileUrl" in mentor && mentor.profileUrl ? (
                  <a
                    href={mentor.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${mentor.name} Official IET Profile`}
                    className="inline-flex items-center justify-center gap-2 py-2 px-5 rounded-full border border-ecell-gold/30 bg-ecell-gold/5 hover:border-ecell-gold hover:bg-ecell-gold hover:text-black text-foreground transition-all duration-200 text-xs font-semibold shadow-sm hover:scale-105 active:scale-95 group/pill"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-ecell-gold group-hover/pill:text-black transition-colors" />
                    <span>Official IET Profile</span>
                  </a>
                ) : null}
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Link to Dedicated Team Page */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-ecell-gold/30 bg-card hover:bg-ecell-gold/10 hover:border-ecell-gold text-foreground text-sm font-semibold transition-all duration-200 group shadow-sm hover:scale-[1.02]"
          >
            <span>Explore Core & Executive Student Team (Session 2026-27)</span>
            <ArrowRight className="w-4 h-4 text-ecell-gold transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Jordon;
