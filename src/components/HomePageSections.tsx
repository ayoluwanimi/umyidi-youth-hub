import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

export default function HomePageSections() {
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