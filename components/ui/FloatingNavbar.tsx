"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

export const FloatingNav = ({
  navItems,
  className,
  onOpenJoinModal,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  onOpenJoinModal?: () => void;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[75vw] lg:min-w-fit fixed z-[5000] top-5 sm:top-8 inset-x-0 mx-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl border border-border bg-card/85 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)] items-center justify-between sm:justify-center space-x-2 sm:space-x-4",
          className
        )}
      >
        {/* Logo Left */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
          <Image
            src="/ecell-logo.png"
            alt="E-Cell IET Lucknow Logo"
            width={34}
            height={34}
            className="h-8 w-8 object-contain transition-transform group-hover:scale-105"
          />
          <span className="hidden lg:inline-block font-heading font-bold text-sm tracking-tight text-foreground">
            E-Cell <span className="text-ecell-gold">IET LKO</span>
          </span>
        </Link>

        {/* Links Center */}
        <div className="flex items-center space-x-0.5 sm:space-x-2">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={`/${navItem.link}`}
              className={cn(
                "relative items-center flex text-muted-foreground hover:text-ecell-gold transition-colors no-underline px-2 sm:px-2.5 py-1 text-xs sm:text-sm font-medium rounded-lg hover:bg-card/60"
              )}
            >
              <span className="block sm:hidden text-xs">{navItem.name}</span>
              <span className="hidden sm:inline-block cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>

        {/* Right Controls: Theme Toggle + Join E-Cell CTA */}
        <div className="flex items-center space-x-2 pl-2 sm:pl-3 border-l border-border">
          <ThemeToggle />
          {onOpenJoinModal ? (
            <button
              onClick={onOpenJoinModal}
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-ecell-gold-dark via-ecell-gold to-ecell-gold-light px-3.5 py-1.5 text-xs font-bold text-black shadow-sm transition hover:brightness-110 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Join E-Cell
            </button>
          ) : (
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-ecell-gold-dark via-ecell-gold to-ecell-gold-light px-3.5 py-1.5 text-xs font-bold text-black shadow-sm transition hover:brightness-110 active:scale-95 whitespace-nowrap"
            >
              Join E-Cell
            </a>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
