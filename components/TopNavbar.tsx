"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Menu,
  X,
  Rocket,
  Sparkles,
  Users,
  Award,
  TrendingUp,
  Lightbulb,
  ArrowUpRight,
  Compass,
  FileText,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import {
  MotionNavigationMenu,
  MotionNavigationMenuList,
  MotionNavigationMenuItem,
  MotionNavigationMenuTrigger,
  MotionNavigationMenuContent,
  MotionNavigationMenuLink,
} from "@/components/ui/motion-navigation-menu";
import { RandomLetterSwap } from "@/components/ui/random-letter-swap";

const INITIATIVES = [
  {
    title: "Incubation Cell",
    desc: "Physical co-working, lab access, and technical resources at IET.",
    icon: Rocket,
    href: "/#services",
  },
  {
    title: "Seed Grant Pool",
    desc: "Institutional grants and early equity-free prototyping funds.",
    icon: TrendingUp,
    href: "/#services",
  },
  {
    title: "Mentorship Network",
    desc: "1-on-1 guidance from founders, angel investors, and domain experts.",
    icon: Users,
    href: "/#mentors",
  },
  {
    title: "Venture Workshops",
    desc: "Hands-on bootcamps on pitch decks, legal, and growth engineering.",
    icon: Lightbulb,
    href: "/#services",
  },
];

