"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { projects } from "@/data";

const Blogssec = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 md:py-24 relative" id="recentprojects">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="heading mb-4 text-foreground">
            Read Our Recent <span className="text-ecell-gold">Blogs</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Insights, playbooks, and tactical lessons on startup building, funding, and technology.
          </p>
        </motion.div>

        {/* Clean, Non-Overlapping Responsive Blog Grid with Proper Distances */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 items-stretch justify-center">
          {projects.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.1,
                ease: "easeOut",
              }}
              whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.2 } }}
              className="w-full flex flex-col justify-between rounded-2xl border border-border/80 bg-card/95 dark:bg-[#0E1322]/95 backdrop-blur-xl p-5 sm:p-6 transition-all duration-300 hover:border-ecell-gold/50 hover:shadow-[0_12px_36px_rgba(197,161,69,0.16)] group"
            >
              <Link href={`/blogs/${item.id}`} className="flex flex-col flex-1 justify-between">
                <div>
                  {/* Blog Thumbnail Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-border/60 mb-5 bg-muted">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Metadata: Date and Read Time */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-ecell-gold/15 text-ecell-gold border border-ecell-gold/30">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date || "E-Cell Article"}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>5 min read</span>
                    </span>
                  </div>

                  {/* Blog Title */}
                  <h3 className="font-heading font-bold text-base sm:text-lg text-foreground group-hover:text-ecell-gold transition-colors line-clamp-2 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Blog Summary */}
                  <p className="text-xs sm:text-sm text-muted-foreground dark:text-zinc-300 line-clamp-3 leading-relaxed mb-4">
                    {item.des}
                  </p>
                </div>

                {/* Footer Action Link */}
                <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs font-bold text-ecell-gold group-hover:text-ecell-gold-light transition-colors mt-auto">
                  <span>Read Full Post</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogssec;
