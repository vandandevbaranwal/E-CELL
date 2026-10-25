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
import ThemeToggle from "@/components/ThemeToggle";
import {
  MotionNavigationMenu,
  MotionNavigationMenuList,
  MotionNavigationMenuItem,
  MotionNavigationMenuTrigger,
  MotionNavigationMenuContent,
  MotionNavigationMenuLink,
} from "@/components/ui/motion-navigation-menu";
import { RandomLetterSwap } from "@/components/ui/random-letter-swap";

interface TopNavbarProps {
  onOpenJoinModal?: () => void;
}

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

const ESUMMIT_EVENTS = [
  {
    title: "Pitch Deck Gala",
    desc: "Flagship live pitch in front of prominent venture capitalists.",
    icon: Award,
    href: "/#events",
  },
  {
    title: "Hack-a-Preneur 2025",
    desc: "36-hour sprint building real MVP solutions for Indian startups.",
    icon: Sparkles,
    href: "/#events",
  },
  {
    title: "Keynote Conclave",
    desc: "Inspiring talks from unicorn founders and visionary leaders.",
    icon: Compass,
    href: "/#events",
  },
  {
    title: "Startup Expo",
    desc: "Interactive demo day connecting founders with 5,000+ attendees.",
    icon: Briefcase,
    href: "/#events",
  },
];

const STARTUP_ITEMS = [
  {
    title: "Incubated Ventures",
    desc: "Explore 20+ active companies born and nurtured inside IET Lucknow.",
    href: "/#startups",
  },
  {
    title: "Venture Pipeline",
    desc: "From ideation to seed funding — our structured incubation stages.",
    href: "/#startups",
  },
  {
    title: "Investor Connect",
    desc: "Direct syndicate introductions to angel networks and marquee VCs.",
    href: "/#startups",
  },
  {
    title: "Legal & IP Advisory",
    desc: "Patent support, incorporation, and regulatory compliance assistance.",
    href: "/#about",
  },
];

