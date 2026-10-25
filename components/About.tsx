"use client";

import React from "react";
import { Users2, Coins, Network, Trophy, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { TracingBeam } from "./ui/TracingBeam";

const aboutCards = [
  {
    id: 1,
    title: "Student Community",
    badge: "Cross-Discipline",
    icon: <Users2 className="w-5 h-5 text-ecell-gold" />,
    description:
      "We bring together student developers, designers, and thinkers across all engineering branches to collaborate on projects and startup ideas.",
  },
  {
    id: 2,
    title: "Ideathons & Sprints",
    badge: "Building",
    icon: <Trophy className="w-5 h-5 text-ecell-gold" />,
    description:
      "We run weekend problem-solving sprints and hackathons where students test their ideas, build working prototypes, and receive peer feedback.",
  },
  {
    id: 3,
    title: "Speaker Sessions",
    badge: "Practical Talks",
    icon: <Network className="w-5 h-5 text-ecell-gold" />,
    description:
      "We host founders, startup engineers, and alumni for candid fireside chats on product validation, bootstrapping, and early lessons.",
  },
  {
    id: 4,
    title: "Peer & Alumni Mentorship",
    badge: "Mentorship",
    icon: <Coins className="w-5 h-5 text-ecell-gold" />,
    description:
      "We connect student teams with alumni and senior mentors who provide guidance on tech stacks, pitch decks, and competition applications.",
  },
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 md:py-24 relative" id="about">
      <TracingBeam>
        <div className="section-container">
          {/* Header & Short Intro */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ecell-gold/10 border border-ecell-gold/20 text-ecell-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Student Innovation Body
            </div>
            <h2 className="heading mb-6 text-foreground">
              About <span className="text-ecell-gold">E-Cell</span>, IET Lucknow
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We are a student-run team at IET Lucknow committed to creating an active culture of building and problem-solving on campus. We help students turn their ideas into working projects through community meetups, weekend hackathons, and direct mentorship from alumni and practitioners.
            </p>
          </motion.div>

          {/* 4 Cards Grid */}
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
              </motion.div>
            ))}
          </div>
        </div>
      </TracingBeam>
    </section>
  );
};

export default About;
