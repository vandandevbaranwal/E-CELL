"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Radio, Mail, ExternalLink, ArrowUpRight } from "lucide-react";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer
      className="relative z-20 w-full bg-[#080B14] text-white border-t border-ecell-gold/30 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] pt-16 pb-10"
      id="contact"
    >
      {/* Top Gold Horizon Glow Line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-ecell-gold/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-zinc-800/90">
          {/* Column 1: Brand & College Description */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-ecell-gold via-ecell-gold-light to-ecell-gold-dark/40 shadow-[0_0_15px_rgba(197,161,69,0.35)]">
                <div className="w-full h-full rounded-full bg-[#101526] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/ecell-logo.png"
                    alt="E-Cell IET Lucknow Insignia"
                    width={36}
                    height={36}
                    className="w-8 h-8 object-contain transition-transform group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-ecell-gold tracking-wide group-hover:text-ecell-gold-light transition-colors">
                  E-Cell IET Lucknow
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-300 leading-relaxed max-w-md">
              Entrepreneurship Cell is the student-run innovation and entrepreneurship initiative of Institute of Engineering and Technology, Lucknow.
            </p>

            {/* Quick Action & Social Icon Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://ietlucknow.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official IET Lucknow Website"
                className="w-10 h-10 rounded-xl border border-zinc-700/70 bg-[#12182B] hover:border-ecell-gold hover:bg-ecell-gold/15 text-zinc-300 hover:text-ecell-gold flex items-center justify-center transition-all shadow-sm"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#events"
                aria-label="Campus Media"
                className="w-10 h-10 rounded-xl border border-zinc-700/70 bg-[#12182B] hover:border-ecell-gold hover:bg-ecell-gold/15 text-zinc-300 hover:text-ecell-gold flex items-center justify-center transition-all shadow-sm"
              >
                <Radio className="w-4 h-4" />
              </a>
              <a
                href="mailto:connect.ecell@ietlucknow.ac.in"
                aria-label="Email E-Cell Support"
                className="w-10 h-10 rounded-xl border border-zinc-700/70 bg-[#12182B] hover:border-ecell-gold hover:bg-ecell-gold/15 text-zinc-300 hover:text-ecell-gold flex items-center justify-center transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Official Social Media Channels */}
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Official E-Cell ${info.name}`}
                  className="w-10 h-10 rounded-xl border border-zinc-700/70 bg-[#12182B] hover:border-ecell-gold hover:bg-ecell-gold/15 text-zinc-300 hover:text-ecell-gold flex items-center justify-center transition-all shadow-sm"
                >
                  <Image
                    src={info.img}
                    alt={info.name}
                    width={16}
                    height={16}
                    className="object-contain brightness-125"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li>
                <Link href="/#about" className="hover:text-ecell-gold transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-ecell-gold transition-colors inline-block">
                  Incubation Cell
                </Link>
              </li>
              <li>
                <Link href="/#events" className="hover:text-ecell-gold transition-colors inline-block">
                  Campus Events
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-ecell-gold transition-colors inline-block">
                  Student Initiatives
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-ecell-gold transition-colors inline-block">
                  Team Directory
                </Link>
              </li>
              <li>
                <Link href="/#recentprojects" className="hover:text-ecell-gold transition-colors inline-block">
                  Recent Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Initiatives */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white tracking-wide uppercase">
              Initiatives
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li>
                <Link href="/#services" className="hover:text-ecell-gold transition-colors inline-block">
                  Incubation Programme
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-ecell-gold transition-colors inline-block">
                  Pitch Days &amp; Hackathons
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-ecell-gold transition-colors inline-block">
                  Speaker Series
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-ecell-gold transition-colors inline-block">
                  Skill Workshops
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-ecell-gold transition-colors inline-block">
                  Research &amp; Patents
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Incubation Office */}
          <div className="lg:col-span-3 space-y-4" id="contact">
            <h4 className="font-heading font-bold text-sm text-white tracking-wide uppercase">
              Incubation Office
            </h4>
            <div className="text-sm text-zinc-300 leading-relaxed">
              Entrepreneurship Cell, CS/IT Academic Block,<br />
              Institute of Engineering and Technology,<br />
              Sitapur Road, Lucknow, UP – 226021
            </div>

            <div className="pt-3 border-t border-zinc-800">
              <span className="block text-xs text-zinc-400 mb-1 font-medium">Direct Inquiries:</span>
              <a
                href="mailto:connect.ecell@ietlucknow.ac.in"
                className="text-sm font-semibold text-ecell-gold hover:text-ecell-gold-light tracking-wide inline-flex items-center gap-1.5"
              >
                <span>connect.ecell@ietlucknow.ac.in</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400 text-center md:text-left">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} Entrepreneurship Cell, Institute of Engineering and Technology, Lucknow. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-medium text-zinc-300">
            <span className="text-[11px] text-zinc-400 font-medium">
              Redesigned by: <span className="text-zinc-200 font-semibold">Vandan Dev EE&apos;29</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