export default function TopNavbar({ onOpenJoinModal }: TopNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const highlightPillClass =
    "bg-ecell-gold/15 dark:bg-ecell-gold/20 border border-ecell-gold/30 rounded-full shadow-[0_0_15px_rgba(197,161,69,0.2)]";

  const dropdownHighlightClass =
    "bg-ecell-gold/15 dark:bg-ecell-gold/20 border border-ecell-gold/25 rounded-xl";

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 dark:bg-[#0C0F1A]/90 backdrop-blur-xl border-b border-border/40 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-all">
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
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-0.5">
              EST. 2014 • IET LUCKNOW
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

              {/* 3. E-Summit Mega-Menu Dropdown (Flagship) */}
              <MotionNavigationMenuItem value="esummit">
                <MotionNavigationMenuTrigger className="px-3.5 py-2 text-sm font-semibold text-ecell-gold hover:text-ecell-gold-light focus:text-ecell-gold-light transition-colors rounded-full">
                  <span className="flex items-center gap-1.5">
                    <RandomLetterSwap
                      label="E-Summit"
                      staggerDuration={0.02}
                      transition={{ duration: 0.45, type: "spring" }}
                      className="inline-block"
                    />
                    <span className="text-[9px] uppercase font-extrabold tracking-wider px-1.5 py-0.5 rounded-full bg-ecell-gold/20 text-ecell-gold border border-ecell-gold/40">
                      Flagship
                    </span>
                  </span>
                </MotionNavigationMenuTrigger>
                <MotionNavigationMenuContent
                  highlightClassName={dropdownHighlightClass}
                >
                  <div className="grid w-[520px] grid-cols-[1fr_1.3fr] gap-2 p-2">
                    {/* Featured Event Card */}
                    <MotionNavigationMenuLink
                      href="/#events"
                      className="bg-gradient-to-br from-ecell-gold/20 via-background to-background/90 border border-ecell-gold/30 rounded-xl p-4 flex flex-col justify-between"
                    >
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ecell-gold/25 text-ecell-gold text-[10px] font-bold uppercase tracking-wider mb-3">
                          <Sparkles className="w-3 h-3" /> Annual Conclave
                        </span>
                        <h4 className="font-heading font-extrabold text-base text-foreground mb-1">
                          E-Summit &apos;25
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Uttar Pradesh&apos;s premier collegiate entrepreneurial
                          festival bringing founders, angel syndicates, and
                          students under one roof.
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold text-ecell-gold pt-3">
                        <span>Explore Fest Schedule</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </MotionNavigationMenuLink>

                    {/* Events List */}
                    <div className="space-y-1">
                      {ESUMMIT_EVENTS.map((event) => (
                        <MotionNavigationMenuLink
                          key={event.title}
                          href={event.href}
                          className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-ecell-gold/10 transition-colors"
                        >
                          <span className="p-1.5 rounded-lg bg-ecell-gold/15 text-ecell-gold border border-ecell-gold/30 shrink-0 mt-0.5">
                            <event.icon className="w-3.5 h-3.5" />
                          </span>
                          <div>
                            <div className="flex items-center gap-1 text-xs font-semibold text-foreground">
                              <span>{event.title}</span>
                              <ArrowUpRight className="w-3 h-3 text-ecell-gold opacity-75" />
                            </div>
                            <span className="text-[11px] text-muted-foreground line-clamp-1">
                              {event.desc}
                            </span>
                          </div>
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </MotionNavigationMenuContent>
              </MotionNavigationMenuItem>

              {/* 4. Startups Mega-Menu Dropdown */}
              <MotionNavigationMenuItem value="startups">
                <MotionNavigationMenuTrigger className="px-3.5 py-2 text-sm font-medium text-foreground/85 hover:text-ecell-gold focus:text-ecell-gold transition-colors rounded-full">
                  <RandomLetterSwap
                    label="Startups"
                    staggerDuration={0.02}
                    transition={{ duration: 0.45, type: "spring" }}
                    className="inline-block"
                  />
                </MotionNavigationMenuTrigger>
                <MotionNavigationMenuContent
                  highlightClassName={dropdownHighlightClass}
                >
                  <div className="w-[420px] p-2 space-y-1">
                    <div className="px-3 py-2 border-b border-border/50">
                      <span className="text-xs font-bold text-ecell-gold uppercase tracking-wider">
                        Venture Incubation Portfolio
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 pt-1">
                      {STARTUP_ITEMS.map((item) => (
                        <MotionNavigationMenuLink
                          key={item.title}
                          href={item.href}
                          className="p-2.5 rounded-xl hover:bg-ecell-gold/10 transition-colors flex flex-col gap-1"
                        >
                          <div className="flex items-center justify-between text-xs font-semibold text-foreground">
                            <span>{item.title}</span>
                            <ArrowUpRight className="w-3 h-3 text-ecell-gold/80" />
                          </div>
                          <span className="text-[11px] text-muted-foreground line-clamp-2">
                            {item.desc}
                          </span>
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </MotionNavigationMenuContent>
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

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a
            href="#contact"
            className="hidden xl:inline-block text-xs sm:text-sm font-medium text-muted-foreground hover:text-ecell-gold transition-colors"
          >
            Contact Support
          </a>

          <ThemeToggle />

          {onOpenJoinModal ? (
            <button
              onClick={onOpenJoinModal}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-ecell-gold-dark via-ecell-gold to-ecell-gold-light text-black font-bold text-xs sm:text-sm shadow-[0_4px_18px_rgba(197,161,69,0.35)] hover:brightness-110 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Join E-Cell</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            </button>
          ) : (
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-ecell-gold-dark via-ecell-gold to-ecell-gold-light text-black font-bold text-xs sm:text-sm shadow-[0_4px_18px_rgba(197,161,69,0.35)] hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
            >
              <span>Join E-Cell</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            </a>
          )}

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-foreground hover:bg-card border border-border"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Random Letter Swap */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-card/95 backdrop-blur-2xl border-b border-border px-6 py-5 shadow-2xl space-y-3 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2.5">
            {[
              { name: "About", href: "/#about" },
              { name: "Initiatives", href: "/#services" },
              { name: "E-Summit", href: "/#events", isFeatured: true },
              { name: "Startups", href: "/#startups" },
              { name: "Team", href: "/team" },
              { name: "Blogs", href: "/#recentprojects" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-semibold transition-colors flex items-center justify-between ${
                  item.isFeatured
                    ? "text-ecell-gold font-bold"
                    : "text-foreground hover:text-ecell-gold"
                }`}
              >
                <RandomLetterSwap
                  label={item.name}
                  staggerDuration={0.02}
                  transition={{ duration: 0.45, type: "spring" }}
                />
                {item.isFeatured && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-ecell-gold/15 text-ecell-gold border border-ecell-gold/30">
                    Flagship
                  </span>
                )}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm text-muted-foreground hover:text-ecell-gold"
            >
              <RandomLetterSwap
                label="Contact Support"
                staggerDuration={0.015}
                transition={{ duration: 0.45, type: "spring" }}
              />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
