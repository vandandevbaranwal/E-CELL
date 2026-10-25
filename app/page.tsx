"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Blogssec from "@/components/Blogssec";
import TopNavbar from "@/components/TopNavbar";
import Jordon from "@/components/Jordon";
import About from "@/components/About";
import Services from "@/components/Services";
import EventsSection from "@/components/EventsSection";
import StartupsSection from "@/components/StartupsSection";
import JoinBanner from "@/components/JoinBanner";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollToTop from "@/components/ui/ScrollToTop";
import JoinModal from "@/components/JoinModal";
import AmbientScrollBackground from "@/components/ui/AmbientScrollBackground";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"join" | "pitch">("join");

  const handleOpenJoin = () => {
    setModalMode("join");
    setModalOpen(true);
  };

  const handleOpenPitch = () => {
    setModalMode("pitch");
    setModalOpen(true);
  };

  return (
    <main className="relative bg-background text-foreground flex flex-col min-h-screen w-full overflow-x-hidden">
      <AmbientScrollBackground />
      <ScrollProgress />
      <CursorGlow />
      <ScrollToTop />

      {/* Full-width Edge-to-Edge Sticky TopNavbar */}
      <TopNavbar onOpenJoinModal={handleOpenJoin} />

      {/* Main Body Content Sections */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero onOpenJoinModal={handleOpenJoin} onOpenPitchModal={handleOpenPitch} />
        <About />
        <Services />
        <EventsSection />
        <StartupsSection onOpenPitchModal={handleOpenPitch} />
        <Jordon />
        <Blogssec />
        <Approach />
        <JoinBanner onOpenJoinModal={handleOpenJoin} />
      </div>

      {/* Full-width Desktop Footer */}
      <Footer />

      {/* Interactive Incubation / Join Dialog */}
      <JoinModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialMode={modalMode}
      />
    </main>
  );
};

export default Home;
