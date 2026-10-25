"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Lightbulb, Send, Compass } from "lucide-react";

interface JoinBannerProps {
  onOpenJoinModal?: () => void;
}

export default function JoinBanner({ onOpenJoinModal }: JoinBannerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 md:py-20 relative" id="join">
      <div className="section-container">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl p-8 sm:p-12 md:p-14 text-center relative overflow-hidden border border-ecell-gold/40 bg-card/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(197,161,69,0.15)]"
        >
          {/* Ambient Sheen */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-ecell-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-ecell-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-ecell-gold/15 border border-ecell-gold/30 text-ecell-gold flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(197,161,69,0.2)]">
              <Lightbulb className="w-7 h-7" />
            </div>

            <h2 className="heading text-foreground mb-4">
              Ready to Build Your <span className="text-ecell-gold">Venture?</span>
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
              Whether you are refining your initial pitch deck or require prototyping lab space, E-Cell IET Lucknow gives you the institutional launchpad.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {onOpenJoinModal ? (
                <button
                  onClick={onOpenJoinModal}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-ecell-gold-dark via-ecell-gold to-ecell-gold-light text-black font-bold text-sm inline-flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(197,161,69,0.35)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Apply for Incubation</span>
                  <Send className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-ecell-gold-dark via-ecell-gold to-ecell-gold-light text-black font-bold text-sm inline-flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(197,161,69,0.35)] hover:brightness-110 active:scale-95 transition-all"
                >
                  <span>Apply for Incubation</span>
                  <Send className="w-4 h-4" />
                </a>
              )}

              <a
                href="#services"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-border bg-card/60 text-foreground hover:border-ecell-gold/40 hover:bg-card text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Compass className="w-4 h-4 text-ecell-gold" />
                <span>Explore Guidelines</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
