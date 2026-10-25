"use client";

import React from "react";
import { Users2, Coins, Network, Trophy, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { TracingBeam } from "./ui/TracingBeam";

const aboutCards = [
  {
    id: 1,
    title: "Mentorship",
    badge: "Mentorship",
    icon: <Users2 className="w-5 h-5 text-ecell-gold" />,
    description:
      "We provide aspiring entrepreneurs with access to industry experts, venture capitalists, and successful alumni to guide them on their entrepreneurial journey.",
  },
  {
    id: 2,
    title: "Funding",
    badge: "Funding",
    icon: <Coins className="w-5 h-5 text-ecell-gold" />,
    description:
      "Our initiatives include startup incubation and investment pitching that help students transform their innovative ideas into successful businesses.",
  },
  {
    id: 3,
    title: "Networking",
    badge: "Networking",
    icon: <Network className="w-5 h-5 text-ecell-gold" />,
    description:
      "Through workshops, speaker sessions, and networking events, we aim to bridge the gap between theoretical knowledge and real-world startup challenges.",
  },
  {
    id: 4,
    title: "Hackathons",
    badge: "Hackathons",
    icon: <Trophy className="w-5 h-5 text-ecell-gold" />,
    description:
      "Organizing business competitions, hackathons, and leadership programs to help students transform their innovative ideas into successful businesses.",
  },
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 md:py-24 relative" id="about">
      <TracingBeam>
        <div className="section-container">
          {/* Header & Short Intro (Text verbatim from existing paragraph) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ecell-gold/10 border border-ecell-gold/20 text-ecell-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Empowering Student Founders
            </div>
            <h2 className="heading mb-6 text-foreground">
              About <span className="text-ecell-gold">E-Cell</span>, IET Lucknow
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Entrepreneurship Cell (E-Cell) at IET Lucknow is a dynamic student-driven initiative dedicated to fostering innovation, entrepreneurial thinking, and startup culture on campus. Our mission is to inspire and empower students to explore the world of entrepreneurship by providing them with the necessary resources, mentorship, and networking opportunities.
            </p>
          </motion.div>

          {/* 4 Cards Grid (Mentorship, Funding, Networking, Hackathons) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : idx * 0.1,
                  ease: "easeOut",
                }}
                whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.2 } }}
                className="relative group rounded-2xl border border-border/80 dark:border-border/60 bg-card dark:bg-[#0D1220]/95 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-ecell-gold/50 hover:shadow-[0_12px_36px_rgba(197,161,69,0.14)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-ecell-gold/10 border border-ecell-gold/20 flex items-center justify-center transition-colors group-hover:bg-ecell-gold/20">
                      {card.icon}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2.5 group-hover:text-ecell-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-zinc-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-ecell-gold">
                    {card.id === 1 && "100+ Hours Cohorts"}
                    {card.id === 2 && "Direct Pitch Access"}
                    {card.id === 3 && "Global Network"}
                    {card.id === 4 && "₹5L+ Prize Matrix"}
                  </span>
                  <span className="text-xs text-ecell-gold font-bold group-hover:translate-x-1.5 transition-transform">
                    →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Verbatim Closing Note */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-12 text-center max-w-2xl mx-auto"
          >
            <p className="text-sm text-muted-foreground italic">
              &ldquo;By fostering a culture of creativity, risk-taking, and problem-solving, E-Cell IET Lucknow serves as a launchpad for future leaders and changemakers.&rdquo;
            </p>
          </motion.div>
        </div>
      </TracingBeam>
    </section>
  );
};

export default About;
