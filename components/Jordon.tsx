"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { mentors } from "@/data";

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
          {mentors.map((mentor, idx) => (
            <motion.div
              key={mentor.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.12,
                ease: "easeOut",
              }}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-border/80 dark:border-border/60 bg-card dark:bg-[#0D1220]/95 p-7 backdrop-blur-xl transition-all duration-300 hover:border-ecell-gold/50 hover:shadow-[0_12px_36px_rgba(197,161,69,0.16)] flex flex-col items-center text-center justify-between"
            >
              <div className="flex flex-col items-center w-full">
                {/* Photo with Gold Frame */}
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-ecell-gold/40 shadow-lg shadow-ecell-gold/10 mb-6">
                  <Image
                    src={mentor.image}
                    alt={mentor.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-1.5">
                  {mentor.name}
                </h3>

                {/* Role Badge */}
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-ecell-gold/15 text-ecell-gold border border-ecell-gold/30 mb-4">
                  {mentor.role}
                </span>

                {/* 2-line Bio */}
                <p className="text-sm text-muted-foreground dark:text-zinc-300 leading-relaxed">
                  {mentor.bio}
                </p>

                {/* Social Connect Button */}
                <div className="pt-4 border-t border-border mt-4 w-full flex justify-center">
                  {"linkedin" in mentor && mentor.linkedin ? (
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${mentor.name} on LinkedIn`}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border border-border bg-muted/40 hover:border-ecell-gold/50 hover:bg-ecell-gold/10 hover:text-ecell-gold text-muted-foreground transition-all duration-200 text-xs font-medium"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-ecell-gold" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  ) : "profileUrl" in mentor && mentor.profileUrl ? (
                    <a
                      href={mentor.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${mentor.name} Official IET Profile`}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border border-border bg-muted/40 hover:border-ecell-gold/50 hover:bg-ecell-gold/10 hover:text-ecell-gold text-muted-foreground transition-all duration-200 text-xs font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-ecell-gold" />
                      <span>Official IET Profile</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
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
