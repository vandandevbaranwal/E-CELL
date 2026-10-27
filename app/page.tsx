"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import TopNavbar from "@/components/TopNavbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import AmbientScrollBackground from "@/components/ui/AmbientScrollBackground";

// Dynamic import for below-the-fold components to reduce initial JS payload and optimize TBT / LCP
const About = dynamic(() => import("@/components/About"), {
  ssr: true,
});
const Services = dynamic(() => import("@/components/Services"), {
  ssr: true,
});
const EventsSection = dynamic(() => import("@/components/EventsSection"), {
  ssr: true,
});
const AchievementsSection = dynamic(() => import("@/components/AchievementsSection"), {
  ssr: true,
});
const Jordon = dynamic(() => import("@/components/Jordon"), {
  ssr: true,
});
const Blogssec = dynamic(() => import("@/components/Blogssec"), {
  ssr: true,
});
const Approach = dynamic(() => import("@/components/Approach"), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});
const JoinModal = dynamic(() => import("@/components/JoinModal"), {
  ssr: false,
});
const CursorGlow = dynamic(() => import("@/components/ui/CursorGlow"), {
  ssr: false,
});
const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"), {
  ssr: false,
});

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenPitch = () => {
    setModalOpen(true);
  };

  return (
    <main className="relative bg-background text-foreground flex flex-col min-h-screen w-full overflow-x-hidden">
      <AmbientScrollBackground />
      <ScrollProgress />
      <CursorGlow />
      <ScrollToTop />

      {/* Full-width Edge-to-Edge Sticky TopNavbar */}
      <TopNavbar />

      {/* Main Body Content Sections */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero onOpenPitchModal={handleOpenPitch} />
        <About />
      </div>

      {/* Full-width Edge-to-Edge Events Marquee Showcase (Placed immediately after About and before Services) */}
      <EventsSection />

      {/* Main Body Content Sections (Continued) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Services />
        <AchievementsSection />
        <Jordon />
        <Blogssec />
        <Approach />
      </div>

      {/* Full-width Desktop Footer */}
      <Footer />

      {/* Interactive Incubation / Pitch Dialog */}
      <JoinModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
};

export default Home;
