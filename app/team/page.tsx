"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Sparkles,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Layers,
  Linkedin,
  Instagram,
  ExternalLink,
} from "lucide-react";

import { mentors, coreTeam, executiveTeam } from "@/data";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CursorGlow from "@/components/ui/CursorGlow";
import TeamBackgroundAnimation from "@/components/ui/TeamBackgroundAnimation";

export default function TeamPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<"all" | "core" | "executive" | "advisors">("all");

  return (
    <main className="relative bg-background text-foreground min-h-screen flex flex-col justify-between overflow-x-hidden w-full">
      <ScrollProgress />
      <CursorGlow />
      <TeamBackgroundAnimation />
      <ScrollToTop />
      
      {/* Edge-to-Edge Sticky TopNavbar */}
      <TopNavbar />

      <div className="relative z-10 w-full pt-10 pb-20 sm:pt-14 sm:pb-24">
        <div className="section-container">
          {/* Top Breadcrumb & Back Link */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-ecell-gold transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </motion.div>

          {/* Page Hero Header */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ecell-gold/10 border border-ecell-gold/20 text-ecell-gold text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Academic Session 2026-27
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4">
              Meet the <span className="text-ecell-gold">E-Cell Team</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              The students, advisors, and visionaries driving entrepreneurial initiatives, incubation, and startup culture at the Institute of Engineering & Technology, Lucknow.
            </p>
          </motion.div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
            {[
              { id: "all", label: "All Members", icon: <Layers className="w-4 h-4 mr-1.5" /> },
              { id: "core", label: "Core Team (Fourth Year)", icon: <ShieldCheck className="w-4 h-4 mr-1.5" /> },
              { id: "executive", label: "Executive Team (Third Year)", icon: <Users className="w-4 h-4 mr-1.5" /> },
              { id: "advisors", label: "Faculty & Patrons", icon: <Briefcase className="w-4 h-4 mr-1.5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  activeTab === tab.id
                    ? "bg-ecell-gold text-black border-ecell-gold shadow-md font-bold"
                    : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-ecell-gold/30"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* SECTION: Faculty Advisors & Patrons */}
          {(activeTab === "all" || activeTab === "advisors") && (
            <motion.section
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
                <div className="w-10 h-10 rounded-xl bg-ecell-gold/10 border border-ecell-gold/20 flex items-center justify-center text-ecell-gold font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Patrons & Faculty Advisors
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Administrative visionaries and academic leadership guiding E-Cell IET Lucknow.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {mentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    className="rounded-2xl border border-border bg-card p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-ecell-gold/40 hover:shadow-lg flex flex-col items-center text-center justify-between"
                  >
                    <div className="flex flex-col items-center w-full">
                      <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-ecell-gold/40 shadow-md mb-5">
                        <Image
                          src={mentor.image}
                          alt={mentor.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-1">
                        {mentor.name}
                      </h3>
                      <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-ecell-gold/10 text-ecell-gold border border-ecell-gold/20 mb-3">
                        {mentor.role}
                      </span>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {mentor.bio}
                      </p>

                      {/* Connect on LinkedIn / Official Profile */}
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
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* SECTION: Core Team Positions (Session 2026-27) */}
          {(activeTab === "all" || activeTab === "core") && (
            <motion.section
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
                <div className="w-10 h-10 rounded-xl bg-ecell-gold/10 border border-ecell-gold/20 flex items-center justify-center text-ecell-gold font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Core Team (Session 2026-27)
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Final year student leadership appointed by the Faculty Advisor, E-Cell IET Lucknow.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {coreTeam.map((member: any) => (
                  <div
                    key={member.id}
                    className="group rounded-2xl border border-border bg-card p-6 backdrop-blur-xl transition-all duration-300 hover:border-ecell-gold/50 hover:shadow-[0_8px_30px_rgba(197,161,69,0.12)] hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Avatar Initials & Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-ecell-gold-dark to-ecell-gold flex items-center justify-center font-heading font-extrabold text-black text-sm shadow-sm">
                          {member.name.split(" ").map((n: string) => n[0]).join("")}
                        </div>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-ecell-gold/10 text-ecell-gold border border-ecell-gold/20">
                          {member.category}
                        </span>
                      </div>

                      {/* Name & Position */}
                      <h3 className="font-heading text-lg font-bold text-foreground mb-1 group-hover:text-ecell-gold transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-ecell-gold-dark dark:text-ecell-gold-light mb-4">
                        {member.position}
                      </p>
                    </div>

                    <div>
                      {/* Branch & Year Footnotes */}
                      <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span className="inline-flex items-center gap-1 font-medium">
                          <GraduationCap className="w-3.5 h-3.5 text-ecell-gold" />
                          {member.branch}
                        </span>
                        <span className="font-medium bg-muted px-2 py-0.5 rounded-md border border-border">
                          {member.year} Year
                        </span>
                      </div>

                      {/* Social Connect Buttons (LinkedIn & Instagram) */}
                      <div className="flex items-center gap-2 pt-2 border-t border-border">
                        <a
                          href={member.linkedin || `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(member.name + " IET Lucknow")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg border border-border bg-muted/40 hover:border-ecell-gold/50 hover:bg-ecell-gold/10 hover:text-ecell-gold text-muted-foreground transition-all duration-200 text-xs font-medium"
                        >
                          <Linkedin className="w-3.5 h-3.5 text-ecell-gold" />
                          <span>LinkedIn</span>
                        </a>
                        <a
                          href={member.instagram || "https://www.instagram.com/ecell_iet_lko/"}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on Instagram`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg border border-border bg-muted/40 hover:border-ecell-gold/50 hover:bg-ecell-gold/10 hover:text-ecell-gold text-muted-foreground transition-all duration-200 text-xs font-medium"
                        >
                          <Instagram className="w-3.5 h-3.5 text-ecell-gold" />
                          <span>Instagram</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* SECTION: Executive Team Positions (Session 2026-27) */}
          {(activeTab === "all" || activeTab === "executive") && (
            <motion.section
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
                <div className="w-10 h-10 rounded-xl bg-ecell-gold/10 border border-ecell-gold/20 flex items-center justify-center text-ecell-gold font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Executive Team (Session 2026-27)
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Third-year executive leaders coordinating design, marketing, operations, and content.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {executiveTeam.map((member: any) => (
                  <div
                    key={member.id}
                    className="group rounded-2xl border border-border bg-card p-6 backdrop-blur-xl transition-all duration-300 hover:border-ecell-gold/40 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Avatar Initials & Domain Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-full bg-muted border border-border flex items-center justify-center font-heading font-bold text-foreground text-xs">
                          {member.name.split(" ").map((n: string) => n[0]).join("")}
                        </div>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                          {member.domain}
                        </span>
                      </div>

                      {/* Name & Position */}
                      <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-1 group-hover:text-ecell-gold transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-4">
                        {member.position}
                      </p>
                    </div>

                    <div>
                      {/* Branch & Year Footnotes */}
                      <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span className="inline-flex items-center gap-1">
                          <GraduationCap className="w-3.5 h-3.5 text-ecell-gold" />
                          {member.branch}
                        </span>
                        <span className="bg-muted px-2 py-0.5 rounded-md border border-border text-[11px]">
                          {member.year} Year
                        </span>
                      </div>

                      {/* Social Connect Buttons (LinkedIn & Instagram) */}
                      <div className="flex items-center gap-2 pt-2 border-t border-border">
                        <a
                          href={member.linkedin || `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(member.name + " IET Lucknow")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg border border-border bg-muted/40 hover:border-ecell-gold/50 hover:bg-ecell-gold/10 hover:text-ecell-gold text-muted-foreground transition-all duration-200 text-xs font-medium"
                        >
                          <Linkedin className="w-3.5 h-3.5 text-ecell-gold" />
                          <span>LinkedIn</span>
                        </a>
                        <a
                          href={member.instagram || "https://www.instagram.com/ecell_iet_lko/"}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on Instagram`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg border border-border bg-muted/40 hover:border-ecell-gold/50 hover:bg-ecell-gold/10 hover:text-ecell-gold text-muted-foreground transition-all duration-200 text-xs font-medium"
                        >
                          <Instagram className="w-3.5 h-3.5 text-ecell-gold" />
                          <span>Instagram</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Official Sign-off Note */}
          <div className="mt-16 text-center max-w-xl mx-auto p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-md">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Official appointments notified by{" "}
              <strong className="text-foreground">Dr. Anurag Verma</strong> (Faculty Advisor, Entrepreneurship Cell)
              for the academic session 2026-27, Institute of Engineering & Technology, Lucknow.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
