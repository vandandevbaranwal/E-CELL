"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Target, Rocket, Globe2 } from "lucide-react";

const goals = [
  {
    step: "01",
    tag: "Entrepreneurial Mindset",
    title: "Promoting Entrepreneurial Mindset",
    icon: <Target className="h-6 w-6 text-ecell-gold" />,
    description:
      "An E-Cell fosters an entrepreneurial mindset by encouraging creativity, risk-taking, and problem-solving among students. It organizes workshops, guest lectures, and interactive sessions with industry experts to provide insights into business development. Through case study discussions, brainstorming sessions, and leadership activities, students are exposed to real-world challenges, helping them develop the confidence and skills needed to innovate and take initiative in entrepreneurial ventures.",
  },
  {
    step: "02",
    tag: "Startup Support",
    title: "Providing Startup Support",
    icon: <Rocket className="h-6 w-6 text-ecell-gold" />,
    description:
      " E-Cells act as a launchpad for student startups by offering mentorship, funding assistance, and access to incubation facilities. They connect students with industry professionals and investors, helping them refine their ideas, develop prototypes, and secure financial backing. Additionally, legal and financial guidance is provided to help students navigate company registration, intellectual property rights, and business compliance, ensuring their startups have a strong foundation for growth",
  },
  {
    step: "03",
    tag: "Entrepreneurial Ecosystem",
    title: "Building a Strong Entrepreneurial Ecosystem",
    icon: <Globe2 className="h-6 w-6 text-ecell-gold" />,
    description:
      " To create a thriving startup culture, E-Cells establish collaborations with industries, investors, and successful alumni to provide networking and funding opportunities. They organize pitch competitions, hackathons, and business plan challenges, giving students a platform to showcase and refine their ideas. By facilitating startup internships and corporate partnerships, E-Cells help students gain real-world exposure, ensuring a well-connected ecosystem that supports entrepreneurial ambitions.",
  },
];

const Approach = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 md:py-24 relative" id="goals">
      <div className="section-container">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="heading mb-4 text-foreground">
            Our <span className="text-ecell-gold">Goals</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Strategic pillars shaping the future of collegiate entrepreneurship and startup leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {goals.map((goal, idx) => (
            <motion.div
              key={goal.step}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.12,
                ease: "easeOut",
              }}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.2 } }}
              className="relative rounded-2xl border border-border bg-card p-7 backdrop-blur-xl transition-all duration-300 hover:border-ecell-gold/40 hover:shadow-[0_12px_36px_rgba(197,161,69,0.12)] flex flex-col justify-between"
            >
              <div>
                {/* Header: Step number + Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-3xl font-extrabold text-ecell-gold/40">
                    {goal.step}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-ecell-gold/10 border border-ecell-gold/20 text-ecell-gold">
                    {goal.tag}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center mb-5 shadow-sm">
                  {goal.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3.5 tracking-tight">
                  {goal.title}
                </h3>

                {/* Description verbatim */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
