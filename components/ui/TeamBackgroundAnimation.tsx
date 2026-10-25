"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function TeamBackgroundAnimation() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();

  // Gentle parallax shifts based on scroll
  const meshY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -120]);
  const beamRotate = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [25, 25] : [20, 35]);
  const beamY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 180]);
  const beam2Y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -150]);

  // Track subtle mouse movement for 3D depth feeling
  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // -10px to +10px
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
      {/* ── Layer 1: Dual Ambient Team Aurora Ribbons (Distinct from Homepage Spotlight) ── */}
      {/* Left/Top Diagonal Synergy Stream */}
      <motion.div
        style={{
          rotate: beamRotate,
          y: beamY,
          x: mousePos.x * 0.5,
        }}
        className="absolute -top-[20%] -left-[15%] w-[800px] h-[320px] sm:w-[1100px] sm:h-[420px] rounded-full bg-gradient-to-r from-ecell-gold/15 via-amber-500/10 to-transparent blur-[140px] opacity-60 dark:opacity-40"
      />

      {/* Right/Bottom Diagonal Innovation Stream */}
      <motion.div
        style={{
          rotate: -25,
          y: beam2Y,
          x: -mousePos.x * 0.5,
        }}
        className="absolute top-[45%] -right-[15%] w-[750px] h-[340px] sm:w-[1050px] sm:h-[450px] rounded-full bg-gradient-to-l from-indigo-500/10 via-ecell-gold-light/10 to-transparent blur-[150px] opacity-50 dark:opacity-35"
      />

      {/* ── Layer 2: Institutional Blueprint Grid with Crosshairs ── */}
      <motion.div
        style={{ y: meshY }}
        className="absolute inset-x-0 -top-20 h-[125%] opacity-[0.035] dark:opacity-[0.07] bg-[linear-gradient(to_right,#C5A145_1px,transparent_1px),linear-gradient(to_bottom,#C5A145_1px,transparent_1px)] bg-[size:5rem_5rem]"
      />

      {/* Subtle Coordinate / Institutional Badges on Peripheral Margins */}
      <div className="absolute top-28 left-6 sm:left-12 font-mono text-[9px] uppercase tracking-[0.25em] text-ecell-gold/40 hidden lg:block">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ecell-gold animate-pulse" />
          <span>IET LKO // TEAM DIRECTORY 2026-27</span>
        </div>
        <div className="text-zinc-600 dark:text-zinc-500 mt-1">COORD: 26.8467° N, 80.9462° E</div>
      </div>

      <div className="absolute top-28 right-6 sm:right-12 font-mono text-[9px] uppercase tracking-[0.25em] text-ecell-gold/40 hidden lg:block text-right">
        <div>STATUS: SYNERGY // ACTIVE</div>
        <div className="text-zinc-600 dark:text-zinc-500 mt-1">FOUNDERS • EXECUTIVES • ADVISORS</div>
      </div>

      {/* ── Layer 3: Dynamic Organizational Synapse & Department Nodes ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Linear gradient for synaptic transmission lines */}
          <linearGradient id="synapseLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A145" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#E6CA7D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C5A145" stopOpacity="0.2" />
          </linearGradient>

          {/* Node Glow Filter */}
          <filter id="teamSynapseGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Synaptic Pathways (Inter-department connections) ── */}
        <g strokeWidth="1.2" className="opacity-45 dark:opacity-60">
          {/* Left Wing Cluster lines */}
          <line x1="70" y1="190" x2="180" y2="310" stroke="url(#synapseLineGrad)" strokeDasharray="4 4" />
          <line x1="180" y1="310" x2="110" y2="480" stroke="url(#synapseLineGrad)" strokeDasharray="6 6" />
          <line x1="110" y1="480" x2="200" y2="660" stroke="url(#synapseLineGrad)" strokeDasharray="4 4" />
          <line x1="200" y1="660" x2="120" y2="820" stroke="url(#synapseLineGrad)" strokeDasharray="5 5" />

          {/* Cross-linking Transverse Highways */}
          <line x1="180" y1="310" x2="820" y2="260" stroke="url(#synapseLineGrad)" strokeDasharray="2 6" strokeOpacity="0.25" />
          <line x1="110" y1="480" x2="890" y2="450" stroke="url(#synapseLineGrad)" strokeDasharray="3 8" strokeOpacity="0.2" />
          <line x1="200" y1="660" x2="800" y2="680" stroke="url(#synapseLineGrad)" strokeDasharray="2 6" strokeOpacity="0.25" />

          {/* Right Wing Cluster lines */}
          <line x1="930" y1="170" x2="820" y2="260" stroke="url(#synapseLineGrad)" strokeDasharray="4 4" />
          <line x1="820" y1="260" x2="890" y2="450" stroke="url(#synapseLineGrad)" strokeDasharray="6 6" />
          <line x1="890" y1="450" x2="800" y2="680" stroke="url(#synapseLineGrad)" strokeDasharray="4 4" />
          <line x1="800" y1="680" x2="910" y2="830" stroke="url(#synapseLineGrad)" strokeDasharray="5 5" />
        </g>

        {/* ── Flowing Data Pulses (Travelling along vectors) ── */}
        {!shouldReduceMotion && (
          <g>
            {/* Pulse 1: Left Wing Pathway */}
            <circle r="3" fill="#FFF275" filter="url(#teamSynapseGlow)">
              <animateMotion
                path="M 70,190 L 180,310 L 110,480 L 200,660"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Pulse 2: Right Wing Pathway */}
            <circle r="3.2" fill="#E6CA7D" filter="url(#teamSynapseGlow)">
              <animateMotion
                path="M 930,170 L 820,260 L 890,450 L 800,680"
                dur="9s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Pulse 3: Transverse Collaboration Highway */}
            <circle r="2.8" fill="#38BDF8" filter="url(#teamSynapseGlow)">
              <animateMotion
                path="M 180,310 L 820,260"
                dur="11s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        )}

        {/* ── Organizational Department Pods (Interactive Anchors) ── */}
        {/* Left Side Nodes */}
        <g>
          {/* Node 1: Leadership Hub */}
          <g transform="translate(70, 190)">
            <circle r="14" fill="none" stroke="#C5A145" strokeWidth="0.8" strokeOpacity="0.3" className="animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <circle r="8" fill="#12182B" stroke="#C5A145" strokeWidth="1.5" />
            <circle r="3" fill="#E6CA7D" filter="url(#teamSynapseGlow)" />
            <text x="18" y="4" fill="#C5A145" fillOpacity="0.45" fontSize="9" fontFamily="monospace" letterSpacing="2">LEADERSHIP</text>
          </g>

          {/* Node 2: Tech & Incubation */}
          <g transform="translate(180, 310)">
            <circle r="16" fill="none" stroke="#C5A145" strokeWidth="0.8" strokeDasharray="3 3" className="animate-[spin_20s_linear_infinite]" />
            <circle r="7" fill="#12182B" stroke="#E6CA7D" strokeWidth="1.5" />
            <circle r="2.5" fill="#C5A145" />
            <text x="18" y="4" fill="#C5A145" fillOpacity="0.45" fontSize="9" fontFamily="monospace" letterSpacing="2">TECH_WING</text>
          </g>

          {/* Node 3: Operations Hub */}
          <g transform="translate(110, 480)">
            <circle r="12" fill="none" stroke="#C5A145" strokeWidth="0.8" strokeOpacity="0.25" />
            <circle r="6" fill="#12182B" stroke="#C5A145" strokeWidth="1.2" />
            <circle r="2.5" fill="#E6CA7D" />
            <text x="16" y="4" fill="#C5A145" fillOpacity="0.45" fontSize="9" fontFamily="monospace" letterSpacing="2">OPERATIONS</text>
          </g>

          {/* Node 4: Ventures Hub */}
          <g transform="translate(200, 660)">
            <circle r="15" fill="none" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.25" className="animate-[pulse_5s_ease-in-out_infinite]" />
            <circle r="7" fill="#12182B" stroke="#38BDF8" strokeWidth="1.2" />
            <circle r="2.5" fill="#38BDF8" filter="url(#teamSynapseGlow)" />
            <text x="18" y="4" fill="#38BDF8" fillOpacity="0.45" fontSize="9" fontFamily="monospace" letterSpacing="2">VENTURES</text>
          </g>
        </g>

        {/* Right Side Nodes */}
        <g>
          {/* Node 5: Advisory Directorate */}
          <g transform="translate(930, 170)">
            <circle r="15" fill="none" stroke="#C5A145" strokeWidth="0.8" strokeOpacity="0.3" className="animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <circle r="8" fill="#12182B" stroke="#C5A145" strokeWidth="1.5" />
            <circle r="3" fill="#E6CA7D" filter="url(#teamSynapseGlow)" />
            <text x="-95" y="4" fill="#C5A145" fillOpacity="0.45" fontSize="9" fontFamily="monospace" letterSpacing="2">ADVISORY</text>
          </g>

          {/* Node 6: Corporate Relations */}
          <g transform="translate(820, 260)">
            <circle r="18" fill="none" stroke="#E6CA7D" strokeWidth="0.8" strokeDasharray="4 2" className="animate-[spin_25s_linear_infinite_reverse]" />
            <circle r="7" fill="#12182B" stroke="#E6CA7D" strokeWidth="1.5" />
            <circle r="2.5" fill="#C5A145" />
            <text x="-125" y="4" fill="#E6CA7D" fillOpacity="0.45" fontSize="9" fontFamily="monospace" letterSpacing="2">CORP_RELATIONS</text>
          </g>

          {/* Node 7: Creative & Media */}
          <g transform="translate(890, 450)">
            <circle r="13" fill="none" stroke="#C5A145" strokeWidth="0.8" strokeOpacity="0.25" />
            <circle r="6" fill="#12182B" stroke="#C5A145" strokeWidth="1.2" />
            <circle r="2" fill="#E6CA7D" />
            <text x="-85" y="4" fill="#C5A145" fillOpacity="0.45" fontSize="9" fontFamily="monospace" letterSpacing="2">MEDIA</text>
          </g>

          {/* Node 8: Events & Logistics */}
          <g transform="translate(800, 680)">
            <circle r="15" fill="none" stroke="#C5A145" strokeWidth="0.8" strokeOpacity="0.3" className="animate-[pulse_6s_ease-in-out_infinite]" />
            <circle r="7" fill="#12182B" stroke="#C5A145" strokeWidth="1.2" />
            <circle r="2.5" fill="#E6CA7D" />
            <text x="-75" y="4" fill="#C5A145" fillOpacity="0.45" fontSize="9" fontFamily="monospace" letterSpacing="2">EVENTS</text>
          </g>
        </g>
      </svg>

      {/* ── Layer 4: Floating Hexagonal Architectural Synergy Rings (Subtle Peripherals) ── */}
      <motion.div
        style={{
          x: mousePos.x * 0.8,
          y: mousePos.y * 0.8,
        }}
        className="absolute top-1/4 left-8 w-28 h-28 opacity-25 pointer-events-none hidden xl:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_60s_linear_infinite]">
          <polygon
            points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25"
            fill="none"
            stroke="#C5A145"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />
        </svg>
      </motion.div>

      <motion.div
        style={{
          x: -mousePos.x * 0.8,
          y: -mousePos.y * 0.8,
        }}
        className="absolute top-2/3 right-10 w-36 h-36 opacity-20 pointer-events-none hidden xl:block"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_80s_linear_infinite_reverse]">
          <polygon
            points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25"
            fill="none"
            stroke="#C5A145"
            strokeWidth="1"
          />
          <circle cx="50" cy="50" r="28" fill="none" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 3" />
        </svg>
      </motion.div>
    </div>
  );
}
