"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, CheckCircle2, Send, Lightbulb, Users, Megaphone, Palette, Cog } from "lucide-react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "join" | "pitch";
}

export default function JoinModal({ isOpen, onClose, initialMode = "join" }: JoinModalProps) {
  const [mode, setMode] = useState<"join" | "pitch">(initialMode);
  const [selectedRole, setSelectedRole] = useState("Founder / Startup Idea");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [branchYear, setBranchYear] = useState("");
  const [summary, setSummary] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Sync mode if initialMode changes
  React.useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Connect to backend endpoint / Google Sheets webhook
  };

  const resetForm = () => {
    setSubmitted(false);
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
                Application Received!
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                Thank you for reaching out to E-Cell IET Lucknow. Our team will review your submission and contact you via email shortly.
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
                  Cohort 2026-27
                </div>
                <h3 className="text-2xl font-bold font-heading text-foreground">
                  {mode === "pitch" ? "Pitch Your Startup Idea" : "Join E-Cell IET Lucknow"}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {mode === "pitch"
                    ? "Get pre-seed incubation support, alumni mentorship, and campus prototyping labs."
                    : "Become part of the driving force behind campus entrepreneurship, tech, and events."}
                </p>

                {/* Mode Switcher */}
                <div className="grid grid-cols-2 gap-2 mt-4 p-1 rounded-xl bg-muted/60 border border-border">
                  <button
                    type="button"
                    onClick={() => setMode("join")}
                    className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      mode === "join"
                        ? "bg-card text-foreground shadow-sm border border-ecell-gold/30"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Join Cell Teams
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("pitch")}
                    className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      mode === "pitch"
                        ? "bg-card text-foreground shadow-sm border border-ecell-gold/30"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Pitch an Idea
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Domain Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    {mode === "pitch" ? "Idea Domain" : "Select Department"}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { name: "Founder / Idea", icon: Lightbulb },
                      { name: "Tech & Web", icon: Rocket },
                      { name: "Design & Media", icon: Palette },
                      { name: "Marketing & PR", icon: Megaphone },
                      { name: "Events & Ops", icon: Cog },
                      { name: "Incubation", icon: Users },
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
                      placeholder="e.g. Shivansh Kaushik"
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
                    {mode === "pitch" ? "One-line Startup Problem & Solution" : "Why do you want to join E-Cell?"}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder={
                      mode === "pitch"
                        ? "Tell us what problem your venture solves, your target users, and what prototype you've built..."
                        : "Tell us about your interests, past projects, or how you want to contribute to the E-Cell community..."
                    }
                    className="w-full px-3.5 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-ecell-gold focus:ring-1 focus:ring-ecell-gold transition-colors placeholder:text-muted-foreground/60 resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-ecell-gold to-ecell-gold-light text-black font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(197,161,69,0.3)] mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{mode === "pitch" ? "Submit Pitch for Incubation" : "Submit Application"}</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
