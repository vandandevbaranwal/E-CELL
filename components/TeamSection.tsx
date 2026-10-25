"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Users } from "lucide-react";
import { teamRoles } from "@/data";

export const TeamSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 md:py-24 relative" id="team">
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
            <Users className="w-3.5 h-3.5" />
            Core Team
          </div>
          <h2 className="heading mb-4 text-foreground">
            Student <span className="text-ecell-gold">Leadership</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            The dedicated student team driving innovation, operations, and programs across IET Lucknow.
          </p>
        </motion.div>

        {teamRoles.map((group) => (
          <div key={group.category} className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {group.members.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : idx * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-border bg-card p-6 backdrop-blur-xl transition-all duration-300 hover:border-ecell-gold/40 hover:shadow-[0_8px_30px_rgba(197,161,69,0.12)] flex flex-col items-center text-center"
                >
                  {/* Photo Container */}
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-border mb-4 bg-muted/40 p-2">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.designation}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Name */}
                  <h4 className="font-heading text-lg font-bold text-foreground mb-1">
                    {member.name}
                  </h4>

                  {/* Designation */}
                  <p className="text-xs font-medium text-ecell-gold mb-2">
                    {member.designation}
                  </p>

                  {/* Role Tag */}
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                    {member.role}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
