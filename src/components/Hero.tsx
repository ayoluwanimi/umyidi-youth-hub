// src/components/Hero.tsx - REPLACE WITH THIS

import { Link } from "react-router-dom";
import { getHomePage } from "@/lib/content";

export default function Hero() {
  // Get content or use fallbacks
  const defaultHero = {
    title: "Welcome to UMYIDI Youth Hub",
    subtitle: "Empowering Youth for a Brighter Future",
    ctaText: "Get Started",
    ctaLink: "#"
  };
  
  // Try to get content from JSON, use defaults if it fails
  let hero = defaultHero;
  try {
    const { hero: contentHero } = getHomePage();
    if (contentHero && contentHero.title) {
      hero = contentHero;
    }
  } catch (e) {
    console.error("Failed to load hero content", e);
    // Use default content defined above
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-[850px]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            {hero.subtitle}
          </p>
          <div className="mt-8">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              to={hero.ctaLink}
            >
              {hero.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}