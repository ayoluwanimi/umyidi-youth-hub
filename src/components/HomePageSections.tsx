// src/components/HomePageSections.tsx
import React from "react";
import Hero from "./Hero";
import Features from "./Features"; // This might not exist yet
import Footer from "./Footer";

export default function HomePageSections() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Hero />
        {/* If you've added Features component, keep it here */}
      </main>
      <Footer />
    </div>
  );
}