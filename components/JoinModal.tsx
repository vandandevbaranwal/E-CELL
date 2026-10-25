"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, CheckCircle2, Send, Lightbulb, Users, Megaphone, Palette, Cog, Loader2, AlertCircle } from "lucide-react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "join" | "pitch";
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [selectedRole, setSelectedRole] = useState("Founder / Startup Idea");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [branchYear, setBranchYear] = useState("");
  const [summary, setSummary] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const scriptUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbxGxupjnI-dw62GWbtjQi56UNp8_suM8ky2Fbue-1fzNCg8t0rY-HIwMRKDoTeuwoUu/exec";

    try {
      if (scriptUrl) {
        const formData = new FormData();
        formData.append("timestamp", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
        formData.append("domain", selectedRole);
        formData.append("fullName", fullName);
        formData.append("email", email);
        formData.append("branchYear", branchYear);
        formData.append("summary", summary);

        await fetch(scriptUrl, {
          method: "POST",
          body: formData,
          mode: "no-cors",
        });
      } else {
        // Fallback delay when URL is not yet configured
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed:", err);
      setErrorMessage("Something went wrong while submitting. Please try again or reach out to E-Cell directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setErrorMessage(null);
    setFullName("");
    setEmail("");
    setBranchYear("");
    setSummary("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetForm}
          className="fixed inset-0 bg-background/80 backdrop-blur-md -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl rounded-2xl bg-card/95 border border-ecell-gold/30 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Ambient Corner Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-ecell-gold/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-ecell-gold/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={resetForm}
            className="absolute top-5 right-5 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
                className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-500/30"
              >
                <CheckCircle2 className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">
                Pitch Proposal Received!
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                Thank you for submitting your innovation pitch to E-Cell IET Lucknow. Our incubation coordinators will review your proposal and get in touch with you shortly.
              </p>
              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-lg bg-ecell-gold text-black font-semibold text-sm hover:brightness-110 transition-all shadow-[0_0_15px_rgba(197,161,69,0.3)]"
              >
                Done
              </button>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ecell-gold/10 border border-ecell-gold/25 text-ecell-gold text-xs font-semibold uppercase tracking-wider mb-2">
                  <Rocket className="w-3.5 h-3.5" />
                  Incubation Cohort 2026-27
                </div>
                <h3 className="text-2xl font-bold font-heading text-foreground">
                  Pitch Your Startup Idea
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Get pre-seed incubation guidance, alumni mentorship, and access to student prototyping labs.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Domain Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Idea Domain
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { name: "Founder / Idea", icon: Lightbulb },
                      { name: "Software & AI", icon: Rocket },
                      { name: "Hardware & IoT", icon: Cog },
                      { name: "Design & UX", icon: Palette },
                      { name: "Social & AgriTech", icon: Users },
                      { name: "FinTech / Web3", icon: Megaphone },
                    ].map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setSelectedRole(item.name)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border text-left transition-all ${
                          selectedRole === item.name
                            ? "bg-ecell-gold/15 border-ecell-gold text-foreground shadow-[0_0_10px_rgba(197,161,69,0.2)]"
                            : "bg-muted/30 border-border text-muted-foreground hover:text-foreground hover:border-border"
                        }`}
                      >
                        <item.icon className="w-3.5 h-3.5 text-ecell-gold shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Priyanshu Singh"
                      className="w-full px-3.5 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-ecell-gold focus:ring-1 focus:ring-ecell-gold transition-colors placeholder:text-muted-foreground/60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. founder@ietlucknow.ac.in"
                      className="w-full px-3.5 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-ecell-gold focus:ring-1 focus:ring-ecell-gold transition-colors placeholder:text-muted-foreground/60"
                    />
                  </div>
                </div>

                {/* Branch / Year */}
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">
                    Branch & Year (or College / Institution) *
                  </label>
                  <input
                    type="text"
                    required
                    value={branchYear}
                    onChange={(e) => setBranchYear(e.target.value)}
                    placeholder="e.g. CSE 3rd Year, IET Lucknow"
                    className="w-full px-3.5 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-ecell-gold focus:ring-1 focus:ring-ecell-gold transition-colors placeholder:text-muted-foreground/60"
                  />
                </div>

                {/* Pitch / Summary */}
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">
                    One-line Startup Problem & Solution *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Tell us what problem your venture solves, your target users, and what prototype or stage you're currently in..."
                    className="w-full px-3.5 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-ecell-gold focus:ring-1 focus:ring-ecell-gold transition-colors placeholder:text-muted-foreground/60 resize-none"
                  />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="flex items-center gap-2 p-3 text-xs text-red-400 bg-red-950/40 border border-red-800/50 rounded-lg">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-ecell-gold to-ecell-gold-light text-black font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 disabled:opacity-75 disabled:cursor-not-allowed transition-all shadow-[0_4px_20px_rgba(197,161,69,0.3)] mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Submitting to Google Sheet...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Pitch for Incubation</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
