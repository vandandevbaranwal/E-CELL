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
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollToTop from "@/components/ui/ScrollToTop";
import JoinModal from "@/components/JoinModal";
import AmbientScrollBackground from "@/components/ui/AmbientScrollBackground";

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
        <Services />
      </div>

      {/* Full-width Edge-to-Edge Events Marquee Showcase */}
      <EventsSection />

      {/* Main Body Content Sections (Continued) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
