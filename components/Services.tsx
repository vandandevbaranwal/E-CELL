"use client";

import React from "react";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const serviceItems = [
  {
    id: 1,
    area: "md:col-span-6 lg:col-span-5",
    badge: "ON CAMPUS",
    tags: ["Free AWS & GCP Credits", "Legal Filing Help", "Patent Advisory"],
    icon: <Box className="h-5 w-5 text-ecell-gold" />,
    title: "Startup Incubation & Mentorship",
    description:
      "Providing aspiring entrepreneurs with expert guidance, mentorship from industry leaders, and incubation support to help transform ideas into scalable startups.",
  },
  {
    id: 2,
    area: "md:col-span-6 lg:col-span-7",
    badge: "SPEAKER SERIES",
    tags: ["Unicorn Founders", "VC Partners", "Interactive Q&A"],
    icon: <Settings className="h-5 w-5 text-ecell-gold" />,
    title: "Workshops & Skill Development",
    description:
      " Organizing sessions on business development, pitching, financial planning, digital marketing, and emerging technologies to enhance entrepreneurial skills.",
  },
  {
    id: 3,
    area: "md:col-span-6 lg:col-span-7",
    badge: "PRIVATE ARENA",
    tags: ["Direct Term-Sheets", "Accredited Angels", "Due Diligence Kit"],
    icon: <Lock className="h-5 w-5 text-ecell-gold" />,
    title: "Funding & Investment Opportunities",
    description:
      " Connecting student startups with angel investors, venture capitalists, and startup grants to help them secure funding and financial backing. We organize pitch sessions, investor meetups, and crowdfunding initiatives to provide financial support and guidance on securing investments. Additionally, we assist startups in applying for government schemes and incubation programs to further accelerate their growth.",
  },
  {
    id: 4,
    area: "md:col-span-6 lg:col-span-5",
    badge: "GLOBAL NETWORK",
    tags: ["Corporate Roundtables", "Alumni Mentors", "Accelerator Linkages"],
    icon: <Sparkles className="h-5 w-5 text-ecell-gold" />,
    title: "Networking & Industry Collaboration ",
    description:
      "Facilitating interactions with successful entrepreneurs, corporate leaders, and alumni through networking events, panel discussions, and startup meetups. We collaborate with industry partners, incubators, and accelerators to provide students with exposure to real-world business scenarios. ",
  },
  {
    id: 5,
    area: "md:col-span-12",
    badge: "COMPETITIONS",
    tags: ["₹5L+ Prize Matrix", "National Hackathons", "Investor Pitching"],
    icon: <Search className="h-5 w-5 text-ecell-gold" />,
    title: "Business Competitions & Hackathons",
    description:
      "Hosting events like pitch competitions, business plan challenges, and hackathons to encourage innovation and provide a platform for students to showcase their ideas. These competitions help students refine their problem-solving skills, develop market-ready solutions, and receive feedback. ",
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
          <h2 className="heading mb-4 text-foreground">
            Our <span className="text-ecell-gold">Services</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Empowering students with end-to-end entrepreneurial support, resources, and institutional backing.
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
              className={`rounded-2xl border border-border/80 dark:border-border/60 bg-card dark:bg-[#0D1220]/95 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-ecell-gold/50 hover:shadow-[0_12px_36px_rgba(197,161,69,0.14)] flex flex-col justify-between ${item.area}`}
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
