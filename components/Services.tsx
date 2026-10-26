"use client";

import React from "react";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const serviceItems = [
  {
    id: 1,
    area: "md:col-span-6 lg:col-span-5",
    badge: "ON CAMPUS",
    tags: ["Campus Workspaces", "Hardware Labs", "Peer Guidance"],
    icon: <Box className="h-5 w-5 text-ecell-gold" />,
    title: "Startup Incubation & Mentorship",
    description:
      "Providing student teams with co-working access, peer mentoring, and guidance to help turn project ideas into working campus ventures.",
  },
  {
    id: 2,
    area: "md:col-span-6 lg:col-span-7",
    badge: "SPEAKER SERIES",
    tags: ["Founder Sessions", "Skill Bootcamps", "Live Q&A"],
    icon: <Settings className="h-5 w-5 text-ecell-gold" />,
    title: "Workshops & Skill Development",
    description:
      "Organizing practical workshops on pitching, product design, financial fundamentals, and digital tools to build hands-on founder capabilities.",
  },
  {
    id: 3,
    area: "md:col-span-6 lg:col-span-7",
    badge: "INVESTOR CONNECT",
    tags: ["Pitch Days", "Grant Guidance", "Angel Introductions"],
    icon: <Lock className="h-5 w-5 text-ecell-gold" />,
    title: "Funding & Grant Opportunities",
    description:
      "Connecting validated student teams with campus pitch events, university incubation seed grants, and angel introductions to help fund prototypes.",
  },
  {
    id: 4,
    area: "md:col-span-6 lg:col-span-5",
    badge: "ALUMNI NETWORK",
    tags: ["Alumni Mentors", "Guest Panels", "Industry Meetups"],
    icon: <Sparkles className="h-5 w-5 text-ecell-gold" />,
    title: "Networking & Industry Interaction",
    description:
      "Facilitating conversations between students and IET alumni founders, corporate leaders, and startup operators through informal roundtables.",
  },
  {
    id: 5,
    area: "md:col-span-12",
    badge: "COMPETITIONS",
    tags: ["Prize Pool ₹5L", "Campus Hackathons", "Annual Pitch Day"],
    icon: <Search className="h-5 w-5 text-ecell-gold" />,
    title: "Business Competitions & Hackathons",
    description:
      "Hosting annual hackathons, case-study competitions, and pitch challenges where students test their problem-solving abilities and win prizes.",
  },
];

const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 md:py-24 relative" id="services">
      <div className="section-container">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ecell-gold/10 border border-ecell-gold/25 text-ecell-gold text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(197,161,69,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Founder&apos;s Launchpad</span>
          </div>
          <h2 className="heading mb-4 text-foreground">
            The Innovation <span className="text-ecell-gold">Ecosystem</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Empowering student builders with end-to-end venture incubation, founder mentorship, seed capital access, and prototyping resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          {serviceItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : idx * 0.08,
                ease: "easeOut",
              }}
              whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
              className={`rounded-2xl border border-border/80 dark:border-border/60 bg-card dark:bg-[#0D1220]/95 p-6 sm:p-7 md:backdrop-blur-xl transition-all duration-300 hover:border-ecell-gold/50 hover:shadow-[0_12px_36px_rgba(197,161,69,0.14)] flex flex-col justify-between ${item.area}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-ecell-gold/10 border border-ecell-gold/20 flex items-center justify-center transition-transform group-hover:scale-105">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-ecell-gold/15 border border-ecell-gold/30 text-ecell-gold uppercase">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.tags && item.tags.length > 0 && (
                <div className="mt-6 pt-4 border-t border-border/80 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-muted/60 border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