export default function TopNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const highlightPillClass =
    "bg-ecell-gold/15 dark:bg-ecell-gold/20 border border-ecell-gold/30 rounded-full shadow-[0_0_15px_rgba(197,161,69,0.2)]";

  const dropdownHighlightClass =
    "bg-ecell-gold/15 dark:bg-ecell-gold/20 border border-ecell-gold/25 rounded-xl";

  return (
    <div className="w-full">
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/90 dark:bg-[#0C0F1A]/95 backdrop-blur-2xl border-b border-border/50 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.6)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: Official Insignia Logo and Identity */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[2px] bg-gradient-to-tr from-ecell-gold via-ecell-gold-light to-ecell-gold-dark/40 shadow-[0_0_12px_rgba(197,161,69,0.3)]">
            <div className="w-full h-full rounded-full bg-background dark:bg-[#12172A] flex items-center justify-center overflow-hidden">
              <Image
                src="/ecell-logo.png"
                alt="E-Cell IET Lucknow Insignia"
                width={36}
                height={36}
                className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base sm:text-lg text-ecell-gold tracking-wide leading-tight group-hover:text-ecell-gold-light transition-colors">
              E-Cell IET Lucknow
            </span>
          </div>
        </Link>

        {/* Center: Desktop Motion Mega-Menu with Random Letter Swap & Sliding Highlight */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center justify-center flex-1"
        >
          <MotionNavigationMenu
            viewport={true}
            viewportClassName="bg-background/95 dark:bg-[#0C0F1A]/95 border border-ecell-gold/30 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-2xl ring-1 ring-ecell-gold/20"
            springBounce={0}
            springStiffness={380}
            springDamping={30}
          >
            <MotionNavigationMenuList highlightClassName={highlightPillClass}>
              {/* 1. About Link */}
              <MotionNavigationMenuItem>
                <MotionNavigationMenuLink
                  href="/#about"
                  className="px-3.5 py-2 text-sm font-medium text-foreground/85 hover:text-ecell-gold focus:text-ecell-gold transition-colors rounded-full"
                >
                  <RandomLetterSwap
                    label="About"
                    staggerDuration={0.02}
                    transition={{ duration: 0.45, type: "spring" }}
                    className="inline-block"
                  />
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>

              {/* 2. Initiatives Mega-Menu Dropdown */}
              <MotionNavigationMenuItem value="initiatives">
                <MotionNavigationMenuTrigger className="px-3.5 py-2 text-sm font-medium text-foreground/85 hover:text-ecell-gold focus:text-ecell-gold transition-colors rounded-full">
                  <RandomLetterSwap
                    label="Initiatives"
                    staggerDuration={0.02}
                    transition={{ duration: 0.45, type: "spring" }}
                    className="inline-block"
                  />
                </MotionNavigationMenuTrigger>
                <MotionNavigationMenuContent
                  highlightClassName={dropdownHighlightClass}
                >
                  <div className="w-[480px] p-2 space-y-1">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-border/50">
                      <span className="text-xs font-bold text-ecell-gold uppercase tracking-wider">
                        Ecosystem Pillars
                      </span>
                      <span className="text-[11px] text-muted-foreground">
                        Empowering Student Innovators
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 pt-1">
                      {INITIATIVES.map((item) => (
                        <MotionNavigationMenuLink
                          key={item.title}
                          href={item.href}
                          className="flex flex-col gap-1.5 p-3 rounded-xl hover:bg-ecell-gold/10 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="p-1.5 rounded-lg bg-ecell-gold/15 text-ecell-gold border border-ecell-gold/30">
                              <item.icon className="w-4 h-4" />
                            </span>
                            <span className="text-sm font-semibold text-foreground">
                              {item.title}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground line-clamp-2">
                            {item.desc}
                          </span>
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </MotionNavigationMenuContent>
              </MotionNavigationMenuItem>

              {/* 3. Events Link */}
              <MotionNavigationMenuItem>
                <MotionNavigationMenuLink
                  href="/events"
                  className="px-3.5 py-2 text-sm font-medium text-foreground/85 hover:text-ecell-gold focus:text-ecell-gold transition-colors rounded-full"
                >
                  <RandomLetterSwap
                    label="Events"
                    staggerDuration={0.02}
                    transition={{ duration: 0.45, type: "spring" }}
                    className="inline-block"
                  />
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>

              {/* Achievements Link */}
              <MotionNavigationMenuItem>
                <MotionNavigationMenuLink
                  href="/#achievements"
                  className="px-3.5 py-2 text-sm font-medium text-foreground/85 hover:text-ecell-gold focus:text-ecell-gold transition-colors rounded-full"
                >
                  <RandomLetterSwap
                    label="Achievements"
                    staggerDuration={0.015}
                    transition={{ duration: 0.45, type: "spring" }}
                    className="inline-block"
                  />
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>

              {/* 4. Incubation Link */}
              <MotionNavigationMenuItem>
                <MotionNavigationMenuLink
                  href="/#services"
                  className="px-3.5 py-2 text-sm font-medium text-foreground/85 hover:text-ecell-gold focus:text-ecell-gold transition-colors rounded-full"
                >
                  <RandomLetterSwap
                    label="Incubation"
                    staggerDuration={0.02}
                    transition={{ duration: 0.45, type: "spring" }}
                    className="inline-block"
                  />
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>

              {/* 5. Team Link */}
              <MotionNavigationMenuItem>
                <MotionNavigationMenuLink
                  href="/team"
                  className="px-3.5 py-2 text-sm font-medium text-foreground/85 hover:text-ecell-gold focus:text-ecell-gold transition-colors rounded-full"
                >
                  <RandomLetterSwap
                    label="Team"
                    staggerDuration={0.02}
                    transition={{ duration: 0.45, type: "spring" }}
                    className="inline-block"
                  />
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>

              {/* 6. Blogs Link */}
              <MotionNavigationMenuItem>
                <MotionNavigationMenuLink
                  href="/#recentprojects"
                  className="px-3.5 py-2 text-sm font-medium text-foreground/85 hover:text-ecell-gold focus:text-ecell-gold transition-colors rounded-full"
                >
                  <RandomLetterSwap
                    label="Blogs"
                    staggerDuration={0.02}
                    transition={{ duration: 0.45, type: "spring" }}
                    className="inline-block"
                  />
                </MotionNavigationMenuLink>
              </MotionNavigationMenuItem>
            </MotionNavigationMenuList>
          </MotionNavigationMenu>
        </nav>

        {/* Right: Actions & Mobile Navigation */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a
            href="#contact"
            className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-ecell-gold transition-colors"
          >
            Contact us
          </a>

          {/* Mobile Hamburger Navigation Button (Prominent at top right on mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 sm:p-2.5 rounded-xl text-foreground hover:text-ecell-gold bg-card/90 border border-ecell-gold/40 shadow-sm flex items-center justify-center shrink-0 transition-all active:scale-95"
            aria-label="Toggle navigation menu"
            id="mobile-nav-toggle-btn"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-ecell-gold" />
            ) : (
              <Menu className="w-5 h-5 text-ecell-gold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Random Letter Swap */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-card/98 backdrop-blur-2xl border-b border-border px-6 py-5 shadow-2xl space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {[
              { name: "About", href: "/#about" },
              { name: "Initiatives", href: "/#services" },
              { name: "Events", href: "/events" },
              { name: "Achievements", href: "/#achievements" },
              { name: "Incubation", href: "/#services" },
              { name: "Team", href: "/team" },
              { name: "Blogs", href: "/#recentprojects" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-foreground hover:text-ecell-gold transition-colors flex items-center justify-between"
              >
                <RandomLetterSwap
                  label={item.name}
                  staggerDuration={0.02}
                  transition={{ duration: 0.45, type: "spring" }}
                />
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm text-muted-foreground hover:text-ecell-gold"
            >
              <RandomLetterSwap
                label="Contact us"
                staggerDuration={0.015}
                transition={{ duration: 0.45, type: "spring" }}
              />
            </Link>
          </nav>
        </div>
      )}
      </header>
      {/* Structural layout spacer so page content starts cleanly below the fixed topbar */}
      <div className="h-20 w-full shrink-0 pointer-events-none" aria-hidden="true" />
    </div>
  );
}
