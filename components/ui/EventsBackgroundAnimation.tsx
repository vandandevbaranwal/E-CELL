"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function EventsBackgroundAnimation() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();

  // Subtle parallax shifts based on scroll
  const meshY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -100]);
  const beamRotate = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [15, 15] : [10, 25]);
  const spotlightBeamY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 140]);
  const hackathonBeamY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -120]);

  // Track subtle mouse movement for arena depth feeling
  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* ── Layer 1: Dual Event Stage Spotlights & Arena Beams ── */}
      {/* Top Stage Conclave Spotlight (Warm Gold) */}
      <motion.div
        style={{
          rotate: beamRotate,
          y: spotlightBeamY,
          x: mousePos.x * 0.4,
        }}
        className="absolute -top-[25%] -left-[10%] w-[850px] h-[360px] sm:w-[1150px] sm:h-[450px] rounded-full bg-gradient-to-r from-ecell-gold/20 via-amber-500/10 to-transparent blur-[140px] opacity-70 dark:opacity-45"
      />

      {/* Arena Cyber Buildathon Beam (Electric Cyan/Blue) */}
      <motion.div
        style={{
          rotate: -20,
          y: hackathonBeamY,
          x: -mousePos.x * 0.4,
        }}
        className="absolute top-[40%] -right-[15%] w-[800px] h-[360px] sm:w-[1100px] sm:h-[460px] rounded-full bg-gradient-to-l from-cyan-500/15 via-blue-600/10 to-transparent blur-[150px] opacity-60 dark:opacity-40"
      />

      {/* Central Stage Glow Core */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-ecell-gold/10 via-transparent to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* ── Layer 2: Stage & Amphitheater Arena Grid ── */}
      <motion.div
        style={{ y: meshY }}
        className="absolute inset-x-0 -top-20 h-[125%] opacity-[0.03] dark:opacity-[0.06] bg-[radial-gradient(#C5A145_1.2px,transparent_1.2px)] [background-size:48px_48px]"
      />

      {/* Event Stage Coordinate HUD Badges */}
      <div className="absolute top-28 left-6 sm:left-12 font-mono text-[9px] uppercase tracking-[0.25em] text-ecell-gold/45 hidden lg:block">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ecell-gold animate-pulse" />
          <span>IET LKO // EVENT CHRONICLE 2025-26</span>
        </div>
        <div className="text-zinc-600 dark:text-zinc-500 mt-1">ARENA: AUDITORIUM • CS/IT BLOCK • KALAM CONCLAVE</div>
      </div>

      <div className="absolute top-28 right-6 sm:right-12 font-mono text-[9px] uppercase tracking-[0.25em] text-ecell-gold/45 hidden lg:block text-right">
        <div>STATUS: LIVE ARCHIVE // ACTIVE</div>
        <div className="text-zinc-600 dark:text-zinc-500 mt-1">HACKATHONS • CONCLAVES • PITCH BATTLES</div>
      </div>

      {/* ── Layer 3: Event Milestone Timeline Map (Vector Constellation) ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Linear gradient for event timeline paths */}
          <linearGradient id="eventPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A145" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C5A145" stopOpacity="0.25" />
          </linearGradient>

          {/* Event Node Glow Filter */}
          <filter id="eventNodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Chronological Event Vector Tracks ── */}
        <g strokeWidth="1.2" className="opacity-40 dark:opacity-55">
          {/* Flagship Track (Left to Center) */}
          <line x1="80" y1="200" x2="170" y2="340" stroke="url(#eventPathGrad)" strokeDasharray="5 5" />
          <line x1="170" y1="340" x2="120" y2="500" stroke="url(#eventPathGrad)" strokeDasharray="6 6" />
          <line x1="120" y1="500" x2="220" y2="680" stroke="url(#eventPathGrad)" strokeDasharray="4 4" />
          <line x1="220" y1="680" x2="140" y2="830" stroke="url(#eventPathGrad)" strokeDasharray="5 5" />

          {/* Cross-Arena Spotlight Connector Cables */}
          <line x1="170" y1="340" x2="830" y2="280" stroke="url(#eventPathGrad)" strokeDasharray="2 6" strokeOpacity="0.2" />
          <line x1="120" y1="500" x2="880" y2="470" stroke="url(#eventPathGrad)" strokeDasharray="3 8" strokeOpacity="0.18" />
          <line x1="220" y1="680" x2="810" y2="690" stroke="url(#eventPathGrad)" strokeDasharray="2 6" strokeOpacity="0.2" />

          {/* Buildathon Track (Right to Center) */}
          <line x1="920" y1="180" x2="830" y2="280" stroke="url(#eventPathGrad)" strokeDasharray="4 4" />
          <line x1="830" y1="280" x2="880" y2="470" stroke="url(#eventPathGrad)" strokeDasharray="6 6" />
          <line x1="880" y1="470" x2="810" y2="690" stroke="url(#eventPathGrad)" strokeDasharray="4 4" />
          <line x1="810" y1="690" x2="900" y2="840" stroke="url(#eventPathGrad)" strokeDasharray="5 5" />
        </g>

        {/* ── Flowing Event Pulses along Timeline ── */}
        {!shouldReduceMotion && (
          <g>
            {/* Pulse 1: TEDx to Conclave Stage */}
            <circle r="3.2" fill="#E6CA7D" filter="url(#eventNodeGlow)">
              <animateMotion
                path="M 80,200 L 170,340 L 120,500 L 220,680"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Pulse 2: Hack-X to Buildathon Arena */}
            <circle r="3" fill="#38BDF8" filter="url(#eventNodeGlow)">
              <animateMotion
                path="M 920,180 L 830,280 L 880,470 L 810,690"
                dur="9s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Pulse 3: Cross-Stage Synergy Beam */}
            <circle r="2.8" fill="#FDE047" filter="url(#eventNodeGlow)">
              <animateMotion
                path="M 170,340 L 830,280"
                dur="10s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        )}

        {/* ── Event Milestone Nodes ── */}
        {/* Left Side: Flagships & Workshops */}
        <g>
          {/* Node 1: TEDx Conclave */}
          <g transform="translate(80, 200)">
            <circle r="15" fill="none" stroke="#C5A145" strokeWidth="0.8" strokeOpacity="0.3" className="animate-[ping_4.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <circle r="8" fill="#12182B" stroke="#C5A145" strokeWidth="1.5" />
            <circle r="3" fill="#E6CA7D" filter="url(#eventNodeGlow)" />
            <text x="20" y="4" fill="#C5A145" fillOpacity="0.5" fontSize="9" fontFamily="monospace" letterSpacing="2">TEDx_STAGE</text>
          </g>

          {/* Node 2: Sparkathon Freshers Arena */}
          <g transform="translate(170, 340)">
            <circle r="16" fill="none" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 3" className="animate-[spin_24s_linear_infinite]" />
            <circle r="7" fill="#12182B" stroke="#38BDF8" strokeWidth="1.5" />
            <circle r="2.5" fill="#38BDF8" />
            <text x="20" y="4" fill="#38BDF8" fillOpacity="0.5" fontSize="9" fontFamily="monospace" letterSpacing="2">SPARKATHON</text>
          </g>

          {/* Node 3: IPR & Legal Tech Workshop */}
          <g transform="translate(120, 500)">
            <circle r="12" fill="none" stroke="#C5A145" strokeWidth="0.8" strokeOpacity="0.25" />
            <circle r="6" fill="#12182B" stroke="#C5A145" strokeWidth="1.2" />
            <circle r="2.5" fill="#E6CA7D" />
            <text x="18" y="4" fill="#C5A145" fillOpacity="0.5" fontSize="9" fontFamily="monospace" letterSpacing="2">IPR_FORUM</text>
          </g>

          {/* Node 4: Green Tech & Sustainability Summit */}
          <g transform="translate(220, 680)">
            <circle r="14" fill="none" stroke="#34D399" strokeWidth="0.8" strokeOpacity="0.25" className="animate-[pulse_5s_ease-in-out_infinite]" />
            <circle r="7" fill="#12182B" stroke="#34D399" strokeWidth="1.2" />
            <circle r="2.5" fill="#34D399" filter="url(#eventNodeGlow)" />
            <text x="20" y="4" fill="#34D399" fillOpacity="0.5" fontSize="9" fontFamily="monospace" letterSpacing="2">GREEN_SUMMIT</text>
          </g>
        </g>

        {/* Right Side: Hackathons & Pitch Battles */}
        <g>
          {/* Node 5: Hack-X Vid Youth Buildathon */}
          <g transform="translate(920, 180)">
            <circle r="16" fill="none" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.3" className="animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <circle r="8" fill="#12182B" stroke="#38BDF8" strokeWidth="1.5" />
            <circle r="3" fill="#38BDF8" filter="url(#eventNodeGlow)" />
            <text x="-135" y="4" fill="#38BDF8" fillOpacity="0.5" fontSize="9" fontFamily="monospace" letterSpacing="2">HACK_X_ARENA</text>
          </g>

          {/* Node 6: Marketing Mania Shark Tank */}
          <g transform="translate(830, 280)">
            <circle r="18" fill="none" stroke="#C5A145" strokeWidth="0.8" strokeDasharray="4 2" className="animate-[spin_28s_linear_infinite_reverse]" />
            <circle r="7" fill="#12182B" stroke="#E6CA7D" strokeWidth="1.5" />
            <circle r="2.5" fill="#C5A145" />
            <text x="-155" y="4" fill="#E6CA7D" fillOpacity="0.5" fontSize="9" fontFamily="monospace" letterSpacing="2">SHARK_TANK_STAGE</text>
          </g>

          {/* Node 7: Maya Bazaar Auction Simulation */}
          <g transform="translate(880, 470)">
            <circle r="13" fill="none" stroke="#C5A145" strokeWidth="0.8" strokeOpacity="0.25" />
            <circle r="6" fill="#12182B" stroke="#C5A145" strokeWidth="1.2" />
            <circle r="2" fill="#E6CA7D" />
            <text x="-120" y="4" fill="#C5A145" fillOpacity="0.5" fontSize="9" fontFamily="monospace" letterSpacing="2">MAYA_BAZAAR</text>
          </g>

          {/* Node 8: Annual Conclave Grand Finale */}
          <g transform="translate(810, 690)">
            <circle r="15" fill="none" stroke="#C5A145" strokeWidth="0.8" strokeOpacity="0.3" className="animate-[pulse_6s_ease-in-out_infinite]" />
            <circle r="7" fill="#12182B" stroke="#C5A145" strokeWidth="1.2" />
            <circle r="2.5" fill="#E6CA7D" />
            <text x="-140" y="4" fill="#C5A145" fillOpacity="0.5" fontSize="9" fontFamily="monospace" letterSpacing="2">GRAND_FINALE</text>
          </g>
        </g>
      </svg>

      {/* ── Layer 4: Stage Concert Arena Rings (Peripheral Highlights) ── */}
      <motion.div
        style={{
          x: mousePos.x * 0.7,
          y: mousePos.y * 0.7,
        }}
        className="absolute top-1/4 left-8 w-32 h-32 opacity-25 pointer-events-none hidden xl:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_70s_linear_infinite]">
          <circle cx="50" cy="50" r="44" fill="none" stroke="#C5A145" strokeWidth="0.8" strokeDasharray="5 3" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 5" />
          <circle cx="50" cy="50" r="8" fill="#C5A145" fillOpacity="0.2" />
        </svg>
      </motion.div>

      <motion.div
        style={{
          x: -mousePos.x * 0.7,
          y: -mousePos.y * 0.7,
        }}
        className="absolute top-2/3 right-10 w-40 h-40 opacity-20 pointer-events-none hidden xl:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_85s_linear_infinite_reverse]">
          <polygon
            points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25"
            fill="none"
            stroke="#C5A145"
            strokeWidth="0.9"
            strokeDasharray="4 4"
          />
          <circle cx="50" cy="50" r="26" fill="none" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="2 4" />
        </svg>
      </motion.div>
    </div>
  );
}
