// src/components/HomePageSections.tsx - REPLACE WITH THIS

import Hero from "./Hero";
import Features from "./Features"; 
import Footer from "./Footer";

export default function HomePageSections() {
  // IMPORTANT: Only have the Hero component ONCE in your entire application
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}