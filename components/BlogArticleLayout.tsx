"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Quote,
  CheckCircle2,
  Share2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CursorGlow from "@/components/ui/CursorGlow";
import { BlogArticleData, blogArticles } from "@/data/blogContent";

interface BlogArticleLayoutProps {
  articleId: number;
}

export default function BlogArticleLayout({ articleId }: BlogArticleLayoutProps) {
  const shouldReduceMotion = useReducedMotion();
  const article = blogArticles[articleId] || blogArticles[1];

  const prevId = articleId > 1 ? articleId - 1 : null;
  const nextId = articleId < 6 ? articleId + 1 : null;

  return (
    <main className="relative bg-background text-foreground min-h-screen flex flex-col justify-between overflow-x-hidden w-full">
      <ScrollProgress />
      <CursorGlow />
      <ScrollToTop />

      {/* Edge-to-Edge Sticky TopNavbar */}
      <TopNavbar />

      <div className="w-full pt-8 pb-20 sm:pt-12 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb & Back Link */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/#recentprojects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-ecell-gold transition-colors py-1.5 px-3 rounded-lg border border-border/60 hover:border-ecell-gold/40 bg-card/60 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Blogs</span>
            </Link>
          </motion.div>

          {/* Article Header & Metadata */}
          <motion.header
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center sm:text-left space-y-4"
          >
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-ecell-gold/15 text-ecell-gold border border-ecell-gold/30">
                <Sparkles className="w-3.5 h-3.5" />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground px-2.5 py-1 rounded-md bg-muted/60">
                <Calendar className="w-3 h-3" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground px-2.5 py-1 rounded-md bg-muted/60">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground dark:text-zinc-300 leading-relaxed max-w-3xl">
              {article.subtitle}
            </p>

            {/* Author Byline Strip */}
            <div className="pt-3 border-t border-border/60 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-ecell-gold to-ecell-gold/30 p-[2px] shrink-0">
                  <div className="w-full h-full rounded-full bg-[#101526] flex items-center justify-center text-ecell-gold font-bold text-sm">
                    {article.author.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-foreground">
                    {article.author}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {article.authorRole} • IET Lucknow
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg border border-border bg-card/60 text-muted-foreground">
                <span>Official E-Cell Editorial</span>
              </div>
            </div>
          </motion.header>

          {/* Hero Feature Image Card */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full aspect-[16/9] sm:aspect-[21/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-border/80 shadow-2xl mb-12 bg-muted"
          >
            <Image
              src={article.img}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* ── THE MASTER CONTENT CARD ── */}
          <motion.article
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full rounded-3xl border border-border/80 dark:border-border/60 bg-card/95 dark:bg-[#0D1220]/95 backdrop-blur-2xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.25)] space-y-8"
          >
            {/* Introductory Lead Paragraph */}
            <div className="pb-6 border-b border-border/60">
              <p className="text-base sm:text-xl font-medium text-foreground leading-relaxed">
                {article.intro}
              </p>
            </div>

            {/* Article Sections */}
            <div className="space-y-8">
              {article.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground flex items-center gap-2">
                    <span className="text-ecell-gold">{section.heading}</span>
                  </h2>

                  <p className="text-sm sm:text-base text-muted-foreground dark:text-zinc-200 leading-relaxed">
                    {section.content}
                  </p>

                  {/* Bullet Points */}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-2.5 pt-2 pl-1">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground dark:text-zinc-300">
                          <span className="w-2 h-2 rounded-full bg-ecell-gold shrink-0 mt-2 shadow-[0_0_8px_#C5A145]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Callout Quote Card */}
            {article.calloutQuote && (
              <div className="my-8 rounded-2xl bg-gradient-to-r from-ecell-gold/15 via-ecell-gold/10 to-transparent border-l-4 border-ecell-gold p-6 sm:p-7 relative overflow-hidden">
                <Quote className="absolute right-4 bottom-4 w-16 h-16 text-ecell-gold/10 pointer-events-none" />
                <p className="font-heading italic text-base sm:text-lg font-medium text-foreground mb-3 leading-relaxed relative z-10">
                  &ldquo;{article.calloutQuote.quote}&rdquo;
                </p>
                <cite className="block text-xs sm:text-sm font-semibold text-ecell-gold not-italic">
                  — {article.calloutQuote.cite}
                </cite>
              </div>
            )}

            {/* Key Takeaways Card */}
            {article.keyTakeaways && (
              <div className="rounded-2xl border border-ecell-gold/30 bg-ecell-gold/[0.04] p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-ecell-gold">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    Actionable Key Takeaways
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {article.keyTakeaways.map((takeaway, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-card/60 border border-border/60 text-xs sm:text-sm text-muted-foreground dark:text-zinc-200 leading-snug"
                    >
                      <CheckCircle2 className="w-4 h-4 text-ecell-gold shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Article Bottom Sign-off */}
            <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
              <span>Published by Entrepreneurship Cell, IET Lucknow</span>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 text-ecell-gold font-bold hover:underline"
              >
                <span>Have an idea? Pitch to E-Cell Incubation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>

          {/* Navigation Between Articles */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevId ? (
              <Link
                href={`/blogs/${prevId}`}
                className="group flex flex-col p-4 rounded-xl border border-border/80 bg-card hover:border-ecell-gold/50 transition-all text-left"
              >
                <span className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  Previous Article
                </span>
                <span className="text-sm font-bold text-foreground group-hover:text-ecell-gold line-clamp-1">
                  {blogArticles[prevId]?.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextId && (
              <Link
                href={`/blogs/${nextId}`}
                className="group flex flex-col p-4 rounded-xl border border-border/80 bg-card hover:border-ecell-gold/50 transition-all text-right items-end sm:col-start-2"
              >
                <span className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                  Next Article
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-sm font-bold text-foreground group-hover:text-ecell-gold line-clamp-1">
                  {blogArticles[nextId]?.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Solid Dark Desktop Footer */}
      <Footer />
    </main>
  );
}
